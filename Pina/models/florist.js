const Sequelize = require('sequelize');

class Florist extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      florist_no: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      florist_name: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      florist_title: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      florist_little_title: {
        type: Sequelize.STRING(30)
      },
      florist_map: {
        type: Sequelize.STRING(30)
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

  module.exports = Florist;