const Sequelize = require('sequelize');

class Search extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      no: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      id: {
        type: Sequelize.STRING(30)    // type : 자료형              
      },
      search_result: {
        type: Sequelize.STRING(100),
        allowNull: false,              // allowNull: NULL이어도 되니?
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
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

module.exports = Search;