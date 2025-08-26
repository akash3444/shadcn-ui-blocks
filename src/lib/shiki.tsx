import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import {
  BundledLanguage,
  BundledTheme,
  codeToHast,
  CodeToHastOptions,
} from "shiki/bundle/web";
import { cn } from "./utils";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerRemoveLineBreak,
} from "@shikijs/transformers";

export async function highlight(
  code: string,
  options: CodeToHastOptions<BundledLanguage, BundledTheme>
) {
  const out = await codeToHast(code, options);

  return toJsxRuntime(out, {
    Fragment,
    jsx,
    jsxs,
    components: {
      pre: (props) => (
        <pre
          {...props}
          className={cn(
            props.className,
            "py-4 h-full text-sm dark:bg-foreground/5! overflow-auto"
          )}
          style={{ ...props.style, backgroundColor: undefined }}
        />
      ),
    },
  });
}

export async function getHighlightedCodeNodes(code: string) {
  return await highlight(code, {
    lang: "tsx",
    themes: {
      light: "github-light-default",
      dark: "github-dark-default",
    },
    transformers: [
      transformerNotationDiff(),
      transformerNotationHighlight(),
      transformerRemoveLineBreak(),
    ],
  });
}
