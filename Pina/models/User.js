const Sequelize = require('sequelize');

class user extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      id: {
        type: Sequelize.STRING(30),    // type : 자료형
        allowNull: false,              // allowNull: NULL이어도 되니?
        unique: true,                  // 고유값 여부 
        primaryKey: true,
      },
      pw: {
        type: Sequelize.STRING(30),    // type : 자료형
        allowNull: false,              // allowNull: NULL이어도 되니?
      },
      name: {
        type: Sequelize.STRING(30),    // type : 자료형
        allowNull: false,              // allowNull: NULL이어도 되니?
      },
      age: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      gender: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      phone: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      picture: {
        type: Sequelize.STRING(30),
        allowNull: true,
      },
      seller: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
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
    })
  }
  static associate(db) {}
};

module.exports = user;