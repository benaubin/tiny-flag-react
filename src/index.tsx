import React from "react";

import tinyFlag from "tiny-flag";
import ifEmoji from "emoji-supported";

// Windows does not support flag emojis, so test first.
const supportsEmoji = ifEmoji("🇺🇸");

export interface TinyFlagProps {
  /** ISO 3166-1 alpha-2 code */
  country: string;
  /** Human-readable country name (used as image fallback) */
  countryName: string;
  /** Image to be used if flag emojis are not supported */
  fallbackImageURL: string;
}

export default function TinyFlag({
  country,
  countryName,
  fallbackImageURL,
}: TinyFlagProps) {
  if (supportsEmoji) {
    try {
      return (
        <span
          role="img"
          aria-label={countryName}
          style={{ position: "relative" }}>
          {tinyFlag(country)}
        </span>
      );
    } catch {
      /* no-op */
    }
  }
  return (
    <>
      <img
        style={{ width: "1em", height: "1em" }}
        src={fallbackImageURL}
        alt={countryName}></img>
    </>
  );
}
