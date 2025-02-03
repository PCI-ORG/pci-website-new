#!/bin/bash
DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
SRC=${DIR}/../.env.repo
DEST=${DIR}/../.env
cp $SRC $DEST
echo $'\nNEXT_PUBLIC_STAGING=false' >> $DEST
cat $DEST