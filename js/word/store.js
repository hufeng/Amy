import { Store } from 'plume2';
import LoadingActor from './actor/loading-actor';
import DataActor from './actor/data-actor';
import { bindCtx } from './effect';
export default class AppStore extends Store {
    constructor(props) {
        super(props);
        if (__DEV__) {
            window._store = this;
        }
        bindCtx(this);
    }
    bindActor() {
        return [new LoadingActor(), new DataActor()];
    }
}
