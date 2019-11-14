import { Action, createFeatureSelector, createSelector } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as _ from 'lodash';

// State
export class AppStatusState {
  readonly ActionStatusBar: ActionStatus[];
}

export interface StatusState {
  ids: string[];
  entities: {[id: string]: ActionStatus};
}

export class ActionStatus {
  id: string;
  displayName?: string;
  status: serverStatusTypes;
  responsePayload?: any;
}

export enum serverStatusTypes {
  notStarted = 0,
  inProgress = 1,
  success = 2,
  error = 3
}

// Entity and Selectors
export const statusAdapter = createEntityAdapter<ActionStatus>(); // { selectId: a => a.id }
export interface State extends EntityState<ActionStatus> {}
export const initialState: StatusState = statusAdapter.getInitialState({
  ids: [],
  entities: {}
});

export const getStatusState = createFeatureSelector<State>('ActionStatus');
export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = statusAdapter.getSelectors(getStatusState);

export const selectEntity = (id: string) => createSelector(
  selectEntities,
  entities => entities[id]
);

// Reducers
export function actionStatusReducer(state: StatusState = initialState, action: Action) {

  const actionStatus: ActionStatus = _.get(action, 'payload.actionStatus' );

  if ( actionStatus ) {
    if ( state.ids.find(id => id === actionStatus.id) ) {
      const modifiedObj = {...state.entities[actionStatus.id] };
      modifiedObj.status = actionStatus.status;
      modifiedObj.responsePayload = actionStatus.responsePayload;
      return statusAdapter.upsertOne( modifiedObj, state);
    } else {
      return statusAdapter.addOne(actionStatus , state);
    }

  }
  return state;
}
