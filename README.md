# bittrex-websocket-feed

Get real-time Bittrex trade data through Coinigy's websocket API.

## Getting Started

This repository contains various source code examples that demonstrate connecting to Coinigy's API in order to obtain real-time Bittrex websockets data. Client libraries are subject to change, please follow the [Socketcluster Github](https://github.com/SocketCluster/socketcluster-client) for latest client releases. 

As of 5/8/19 this example was confirmed working with SC Client v10.1.2.

### Prerequisites

These examples require a set of Coinigy API keys. Once logged into [Coinigy](https://www.coinigy.com) you can obtain your keys by visiting Settings > Preferences > Coinigy API. 

### Installing

For Nodejs, it's as simple as entering your API keys, and then typing

```
npm install
```

This will download the latest version of socketcluster-client. Once installed, type:

```
node bittrex-websocket-example.js
```

to run.

## Websocket Channels

Coinigy's Websocket API operates via a pub/sub (publish/subscribe) model. After successfully authenticating with the server, your client will then subscribe to specific channels and live data will stream in via those channels.

Channels are in the format: "METHOD-EXCHANGECODE--PRIMARYCURRENCY--SECONDARYCURRENCY"

Live trades are normally streamed via the "TRADE" method.

Examples:
```
// Real-Time Bittrex Ethereum/Bitcoin Channel
TRADE-BTRX--ETH--BTC

// Real-Time Bittrex Litecoin/Bitcoin Channel
TRADE-BTRX--LTC--BTC
```


### Issues

Please feel free to leave issues, we will do our best to respond. As this is meant to serve as example code, we will do our best to keep it updated, but for the most up-to-date information please follow the [Coinigy API Documentation](https://www.coinigy.com/api-documentation/)

### Thank you to

* [SocketCluster](http://socketcluster.io) - Open source (and scalable!) real-time framework for Node.js
* [Bittrex](https://www.bittrex.com) - Digital Currency Exchange
* [ByronAP](https://github.com/ByronAP) - The real hero of this project

## Contributing

Please feel free to submit PR!
