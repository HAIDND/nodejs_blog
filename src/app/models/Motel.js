import mongoose from "mongoose";
const { Schema } = mongoose;

const motelModel = new Schema({

    nameMotel: String,
    
    price: String,
    description: String,
    image: String,
    address: String,
    isPet: Boolean, // pet v
    toilet : Number, // toilet v
    kitchen: Boolean, // kitchen v
    livingRoom: Number,
    balcony: Boolean,  ///v
    airConditioner: Number, //v
    television: Number, 
    priorityLevel: Number, // mức ưu tiên
    isVerify: Boolean, //v
    isFeatured: Boolean,
    isHotDeal: Boolean,
    isPopular: Boolean,
    status: Boolean, //v
    
    // image:{
    //     image01: String,
    //     image02: String,
    //     image03: String,
    //     image04: String,
    //     image05: String,
    //     image06: String,
    //     image07: String,
    //     image08: String,
    //     image09: String,
    //     image10: String,
    // },
    // address: {
    //     street:     String,
    //     ward:       String,
    //     district:   String,
    //     city:       String,
    // },
//     { type: String , required: true},
// { type: String , required: true},
// { type: String , required: true},
// { type: String , required: true}, { type: Number},
    // properties: {
    //     bedroom: { type: Number},

    //     refrigerator: Number,
    //     microwave: Number,
    //     dishwasher: Number,
    //     diningTable: Number,
    //     tv: Number,
    //     camera: Number,
    //     securitySystem: Number,
    //     garden: Number,
    //     pool: Number,
    //     swimmingPool: Number,
    //     gym: Number,
    //     sauna: Number,
    //     spa: Number,
    //     laundry: Number,
    // },

},{ timestamps: true});

export default mongoose.model('motelModel', motelModel);