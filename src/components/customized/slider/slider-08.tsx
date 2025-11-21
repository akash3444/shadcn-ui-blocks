"use client";

import { Slider } from "@/registry/ui/slider";
import * as React from "react";

const formatDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default function AudioSliderDemo() {
  const duration = 145;
  const [playbackTime, setPlaybackTime] = React.useState([78]);

  return (
    <div className="max-w-sm w-full">
      <Slider
        defaultValue={playbackTime}
        max={duration}
        step={1}
        onValueChange={setPlaybackTime}
      />
      <div className="mt-1 flex justify-between text-xs font-medium text-muted-foreground">
        <span>{formatDuration(playbackTime[0])}</span>
        <span>{formatDuration(duration)}</span>
      </div>
    </div>
  );
}
