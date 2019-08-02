#!/bin/bash
cd client
ng build --prod --aot --output-path="../www"
cd ..
#heroku login --browser=google-chrome