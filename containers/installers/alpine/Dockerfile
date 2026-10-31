FROM alpine:3.20

LABEL author="Midnight Team" maintainer="contact@midnight-panel.org"
LABEL org.opencontainers.image.source="https://github.com/Midnight-Panel/shards"
LABEL org.opencontainers.image.licenses="MIT"

RUN apk update \
    && apk add --no-cache \
        bash \
        curl \
        ca-certificates \
        git \
        tar \
        unzip \
        jq \
        wget \
        xz \
        bzip2 \
        coreutils \
        openjdk21-jre-headless \
    && mkdir -p /mnt/server

WORKDIR /mnt/server
CMD ["/bin/bash"]
