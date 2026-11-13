# Omnis AI

Small Node.js service. The image is published to GitHub Container Registry on every push to `main`.

```text
ghcr.io/omnisorbit-source/omnis-ai:latest
ghcr.io/omnisorbit-source/omnis-ai:<commit>
```

A git tag `v1.0.0` also publishes `ghcr.io/omnisorbit-source/omnis-ai:1.0.0`.

The workflow is `.github/workflows/image.yml`. The first image is private until you change it on the package page.

```bash
docker pull ghcr.io/omnisorbit-source/omnis-ai:latest
docker run --rm -p 8080:8080 ghcr.io/omnisorbit-source/omnis-ai:latest
```

`GET /health` returns `{"ok":true,"name":"omnis-ai"}`.
