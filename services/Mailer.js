const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

// contains functionality inhereted from Mail object via sendgrid npm module
class Mailer extends helper.Mail {

}
