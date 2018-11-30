import { CHANGE_TEXT } from '../actions'

const initialState = {
  text: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      }
    default:
      return state
  }
}
