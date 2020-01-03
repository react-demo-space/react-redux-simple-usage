# [react-redux 简单使用](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html)

react-redux 将所有组件分成两大类：UI 组件和容器组件

UI 组件有以下几个特征：（UI 组件又称为 纯组件，和纯函数一样，纯粹由参数决定它的值）

* 只负责 UI 的呈现，不带有任何业务逻辑
* 没有状态（即不使用 this.state）
* **所有数据** 都由参数（this.props）提供
* 不使用任何 Redux 的 API

容器组件的特征恰恰相反：

* 负责管理数据和业务逻辑，不负责 UI 呈现
* 带有内部状态
* 使用 Redux 的 API

如果一个组件既有 UI 又有业务逻辑，怎么办？将它拆分成下面的结构：外面是一个容器组件，里面包了一个 UI 组件。前者负责和外部的通信，将数据传给后者，由后者渲染出视图

