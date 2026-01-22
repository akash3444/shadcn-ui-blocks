"use client";

import * as React from "react";
import { Slider } from "@/registry/ui/slider";

const formatDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default function AudioSliderDemo() {
  const duration = 145;
  const [playbackTime, setPlaybackTime] = React.useState([78]);

  return (
    <div className="w-full max-w-sm">
      <Slider
        defaultValue={playbackTime}
        max={duration}
        onValueChange={setPlaybackTime}
        step={1}
      />
      <div className="mt-1 flex justify-between font-medium text-muted-foreground text-xs">
        <span>{formatDuration(playbackTime[0])}</span>
        <span>{formatDuration(duration)}</span>
      </div>
    </div>
  );
}
