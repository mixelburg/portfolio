#!/bin/bash

export PATH="$PATH:/root/.bun/bin"

echo "installing dependencies"
bun i --verbose

echo "building the application"
bun run build

echo "running the application"
bun run start

