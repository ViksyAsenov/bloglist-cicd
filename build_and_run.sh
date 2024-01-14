#!/bin/bash

cd bloglist-frontend

npm install

if [ $? -eq 0 ]; then
    echo "npm install successful"
else
    echo "npm install failed. Exiting."
    exit 1
fi

npm run build

if [ $? -eq 0 ]; then
    echo "Build successful"
else
    echo "Build failed. Exiting."
    exit 1
fi

cd ..

cd bloglist-backend

npm install

if [ $? -eq 0 ]; then
    echo "npm install successful"
else
    echo "npm install failed. Exiting."
    exit 1
fi

cp -r ../bloglist-frontend/build .

npm start
