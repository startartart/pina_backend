const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';         // 개발용 환경 설정
const config = require(__dirname + '/../config/config.json')[env];      // Sequelize 설정 파일
const db = {};
const Search = require('./search');
const User = require('./user');

// Sequelize 인스턴스화
const sequelize = new Sequelize(config.database, config.username, config.password, config);  

db.Sequelize = Sequelize;  // db객체에 Sequelize 패키지 넣기
db.sequelize = sequelize;  // db객체에 Sequelize 인스턴스 넣기


db.Comment = require('./comment')(sequelize, Sequelize);
db.Address = require('./address')(sequelize, Sequelize);
db.Mypage = require('./mypage')(sequelize, Sequelize);
db.Mypage = require('./prize')(sequelize, Sequelize);

db.User = User;
User.init(sequelize);
User.associate(db);

db.Search = Search;
Search.init(sequelize);
Search.associate(db);

module.exports = db;  // 모듈화