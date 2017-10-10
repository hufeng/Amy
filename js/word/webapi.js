import { AsyncStorage } from 'react-native';
export const fetchData = () => {
    return new Promise(resolve => {
        AsyncStorage.getItem('amy@data', (err, res) => {
            resolve({
                err: err,
                res: err ? [] : JSON.parse(res || '[]')
            });
        });
    });
};
