// Import required libraries
const express = require('express');
const { exec } = require('child_process');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware for JSON request body parsing
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Root endpoint to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Map to store user-instance mappings
const userInstances = new Map();

// Endpoint to create a new service instance for a user
app.post('/start-instance', (req, res) => {
    const { username } = req.body;

    if (!username) {
        return res.status(400).json({ error: 'Username is required' });
    }

    if (userInstances.has(username)) {
        return res.status(400).json({ error: 'Instance already running for this user' });
    }

    const instanceName = `service-instance-${username}`;

    // Start a Docker container for the user
    exec(`docker run -d --name ${instanceName} ubuntu`, (err, stdout, stderr) => {
        if (err) {
            console.error(`Error starting instance: ${stderr}`);
            return res.status(500).json({ error: 'Failed to start service instance' });
        }

        userInstances.set(username, { instanceName, containerId: stdout.trim() });
        console.log(`Started instance for user ${username}: ${stdout.trim()}`);

        res.status(201).json({ message: 'Service instance started', containerId: stdout.trim() });
    });
});

// Endpoint to stop a user's service instance
app.post('/stop-instance', (req, res) => {
    const { username } = req.body;

    if (!username || !userInstances.has(username)) {
        return res.status(400).json({ error: 'No running instance found for this user' });
    }

    const { instanceName, containerId } = userInstances.get(username);

    // Stop and remove the Docker container
    exec(`docker rm -f ${containerId}`, (err, stdout, stderr) => {
        if (err) {
            console.error(`Error stopping instance: ${stderr}`);
            return res.status(500).json({ error: 'Failed to stop service instance' });
        }

        userInstances.delete(username);
        console.log(`Stopped instance for user ${username}: ${stdout.trim()}`);

        res.status(200).json({ message: 'Service instance stopped' });
    });
});

// Endpoint to list all running instances
app.get('/list-instances', (req, res) => {
    const instances = Array.from(userInstances.entries()).map(([username, { instanceName, containerId }]) => ({
        username,
        instanceName,
        containerId
    }));

    res.status(200).json({ instances });
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
