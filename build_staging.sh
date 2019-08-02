#!/bin/bash
cd client
ng build --configuration staging --aot --output-path="../www"
cd ..