// Access Bittrex trades in real-time via websockets, using the Coinigy API
// Websocket API Documentation: https://www.coinigy.com/api-documentation
// Nodejs Example

// Instantiate socketcluster.io client
var socketCluster = require('socketcluster-client');

// Coinigy API Keys 
var api_credentials =
 {
    "apiKey"    : "YOUR-API-KEY",
    "apiSecret" : "YOUR-SECRET-KEY"
}

// Socketcluster client config
var options = {
    hostname  : "sc-02.coinigy.com",
    port      : "443",
    secure    : "true"
};


// Establish connection to websocket server
var SCsocket = socketCluster.connect(options);

// Once connected, authenticate with credentials
SCsocket.on('connect', function (status) {

    SCsocket.emit("auth", api_credentials, function (err, token) {        
        
        if (!err && token) {            
            // Successful authentication, so let's try and subscribe to a few channels!
            // Channel format is as follows:
            // TYPE-EXCHANGECODE--BASECURRENCY--QUOTECURRENCY
            // NOTE: Use "WSTRADE" type for Bittrex only. e.g. "WSTRADE-BTRX--NEO--BTC"
            // All other exchanges use "TRADE" e.g. "TRADE-BITF--ETH--USD"


            // Subscribe to Bittrex Ethereum/Bitcoin market's live websocket trade feed
            var scChannel = SCsocket.subscribe("TRADE-BTRX--ETH--BTC");
                        
            scChannel.watch(function (data) {
                // log output as new messages stream in
            	console.log(data.time_local + " " + data.price + " " + data.quantity + " " + data.type);
            });        


            // Optional: Get a list of all Bittrex (BTRX) channels.
            // SCsocket.emit("channels", "BTRX", function (err, data) {
            //     if (!err) {
            //         console.log(data);
            //     } else {
            //         console.log(err)
            //     }   
            // });

            
        
        } else {
        
            console.log(`Code: ${err.errorCode}, Msg: ${err.errorMsg}`);
        
        }   
    
    });   

});

// Catch and log any error messages
SCsocket.on('error', function (status) {
    console.log(status);
});
