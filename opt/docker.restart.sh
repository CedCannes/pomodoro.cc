#!/bin/bash

SCRIPT_DIR=$(dirname `readlink -f $0`)
PROJECT_DIR=$(dirname $SCRIPT_DIR)
if [ "$PROJECT_DIR" = "/" ]; then
  PROJECT_DIR="/pomodoro.cc"
fi
ENV="PRO"
if [ "$1" = "DEV" ];then
  ENV="DEV"
fi

sh $PROJECT_DIR/opt/docker.build.sh
sh $PROJECT_DIR/opt/docker.rm.sh
sh $PROJECT_DIR/opt/docker.run.sh $ENV