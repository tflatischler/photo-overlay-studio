# Photo Overlay Studio - Free, Privacy-First EXIF Overlay Tool

**TL;DR:** I built a free web app that puts clean EXIF metadata overlays on your photos. No uploads, no accounts, no watermarks. Runs 100% in your browser.

---

## What it does

You drop in a JPEG straight from your camera, and it reads the EXIF data (shutter speed, aperture, ISO, lens, camera body) and renders a stylish overlay directly onto the image. Pick a style, tweak the settings, download. Done.

**6 overlay styles:**
- **Classic Bar** - Clean bottom/top bar with camera info left, settings right
- **Minimal** - Small floating badge, subtle and non-intrusive
- **Film** - Analog film border look with warm tones
- **Editorial** - Vertical accent line with structured text layout
- **Stamp** - Bold, stamp-like text with shadow
- **Gradient** - Smooth gradient fade with overlaid text

## Why I built this

I wanted something simple to slap my camera settings onto photos for Instagram without opening Photoshop or trusting some random app with my images. Everything out there was either bloated, required an account, or uploaded my photos to some server.

This does none of that. Your photos never leave your device.

## Features

- Reads EXIF data directly from JPEG files (shutter, aperture, ISO, focal length, resolution, lens model, camera body)
- Sony model name mapping (ILCE-6600 becomes "Sony a6600", etc.)
- 6 distinct overlay styles
- Adjustable opacity, font style (sans/mono/serif), and position (6 options)
- Export as JPG (0.95 quality) or PNG (lossless)
- Full-resolution export - your image is not downscaled
- Responsive design - works on mobile and desktop
- Zero dependencies, no build step, single HTML file
- **100% client-side - your photos never leave your browser**

## Tech

It's a single self-contained HTML file. No frameworks, no npm, no build tools. Vanilla JS with an inline EXIF parser and Canvas API for rendering. The entire app is ~960 lines.

Works on any modern browser. On mobile it switches to a touch-optimized layout with collapsible panels and a sticky download bar.

## Try it

https://github.com/tflatischler/photo-overlay-studio

Clone it, open `index.html`, or host it anywhere static. It's just one file.

## Feedback welcome

This is a side project and I'm actively working on it. Planned next:
- Custom text / watermark support
- Date & time overlay from EXIF
- Transparent PNG layer export (overlay only, no photo underneath)
- Batch processing for multiple photos
- More camera brands (Canon, Nikon, Fujifilm)
- PWA / offline support

Let me know what you think or what features you'd want!

---

*Subreddits: r/photography, r/SonyAlpha, r/webdev, r/selfhosted, r/opensource*
