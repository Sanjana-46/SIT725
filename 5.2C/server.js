require('dotenv').config();  

const express = require('express');
const mongoose = require('mongoose'); 
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Welcome to the Task Manager API!'));
app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ DB connection failed:', err);
  });
