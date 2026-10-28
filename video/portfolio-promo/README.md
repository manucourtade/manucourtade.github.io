# Manuel Courtade — Portfolio Reel

A 25.8-second, 16:9 HyperFrames promo with five seekable scenes: developer intro, backend focus, selected projects, data systems, and contact. The sound bed is an original synthesized track in `assets/portfolio-bed.wav`.

## Render

Build the isolated renderer image:

```sh
docker build -f Dockerfile.render -t portfolio-promo-renderer .
```

Render from this directory:

```sh
docker run --rm -v "$PWD:/workspace" -w /workspace portfolio-promo-renderer render --quality high --output portfolio-promo.mp4
```

Each scene lives in `compositions/` and registers a paused GSAP timeline under its composition ID. HyperFrames seeks those timelines frame by frame. Scene markup, motion comments, and the shared `styles.css` are kept readable for edits.
