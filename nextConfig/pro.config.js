const commonConfig = require('./common.config.js')
module.exports = {
    ...commonConfig,
    useFileSystemPublicRoutes: false // 开启前端路由
    }