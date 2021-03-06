import dva from 'dva';
// import createLoading from 'dva-loading';
import moment from 'moment';
import "antd/dist/antd.less";
import 'moment/locale/zh-cn';

require('ysynet_reset/fixed.css')
moment.locale('zh-cn');

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use(createLoading());

// 3. Model
app.model(require('./models/user').default);
// app.model(require('./models/socket').default);
// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
