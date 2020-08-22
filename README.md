# River Server Library

## Supported platforms

Node.JS

## Installation

River is available as an npm package. In your project's root, type:

```
npm install river-http-node
```

## Importing

Requiring the module exposes the River constructor:

```javascript
const River = require("river-http-node");
```

## Configuration

To configure the server, use the River constructor:

```javascript
const river = new River({
  host: "localhost", // API Gateway endpoint
  key: "apikey", // API Gateway key
});
```

The endpoint and key are given at the end of the deployment process. Please see the [`deploy` repo](https://github.com/river-live/deploy) for more information.

## Usage

To publish a message from your backend, use the `publish` method:

```javascript
river.publish("channel", "eventName", data);
```

This sends an HTTP POST request to River. `data` can be a string, array, or object. See the [`client-js` repo](https://github.com/river-live/client-js) for how clients receive this event data.

For more examples, see the [`examples` repo](https://github.com/river-live/examples).

## License

MIT
