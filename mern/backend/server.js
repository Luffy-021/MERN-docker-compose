import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors({
  origin: 'mern-docker-compose-bb4l.vercel.app'  // Replace with your actual frontend URL
}));
app.use(express.json());
app.use("/record", records);
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
console.log("Hello")
