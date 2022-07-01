const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const allRoutes = require('./allRoutesInfo');

// setup
const app = express();
app.use(express.json());
app.use(cors());

async function run() {
  try {
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(
        'mongodb+srv://ignited:ignitedmind@tamimscluster.b7ddp.mongodb.net/svelte-blog?retryWrites=true&w=majority'
      );
    }

    // routes
    app.get('/', (req, res) => {
      res.json(allRoutes);
    });
    app.use('/api/users', userRoutes);
    app.use('/api/posts', postRoutes);

    // start
    app.listen(process.env.PORT || 5000);
  } catch (e) {
    console.log(e.message);
  }
}

run().catch(console.dir);
