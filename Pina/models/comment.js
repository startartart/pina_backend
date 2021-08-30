const Sequelize = require('sequelize');

class Comment extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      comment_id: {
        type: Sequelize.STRING(30),    // type : 자료형
        allowNull: false,              // allowNull: NULL이어도 되니?
        unique: true,                  // 고유값 여부 
        primaryKey: true,
      }, 
      name: {
        type: Sequelize.STRING(30)    // type : 자료형
      },
      cmt: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      cmt_picture: {
        type: Sequelize.STRING(30),
        allowNull: true,
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
    })
  }
  static associate(db) {}
};

module.exports = Comment;