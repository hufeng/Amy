import { Actor, Action, IMap } from 'plume2';
import actionCreator from '../action-creator';

export default class DataActor extends Actor {
  defaultState() {
    return {
      edit: false,
      data: []
    };
  }

  @Action(actionCreator.INIT_DATA)
  init(state: IMap, data) {
    return state.merge({
      data
    });
  }

  @Action(actionCreator.EDITING)
  edit(state: IMap, status) {
    return state.set('edit', status);
  }
}
