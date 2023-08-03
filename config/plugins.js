module.exports = {
    "custom-api": {
      enabled: false,
  },
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: process.env.SENDGRID_API_KEY,
      },
      settings: {
        defaultFrom: 'gurpartap.singh@saajha.org',
        defaultReplyTo: 'g.singh0605@gmail.com',
      },
    },
  },
  };