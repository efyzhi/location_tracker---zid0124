const userSchema = `

CREATE TABLE IF NOT EXISTS users (
    userID INT NOT NULL AUTOINCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
)


`;


module.exports = userSchema