import mongoose from 'mongoose';
import mongoConfig from '../config/mongo';

class Database {
  constructor() {
    this.mongo();

    mongoose.connection.on('disconnected', this.mongo);
  }

  mongo(): void {
    mongoose
      .connect(mongoConfig.mongoUrl, {
        useNewUrlParser: true,
        useFindAndModify: true,
      })
      .then(() => {
        return console.log(`Successfully connected to ${mongoConfig.mongoUrl}`);
      })
      .catch(error => {
        console.log('Error connecting to database: ', error);
        return process.exit(1);
      });
  }
}

export default new Database();
