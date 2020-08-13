const River = require('./lib/river');

const host = 'https://djp47y1957.execute-api.us-east-2.amazonaws.com';

const river = new River({ host });

river.publish('one', 'event', { 'Data String': 'data string' });
