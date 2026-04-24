// import { OpenRouter } from "@openrouter/sdk";

// const openRouter = new OpenRouter({
//   apiKey: process.env.OPENROUTER_API_KEY,
// });

// const response = await openRouter.chat.send({
//   chatRequest: {
//     model: 'nvidia/nemotron-3-super-120b-a12b:free',
//     messages: [
//       {
//         role: 'user',
//         content: 'Diff between sql and mongodb',
//       },
//     ],
//   }
// });

// console.log(response.choices[0].message.content+"");
import express from "express";
const app = express();
import dotenv from 'dotenv';
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

dotenv.config();
import cors from "cors";

app.use(express.json());
app.use(cors());
app.use("/api", chatRoutes);
app.listen(8080,()=>{
    console.log("app is listening to port 8080");
    connectDB();
});
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
}};
// app.post('/test', async (req, res) => {
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization':` Bearer ${process.env.OPENROUTER_API_KEY}`
//         },
//         body: JSON.stringify({ 
//             model: 'nvidia/nemotron-3-super-120b-a12b:free',
//             messages: [
//                 {   "role": "user",
//         "content": req.body.message 
//       }
//     ],
//         })
//     };
// try {
// let response = await fetch("https://openrouter.ai/api/v1/chat/completions",options);
// const data = await response.json();
// // console.log(data.choices[0].message.content);
// res.send({response: data.choices[0].message.content});
// }catch (err) {
//     console.log(err);
// }
// });
