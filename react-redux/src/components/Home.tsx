import React, { useState, useEffect } from 'react';
import store from '../store/index';
import actions from '../store/actions/counter';
import '../style/app.css';
import { Unsubscribe } from '../store/types';
// 测试redux的bindActionCreators
import {bindActionCreators} from '../../../redux/src/index';

const Home = (props: any): any => {
  const [number, setNumber] = useState(store.getState().num);
  const boundActions = bindActionCreators(actions, store.dispatch);
  useEffect(():Unsubscribe => {
    return store.subscribe(() => {
        setNumber(store.getState().num)
    })
  }, []);
  return (
    <div>
      {number}
      <div>
        <button onClick={boundActions.add}>add</button>
      </div>
      <div>
        <button onClick={boundActions.minus}>minus</button>
      </div>
    </div>
  );
};
export default Home;
