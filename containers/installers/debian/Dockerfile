FROM debian:bookworm-slim

LABEL author="Midnight Team" maintainer="contact@midnight-panel.org"
LABEL org.opencontainers.image.source="https://github.com/Midnight-Panel/shards"
LABEL org.opencontainers.image.licenses="MIT"

ENV DEBIAN_FRONTEND=noninteractive

RUN dpkg --add-architecture i386 \
    && apt update \
    && apt install -y --no-install-recommends \
        bash \
        curl \
        ca-certificates \
        git \
        tar \
        unzip \
        jq \
        wget \
        xz-utils \
        bzip2 \
        lib32gcc-s1 \
        lib32stdc++6 \
        procps \
    && rm -rf /var/lib/apt/lists/* \
    && mkdir -p /mnt/server

WORKDIR /mnt/server
CMD ["/bin/bash"]
