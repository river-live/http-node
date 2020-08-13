const River = require('./lib/river');

const host =
  'https://78kqtukaic.execute-api.us-east-2.amazonaws.com/apps';
// const host = 'djp47y1957.execute-api.us-east-2.amazonaws.com';

const river = new River({ host });

river.publish('one', 'event', { 'Data String': 'data string' });

exports.publishMessage = function () {
  river.publish('one', 'event', { 'Data String': 'data string' });
};
