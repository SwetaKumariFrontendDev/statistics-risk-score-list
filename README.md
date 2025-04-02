# Frontend engineering exercise


## Prerequirements
- Able to run docker containers with docker-compose
- Node version v18
- Yarn version 1.22.22

## Getting started
The backend can be started using docker compose 
```
$ docker compose up backend
```
The backend service will become available on http://localhost:9100

The frontend application can be started as followed:
```
$ yarn install 
$ yarn dev
```

The backend application will become available on [http://localhost:9100](http://localhost:9100), providing swagger documentation on [http://localhost:9100/docs](http://localhost:9100/docs)

