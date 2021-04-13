process.env.NODE_ENV === "test" ?
    require("dotenv").config({ path: ".env.test" }) :
    require("dotenv").config();

const commonEnv = require("common-env/withLogger")(console);

module.exports = commonEnv.getOrElseAll({
    api: {
        host: "0.0.0.0",
        port: "40003",
    },
    postgresql: {
        host: "",
        port: 5432,
        user: "",
        password: "",
        database: {
            based: "",
            porte: "",
            sedatif: ""
        },
    },
    jwt: "",
});