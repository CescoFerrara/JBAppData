import app from "./src/index.js";
import * as db from "./src/data/db.js";


db.connect(process.env.DB_URI);
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`JBApp API at http://localhost:${PORT}/`);
});
