import React, { Component } from "react";

export default class HelpChat extends Component {
  componentDidMount() {
    // Smooch doesn't work on the server-side, thus no top-level `import`.
    this.Smooch = require("smooch"); // eslint-disable-line no-undef

    this.Smooch
      .init({
        appToken: "ecufe3xzigy4zorp3alcijm4j",
        customText: {
          headerText: "Hey there! Care for a chat?",
          inputPlaceholder: "Type a message...",
          sendButtonText: "Send",
          introductionText: "Ask us anything!"
        }
      })
      .then(() => {
        const logo = document.querySelector("#sk-conversation .sk-logo");
        if (logo) {
          logo.remove();
        }
      });
  }

  render() {
    return <span style={{ display: "none" }} />;
  }
}
