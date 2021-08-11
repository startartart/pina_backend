const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';         // 개발용 환경 설정
const config = require(__dirname + '/../config/config.json')[env];      // Sequelize 설정 파일
const db = {};
const Search = require('./search');

// Sequelize 인스턴스화
const sequelize = new Sequelize(config.database, config.username, config.password, config);  

db.Sequelize = Sequelize;  // db객체에 Sequelize 패키지 넣기
db.sequelize = sequelize;  // db객체에 Sequelize 인스턴스 넣기

db.User = require('./user')(sequelize, Sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);
db.Address = require('./address')(sequelize, Sequelize);
db.Mypage = require('./mypage')(sequelize, Sequelize);

Search.init(sequelize);
db.Search = Search;


module.exports = db;  // 모듈화