#!/bin/bash

case "${TRAVIS_OS_NAME}" in
  osx)
    cd example_tmp
    set -o pipefail && FLAVORS=custom,tipsi npm run build:ios | xcpretty -c -f `xcpretty-travis-formatter`
    npm run test:ios
  ;;
  linux)
    cd example_tmp
    FLAVORS=custom,tipsi npm run build:android
    npm run test:android
  ;;
esac
