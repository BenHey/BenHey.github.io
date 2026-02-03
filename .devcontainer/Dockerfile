FROM mcr.microsoft.com/devcontainers/jekyll:latest

# Fix the Yarn repository GPG key issue by removing the problematic repository
RUN rm -f /etc/apt/sources.list.d/yarn.list || true

# Update apt package manager
RUN apt-get update && apt-get -y install --no-install-recommends \
    build-essential \
    imagemagick \
    inotify-tools \
    jupyter-nbconvert \
    procps \
    ruby-full \
    zlib1g-dev

RUN apt-get clean && rm -rf /var/lib/apt/lists/*
