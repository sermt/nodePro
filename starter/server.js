const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_CONNECTION_PASSWORD
);

async function main() {
  await mongoose.connect(DB).then((con) => {
    console.log('Database connected');
  });
}
 
main().catch((err) => console.warn);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
