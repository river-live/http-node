const River = require('./lib/river');

const host =
  'https://y7bt1s686j.execute-api.us-east-1.amazonaws.com/apps';

const river = new River({ host });

river.publish('one', 'event', { 'Data String': 'data string' });
