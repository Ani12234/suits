const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AVF_nTl3gYLNfBY-LrJNwjbZRvASZ0ikbEAcw681_PD9gacPNtrJyx-uQFxYh076lxRNo7wqjHZCgIn-",
  client_secret: "EO-pgEeinXGhUfDxTHkMnCK4JyU_uJwOzcPRwQtPMQ2ayiEp6Ff9beoFtyQvxpWMKtdeiaZhw3NaYoLz",
});

module.exports = paypal;
