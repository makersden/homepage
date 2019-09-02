#!/bin/bash

set -e

PROFILE="makersden"
echo "Creating fresh build"
yarn build

echo "Syncing built files to s3"
aws --profile $PROFILE s3 sync ./public s3://makersden.io/

echo "Creating a cloudfront distribution invalidation"
aws --profile $PROFILE cloudfront create-invalidation --distribution-id E19UTSY1FGQUHE --paths /*

echo "Invalidation may take a while, but please verify the site at some point. https://makersden.io"
echo "Invalidation state cmd:"
echo "aws --profile $PROFILE cloudfront get-invalidation --distribution-id E19UTSY1FGQUHE --id [id]"
