import { saidType } from '../constants'

// 对动作进行计算

export const lists = (state = [] /* state 应该有一个默认值 */, action) => {
  switch (action.type) {
    case saidType.ADD_LIST:
      return [
        ...state,
        // 从展示组件传递过来的数据
        action.payload
      ]
    default:
      return state
  }
}