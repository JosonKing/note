# HOOK

## 简介

> Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。

### 没有破坏性改动
- 完全可选的。 你无需重写任何已有代码就可以在一些组件中尝试 Hook。但是如果你不想，你不必现在就去学习或使用 Hook。
- 100% 向后兼容的。 Hook 不包含任何破坏性改动。
- 现在可用。 Hook 已发布于 v16.8.0。

### 动机
#### 在组件之间复用状态逻辑很难
React 需要为共享状态逻辑提供更好的原生途径。Hook 从组件中提取状态逻辑，使得这些逻辑可以单独测试并复用。Hook 使你在无需修改组件结构的情况下复用状态逻辑。 这使得在组件间或社区内共享 Hook 变得更便捷。
#### 复杂组件变得难以理解
被状态逻辑和副作用充斥。每个生命周期常常包含一些不相关的逻辑。Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据），而并非强制按照生命周期划分。还可以使用 reducer 来管理组件的内部状态，使其更加可预测。
#### 难以理解的 class
Hook 使你在非 class 的情况下可以使用更多的 React 特性。React 组件一直更像是函数。而 Hook 则拥抱了函数，同时也没有牺牲 React 的精神原则。Hook 提供了问题的解决方案，无需学习复杂的函数式或响应式编程技术。

### Hook 使用规则
Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：

- 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
- 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中，我们稍后会学习到。）