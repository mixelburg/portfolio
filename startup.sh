#!/bin/bash

export PATH="$PATH:/root/.bun/bin"

git clone https://github.com/mixelburg/portfolio.git

cd portfolio || exit 1

echo "installing dependencies"
bun i

echo "building the application"
bun run build

echo "running the application"
bun run start

