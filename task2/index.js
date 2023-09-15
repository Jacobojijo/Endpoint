const express = require('express')
const usersRoutes = require('../task2/routes/users')
const mongoose = require('mongoose')

const app = express();

const PORT = process.env.PORT || 5000;
const dbURL = "MongoURL";
mongoose.connect(dbURL)
    .then((result) => app.listen(PORT, () => console.log(`Server has started on http://localhost:${PORT}`)))
    .catch((err) => console.log(err));

app.use(express.json());

app.use('/api', usersRoutes)

app.get('/', (req, res) => {
    res.send("Personal details for various users");
})