const db = require("../connection");
const format = require("pg-format");

const seed = async (data) => {
  const { userData } = data;
  await db.query("DROP TABLE IF EXISTS users");

  const usersTablePromise = db.query(
    "CREATE TABLE users (id SERIAL PRIMARY KEY, username VARCHAR(50) NOT NULL, email VARCHAR(50) NOT NULL);"
  );

  await Promise.all([usersTablePromise]);

  const insertUsersQueryStr = format(
    "INSERT INTO users (username, email) VALUES %L RETURNING *;",
    userData.map(({ username, email }) => [username, email])
  );

  return db.query(insertUsersQueryStr).then((result) => result.rows);
};

module.exports = seed;
