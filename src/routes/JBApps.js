import express from "express";
import JBAppDAO from "../data/JBAppDAO.js";
import ApiError from "../model/ApiError.js";

const router = express.Router();
export const jbAppDAO = new JBAppDAO();

router.get("/jobs", async (req, res) => {
    const { title, company, salary_range, location } = req.query;
    const jobs = await jbAppDAO.readAll({ title, company, salary_range, location });
    res.json({
        status: 200,
        message: `Successfully retrieved ${jobs.length} jobs!`,
        data: jobs,
    });
});


router.post("/jobs", async (req, res) => {
    try {
        const { title, company, salary_range, location } = req.body;
        const job = await jbAppDAO.create({ title, company, salary_range, location });
        res.status(201).json({
            status: 201,
            message: `Successfully created the following job!`,
            data: job,
        });
    } catch (err) {
        res.status(err.status).json({
            status: err.status,
            message: err.message,
        })
    }

});


export default router;
