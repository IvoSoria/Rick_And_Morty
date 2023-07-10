require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const  UserModel = require('./models/User');
const FavoriteModel = require('./models/Favorite');


const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   { logging: false, native: false }
);


UserModel(sequelize)
FavoriteModel(sequelize)


const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: 'UserFavorite' });
Favorite.belongsToMany(User, { through: 'UserFavorite' });


module.exports = {
   ...sequelize.models,
   conn: sequelize,
};
