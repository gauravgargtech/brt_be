module.exports = {
  port: process.env.PORT,
  mysql: {
    host: process.env.mysql_host,
    username: process.env.mysql_username,
    password: process.env.mysql_password,
    database: process.env.mysql_database,
    port: process.env.mysql_port,
  },
};
