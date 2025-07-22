const app = require('./app');
const connectDB = require('./config/database');
const { PORT } = require('./config/env');

connectDB();
// Start the server
app.listen(PORT, '0.0.0.0', () => {
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
