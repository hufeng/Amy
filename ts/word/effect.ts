import { AsyncStorage, Alert } from 'react-native';
import Store from './store';
import * as webapi from './webapi';
import actionCreator from './action-creator';

let store: Store;

export const bindCtx = (s: Store) => {
  store = s;
};

export const onInit = async () => {
  const { res, err } = await webapi.fetchData();

  if (err) {
    Alert.alert('提示', `获取数据错误${err.message}`, [{ text: 'OK' }]);
    return;
  }

  store.transaction(() => {
    store.dispatch(actionCreator.LOADING_END);
    store.dispatch(actionCreator.INIT_DATA, res);
  });
};

export const onEdit = (status: boolean) => {
  store.dispatch(actionCreator.EDITING, status);
};
