import Toast from '../components/toast';
import Axios from 'axios';

export class ProcessUpdateApi {
  constructor(apiParams, time, tolerance) {
    this.tolerance = tolerance;
    this.apiParams = apiParams;
    this.time = time;
    this.currentTolerance = time;
  }

  updateApi() {
    const { config } = this.apiParams;
    const _that = this;
    let responseCopy = {};
    const axios = Axios.create(config);
    return new Promise(resolve => {
      _that.timers = setInterval(() => {
        if (_that.currentTolerance <= _that.tolerance) {
          _that.currentTolerance += _that.time;
          axios().then(response => {
            responseCopy = response;
            try {
              if (response.status >= 200 && response.status < 300) {
                  console.log(response,'responseresponseresponseresponse')
                clearInterval(_that.timers);
                if (response.data.data) {
                    const decodeBase64 = Base64.decode(response.data.data);
                    response.data.data = JSON.parse(decodeBase64);
                  }
                resolve(response);
                console.log('.....数据请求成功');
              } else {
                // 请求中
                Toast.show('网络出了点问题，正在尝试重新连接');
                console.error(`${_that.currentTolerance}.....尝试再次请求中`);
              }
            } catch (e) {
                console.log(`${e}.....尝试再次请求中`);
              console.error(e);
            }
          });
        } else {
          clearInterval(_that.timers);
          let errorInfo = {
            status: 500,
          };
          if (responseCopy.statusText) {
            errorInfo = {
              ...errorInfo,
              responseCopy,
              code: 5000,
            };
          }
          console.log(errorInfo, 'errorInfo');
        }
      }, _that.time);
    });
  }
}
