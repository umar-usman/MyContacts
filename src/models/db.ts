import * as mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/MyContacts', { useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("db connection successful");
});

export default mongoose;