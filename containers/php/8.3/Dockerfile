FROM php:8.3-cli-alpine

LABEL author="Midnight Team" maintainer="contact@midnight-panel.org"
LABEL org.opencontainers.image.source="https://github.com/Midnight-Panel/shards"
LABEL org.opencontainers.image.licenses="MIT"

RUN apk update \
    && apk add --no-cache \
        bash \
        curl \
        ca-certificates \
        tzdata \
        git \
        tar \
        jq \
        unzip \
        sqlite \
        sqlite-dev \
        libpng-dev \
        libjpeg-turbo-dev \
        freetype-dev \
        libzip-dev \
        icu-dev \
        libxml2-dev \
        oniguruma-dev \
        openldap-dev \
        imap-dev \
        krb5-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) \
        pdo \
        pdo_sqlite \
        pdo_mysql \
        gd \
        intl \
        zip \
        xml \
        mbstring \
        opcache \
        bcmath \
    && adduser -D -h /home/container -u 1000 container

USER container
ENV USER=container HOME=/home/container
WORKDIR /home/container

COPY ./containers/entrypoint.sh /entrypoint.sh
CMD ["/bin/bash", "/entrypoint.sh"]
