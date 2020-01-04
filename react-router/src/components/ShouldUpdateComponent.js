import React from 'react';
/**
 * 装饰器和高阶组件
 * 针对单个属性判断是否
 * @param {*} params 
 */
export default function (params) {
  return function(target) {
    const CurrentComponent = target;
    return class extends React.Component {
      state = this.props;
      // getDerivedStateFromProps方法会在调用render之前调用  在初始挂在和后续更新时都会被调用
      // getDerivedStateFromProps无条件的根据props来更新内部state
      // 默认是只要props和state的值不一致时就会更新state值 可以自定义
      static getDerivedStateFromProps(props, state) {
        if (props.user[params] !== state.user[params]) { // 当state中user的name属性值和props中user的name属性值不一致时，调用setState
          return {
            ...props
          }
        }
        return state;
      };
      render() {
        return <CurrentComponent {...this.state}/>
      }
    }
  }
};
