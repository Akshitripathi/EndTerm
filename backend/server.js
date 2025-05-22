const express= require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoConnect = require('./middleware/db.js');
const enrollRoutes= require('./routes/cenrollRoute.js');
const bodyParser = require('body-parser');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
mongoConnect();

app.use('/api',enrollRoutes);

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});