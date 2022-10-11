const queries = {
    "getUserByEmail":"SELECT * FROM users WHERE email=$1",
    "getBusinessByEmail":"SELECT * FROM business WHERE email=$1",
    "createUser":"INSERT INTO users (email,password) VALUES ($1,$2)",
    "createBusiness":"INSERT INTO business (email,password,type) VALUES ($1,$2,$3)"
}

module.exports = queries;


