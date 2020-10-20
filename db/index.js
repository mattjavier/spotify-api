module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/spotify', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})