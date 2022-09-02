module.exports = (sequelize, DataTypes) => {
  const Destinations = sequelize.define("Destinations", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shortdescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Destinations;
};
