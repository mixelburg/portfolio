#!/bin/bash

export PATH="$PATH:/root/.bun/bin"

echo "installing dependencies"
bun i --frozen-lockfile || exit

echo "building the application"
bun run build || exit

lsof -ti:4444 | xargs kill -9
echo "running the application"
bun run start || exit

