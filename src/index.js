import express from "express";
import jobs from "./routes/JBApps.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the JBApp API!");
});

app.use(jobs);

export default app;
