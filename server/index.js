import app from "./app.js";
import { connectToDb } from './db/index.js'
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})

connectToDb()
.catch((err) => {
    console.log();
})

app.get('/', (req, res) => {
    res.send("Hello man")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is listening at port: http://localhost:${PORT}`);
})