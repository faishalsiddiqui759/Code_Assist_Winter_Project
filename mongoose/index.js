
const mongoose = require("mongoose");
 
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
 
main()
.then((res)=>{
    console.log("connection created");
})
.catch((err)=>{
    console.log("error found at the time of connection");
});

// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     cgpa: Number,
//     state: String,
// });

// const User = mongoose.model("User", userSchema);

// // const user1 = new User({
//     name: "faishal siddiqui",
//     age: 22,
//     cgpa : 8.095,
//     state: "UP"
// }); 
// user1.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((er)=>{
//     console.log(er);
// });

// User.insertMany([
//     { 
//      name: "sachin",
//      age: 17,
//      cgpa: 7.2,
//      state: "bihar"
//     },
//     {
//     name: "liyaqat ali",
//     age: 22,
//     cgpa: 6.9, 
//     state: "ladakh"
//     }
// ])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log((err));
// });

// User.findById('6738d8f5a437f4cedc4f149d')
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

//// update in database with mongoose

// User.findByIdAndUpdate('6738d9ca1d46b0326a5ea6fe', {cgpa: 7.05}, {new:true})
// .then((re)=>{
//     console.log(re);
// })
// .catch((err)=>{
//     console.log(err);
// }); 

// User.findByIdAndDelete("6738d9ca1d46b0326a5ea6fe")
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// });


const bookSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true
    },
     price:{
        type: Number,
        min: [0, "price should not be less than  zero"]
     },
     discount:{
        type: String, 
        default: 10,
     },
     category:{
        type: String,
        enum: ["maths", "english", "hindi","english", "social science"]
     }
});

const Book = mongoose.model("Book", bookSchema);

// const book1 = new Book({
//     title:"RS Agarwal CLASS-10", 
//     author: "RS Agarwal", 
//     price: 32,
//     category: "maths",
// });
// book1.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });

Book.findByIdAndUpdate("6738f55bb8000ca82b720a99", {price: -320}, {runValidators: true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});
