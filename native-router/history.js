/**
 * history路由 没有#号
 */
;(function(history) {
    let pushState = history.pushState;
    history.pushState = function (state, title, path) {
        pushState.call(history, state, title, path);
        document.getElementById('root').innerHTML = path;
    }
    window.onpopstate = function(event) {
        document.getElementById('root').innerHTML = location.pathname;
    }
})(window.history)