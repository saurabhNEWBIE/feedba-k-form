const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/feedback', (req, res) => {
    const feedback = req.body;
    const filePath = 'feedbacks.json';

    fs.readFile(filePath, (err, data) => {
        let feedbacks = [];
        if (!err) feedbacks = JSON.parse(data);

        feedbacks.push(feedback);
        fs.writeFile(filePath, JSON.stringify(feedbacks, null, 2), err => {
            if (err) return res.status(500).send("Error saving feedback");
            res.send("Success");
        });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));