import React from 'react';
import ShouldUpdateComponent from './ShouldUpdateComponent';

// ShouldUpdateComponent 是一个函数 执行后返回一个新函数 
// 在当前组件上注入getDerivedStateFromProps静态属性
@ShouldUpdateComponent(['name'])
class UserComponent extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <div>
                <p>name: {user.name}</p>
                <p>age: {user.age}</p>
            </div>
        );
    }
}
export default UserComponent;
