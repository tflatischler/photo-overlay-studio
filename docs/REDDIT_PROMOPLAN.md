# Photo Overlay Studio - Reddit Promo Plan

## Ziel

Photo Overlay Studio als **die** kostenlose, privacy-first Alternative fuer EXIF-Overlays auf Reddit etablieren. Organisches Wachstum durch echten Mehrwert, Community-Engagement und gezielte Crosspostings in relevanten Subreddits.

---

## Zielgruppen & Subreddits

### Tier 1 - Kernzielgruppe (Fotografen)

| Subreddit | Mitglieder | Strategie | Post-Typ |
|-----------|-----------|-----------|----------|
| r/photography | 7M+ | Tool-Vorstellung, "I built this" | Text Post + Imgur Album |
| r/SonyAlpha | 300k+ | Sony-Modell-Mapping hervorheben, a7-Serie Beispiele | Image Post mit Overlay-Beispiel |
| r/Nikon | 150k+ | Ankuendigung: "Nikon-Support kommt" + Feedback einholen | Text Post |
| r/fujifilm | 200k+ | Film-Style Overlay als Match zu Fuji-Aesthetik pitchen | Image Post |
| r/canon | 100k+ | Canon-Community einbinden, Feature-Request als Hook | Text Post |
| r/cameras | 100k+ | Allgemeiner Tool-Post, markenuebergreifend | Text Post |
| r/AskPhotography | 500k+ | Antwort auf "How do you add camera info to photos?" Posts | Comment (kein eigener Post) |
| r/photocritique | 600k+ | Kommentare hinterlassen wenn Leute nach Gear fragen | Comment |
| r/EditMyRaw | 50k+ | Tool fuer schnelle EXIF-Overlays vorstellen | Text Post |
| r/postprocessing | 200k+ | Workflow-Integration erlaeutern | Text Post |

### Tier 2 - Tech & Developer Community

| Subreddit | Mitglieder | Strategie | Post-Typ |
|-----------|-----------|-----------|----------|
| r/webdev | 2M+ | "Single HTML file, zero dependencies" - Tech-Story | Text Post |
| r/javascript | 2M+ | Vanilla JS EXIF-Parser, kein Framework, Canvas API | Text Post |
| r/opensource | 300k+ | Open-Source Story, Contributor einladen | Text Post |
| r/selfhosted | 400k+ | "Host it yourself, one file, zero config" Angle | Text Post |
| r/coolgithubprojects | 30k+ | Kurzer Showcase mit Link | Link Post |
| r/SideProject | 80k+ | Entstehungsgeschichte + Learnings | Text Post |
| r/InternetIsBeautiful | 17M+ | Live-Link zu GitHub Pages | Link Post |

### Tier 3 - Privacy & Nischen-Communities

| Subreddit | Mitglieder | Strategie | Post-Typ |
|-----------|-----------|-----------|----------|
| r/privacy | 1.5M+ | "Your photos never leave your browser" Angle | Text Post |
| r/degoogle | 200k+ | Alternative zu Cloud-basierten Tools | Text Post |
| r/PrivacyGuides | 300k+ | Tool-Empfehlung mit Privacy-Fokus | Text Post |
| r/androidapps | 400k+ | PWA-Aspekt (mobile-friendly, installierbar) | Text Post |
| r/iOSProgramming | 100k+ | Teaser fuer geplante iOS-App | Text Post |
| r/Instagram | 500k+ | "Add EXIF overlays to your photos before posting" | Text Post + Beispielbild |
| r/streetphotography | 300k+ | Overlay-Beispiele mit Street-Motiven | Image Post |
| r/analog | 400k+ | Film-Style Overlay passt perfekt zur Community | Image Post |

---

## Content-Strategie

### Post-Vorlagen

#### Vorlage A: "I Built This" (fuer Tech-Subreddits)

```
Titel: I built a free EXIF overlay tool that runs 100% in your browser - no uploads, no accounts, single HTML file

Body:
Hey [subreddit]!

Ich wollte ein einfaches Tool, um Kamera-Settings auf meine Fotos zu legen,
ohne Photoshop zu oeffnen oder meine Bilder auf irgendeinen Server hochzuladen.

Also habe ich Photo Overlay Studio gebaut:
- Liest EXIF-Daten direkt aus dem JPEG (Blende, Verschlusszeit, ISO, Objektiv, Body)
- 6 verschiedene Overlay-Styles (Classic, Minimal, Film, Editorial, Stamp, Gradient)
- 100% client-side - deine Fotos verlassen nie deinen Browser
- Single HTML file, zero dependencies, kein Build-Step
- ~960 Zeilen Vanilla JS mit inline EXIF-Parser und Canvas API

[Link zu GitHub / GitHub Pages]

Feedback und Feature-Requests sind sehr willkommen!
```

