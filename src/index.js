/*
 * @Author: 唐王瑶
 * @Email：tangwangyao@hualala.com
 * @Date: 2023-02-14 14:56:18
 * @LastEditors: 唐王瑶
 * @Description: 页面/组件/功能的描述
 * @FilePath: /webpack5-demo-practice/src/index.js
 */
import _ from 'lodash';

import Data from './data.xml';
import Notes from './data.csv';
import './style.css';
import  Icon from './diana.jpeg';

import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`
function component() {
  const element = document.createElement('div');
  // lodash 在当前 script 中使用 import 引入
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  const imgs = new Image();
  imgs.src = Icon;
  element.appendChild(imgs);
  console.log(Data);
  console.log(Notes);
  return element;
}
document.body.appendChild(component());