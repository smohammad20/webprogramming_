const express = require('express');
const { BigQuery } = require('@google-cloud/bigquery');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/register', async (req, res) => {
    const data = req.body;

    // Validate the data here (e.g., check for valid email, strong password, etc.).

    const bigquery = new BigQuery();
    const datasetId = 'learnit-402114.peopleinfo';
    const tableId = 'info';

    try {
        const [job] = await bigquery
            .dataset(datasetId)
            .table(tableId)
            .insert([data]);
        
        console.log(`Inserted ${job.numRows} rows`);
        res.send('Registration successful!');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Registration failed.');
    }
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
