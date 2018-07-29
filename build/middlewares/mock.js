/**
* @file mock middleware
* @author niminjie
*/

const path = require('path');

module.exports = function (req, res, next) {
    const baseUrl = req.baseUrl;
    const reqPath = req.path;
    const mockFilePath = path.join(__dirname, '../../mockup', baseUrl, reqPath);

    // 删除缓存，每次编辑完文件之后不用重新启动服务
    delete require.cache[require.resolve(mockFilePath)];

    const resHandler = require(mockFilePath);

    // 请求接口的延迟
    const timeout = resHandler.timeout || 0;

    // 请求数据
    const data = resHandler.response(req);

    console.log('Find mock file:', mockFilePath);
    console.log('Mock file timeout:', timeout);

    setTimeout(() => {
        res.send(data);
    }, timeout);
};
