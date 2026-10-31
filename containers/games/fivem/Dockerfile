FROM debian:bookworm-slim

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
        xz-utils \
        jq \
        procps \
        locales \
        libstdc++6 \
        libgcc-s1 \
        libssl3 \
    && useradd -d /home/container -m -u 1000 -s /bin/bash container \
    && locale-gen en_US.UTF-8 \
    && rm -rf /var/lib/apt/lists/*

ENV LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
USER container
ENV USER=container HOME=/home/container
WORKDIR /home/container

COPY ./containers/entrypoint.sh /entrypoint.sh
CMD ["/bin/bash", "/entrypoint.sh"]
