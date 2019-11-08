#!/bin/bash

SOURCE_DIR=../src;
TO_SOURCE_DIR=src;
ROOT_DIR=..;

install() {
    npm i
}

prepare() {

    echo 'Clearing /src and /package...'
    node_modules/.bin/rimraf "$TO_SOURCE_DIR"

    # copy src
    echo 'Copying src...'
    node_modules/.bin/ncp "$SOURCE_DIR" "$TO_SOURCE_DIR"

    # copy README & LICENSE to src
    echo 'Copying README and LICENSE to /src...'
    node_modules/.bin/ncp "$ROOT_DIR"/LICENSE "$TO_SOURCE_DIR"/LICENSE
    node_modules/.bin/ncp "$ROOT_DIR"/README.md "$TO_SOURCE_DIR"/README.md

    echo 'Installing dependencies in /src...'
    cd "$TO_SOURCE_DIR"
    npm i

    # compile package and copy files required by npm
    echo 'Building /src...'
    npm run build
    cd ..
}

install && prepare
