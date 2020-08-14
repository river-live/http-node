const River = require("../lib/river");
const host = "https://xrrjfc1x9j.execute-api.us-east-1.amazonaws.com/publish"; // hardcoded for testing purposes with one specific deploy
const key = "xrrjfc1x9j"; // hardcoded for testing purposes with one specific deploy
const river = new River({ host, key });

const payload = {
  channel: "one",
  message: "Hello from the authenticated backend!",
};

river.publish("one", "event", payload);
