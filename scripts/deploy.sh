#!/bin/bash
# Sync built files with appropriate cache headers.
# https://www.gatsbyjs.org/docs/caching/

# AWS CLI include/exclude filters:
# https://docs.aws.amazon.com/cli/latest/reference/s3/index.html#use-of-exclude-and-include-filters

# HTML. Do not cache.
aws s3 sync public/ s3://dev-tab-website --region us-west-2 \
  --exclude "*" --include "*.html" \
  --cache-control no-cache \
  --metadata-directive REPLACE

# Static files. Cache for long term.
aws s3 sync public/ s3://dev-tab-website --region us-west-2 \
  --exclude "*" --include "static/*" \
  --cache-control max-age=31536000 \
  --metadata-directive REPLACE

# Javascript and all other files besides HTML and 
# static/* files.
# Note that Gatsby cannot yet cache Javascript:
# https://www.gatsbyjs.org/docs/caching/#javascript
# https://github.com/gatsbyjs/gatsby/issues/2538
aws s3 sync public/ s3://dev-tab-website --region us-west-2 \
  --include "*" --exclude "*.html" --exclude "static/*" \
  --cache-control no-cache \
  --metadata-directive REPLACE
