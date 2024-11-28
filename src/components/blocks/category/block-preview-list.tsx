import { blockList, categorizedBlocks } from "@/blocks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  BLOCK_SCREENSHOT_HEIGHT,
  BLOCK_SCREENSHOT_WIDTH,
} from "@/description/blocks";
import { getBlockScreenshot } from "@/lib/blocks";
import { ExternalLinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlockPreviewListProps {
  category?: string;
}

const BlockPreviewList = ({ category }: BlockPreviewListProps) => {
  const blocks = category ? categorizedBlocks[category] : blockList;

  return (
    <div className="mt-16 grid md:grid-cols-2 gap-12">
      {blocks.map((block) => (
        <div key={block.title}>
          <div className="flex items-end justify-between gap-2">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-bold">{block.title}</h2>
              <Button className="h-7 w-8" variant="secondary">
                <Link href={`/blocks/${block.name}`}>
                  <ExternalLinkIcon />
                </Link>
              </Button>
            </div>
            <Badge variant="secondary">{block.category}</Badge>
          </div>

          <Link className="group" href={`/blocks/${block.name}`}>
            <div className="mt-3 w-full rounded-lg border overflow-hidden aspect-video">
              <Image
                height={BLOCK_SCREENSHOT_HEIGHT}
                width={BLOCK_SCREENSHOT_WIDTH}
                src={getBlockScreenshot(block.name)}
                alt={block.title}
                className="h-full w-full object-cover group-hover:scale-90 transition-transform"
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlockPreviewList;
