const { sequelize } = require(".")

module.exports = (Sequelize, DataTypes) => {
    return Sequelize.define('prize', {

      id: {
        type: DataTypes.STRING(50),    // type : 자료형
        allowNull: false,              // allowNull: NULL이어도 되니?
        unique: true,                  // 고유값 여부 
        primaryKey: true,
      },
      price_id: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true, 
      },
      price_picture: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING(100),    // type : 자료형
        allowNull: false,              // allowNull: NULL이어도 되니        
      },
      litle_title: {
        type: DataTypes.STRING(100),         
      },
      flower_name: {
        type: DataTypes.STRING(60),    
        allowNull: false,                 
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      color: {
        type: DataTypes.STRING(30),        
      },
      discount: {
        type: DataTypes.INTEGER.UNSIGNED,
      },
      flower_price: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      deliver_price: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      Size: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      Grade: {
        type: DataTypes.INTEGER.UNSIGNED,
      },

      create_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('now()') // 회원이 생길 때 자동으로 날짜가 등록이 됨
      },
    },
     {
      timestamps: false,  // 생성일을 Sequelize가 자동으로 생성하지 말라는 옵션 
      underscored: true,   // Snake Case를 권장한다는 옵션
      charset: 'utf8',
      collate: 'utf8_general_ci',
    })
  }