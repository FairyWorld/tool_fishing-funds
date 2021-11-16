import React from 'react';
import { render } from 'react-dom';
import NP from 'number-precision';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import * as echarts from 'echarts';

import { Provider } from 'react-redux';
import { configureStore } from '@/store/configureStore';
import App from '@/App';
import * as Utils from '@/utils';
import 'electron-disable-file-drop';
import '@/utils/window';

echarts.registerMap('china', require('@/static/map/china.json'));

NP.enableBoundaryChecking(false);

Utils.CheckEnvTool();
Utils.InitSystemSettingStorage();
Utils.ClearExpiredStorage();

export const store = configureStore();

ConfigProvider.config({
  theme: {
    primaryColor: '#EDA413',
  },
});

render(
  <ConfigProvider componentSize="small" space={{ size: 'small' }}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById('root')
);
