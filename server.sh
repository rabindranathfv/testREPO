#!/bin/bash
sleep 2
cd /home/Empack/Node/empack_operario_node
sleep 2
fuser -k 5001/tcp
sleep 1
node app.js
