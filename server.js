const { app } = require('./src/app');
const { connectDB } = require('./src/connectDB');


const PORT = process.env.PORT || 5_000;
connectDB();

// skip when testing
app.listen(PORT, () => {
  console.log(`[Server ⚡] running on port ${PORT}.`);
});
