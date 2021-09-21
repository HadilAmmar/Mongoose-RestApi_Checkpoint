const mongoose = require("mongoose");




const DBconnect=async()=>{
    try {
      const result = await  mongoose.connect(process.env.DB_URI);
      console.log("database mrigel")

    } catch (error) {
        console.log(`database is not mrigel ${error}`);
    }
};
module.exports=DBconnect;