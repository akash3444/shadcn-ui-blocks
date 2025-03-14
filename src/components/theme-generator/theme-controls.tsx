import { CardColorSelector } from "./card-color-selector";
import { RadiusSelector } from "./radius-selector";
import { ThemeModeSelector } from "./theme-mode-selector";
import { ThemeSelector } from "./theme-selector";

export const ThemeControls = () => {
  return (
    <div className="mb-10 flex gap-10">
      <ThemeSelector />
      <div className="flex flex-col justify-between gap-4">
        <RadiusSelector />
        <ThemeModeSelector />
      </div>
      <CardColorSelector />
    </div>
  );
};
