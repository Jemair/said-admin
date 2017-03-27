import { saidType } from '../constants'

// 社区规范参见这里：https://github.com/acdlite/flux-standard-action
export const addList = (item) => ({
  type: saidType.ADD_LIST,
  // 数据载体， containers 中的容器组件会 dispatch 数据到这里（也就是 item）
  payload: item,
  error: null, // error 的情况下为 true，并且 payload 为 Error 数据
  meta: '元数据，提供数据描述'
});