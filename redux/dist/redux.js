(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
typeof define === 'function' && define.amd ? define(['exports'], factory) :
(global = global || self, factory(global.Redux = {}));
}(this, (function (exports) { 'use strict';

function createStore(reducer, initialState) {
  // 初始状态
  let state = initialState; // 订阅函数

  let listeners = []; // 分发函数

  let dispatch = action => {
    state = reducer(state, action); // 执行所有订阅的监听函数

    listeners.forEach(listener => listener());
    return action;
  }; // 获取state


  let getState = () => {
    return state;
  }; // 订阅器


  let subscribe = listener => {
    listeners.push(listener);

    let unsubscribe = () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };

    return {
      unsubscribe
    };
  };

  let store = {
    dispatch,
    getState,
    subscribe
  }; // 创建仓库时先派发一次action  给初始state赋值

  dispatch({
    type: '@@REDUX_INIT'
  });
  return store;
}

exports.createStore = createStore;

Object.defineProperty(exports, '__esModule', { value: true });

})));
