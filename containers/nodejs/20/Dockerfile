FROM node:20-bookworm-slim

LABEL author="Midnight Team" maintainer="contact@midnight-panel.org"
LABEL org.opencontainers.image.source="https://github.com/Midnight-Panel/shards"
LABEL org.opencontainers.image.licenses="MIT"

ENV DEBIAN_FRONTEND=noninteractive

RUN apt update \
    && apt install -y --no-install-recommends \
        bash \
        curl \
        ca-certificates \
        tzdata \
        iproute2 \
        git \
        tar \
        jq \
        build-essential \
        python3 \
        procps \
        ffmpeg \
    && npm install -g pnpm typescript ts-node tsx \
    && corepack enable \
    && usermod -l container -d /home/container -m -s /bin/bash node \
    && groupmod -n container node \
    && rm -rf /var/lib/apt/lists/*

USER container
ENV USER=container HOME=/home/container
WORKDIR /home/container

COPY ./containers/entrypoint.sh /entrypoint.sh
CMD ["/bin/bash", "/entrypoint.sh"]
