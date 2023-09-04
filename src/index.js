import express from "express";
import jobs from "./routes/JBApps.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the JBApp API!");
});

app.use(jobs);

export default app;
