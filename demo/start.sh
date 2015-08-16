#! /bin/bash

echo 'Running angular project'

nginx -s stop

cp -R app /usr/local/Cellar/nginx/1.8.0/html/

nginx