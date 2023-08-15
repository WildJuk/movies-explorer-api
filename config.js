const { PORT = 3000 } = process.env;
const { NODE_ENV = 'dev' } = process.env;
const { JWT_SECRET } = process.env;
const { DATA_BASE_URI } = process.env;

module.exports = {
  PORT,
  NODE_ENV,
  JWT_SECRET,
  DATA_BASE_URI,
};
