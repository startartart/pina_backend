module.exports = (Sequelize, DataTypes) => {
    return Sequelize.define('mypage', {
      id: {
        type: DataTypes.STRING(30),    // type : 자료형
        allowNull: false,              // allowNull: NULL이어도 되니?
        unique: true,                  // 고유값 여부 
        primaryKey: true,
      },
      price_id: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },

      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('now()')
      },
    }, {
      timestamps: false,  // 생성일을 Sequelize가 자동으로 생성하지 말라는 옵션 
      underscored: true,   // Snake Case를 권장한다는 옵션
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }