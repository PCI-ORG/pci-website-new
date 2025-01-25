#!/bin/bash
DIR=$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )
SRC=${DIR}/../.env.repo
DEST=${DIR}/../.env
cp $SRC $DEST
echo $'\nNEXT_PUBLIC_STAGING=true' >> $DEST