import _ from 'lodash';
import '../styles/style.css';
import favIcon from '../images/favIcon.ico';
import Data from '../data/data.xml';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var myIcon = new Image();
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'world'], ' ');
    element.classList.add("hello");

    myIcon.src = favIcon;
    element.appendChild(myIcon);

    btn.innerHTML = "Click me and check the console";
    btn.onclick = printMe;
    element.appendChild(btn);

    console.log(Data);
    return element;
};

document.body.appendChild(component());