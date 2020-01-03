import React from 'react';
import { connect } from 'react-redux'

class Counter extends React.Component {
  render() {
    const { count, onIncreaseClick } = this.props 
    return (
      <div>
        <span>{count}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

const increaseAction = { type: 'increase' }

// Map Redux state to component props 
// 负责输入逻辑，即将 state 映射到 UI 组件的参数 props
// mapStateToProps 会订阅 Store，每当 state 更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染
function mapStateToProps(state) {
  return {
    count: state.count
  }
}j

// Map Redux actions to component props
// 负责输出逻辑，即将用户对 UI 组件的操作映射成 Action 
// 用来建立 UI 组件的参数到 store.dispatch 方法的映射
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => {
      dispatch(increaseAction)
    }
  }
}

// connect 方法用于从 UI 组件生成容器组件
// Counter 是 UI 组件，APP 是通过 connect 方法自动生成的容器组件
let App = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Counter)

export default App;
