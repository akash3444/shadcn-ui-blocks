import { CardsDemo } from "@/components/cards";
import { CardsWrapper, ThemeControls } from "@/components/theme-generator";
import { ColorPicker } from "@/components/ui/color-picker";
import { ThemeConfigProvider } from "@/providers/theme-config-provider";

export default function ThemeGenerator() {
  return (
    <main className="py-12 md:py-20">
      <div className="mx-auto max-w-screen-lg text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Shadcn UI Theme Generator
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          Easily generate and preview a custom theme for your project with our
          Shadcn UI Theme Generator.
        </p>
      </div>
      <ThemeConfigProvider>
        <div className="mt-12 max-w-screen-2xl mx-auto px-6">
          <ThemeControls />
          <ColorPicker />
          <CardsWrapper>
            <CardsDemo />
          </CardsWrapper>
        </div>
      </ThemeConfigProvider>
    </main>
  );
}
