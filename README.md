# Personal website designed by useing react

This project was designed to 
## Project intro
网站旨在协助澳大利亚低收入家庭在有限预算内保持更健康的饮食。实现了预算计算器、营养教育和种植新鲜农产品的园艺技巧等功能。在项目初期使用WordPress进行了协作开发，后期独立运用Vue.js技术栈进行复刻。获得研究生行业实践奖认可（Post Graduate Industry Experience Winner）
### 主要成就：
1. 利用Vue.js技术栈进行开发，独立复制并优化了GroSaver项目的所有功能。
2. 运用Vue指令、事件处理、计算属性和节流函数，打造了响应式和交互式的自动轮播图功能。
3. 整合Leaflet库，配合后端API，实现了展示交互式地图的功能，包括地图数据加载、标记点和区域绘制。
4. 开发了饮食预算计算器，根据用户选择的饮食方案和输入的参数，计算总预算和优化后的预算。
5. 使用Vue.js和AWS Amplify实现了用户注册表单和身份验证功能。
6. 运用Express.js、JWT、MySQL、CORS、Vue.js、Vuex和Vue Router等技术，构建了完整的用户身份验证和数据管理系统。
7. 管理支出数据，将其记录并存储于AWS DynamoDB，提供了线性图表的可视化功能和基于日期的查询功能。
8. 开发了多个组件，包括分页组件、具有排序、搜索和分页功能的动态表格组件、使用放大镜效果的图片放大组件，以及用于控制导航栏可见性的弹出组件。
### 技术栈：
1. 前端：Vue.js、CSS、JavaScript、HTML、Leaflet库
2. 后端：Express.js、JWT、MySQL、CORS
3. 其他工具：AWS Amplify、AWS DynamoDB、Chart.js、Canvas

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

