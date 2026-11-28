import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/ui/item";

const tracks = [
  {
    id: "midnight-drive",
    title: "Midnight Drive",
    artist: "Neon Harbor",
    duration: "3:42",
    cover: "https://www.fffuel.co/images/dddepth-preview/dddepth-248.jpg",
  },
  {
    id: "paper-skies",
    title: "Paper Skies",
    artist: "Lumen & Vale",
    duration: "4:05",
    cover: "https://www.fffuel.co/images/dddepth-preview/dddepth-029.jpg",
  },
  {
    id: "slow-tide",
    title: "Slow Tide",
    artist: "Marlow Coast",
    duration: "2:58",
    cover: "https://www.fffuel.co/images/dddepth-preview/dddepth-051.jpg",
  },
];

export default function ItemWithImageDemo() {
  return (
    <ItemGroup className="w-full max-w-md gap-0">
      {tracks.map((track) => (
        <Item key={track.id} render={<a href={`#${track.id}`} />}>
          <ItemMedia variant="image">
            <img alt={`${track.title} cover`} src={track.cover} />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{track.title}</ItemTitle>
            <ItemDescription>{track.artist}</ItemDescription>
          </ItemContent>
          <ItemContent className="text-muted-foreground tabular-nums">
            {track.duration}
          </ItemContent>
        </Item>
      ))}
    </ItemGroup>
  );
}
