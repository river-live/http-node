const axios = require("axios");

class River {
  constructor(props) {
    this.host = props.host;
    this.key = props.key;
  }

  publish(channel, eventName, data) {
    const event = { channel, eventName, data };

    axios
      .post(this.host, event, {
        headers: { "x-api-key": this.key },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
}

module.exports = River;
