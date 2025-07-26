const dotenv = require('dotenv');
dotenv.config();  // ✅ Load env first

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

console.log("Mongo URI:", process.env.MONGO_URI);

const app = express();  // ✅ Declare app before using it

app.use(cors());
app.use(express.json());

// ✅ Use routes after app is declared
app.use('/api', require('./routes/gemini'));
app.use('/api/tasks', require('./routes/tasks'));

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
