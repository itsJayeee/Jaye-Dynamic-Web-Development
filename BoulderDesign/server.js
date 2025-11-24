const express = require('express');
const app = express();
const port = 3000;

// Middleware to handle JSON data
app.use(express.json());
app.use(express.static('public'));

// 1. SIMPLE STORAGE (In-Memory Array)
// This variable lives on the server. If you restart the server, it resets.
let savedRoutes = [];

// 2. GET REQUEST: Fetch all saved routes
app.get('/api/routes', (req, res) => {
    console.log('Client asked for routes. Sending:', savedRoutes.length);
    res.json(savedRoutes);
});

// 3. POST REQUEST: Save a new route
app.post('/api/routes', (req, res) => {
    const newRoute = req.body;
    
    // Add a simple ID and timestamp
    newRoute.id = Date.now();
    newRoute.date = new Date().toLocaleDateString();

    savedRoutes.push(newRoute);
    
    console.log('New route saved:', newRoute.name);
    res.json({ status: 'success', message: 'Route saved!' });
});

app.listen(port, () => {
    console.log(`Boulder App listening at http://localhost:${port}`);
});