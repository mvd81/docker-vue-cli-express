# Docker with Vue-cli and Express

Fresh Docker setup to use `Vue Cli` and `Express` as webserver 

## Requirements

* Docker Desktop

## Installation

* Clone this repo
* Download the node packages with `npm install1` or if you don't have installed node on your machine,  `docker run --rm -v $(pwd):/app -w /app node:lts-alpine npm install`
* In the root of this project run `dcoker-compose up`

## Build prject

* Open `docker-compose.yml` and uncomment the `build` section
