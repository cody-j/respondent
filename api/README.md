# API for Web Client

This is the response to the Back-End take-home assignment. The algorithm sits behind a server for use over HTTP.

## Setup
Built on Node version 10
If using nvm can run `$ nvm use` from api directory (.nvmrc)

Install dependencies
```
$ npm install
```

## Run
```
$ npm start
```
> Will default to port 9000 (update .env to change)

## Test
```
$ npm test
```

## API

`/respondents`

Returns respondents ranked by their "match score", filters out respondents farther than 100km from nearest city.
> Paginated; by default returns 25. Set query param `count=<some very large number>` to see all respondents through vanilla http request.

[Back](../README.md)
