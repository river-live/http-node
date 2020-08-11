# River Server Library

## Supported platforms

Node.JS

## Installation

## Importing

## Configuration

To configure the server, you use the River constructor:

```javascript
const River = require('river');

const river = new River({
  host: 'localhost', // APIGatewayEndpoint
});
```

## Usage

To publish a message, you use the `publish` method:

```javascript
river.publish('channel', 'eventName', { message: 'Hello World' });
```

## Credits

## License
