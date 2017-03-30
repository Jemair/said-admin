/*
 redux 围绕：actionTypes/actions/reducer 进行工作，但是拆开之后样板文件太多了
 所以这里采用 ducks 设计：https://github.com/erikras/ducks-modular-redux
*/
// import Promise from 'Promise'

// actionTypes
export const ADD = 'SAID/ADD';
export const UPDATE = 'SAID/UPDATE';
export const LOAD = 'SAID/LOAD';
export const REMOVE = 'SAID/REMOVE'

// reducer
export default function (state = [] /* state 应该有一个默认值 */, action) {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        // 从展示组件传递过来的数据
        action.payload
      ]
    case UPDATE:
      break;
    case LOAD:
      break;
    case REMOVE:
      break;
    default:
      return state
  }
}

// actions
// 社区规范参见这里：https://github.com/acdlite/flux-standard-action
export const add = (item) => ({
  type: ADD,
  // 数据载体， containers 中的容器组件会 dispatch 数据到这里（也就是 item）
  payload: item,
  error: null, // error 的情况下为 true，并且 payload 为 Error 数据
  meta: '元数据，提供数据描述'
});



export const loadSaidLists = (where) => {
  return (dispatch, getState) => {
    return dispatch(new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve([])
      }, 2000);
    }))
  }
}