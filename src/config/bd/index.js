import mongoose from "mongoose";

//mongodb+srv://dangngochai280306:VIYIO9sCThpHz8jj@cluster0.vq6y6wc.mongodb.net/

async function connect() {
    try {
        // await mongoose.connect('mongodb://localhost:27017/web_nodejs_db');
        await mongoose.connect('mongodb+srv://dangngochai280306:VIYIO9sCThpHz8jj@cluster0.vq6y6wc.mongodb.net/web_nodejs_db');
        //     , {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // });
        console.log("connect suscess")

    } catch (error) {
        console.log("connect failure !!!")

    }
}

const connectbd = connect();

export default connectbd;