import mongoose from "mongoose";

//mongodb+srv://dangngochai280306:VIYIO9sCThpHz8jj@cluster0.vq6y6wc.mongodb.net/
//mongodb+srv://xiao98581:qfIKGGalbMiyIcOC@xiaocluster0.yeiejsh.mongodb.net/?retryWrites=true&w=majority&appName=xiaoCluster0
async function connect() {
    try {
        // await mongoose.connect('mongodb://localhost:27017/web_nodejs_db');
        await mongoose.connect('mongodb+srv://xiao98581:qfIKGGalbMiyIcOC@xiaocluster0.yeiejsh.mongodb.net/?retryWrites=true&w=majority&appName=xiaoCluster0/web_nodejs_db');
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