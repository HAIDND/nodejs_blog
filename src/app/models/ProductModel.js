import mongoose from "mongoose";

const { Schema } = mongoose;

const products = new Schema({
  name: { type: String, minLength: 1, maxLength: 40 }, // String is shorthand for {type: String}
  description: { type: String, default: null, maxLength: 100 },
  category: { type: String, default: null },
  //   comments: [{ body: String, date: Date }],
  image: { type: String, default: null },
  link: { type: String, default: null },
  price: {type: String,},
  isBestSeller: {type:String},
  priorityNumber:{Number},
  commissionRate:{Number},
  numberOfVisit: {Number},

},{timestamps: true});

export default mongoose.model('products', products);