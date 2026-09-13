"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/description/faq";

export function FAQ() {
  return (
    <div
      className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]"
      id="homepage-faq"
    >
      <div className="rounded-3xl bg-muted p-7 sm:p-9">
        <MessageCircle aria-hidden="true" className="mb-8 size-9" />
        <div className="mb-9 flex flex-col gap-4">
          <p className="font-medium text-muted-foreground text-xs uppercase tracking-[0.1em]">
            Frequently asked questions
          </p>
          <h2 className="max-w-[22ch] text-balance font-heading font-semibold text-3xl tracking-tight sm:text-4xl">
            Good questions. Useful answers.
          </h2>
          <p className="max-w-lg text-pretty text-muted-foreground leading-relaxed">
            Get to know the blocks before you make them your own.
          </p>
        </div>
        <div className="mt-10 border-t pt-6">
          <p className="mb-4 text-muted-foreground text-sm">
            Want to see what you can build?
          </p>
          <Button render={<Link href="/blocks" />}>
            Explore the blocks
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
      </div>
      <Accordion defaultValue={["0"]}>
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.question} value={String(index)}>
            <AccordionTrigger className="gap-4 py-5">
              <span className="flex gap-4">
                <span className="mt-0.75 font-mono text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-base">{faq.question}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-5 pl-8">
              <p className="text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
