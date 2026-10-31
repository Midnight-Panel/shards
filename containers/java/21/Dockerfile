FROM eclipse-temurin:21-jdk-jammy

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
        fontconfig \
        libfreetype6 \
        procps \
    && useradd -d /home/container -m -u 1000 -s /bin/bash container \
    && rm -rf /var/lib/apt/lists/*

USER container
ENV USER=container HOME=/home/container
WORKDIR /home/container

COPY ./containers/entrypoint.sh /entrypoint.sh
CMD ["/bin/bash", "/entrypoint.sh"]
