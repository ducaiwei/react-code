import React, { useContext } from 'react';
import RouterContext from './Context';
// 函数组件使用context  consumer
export default props => {
  return (
    <RouterContext.Consumer>
      {routerValue => (
        <a onClick={() => routerValue.history.push(props.to)}>{props.children}</a>
      )}
    </RouterContext.Consumer>
  );
};
