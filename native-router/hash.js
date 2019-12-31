/**
 * location.hash属于锚点跳转，可以通过监听hashchange判断当前路由
 * 显示对应的页面内容
 */
;(function(context) {
  context.addEventListener(
    'hashchange',
    function(event) {
      document.getElementById('root').innerHTML = location.hash.replace(
        '#',
        ''
      );
    },
    true
  );
})(window);
