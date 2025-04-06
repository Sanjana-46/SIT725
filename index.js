// index.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Member = require('./models/member');

const app = express();
const PORT = 3000;

// DB connection
mongoose.connect('mongodb://127.0.0.1:27017/sit725Members', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB failed", err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// ROUTES
app.get('/', async (req, res) => {
  const members = await Member.find({});
  res.render('index', { members });
});

app.post('/add-member', async (req, res) => {
  const { name, email, capSize, designChoice } = req.body;
  const newMember = new Member({ name, email, capSize, designChoice });
  await newMember.save();
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
