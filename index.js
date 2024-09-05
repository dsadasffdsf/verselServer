const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

const users = [
  { username: 'user1', password: 'password1', role: 'admin' },
  { username: 'user2', password: 'password2', role: 'user' },
  { username: 'user3', password: 'password3', role: 'moderator' },
];

console.log("dsfdsf");

app.use(bodyParser.json());
app.use(
  cors({
    credentials: true,
    origin: '*',
  }),
);

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    res.status(200).json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});