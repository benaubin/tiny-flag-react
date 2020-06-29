import React from "react";

import tinyFlag from "tiny-flag";
import ifEmoji from "emoji-supported";

// Windows does not support flag emojis, so test first.
const supportsEmoji = ifEmoji("🇺🇸");

export interface TinyFlagProps {
  /** ISO 3166-1 alpha-2 code */
  country: string;
  /** Alt text to serve as the image fallback */
  alt: string;
  /** Image to be used if flag emojis are not supported */
  fallbackImageURL: string;
}

/**
 * An accessible emoji flag, with graceful fallbacks for platforms without support for flag emojis.
 *
 * Adjust sizing using font-size.
 */
export default function TinyFlag({
  country,
  alt,
  fallbackImageURL,
}: TinyFlagProps) {
  if (supportsEmoji) {
    try {
      return (
        <span role="img" aria-label={alt} style={{ position: "relative" }}>
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
        alt={alt}></img>
    </>
  );
}
