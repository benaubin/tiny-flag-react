# Tiny Flag React

Display country flags in less than 1KB with the magic of unicode (with graceful fallbacks).

Displays emoji by default, when not supported, falls back to an image tag.

[DEMO](https://codesandbox.io/s/country-flags-wz5g7?fontsize=14&hidenavigation=1&theme=dark)

## Install

```sh
npm i --save tiny-flag-react
yarn add tiny-flag-react
```

## Usage

```js
import TinyFlag from "tiny-flag";

<TinyFlag
  country="US" // ISO 3166-1 alpha-2 code
  countryName="United States" // Used as the image alt tag
  fallbackImageURL={flagURL(countryCode)} // Used when emoji flags are not supported.
/>;
```
