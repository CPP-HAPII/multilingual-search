module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'HAPII',
    user: process.env.DB_USER || 'hapii',
    password: process.env.DB_PASS || 'CPPhapii',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost', // 'hapiidb.c5hxam6fwt9f.us-west-1.rds.amazonaws.com',
      port: 3306,
      omitNull: true
    }
  }
}
