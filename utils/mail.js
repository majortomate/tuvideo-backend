const sendgrid = require('@sendgrid/mail');

  function sendMailSendGrid(data) {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

    return sendgrid.send(data);
  }

  module.exports = {
    sendMailSendGrid,
  };
