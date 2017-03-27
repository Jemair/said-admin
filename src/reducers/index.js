/*
  辅助函数的作用是，把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数，然后就可以对这个 reducer 调用 createStore
 */
import { combineReducers } from 'redux'
import { lists } from './said'

// Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer，返回的 key 为组件的 state， value 为计算动作的 reducer
// reducer 生成的是属性(数据)
const saidApp = combineReducers({
  lists // 这里的
})

export default saidApp