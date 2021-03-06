import React, { useState, useEffect } from 'react';
import store from '../store/index';
import actions from '../store/actions/home';
import '../style/app.css';
// 测试redux的bindActionCreators
import {bindActionCreators} from '../../../redux/src/index';

const Home = (props: any): any => {
  // 
  const [number, setNumber] = useState(store.getState().home.num);
  const boundActions = bindActionCreators(actions, store.dispatch);
  useEffect(() => {
    store.subscribe(() => {
        setNumber(store.getState().home.num)
    })
  }, []);
  return (
    <div>
      {number}
      <div>
        <button onClick={boundActions.add}>add</button>
        <button onClick={boundActions.minus}>minus</button>
      </div>
    </div>
  );
};
export default Home;