#### Vorlage B: "Look What I Did" (fuer Foto-Subreddits)

```
Titel: Made a free tool to add clean camera info overlays to your photos - here's what it looks like on my [Camera Model]

Body:
[Beispielbild mit Overlay - Imgur Link]

Ich habe ein kostenloses Browser-Tool gebaut, das EXIF-Daten aus deinen JPEGs
liest und als stylisches Overlay direkt auf das Bild rendert.

Features:
- Erkennt automatisch Kamera, Objektiv, Blende, Verschlusszeit, ISO
- 6 Overlay-Styles (mein Favorit: Film-Style)
- Kein Upload, kein Account - laeuft komplett im Browser
- Export in voller Aufloesung als JPG oder PNG

Perfekt fuer Instagram oder um schnell ein "Shot on [Camera]" Overlay zu machen.

[Link]

Was fuer Features wuerdet ihr euch wuenschen?
```

#### Vorlage C: "Privacy Pitch" (fuer Privacy-Subreddits)

```
Titel: Privacy-friendly alternative for adding camera info to photos - runs 100% locally in your browser

Body:
Viele EXIF-Overlay-Tools laden deine Fotos auf einen Server hoch.
Photo Overlay Studio macht das komplett lokal:

- Zero network requests - deine Bilder verlassen nie den Browser
- Kein Account, kein Tracking, keine Cookies
- Open Source (MIT) - Code ist einsehbar
- Self-hostable - eine einzige HTML-Datei
- Funktioniert offline (nach dem ersten Laden)

[Link zu GitHub]

Der gesamte Code ist eine einzige HTML-Datei (~960 Zeilen).
Kein versteckter Backend-Call, kein Analytics. Schaut gerne in den Source.
```

#### Vorlage D: "Community-spezifisch" (fuer Kamera-Marken-Subreddits)

```
Titel: [r/SonyAlpha] Free tool that automatically maps Sony model codes to real names (ILCE-7M4 -> Sony a7 IV) and adds clean EXIF overlays

Body:
Als Sony-Shooter hat mich immer genervt, dass EXIF-Tools nur "ILCE-7M4" anzeigen
statt "Sony a7 IV". Also habe ich ein Tool gebaut, das die internen Sony-Codes
automatisch in lesbare Namen uebersetzt.

Aktuell unterstuetzte Sony-Modelle: [Liste]

Das Tool liest die EXIF-Daten und rendert ein stylisches Overlay direkt auf
das Bild. 6 verschiedene Styles, alles im Browser, keine Uploads.

[Beispielbild mit Sony a7 IV Overlay]

Welche Sony-Modelle fehlen noch? Schreibt mir, ich baue sie ein!
```

---

## Zeitplan (4-Wochen Rollout)

### Woche 1: Soft Launch

| Tag | Aktion | Subreddit |
|-----|--------|-----------|
| Mo | "I Built This" Post | r/SideProject |
| Mi | Tech-Post (Vanilla JS, Single File) | r/webdev |
| Fr | Showcase Post | r/coolgithubprojects |

**Ziel:** Erste Sichtbarkeit, Feedback sammeln, eventuelle Bugs fixen.

### Woche 2: Foto-Community Push

| Tag | Aktion | Subreddit |
|-----|--------|-----------|
| Mo | Hauptpost mit Beispielbildern | r/photography |
| Di | Sony-spezifischer Post | r/SonyAlpha |
| Do | Film-Style Showcase | r/analog |
| Sa | Street Photography Beispiele | r/streetphotography |

**Ziel:** Kernzielgruppe erreichen, Beispielbilder als Social Proof.

### Woche 3: Privacy & Nischen

| Tag | Aktion | Subreddit |
|-----|--------|-----------|
| Mo | Privacy-Pitch | r/privacy |
| Mi | Self-Hosting Angle | r/selfhosted |
| Do | Open-Source Story | r/opensource |
| Fr | Degoogle-Alternative | r/degoogle |

**Ziel:** Nischen-Communities aktivieren, Backlinks generieren.

### Woche 4: Big Push & Crossposting

| Tag | Aktion | Subreddit |
|-----|--------|-----------|
| Mo | Polierter Post mit allen Features | r/InternetIsBeautiful |
| Mi | Instagram-Workflow Post | r/Instagram |
| Do | JavaScript Deep-Dive (EXIF-Parser) | r/javascript |
| Fr | Zusammenfassung + Roadmap-Teaser | r/photography (Update) |

**Ziel:** Virale Reichweite durch r/InternetIsBeautiful, Conversion ueber Instagram-Community.

---

## Engagement-Strategie

### Vor dem Posten

