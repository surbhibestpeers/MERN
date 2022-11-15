// import mongoose from 'mongoose';

// const Connection =async(username, password)=> {
//    const URL = `mongodb://${username}:${password}@ac-vuehujb-shard-00-00.fxij9bz.mongodb.net:27017,ac-vuehujb-shard-00-01.fxij9bz.mongodb.net:27017,ac-vuehujb-shard-00-02.fxij9bz.mongodb.net:27017/?ssl=true&replicaSet=atlas-acac1a-shard-0&authSource=admin&retryWrites=true&w=majority`;
//     try {
//      await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
//      console.log("Database Connected Successsfully")
//     }catch(error) {
//          console.log('error while connecting with the database', error)
//     }
// }
// export default Connection;

import mongoose from 'mongoose';

const Connection =async()=> {
   const URL = 'mongodb://localhost:27017/user';
    try {
     await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true});
     console.log("Database Connected Successsfully")
    }catch(error) {
         console.log('error while connecting with the database', error)
    }
}
export default Connection;