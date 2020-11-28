import React, { useCallback, useState } from 'react';

console.log('branch 2');

class Test extends React.PureComponent {
    render() {
        console.log('text render');
        return (
            <div>
                <h1>{this.props.text}</h1>
                <button onClick={this.props.onClick}>改变文本</button>
            </div>
        );
    }
}

function Parent() {
    console.log('parent render');
    const [text, setText] = useState('123');
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setText(Math.random());
    }, []);

    return (
        <div>
            {/* 函数的地址每次渲染都发生了变化 导致子组件跟着重新渲染
          若子组件是经过优化之后的组件 则可能导致优化失效
      */}
            {/*<Test text={ text } onClick={ () => setText(Math.random) } />*/}

            {/* 使用useCallback优化 这样当input输入值发生变化 不会去影响Test组件重新渲染了*/}
            <Test text={text} onClick={handleClick} />
            <input type="number" value={count} onChange={e => setCount(e.target.value)} />
        </div>
    );
}

const App = () => (
    <>
        <Parent />
    </>
);

export default App;
