#!/bin/sh

# Arguments
# $1: npm package version
# $2: Custom new version

version_file="src/environments/app-version.ts"

# If $2 is unset use $1, else use $2
if [ -z ${2+x} ]; then
  version=$1
else
  version=$2
fi

echo "// This file was generated on $(date)
export const appVersion = '$version';" > $version_file
