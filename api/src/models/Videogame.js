const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterísco deben ser obligatorias):

//  Videojuego con las siguientes propiedades:
//      ID: * No puede ser un ID de un videojuego ya existente en la API rawg WHAT
//      Nombre *
//      Descripción *
//      Fecha de lanzamiento
//      Rating
//      Plataformas *
//==========================
//  Genero con las siguientes propiedades:
//      ID
//      Nombre

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define(
        "videogame",
        {
            ID: {
                type: DataTypes.UUID,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            releaseDate: {
                type: DataTypes.DATE,
            },
            rating: {
                type: DataTypes.FLOAT,
            },
            platforms: {
                type: DataTypes.STRING,
            },
        },
        { timestamps: false }
    );
};
