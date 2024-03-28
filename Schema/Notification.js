const notificationSchema = `

CREATE TABLE IF NOT EXISTS user_notification (
    userId INT NOT NULL ,
    description TEXT  NOT NULL ,
    timestamp DATE  ,
    
)


`;


module.exports = notificationSchema