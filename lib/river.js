const axios = require('axios');

class River {
  constructor(props) {
    this.host = props.host;
  }
  publish(channel, eventName, data) {
    const event = { channel, eventName, data };

    axios
      .post(this.host, event)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
}

module.exports = River;
