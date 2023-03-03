const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const documentRoutes = require('./routes/documentRoutes');

const PORT = process.env.PORT || 3000;

// configuration
require('dotenv').config();
require('./database/connect');

// middleware
app.use(express.json());
app.use(cookieParser(process.env.SECRET_KEY));
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
);

// routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cover-letters', documentRoutes);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}...`));
