const GITHUB_GRAPHQL_API = "https://api.github.com/graphql";
const GITHUB_SPONSORS_LOGIN = "akash3444";

export interface GitHubSponsor {
  login: string;
  name: string | null;
  avatarUrl: string;
  url: string;
}

interface SponsorsResponse {
  data?: {
    user: {
      sponsorshipsAsMaintainer: {
        nodes: Array<{
          sponsorEntity: {
            login: string;
            name: string | null;
            avatarUrl: string;
            url: string;
          } | null;
        }>;
      };
    } | null;
  };
  errors?: Array<{ message: string }>;
}

export async function getGitHubSponsors(): Promise<{
  sponsors: GitHubSponsor[];
  totalCount: number;
}> {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.warn(
      "GITHUB_TOKEN is not set. Sponsors page will show empty list."
    );
    return { sponsors: [], totalCount: 0 };
  }

  const query = `
    query($login: String!) {
      user(login: $login) {
        sponsorshipsAsMaintainer(first: 100, includePrivate: false, activeOnly: true) {
          nodes {
            sponsorEntity {
              ... on User {
                login
                name
                avatarUrl
                url
              }
              ... on Organization {
                login
                name
                avatarUrl
                url
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch(GITHUB_GRAPHQL_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { login: GITHUB_SPONSORS_LOGIN },
    }),
    next: { revalidate: 60 * 60 }, // Cache for 1 hour
  });

  const result: SponsorsResponse = await response.json();

  if (!response.ok) {
    console.error("GitHub Sponsors API error:", result);
    return { sponsors: [], totalCount: 0 };
  }

  if (result.errors?.length) {
    console.error("GitHub GraphQL errors:", result.errors);
    return { sponsors: [], totalCount: 0 };
  }

  const user = result.data?.user;
  if (!user) {
    return { sponsors: [], totalCount: 0 };
  }

  const { nodes, totalCount } = user.sponsorshipsAsMaintainer;
  const sponsors: GitHubSponsor[] = nodes
    .filter(
      (
        node
      ): node is { sponsorEntity: NonNullable<typeof node.sponsorEntity> } =>
        Boolean(node.sponsorEntity)
    )
    .map((node) => ({
      login: node.sponsorEntity.login,
      name: node.sponsorEntity.name,
      avatarUrl: node.sponsorEntity.avatarUrl,
      url: node.sponsorEntity.url,
    }));

  return { sponsors, totalCount };
}
