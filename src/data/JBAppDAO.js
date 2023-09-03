import JBApp from "../model/JBApp.js";
import ApiError from "../model/ApiError.js";

class JBAppDAO {
    // return the created job
    // throws error when title, company, salary_range, or location are invalid
    async create({ title, company, salary_range, location }) {
        try {
            const job = await JBApp.create({ title, company, salary_range, location });
            return job;
        } catch (err) {
            throw new ApiError(400, err.message);
        }
    }

    // return all jobs
    async readAll({ title, company, salary_range, location }) {
        const filter = {};
        if (title) {
            filter.title = title;
        }

        if (company) {
            filter.company = company;
        }

        if (salary_range) {
            filter.salary_range = salary_range;
        }

        if (location) {
            filter.location = location;
        }

        const jobs = await JBApp.find(filter);
        return jobs;
    }

}

export default JBAppDAO;
