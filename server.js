const express = require('express');

const PORT = process.env.PORT || 3005;
const app = express();

// express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// default response for not found request
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
});