const queries = {
    "getUserByEmail":"SELECT * FROM users WHERE email=$1",
    "createUser":"INSERT INTO users (email,password,role) VALUES ($1,$2,$3)",
    "createBusiness":"INSERT INTO business (email,password,type) VALUES ($1,$2,$3)"
}

module.exports = queries;


