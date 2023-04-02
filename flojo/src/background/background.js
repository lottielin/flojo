/*global chrome*/
chrome.runtime.onMessage.addListener((msg, sender, response) => {
  if ((msg.command = "registerUser")) {
    // console.log("Register user");
    // var email = msg.data.email;
    // var password = msg.data.password;
    // console.log(email);
    response({ type: "auth", status: "success", message: true });
  }
});
