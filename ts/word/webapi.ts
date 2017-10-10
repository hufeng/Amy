import { AsyncStorage } from 'react-native';

export const fetchData = (): Promise<{ res: Array<Object>; err: Error }> => {
  return new Promise(resolve => {
    AsyncStorage.getItem('amy@data', (err, res) => {
      resolve({
        err: err,
        res: err ? [] : JSON.parse(res || '[]')
      });
    });
  });
};
