import * as mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/MyContacts', { useNewUrlParser: true });
mongoose.connection.on('error', console.error);

export default mongoose;