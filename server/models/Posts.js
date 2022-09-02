module.exports = (sequelize, DataTypes)=> {
    const Posts = sequelize.define("Posts", {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Posts;
}