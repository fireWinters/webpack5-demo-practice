/*
 * @Author: 唐王瑶
 * @Email：tangwangyao@hualala.com
 * @Date: 2023-02-14 14:56:18
 * @LastEditors: 唐王瑶
 * @Description: 页面/组件/功能的描述
 * @FilePath: /webpack5-demo-practice/src/index.js
 */
import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}
document.body.appendChild(component());