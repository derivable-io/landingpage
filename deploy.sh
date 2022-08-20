#!/bin/sh

TAG=test-$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)-$(git rev-parse --short HEAD)

git push origin HEAD:refs/tags/$TAG
git push --delete origin $TAG
