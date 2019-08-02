#bin/bash

# docker build -t app .

# docker run -p 80:4000 -v ${PWD/folder}:/usr/src/app/folder app
# docker save lector > lector.tar


mkdir folder/

docker load < lector.tar 
docker run --rm -d -v ${PWD}/folder:/usr/src/app/folder -p 80:4000 lector

ln ./folder/ ../folder -s
# docker exec -i -t asd /bin/ash