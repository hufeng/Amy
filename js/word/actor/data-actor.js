var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Actor, Action } from 'plume2';
import actionCreator from '../action-creator';
export default class DataActor extends Actor {
    defaultState() {
        return {
            edit: false,
            data: []
        };
    }
    init(state, data) {
        return state.merge({
            data
        });
    }
    edit(state, status) {
        return state.set('edit', status);
    }
}
__decorate([
    Action(actionCreator.INIT_DATA)
], DataActor.prototype, "init", null);
__decorate([
    Action(actionCreator.EDITING)
], DataActor.prototype, "edit", null);
