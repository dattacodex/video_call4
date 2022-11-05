require('dotenv').config()
module.exports = {
    METERED_DOMAIN: process.env.METERED_DOMAIN || "https://herokuvideocall4.herokuapp.com/",
    METERED_SECRET_KEY: process.env.METERED_SECRET_KEY || "123456",
    port: process.env.PORT || 4000
}