- [ ] 3-5 hochwertige Beispielbilder vorbereiten (verschiedene Overlay-Styles)
- [ ] Beispielbilder auf Imgur hosten (Reddit-freundlich)
- [ ] GitHub Pages Live-Demo testen und sicherstellen, dass alles laeuft
- [ ] GitHub README mit Screenshots/GIFs aufwerten
- [ ] In jedem Ziel-Subreddit mindestens 1 Woche vorher aktiv sein (kommentieren, helfen)

### Waehrend der Kampagne

- [ ] Jeden Kommentar innerhalb von 2 Stunden beantworten
- [ ] Feature-Requests dokumentieren und priorisieren
- [ ] Bug-Reports sofort fixen und als Update posten
- [ ] Crosspostings zeitversetzt (nicht alles am selben Tag)
- [ ] Upvote-Manipulation vermeiden - organisch wachsen lassen

### Nach dem Posten

- [ ] Top-Feedback in ROADMAP.md einarbeiten
- [ ] "Thank you" Update-Post in Communities mit besonders gutem Feedback
- [ ] Contributors aus der Community aktiv einladen (GitHub Issues labeln)
- [ ] Erfolgreiche Posts als Referenz fuer spaetere Promotions speichern

---

## Kommentar-Strategie (passives Promo)

Neben eigenen Posts ist **hilfreiches Kommentieren** die nachhaltigste Strategie:

### Trigger-Posts finden und beantworten

Suche regelmaessig nach Posts wie:
- "How do you add camera settings to your photos?"
- "What app do you use for EXIF overlays?"
- "Looking for a simple photo watermark tool"
- "Privacy-friendly photo editing tools?"
- "Shot on [Camera] - how to make these?"

### Antwort-Template

```
I built a free tool for exactly this! Photo Overlay Studio reads EXIF data
from your JPEGs and renders clean overlays directly in your browser.
No uploads, no accounts. [Link]

It supports [relevant feature for the question].
```

**Wichtig:** Nur antworten wenn es wirklich passt. Kein Spam.

---

## Metriken & Erfolgsmessung

| Metrik | Ziel (4 Wochen) | Tracking |
|--------|-----------------|----------|
| GitHub Stars | 100+ | GitHub |
| GitHub Pages Besucher | 1.000+ | GitHub Analytics |
| Reddit Upvotes (gesamt) | 500+ | Reddit Posts |
| Neue GitHub Issues | 10+ | GitHub Issues |
| Forks | 10+ | GitHub |
| Contributor PRs | 2+ | GitHub |

---

## Beispielbilder-Planung

Fuer maximale Wirkung auf Reddit brauchen wir starke Beispielbilder:

| Bild | Overlay-Style | Ziel-Subreddit |
|------|--------------|----------------|
| Stadtlandschaft bei Nacht | Classic Bar | r/photography, r/streetphotography |
| Portrait mit Bokeh | Minimal | r/SonyAlpha, r/cameras |
| Analog-Look Strassenbild | Film | r/analog, r/fujifilm |
| Architektur-Detail | Editorial | r/webdev (als Tech-Demo) |
| Naturaufnahme | Stamp | r/Instagram |
| Sonnenuntergang | Gradient | r/InternetIsBeautiful |

---

## Risiken & Dont's

- **Kein Spam:** Maximal 1 Post pro Subreddit pro Monat
- **Keine Vote-Manipulation:** Reddit bannt Accounts dafuer
- **Selbstpromotion-Regeln beachten:** Viele Subreddits erlauben nur 10% Eigenpromo - vorher aktiv mitmachen
- **Kein Clickbait:** Ehrliche Titel, keine uebertriebenen Claims
- **Timing:** Nicht am Wochenende in Tech-Subreddits posten (weniger Reach). Beste Zeit: Dienstag-Donnerstag, 14-18 Uhr UTC
- **Crosspost-Abstaende:** Mindestens 24h zwischen Posts in verschiedenen Subreddits, damit es nicht wie Spam aussieht
- **Kein Astroturfing:** Keine Fake-Accounts fuer Kommentare oder Upvotes

---

## Langfristige Reddit-Praesenz

Nach dem initialen Push:

1. **Monatliche Updates:** Bei grossen Feature-Releases einen Update-Post in r/photography und r/webdev
2. **Community-Helfer:** Regelmaessig in Foto-Subreddits helfen und bei passenden Fragen auf das Tool verweisen
3. **AMA:** Wenn 500+ Stars erreicht, AMA in r/photography oder r/webdev
4. **Showcase-Serie:** Monatlich einen "Shot of the Month" Post mit Community-eingereichten Bildern + Overlay
5. **Collab:** Mit anderen Open-Source-Foto-Tools vernetzen (z.B. darktable, RawTherapee Communities)
