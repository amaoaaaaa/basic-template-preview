/**
 * vue 打包后保留的配置文件
 * 此文件用于配置全局变量
 */

const globalConfig = {
    // 当前环境
    env: 'dev',

    // 开发环境配置
    dev: {
        // 项目名
        APP_NAME: 'base_template',
        // API接口前缀
        BASE_URL: 'http://192.168.3.3:8081/boot_demo',
    },

    // 测试环境
    test: {
        // 项目名
        APP_NAME: 'base_template',
        // API接口前缀
        BASE_URL: 'http://47.102.205.204:8080/boot_demo',
    },

    // 生产环境配置
    pro: {
        // 项目名
        APP_NAME: '',
        // API接口前缀
        BASE_URL: '',
    },
}