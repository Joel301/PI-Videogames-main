const { DataTypes } = require("sequelize");
// Genero con las siguientes propiedades:
// ID
// Nombre
// La relación entre amba

const Genre = (sequelize) => {
    sequelize.define("genre", {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        Nombre: { type: DataTypes.STRING, allowNull: false },
    });
};

module.exports = Genre;
