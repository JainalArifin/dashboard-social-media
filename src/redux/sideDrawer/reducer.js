import { Map } from 'immutable';
import { ACTIONS } from '~/constants';

const initialData = Map({
  isOpen: false,
  componentName: ''
});

export function sideDrawerData(state = initialData, action) {
  const { type, isOpen, componentName } = action;

  switch (type) {
    case ACTIONS.TOGGLE_SIDE_DRAWER_SUCCESS:
      return state.merge({
        isOpen,
        componentName
      });
    default:
      return state;
  }
}
