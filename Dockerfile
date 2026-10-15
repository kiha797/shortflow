FROM node:22-bookworm-slim
RUN apt-get update && apt-get install -y --no-install-recommends ffmpeg fonts-noto-cjk ca-certificates && rm -rf /var/lib/apt/lists/*
WORKDIR /app
RUN mkdir -p /app/.data && chown -R node:node /app
COPY --chown=node:node package.json core.mjs server.mjs ./
COPY --chown=node:node public ./public
USER node
ENV NODE_ENV=production HOSTED=true PORT=10000
EXPOSE 10000
CMD ["node", "server.mjs"]
