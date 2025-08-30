# Crypto Section Clone

This directory contains a complete, self-contained clone of the main "TradingisEZ" application. It has been themed with a pixelated font and a high-contrast, black-and-white color scheme inspired by retro video games.

## Structure

- **`/crypto/page.tsx`**: The homepage for this section, located at the `/crypto` route.
- **`/layout.tsx`**: The primary layout for this section. It applies the unique `crypto.css` theme and uses its own set of cloned components.
- **`/crypto.css`**: Defines the pixelated font and black-and-white color theme for this section only.
- **`/components/`**: This folder contains exact clones of all UI and layout components used by the main site, ensuring this section is fully independent.
- **All other page routes** from the main site have been cloned within this directory to ensure a complete, parallel user experience.

## Running Locally

To view this section, run the development server as usual and navigate to `/crypto` in your browser. All links within this section will keep you within the crypto-themed experience.