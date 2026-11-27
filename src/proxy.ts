import { proxy as trackAgents } from "@databuddy/sdk/agents";
import type { NextFetchEvent, NextRequest } from "next/server";

export function proxy(request: NextRequest, event: NextFetchEvent) {
  trackAgents(request, event);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|woff2?|css|js)$).*)",
  ],
};
