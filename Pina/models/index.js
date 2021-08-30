const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';         // 개발용 환경 설정
const config = require(__dirname + '/../config/config.json')[env];      // Sequelize 설정 파일
const db = {};

const User = require('./user');
const Address = require('./address_code');
const Mypage = require('./mypage');
const Coupon = require('./coupon');
const Cart = require('./cart');
const Comment = require('./comment');
const Prize = require('./prize');
const Search = require('./search');
const Flower = require('./flower');
const Florist = require('./florist');
const Address_code = require('./address_code');
const Price = require('./price');

// Sequelize 인스턴스화
const sequelize = new Sequelize(config.database, config.username, config.password, config);  

db.Sequelize = Sequelize;  // db객체에 Sequelize 패키지 넣기
db.sequelize = sequelize;  // db객체에 Sequelize 인스턴스 넣기

db.Comment = Comment;
Comment.init(sequelize);
Comment.associate(db);

db.Address = Address;
Address.init(sequelize);
Address.associate(db);

db.Mypage = Mypage;
Mypage.init(sequelize);
Mypage.associate(db);

db.Coupon = Coupon;
Coupon.init(sequelize);
Coupon.associate(db);

db.Cart = Cart;
Cart.init(sequelize);
Cart.associate(db);

db.User = User;
User.init(sequelize);
User.associate(db);

db.Prize = Prize;
Prize.init(sequelize);
Prize.associate(db);

db.Search = Search;
Search.init(sequelize);
Search.associate(db);

db.Flower = Flower;
Flower.init(sequelize);
Flower.associate(db);

db.Florist = Florist;
Florist.init(sequelize);
Florist.associate(db);

db.Address_code = Address_code;
Address_code.init(sequelize);
Address_code.associate(db);

db.Price = Price;
Price.init(sequelize);
Price.associate(db);

module.exports = db;  // 모듈화