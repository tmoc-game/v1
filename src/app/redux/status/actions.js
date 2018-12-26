import * as t from '../types';

export const initStatus = (initialStr) => ({ type: t.STATUS_INIT, payload: initialStr });

export function testAction() {
  return (dispatch) => {
    dispatch(initStatus('test'));
  };
}
