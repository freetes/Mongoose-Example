const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// 用户数据模式
const LogSchema = new Schema({
  createAt: Date,
  message: String
});

//数据模型
const Log = mongoose.model('Log', LogSchema)

module.exports = Log;
