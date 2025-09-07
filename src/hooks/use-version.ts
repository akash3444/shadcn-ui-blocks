"use client";

import { versions } from "@/config/versions";

export function useVersion() {
  // This codebase is always v3, so we can simplify the logic
  const currentVersionString = "v3";

  // Update versions with current version info
  const updatedVersions = versions.map((v) => ({
    ...v,
    isCurrentVersion: v.version === currentVersionString,
  }));

  const currentVersion =
    updatedVersions.find((v) => v.isCurrentVersion) || updatedVersions[0];

  return {
    currentVersion,
    allVersions: updatedVersions,
    isLoading: false,
  };
}
