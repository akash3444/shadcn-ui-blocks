import { Heart } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getGitHubSponsors } from "@/lib/github-sponsors";
import { constructMetadata } from "@/lib/metadata";
import { absoluteUrl, cn } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Sponsors | Shadcn UI Blocks",
  description:
    "Thank you to our amazing sponsors who support Shadcn UI Blocks. Your generosity helps keep this project going.",
  alternates: {
    canonical: absoluteUrl("/sponsors"),
  },
});

export default async function SponsorsPage() {
  const { sponsors } = await getGitHubSponsors();

  return (
    <>
      <div>
        <Navbar />

        <div className="mx-auto max-w-(--breakpoint-xl) px-6 pt-16 pb-20 xl:px-0">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-semibold text-4xl tracking-tight md:text-5xl">
              Sponsors
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A huge thank you to everyone who supports Shadcn UI Blocks on
              GitHub Sponsors. Your generosity helps keep this project going.
            </p>
            <Button asChild className="mt-6" size="lg">
              <Link
                href="https://github.com/sponsors/akash3444"
                rel="noopener"
                target="_blank"
              >
                <Heart className="size-4 fill-current" /> Sponsor me on GitHub
              </Link>
            </Button>
          </div>

          <div className="my-24">
            {sponsors.length > 0 ? (
              <>
                <div className="relative grid border-t border-l shadow-lg/1 *:odd:bg-muted/30 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="mask-y-from-[calc(100%-100px)] absolute -inset-y-22 -left-px border-s border-dashed" />
                  <div className="mask-y-from-[calc(100%-100px)] absolute -inset-y-22 right-0 border-s border-dashed" />
                  <div className="mask-x-from-[calc(100%-100px)] absolute -inset-x-22 -top-px border-t border-dashed" />
                  <div className="mask-x-from-[calc(100%-100px)] absolute -inset-x-22 bottom-0 border-t border-dashed" />

                  {sponsors.map((sponsor) => (
                    <Card
                      className={cn(
                        "relative overflow-hidden rounded-none border-0 border-e border-b p-0 shadow-none"
                      )}
                      key={sponsor.login}
                    >
                      <Link
                        className="p-2 transition-colors hover:bg-muted/50"
                        href={sponsor.url}
                        rel="noopener"
                        target="_blank"
                      >
                        <CardContent className="flex items-center gap-4 p-4">
                          <Image
                            alt={sponsor.name ?? sponsor.login}
                            className="rounded-full"
                            height={48}
                            src={sponsor.avatarUrl}
                            width={48}
                          />
                          <div className="min-w-0 flex-1">
                            <p className="truncate font-semibold">
                              {sponsor.name ?? sponsor.login}
                            </p>
                            <p className="truncate text-muted-foreground text-sm">
                              @{sponsor.login}
                            </p>
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                  ))}
                  {sponsors.length < 6 &&
                    new Array(6 - sponsors.length)
                      .fill(0)
                      .map((_, index) => (
                        <div
                          className={cn(
                            "relative size-full min-h-24 border-e border-b"
                          )}
                          key={index}
                        />
                      ))}
                </div>
                <p className="mt-4 text-center text-muted-foreground">
                  Thank you to our sponsors for their support!
                </p>
              </>
            ) : (
              <div className="mx-auto max-w-xl">
                <Card className="border-dashed bg-muted/30 shadow-none">
                  <CardContent className="flex flex-col items-center justify-center py-16 text-center">
                    <Heart className="size-12 stroke-[1.5px] text-muted-foreground/50" />
                    <p className="mt-8 font-medium text-muted-foreground">
                      We’re just getting started. <br /> Our first sponsors will
                      appear here soon.
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
