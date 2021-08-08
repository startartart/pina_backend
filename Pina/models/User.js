const { sequelize } = require(".")

module.exports = (Sequelize, DataTypes) => {
    return Sequelize.define('user', {

      id: {
        type: DataTypes.STRING(30),    // type : 자료형
        allowNull: false,              // allowNull: NULL이어도 되니?
        unique: true,                  // 고유값 여부 
        primaryKey: true,
      },
      pw: {
        type: DataTypes.STRING(30),    // type : 자료형
        allowNull: false,              // allowNull: NULL이어도 되니?
      },
      name: {
        type: DataTypes.STRING(30),    // type : 자료형
        allowNull: false,              // allowNull: NULL이어도 되니?
        unique: true,                  // 고유값 여부 
      },

      age: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      gender: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      phone: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      picture: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      seller: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },

     

      create_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('now()') // 회원이 생길 때 자동으로 날짜가 등록이 됨
      },
    }, {
      timestamps: false,  // 생성일을 Sequelize가 자동으로 생성하지 말라는 옵션 
      underscored: true,   // Snake Case를 권장한다는 옵션
      charset: 'utf8',
      collate: 'utf8_general_ci',
    })
  }