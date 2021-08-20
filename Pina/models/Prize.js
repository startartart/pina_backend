const Sequelize = require('sequelize');

class Prize extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: Sequelize.STRING(50),    // type : 자료형
        allowNull: false,              // allowNull: NULL이어도 되니?
        unique: true,                  // 고유값 여부 
        primaryKey: true,
      },
      price_id: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true, 
      },
      price_picture: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      title: {
        type: Sequelize.STRING(100),    // type : 자료형
        allowNull: false,              // allowNull: NULL이어도 되니        
      },
      litle_title: {
        type: Sequelize.STRING(100),         
      },
      flower_name: {
        type: Sequelize.STRING(60),    
        allowNull: false,                 
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      color: {
        type: Sequelize.STRING(30),        
      },
      discount: {
        type: Sequelize.INTEGER.UNSIGNED,
      },
      flower_price: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      deliver_price: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      Size: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false
      },
      Grade: {
        type: Sequelize.INTEGER.UNSIGNED,
      },

      create_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW // 회원이 생길 때 자동으로 날짜가 등록이 됨
      },
    }, {
        sequelize,
        timestamps: false,  // 생성일을 Sequelize가 자동으로 생성하지 말라는 옵션 
        underscored: true,   // Snake Case를 권장한다는 옵션
        charset: 'utf8',
        collate: 'utf8_general_ci',
    });
  }
    static associate(db) {}
  };

  module.exports = Prize;