import express from 'express';
import cors from 'cors';
import router from '../src/routes/routes.js'

const app = express();
const port = 5000;
const host = 'localhost';

app.use(express.json());
app.use(cors());
app.use('/notes', router)

app.listen(port, () => {
    console.log(`Server berjalan di http://${host}:${port}`);
});