import { ACTIONS } from '~/constants';

export function openSideDrawer(componentName) {
  return {
    type: ACTIONS.TOGGLE_SIDE_DRAWER_SUCCESS,
    isOpen: true,
    componentName
  };
}

export function closeSideDrawer() {
  return {
    type: ACTIONS.TOGGLE_SIDE_DRAWER_SUCCESS,
    isOpen: false,
    componentName: ''
  };
}
