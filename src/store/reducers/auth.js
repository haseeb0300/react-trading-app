
import isEmpty from '../../validation/is-empty';

import { SET_CURRENT_USER } from '../actions/type';

const defaultUserInfo = {
  name: 'Demo User',
  image: 'http://demos.creative-tim.com/light-bootstrap-dashboard-pro/assets/img/default-avatar.png'
};
const initialState = {
  isAuthenticated: false,
  user: {
    name: 'Demo User',
    image: 'http://demos.creative-tim.com/light-bootstrap-dashboard-pro/assets/img/default-avatar.png'
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    default:
      return state;
  }
}

