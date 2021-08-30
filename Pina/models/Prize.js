const Sequelize = require('sequelize');

class Prize extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      prizecreat_no: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      prize_id: {
        type: Sequelize.STRING(50),    // type : 자료형
        allowNull: false,              // allowNull: NULL이어도 되니?
      },
      prize_picture: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      prize_kind: {
        type: Sequelize.STRING(100),    // type : 자료형
        allowNull: false,              // allowNull: NULL이어도 되니        
      },
      prize_width: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      prize_length: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      discount: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      price: {
        type: Sequelize.INTEGER.UNSIGNED
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