#!/bin/bash

case "${TRAVIS_OS_NAME}" in
  osx)
    rm -rf example/node_modules/react-native-module-boilerplate
  ;;
  linux)
    rm -rf example/node_modules/react-native-module-boilerplate
    rm -f $HOME/.gradle/caches/modules-2/modules-2.lock
  ;;
esac
