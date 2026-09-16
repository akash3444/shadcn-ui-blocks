import { GitFork, Star } from "lucide-react";

interface GitHubRepository {
  forks_count: number;
  stargazers_count: number;
}

export default async function GithubStarsAndForks({ repo }: { repo: string }) {
  const response = await fetch(`https://api.github.com/repos/${repo}`, {
    headers: process.env.GITHUB_TOKEN
      ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
      : undefined,
    next: { revalidate: 60 * 120 },
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as GitHubRepository;

  return (
    <div className="flex items-center gap-4 text-muted-foreground text-sm">
      <div className="flex items-center gap-1.5">
        <Star className="size-4" />
        <span className="whitespace-nowrap">{data.stargazers_count}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <GitFork className="size-4" />
        <span className="whitespace-nowrap">{data.forks_count}</span>
      </div>
    </div>
  );
}
