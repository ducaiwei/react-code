import React, { useState, useEffect } from 'react';
import Context from './Context';

export default function (props) {
    let [currentState, setCurrentState] = useState({
        location: { pathname: window.location.pathname || '/' }
    });
    useEffect(() => {
        window.onpushstate = (state, pathname) => {
            setCurrentState({
                location: {
                    ...currentState.location,
                    pathname,
                    state
                }
            })
        };
        window.onpopstate = (event) => {
            setCurrentState({
                location: {
                    ...currentState.location,
                    pathname: window.location.pathname,
                    state: event.state
                }
            })
        };
    }, []);
    const globalHistory = window.history;
    let history = {
        location: currentState.location,
        push(to) {
            if (history.prompt) {
                let target = typeof to === 'string' ? { pathname: to } : to;
                let result = window.confirm(history.prompt(target));
                if (!result) return;
            }
            if (typeof to === 'object') { // {pathname,state}
                const { pathname, state } = to;
                globalHistory.pushState(state, null, pathname);
                window.onpushstate(state, pathname);
            } else {
                globalHistory.pushState(null, null, to);
                window.onpushstate(null, to);
            }
        },
        block(prompt) {
            history.prompt = prompt;
        },
        unblock() {
            history.prompt = null;
        }
    };
    let routerValue = {
        location: currentState.location,
        history
    };
    return <Context.Provider value={routerValue}>{props.children}</Context.Provider>;
}
