var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Alert } from 'react-native';
import * as webapi from './webapi';
import actionCreator from './action-creator';
let store;
export const bindCtx = (s) => {
    store = s;
};
export const onInit = () => __awaiter(this, void 0, void 0, function* () {
    const { res, err } = yield webapi.fetchData();
    if (err) {
        Alert.alert('提示', `获取数据错误${err.message}`, [{ text: 'OK' }]);
        return;
    }
    store.transaction(() => {
        store.dispatch(actionCreator.LOADING_END);
        store.dispatch(actionCreator.INIT_DATA, res);
    });
});
export const onEdit = (status) => {
    store.dispatch(actionCreator.EDITING, status);
};
