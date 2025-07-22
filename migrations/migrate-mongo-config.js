const { DB_URI } = require('./src/config/env');

module.exports = {
  mongodb: {
    url: DB_URI,
    databaseName: 'your_database_name', // Tên DB
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  migrationsDir: 'migrations',
  changelogCollectionName: 'changelog',
};
