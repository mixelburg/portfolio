#!/bin/bash

export PATH="$PATH:/root/.bun/bin"

echo "installing dependencies"
bun i --frozen-lockfile || exit

echo "building the application"
bun run build || exit

echo "running the application"
bun run start || exit

