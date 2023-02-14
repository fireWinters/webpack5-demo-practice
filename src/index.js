/*
 * @Author: 唐王瑶
 * @Email：tangwangyao@hualala.com
 * @Date: 2023-02-14 14:56:18
 * @LastEditors: 唐王瑶
 * @Description: 页面/组件/功能的描述
 * @FilePath: /webpack5-demo-practice/src/index.js
 */
import _ from 'lodash';

import './style.css';
import  Icon from './diana.jpeg';
function component() {
  const element = document.createElement('div');
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  const imgs = new Image();
  imgs.src = Icon;
  element.appendChild(imgs);
  return element;
}
document.body.appendChild(component());