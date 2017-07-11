const dotenv = require('dotenv')
dotenv.config();

module.exports = {
  
  development: {
    client: 'pg',
    connection: 'postgres://localhost/reads'
  },

  Production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }

};
