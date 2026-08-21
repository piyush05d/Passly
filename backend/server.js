const password = require('./models/password');

require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');

const app = express();

// Render Dynamic Port Handling Fix
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
   .then(() => {
      console.log("MongoDB connected successfully");
   })
   .catch((err) => {
      console.log("MongoDB connection error:", err.message);
   });

app.use(cors());
app.use(express.json());

app.get('/api/password', async (req, res) => {
   try {
      const passwords = await Password.find();
      res.json(passwords);
   } catch (error) {
      console.log(error.message);
      res.status(500).json({
         message: "Unable to fetch old data.",
         error: error.message
      });
   }
});

app.post('/api/password', async (req, res) => {
   try {
      console.log(req.body);
      const newpassword = await Password.create(req.body);
      res.json({
         message: "Data recived ",
         data: newpassword
      });
   } catch (error) {
      console.log(error);
      res.status(400).json({
         message: "Data Save Failed: Invalid Input.",
         error: error.message
      });
   }
});

app.put('/api/password/:id', async (req, res) => {
   try {
      const editpassword = await Password.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!editpassword) {
         return res.status(404).json({
            error: "something wrong "
         });
      }
      res.json({
         message: "Element edited sucessfully",
         data: editpassword
      });
   } catch (error) {
      console.log(error.message);
      res.status(500).json({
         error: "Unable to update password"
      });
   }
});

app.delete('/api/password/:id', async (req, res) => {
   try {
      const deletepassword = await Password.findByIdAndDelete(req.params.id);
      if (!deletepassword) {
         return res.status(404).json({
            error: "something wrong "
         });
      }
      res.json({
         message: "Password deleetd sucesfully"
      });
   } catch (error) {
      console.log(error.message);
      res.status(500).json({
         error: "Unable to delete password"
      });
   }
});

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});