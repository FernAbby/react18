import React from 'react';
// 类组件实现一个计数器
class AddCount extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        };
    }
    addCount = () => {
        let newCount = this.state.count
        this.setState({
            count: newCount += 1
        });
    }
    render(){
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.addCount}>count++</button>
            </div>
        )
    }
}
export default AddCount;
