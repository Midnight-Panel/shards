FROM alpine:3.20

LABEL author="Midnight Team" maintainer="contact@midnight-panel.org"
LABEL org.opencontainers.image.source="https://github.com/Midnight-Panel/shards"
LABEL org.opencontainers.image.licenses="MIT"

RUN apk update \
    && apk add --no-cache bash curl ca-certificates tzdata iproute2 git tar jq unzip \
    && adduser -D -h /home/container -u 1000 container

USER container
ENV USER=container HOME=/home/container
WORKDIR /home/container

COPY ./containers/entrypoint.sh /entrypoint.sh
CMD ["/bin/bash", "/entrypoint.sh"]
