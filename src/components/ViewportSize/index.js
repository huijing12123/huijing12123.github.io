// ViewportSize 组件在挂载时会添加窗口调整大小的事件监听器，并在组件卸载时移除监听器。
// 每次窗口大小改变时，handleResize 函数会更新 viewportSize 状态，从而触发重新渲染并显示最新的视口大小。


import React, { useState, useEffect } from 'react';

const ViewportSize = () => {
    const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setViewportSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        // 添加窗口调整大小的事件监听器
        window.addEventListener('resize', handleResize);

        // 组件卸载时，移除事件监听器
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // 空数组作为依赖项，只在组件挂载和卸载时执行一次

    return (
        <div>
            <p>Viewport Width: {viewportSize.width}</p>
            <p>Viewport Height: {viewportSize.height}</p>
        </div>
    );
};

export default ViewportSize;
