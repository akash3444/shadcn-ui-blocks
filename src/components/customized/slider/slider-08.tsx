"use client";

import { PauseIcon, PlayIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/registry/ui/button";
import { Slider } from "@/registry/ui/slider";

const DURATION = 214;
const TICK_MS = 1000;

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.floor(seconds % 60);
  return `${minutes}:${remainder.toString().padStart(2, "0")}`;
};

export default function SliderAudioPlayerDemo() {
  const [position, setPosition] = useState(72);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }
    const interval = setInterval(() => {
      setPosition((current) => {
        if (current >= DURATION) {
          setIsPlaying(false);
          return DURATION;
        }
        return current + 1;
      });
    }, TICK_MS);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div className="flex w-full max-w-sm items-center gap-3">
      <span className="sr-only" id="slider-audio-seek-label">
        Seek
      </span>
      <Button
        aria-label={isPlaying ? "Pause" : "Play"}
        onClick={() => setIsPlaying((playing) => !playing)}
        size="icon"
        variant="outline"
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </Button>
      <span className="w-9 text-muted-foreground text-xs tabular-nums">
        {formatTime(position)}
      </span>
      <Slider
        aria-labelledby="slider-audio-seek-label"
        className="flex-1"
        max={DURATION}
        onValueChange={(value) =>
          setPosition(Array.isArray(value) ? value[0] : value)
        }
        step={1}
        value={[position]}
      />
      <span className="w-9 text-right text-muted-foreground text-xs tabular-nums">
        {formatTime(DURATION)}
      </span>
    </div>
  );
}
