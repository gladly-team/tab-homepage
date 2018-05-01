#!/bin/bash
# Sync built files. Cache non-HTML files.
aws s3 sync public/ s3://dev-tab-website --region us-west-2 \
  --exclude "*" --include "*.html" \
  --cache-control no-cache \
  --metadata-directive REPLACE

aws s3 sync public/ s3://dev-tab-website --region us-west-2 \
  --include "*" --exclude "*.html" \
  --cache-control max-age=31536000 \
  --metadata-directive REPLACE
