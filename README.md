# Personal website designed by useing react

This project was designed to 
## Project intro
使用React框架开发的个人网站，用于展现个人教育背景以及开发项目。

### 技术栈 & 主要成就
React：利用React框架构建组件，利用函数组件和Hooks API实现动态交互和状态管理。
JavaScript：使用JavaScript和ES6语法实现逻辑和辅助函数，包括防抖函数和动画效果。
React Spring：集成React Spring库实现动画和过渡效果。
React Router：使用React Router库实现路由和导航功能，通过Link组件创建导航链接。
Formspree的联系表单组件：利用React Hooks和表单验证功能实现了表单提交和提交成功信息的显示。

## Codereview 

Here are the detailed infor related to different components

### welcome component

1. 使用了 React 和 React Router 
2. 在组件中使用了状态钩子 useState，以及鼠标事件处理函数
3. 对样式使用了 CSS 模块化，使得样式与组件关联，减少了样式冲突的可能性，也提高了代码的可维护性
4. 在组件中引入了图片，并在 JSX 中使用了这些图片
5. 使用了 React Fragments (`<Fragment>`) 来包裹组件的多个子元素，避免额外 DOM 节点
6. PropTypes 类型检查


### resume component
1. JSX 代码结构：使用了片段（<Fragment/>）来包装多个元素，而不是不必要的 <div/> 包装器
3. 可重用性：将TitleAndImage 导出为可重用组件，这样就可以在应用程序的其他部分中使用它。
4. 条件渲染：在 Resume 组件中，根据 selectedComponent 条件渲染不同的组件, 使用 switch 语句代替多个 if 语句，提高可读性和可维护性
5. 加载组件：在选定组件加载时使用加载组件（<LoadingComponent/>）
6. 代码组织：一致和逻辑顺序地组织导入 --> 按类别分组（React 导入、组件导入、样式导入等）
7. 错误处理：在加载或渲染选定组件时，添加错误处理以应对任何意外错误
	1.  try catch
8. 添加propstypes 检查
	1. 在App.js 中传递一个有效的 `selectedComponent` 属性，解决以下问题
```
Warning: Failed prop type: The prop `selectedComponent` is marked as required in `Resume`, but its value is `undefined`. at Resume (http://localhost:3000/static/js/bundle.js:3949:84) at App
```

### personality component
1. 代码重复：一些 SVG 图标和相应的描述文本在每个 `.box` 中都重复出现, 将其提取Box 中重用
2. PropTypes 类型检查

### Loading component
1. `key` 属性：在循环渲染的元素上使用 `cat.name` 作为唯一标识符。
2. 图片加载错误处理：图片加载过程中添加错误处理机制，并向用户提供反馈。当发生图片加载错误时，用户将看到一个错误消息
3. PropTypes 类型检查

### hobby component
1. useEffect 钩子：使用了 `useEffect` 钩子实现一个无缝滚动效果的功能。
	  1. 首先获取了父元素和子元素的引用，然后计算了滚动的宽度，并通过`requestAnimationFrame` 来实现动画效果。
	  2. 通过 `debounce` 函数处理了鼠标移入和移出事件。
	  3. 返回一个清理函数来取消动画和事件监听。

### education component
  
1. `handleLeftSwipe` 和 `handleRightSwipe` 中的防抖函数使用的延迟时间作为参数传递给函数，以便在需要时可以更灵活地调整。

### contactForm component
1.  JSX ：使用自闭合标签（self-closing tag）来闭合没有子元素的标签
	1. <br/>
2. 在 `<label>` 元素中，使用 `htmlFor` 属性来关联 `<input>` 元素的 id, 提升可访问性。

### background component
1. 在循环生成背景图像时，使用了条件（三元）运算符来简化选择背景图像的逻辑。这样可以避免使用多个 `if-else` 分支。
2. 获取实时视口大小
	1. 图案随着视口的放大缩小铺满整个背景

### animatedContainer component
1. PropTypes 类型检查

