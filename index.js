import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import studentRouter from "./routes/student.route.js";
import mentorRouter from "./routes/mentor.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;


//connect mongo
const URL = process.env.MONGO_URL;

export const client = new MongoClient(URL);
client.connect();
console.log("mongodb connected");

app.use(express.json());
app.get("/", async function (request, response) {
    response.send(
        "Welcome to Student Mentor API"
    );
});
app.use("/students", studentRouter);
app.use("/mentors", mentorRouter);
app.listen(PORT, () => console.log("app started in port", PORT));
