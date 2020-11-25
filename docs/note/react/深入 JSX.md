JSX 仅仅只是 React.createElement(component, props, ...children) 函数的语法糖。如下 JSX 代码：
```
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```
会编译为：
```
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```

### 在运行时选择类型
```
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // 正确！JSX 类型可以是大写字母开头的变量。
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
}
```
