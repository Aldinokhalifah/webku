const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true
    }
});

// Middleware
app.use(cors());
app.use(express.json());

// Tes route
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Socket.io
io.on("connection", (socket) => {
    console.log("User connected: " + socket.id);
    socket.on("disconnect", () => {
        console.log("User disconnected: " + socket.id);
    });
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB Connected");
    server.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
})
.catch((err) => console.log(err));
