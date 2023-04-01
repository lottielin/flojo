/*global chrome*/

chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if ((msg.command = "basic")) {
    console.log("Basic command");
    response({ type: "auth", status: "success", message: true });
  }
});
