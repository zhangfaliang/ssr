const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
module.exports = ({ file }) => {
    let ROOTValue;
    if (file && file.dirname && file.dirname.indexOf('vant') > -1) {
        ROOTValue = 37.5
    } else {
        ROOTValue = 75
    }
    return {
        plugins: [
            autoprefixer(),
            pxtorem({
              rootValue: ROOTValue,
              propList: ['*']
            })
        ]
    }
}