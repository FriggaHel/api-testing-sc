# API Testing with Sauce Connect

This repository is demoing how Sauce-Connect can be used with API Testing.

## Run

### Local WebServer

This repo contains a simple webserver answering to the `/data` endpoint.
It needs to be started prio to running the tests.

- Run `npm install` to install dependencies
- Run `npm start` to start the server

### Sauce connect

Sauce Connect needs to be [installed](https://docs.saucelabs.com/secure-connections/sauce-connect/installation/) first.

Start the tunnel:
```
sc --region eu-central --config-file ./sc.yml --readyfile /tmp/sc.ready --pidfile /tmp/sc.pid --tunnel-name sc-github-api-testing
```

### Run the tests

SauceCTL needs to be [installed](https://docs.saucelabs.com/dev/cli/saucectl/#installing-saucectl) first.

Start your tests:
```
saucectl run --tunnel-name sc-github-api-testing
```

## Github Actions Integration

Example integrations with Github Action can be found [here](https://github.com/FriggaHel/api-testing-ci/blob/main/.github/workflows/test.yml).