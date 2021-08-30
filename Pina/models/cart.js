const Sequelize = require('sequelize');

class Cart extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
        order_num: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
          },
          member_id: {
            type: Sequelize.STRING(30), 
            allowNull: false
          },
          prize_id: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
          },
          order_price: {
              type: Sequelize.INTEGER.UNSIGNED,
              allowNull: false
          },
          order_cnt: {
            type: Sequelize.INTEGER.UNSIGNED,
            allowNull: false
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

module.exports = Cart;