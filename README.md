# Photo Overlay Studio

A browser-based tool that reads EXIF metadata from your photos and renders it as a stylish overlay directly on the image. No server, no uploads: everything runs locally in your browser.

## Features

- **EXIF extraction:** Parses camera, lens, aperture, shutter speed, ISO, focal length, and resolution from JPEG files
- **6 overlay styles:** Classic Bar, Minimal, Film, Editorial, Stamp, and Gradient
- **Customizable:**Adjust opacity, font (sans-serif / monospace / serif), and position (top, bottom, corners)
- **Sony model mapping:** Translates internal Sony model codes (e.g. `ILCE-7M4`) to friendly names (`Sony a7 IV`)
- **Export:** Download as JPG or PNG at full resolution
- **Responsive:** Works on desktop and mobile with touch-friendly controls and a sticky download bar

## Usage

Open `index.html` in a browser, drop a JPEG with EXIF data, pick a style, and export.

The app is also deployed via GitHub Pages:

[Photo Overlay Studio](https://tflatischler.github.io/photo-overlay-studio/)

## Tech

Single-file HTML/CSS/JS application with zero dependencies. The EXIF parser reads the binary JPEG structure directly via `DataView`/`ArrayBuffer`. Overlays are rendered on a `<canvas>` element.

## Future Plans

- add more camera models and brands for parsing
- develop features for image scale and ratio
- export overlay as transparent png layer
- **iOS APP** -> APP.md

## Project Structure

```
index.html            Main application
ROADMAP.md            Feature roadmap
.github/workflows/    GitHub Pages deployment
```
