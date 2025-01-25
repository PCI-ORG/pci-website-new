#!/bin/bash
DIR=$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )
cp ${DIR}/../.env.repo ${DIR}/../.env
echo $'\nNEXT_PUBLIC_STAGING=true' >> .env