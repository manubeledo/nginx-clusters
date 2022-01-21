npm install

npm i nodemon -d

**** Run ngnix ****

pm2 start index.js --name="forkServer1" --watch --8080

pm2 start index.js --name="clusterServer2" --watch -i max --8081

**** Comment config 1 in NGINX config ****

**** Uncomment config 2 in NGINX config ****

**** Run next commands ****

pm2 start index.js --name="clusterServer" --watch -i max --8080

pm2 start index.js --name="forkServer1" --watch --8082

pm2 start index.js --name="forkServer2" --watch --8083

pm2 start index.js --name="forkServer3" --watch --8084

pm2 start index.js --name="forkServer4" --watch --8085

Routes to try app

localhost/api/randoms?cant=<NUMBER> (Change Number with a number between 1 and 100millon)

localhost:8080/info

