const express = require('express');
const path = require('path');
const app = express();

// 1. Tell the server where your files (index.html) are located
app.use(express.static(__dirname));

// 2. Serve index.html when someone visits the website
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 3. Use the dynamic port Render assigns (crucial for deployment)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});