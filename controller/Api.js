const Models = require('../model/dataModel');

// 处理主页的请求
const Api = {
  // GET /test
  test: async (req, res)=>{
    // 生成日志
    let logsLength = await Models.Log.find({}).count()

    let result = await Models.Log.create({
      createAt: Date.now(),
      message: `This is the No.${logsLength + 1} log.`
    })

    return res.json({
      result: true,
      data: result,
      message: 'Yeah, You Got The Response!'
    })
  },

};

module.exports = Api;
