#!/bin/bash

case "${TRAVIS_OS_NAME}" in
  osx)
    $HOME/.nvm/nvm.sh
    nvm install 7.2.0
    gem install cocoapods -v 1.1.1
    travis_wait pod repo update --silent
  ;;
  linux)
    $HOME/.nvm/nvm.sh
    nvm install 7.2.0
    android list targets
  ;;
esac
