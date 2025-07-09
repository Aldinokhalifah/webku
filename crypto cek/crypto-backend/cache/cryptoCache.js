const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 600 }); // TTL: 10 menit

module.exports = cache;