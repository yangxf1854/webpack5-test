import _ from 'lodash';
import printMe from './print';
import './style.less';
import Icon from './cjLogo.png';

function componet() {
    var element  = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello12', 'webpack13'], ' ');
    element.classList.add('guo');

    var myICon = new Image();
    myICon.src = Icon;

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(myICon);
    element.appendChild(btn);
    console.log('test');
    return element;
}
document.body.appendChild(componet());