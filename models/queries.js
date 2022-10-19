const queries = {
    "getUserByEmail": "SELECT * FROM users WHERE email=$1",
    "getBusinessByEmail": "SELECT * FROM business WHERE email=$1",
    "createUser": "INSERT INTO users (email,password,name,artesanal,basura0,km0,organico,productosFrescos,productosTemporada,saludable,sostenible,vegano,vegetariano) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)",
    "createBusiness": "INSERT INTO business (email,password,type) VALUES ($1,$2,$3)",
    "getRestaurants": "SELECT * FROM negocios WHERE resotie='Restaurante'",
    "getRestaurantById": "SELECT * FROM negocios WHERE place_id=$1",
    "getStores": "SELECT * FROM negocios WHERE resotie='Tienda'",
}

module.exports = queries;


