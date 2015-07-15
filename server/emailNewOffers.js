'use strict';

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.FLUGVAKTIN_EMAIL,
    pass: process.env.FLUGVAKTIN_PASS,
  },
});

let mailOptions = {
  from: `Flugvaktin <${process.env.FLUGVAKTIN_EMAIL}>`,
  to: 'hugihlynsson@gmail.com',
  subject: 'Nýtt netverð frá Akureyri til Reykjavíkur',
};

module.exports = function emailNewOffers(offers) {
  if (offers.new.length) {
    mailOptions.text = offers.new.map(function(offer) {
      return `
        ${offer.route}
        ${offer.date} kl. ${offer.time} fyrir ${offer.price}
        https://www.flugfelag.is${offer.link}
      `;
    }).join('');
    return new Promise(function(resolve, reject) {
      transporter.sendMail(mailOptions, function(error) {
        if (error) {
          reject(new Error(error));
        }
        resolve(offers);
      });
    });
  }
  return offers;
};
