import _ from 'lodash';
import './style.css';
import Icon from './img/icon.jpeg';
import Data from './data.xml';

function component() {
    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Icon;
    console.log(Data);
    element.appendChild(myIcon);
    return element;
}

document.body.appendChild(component());