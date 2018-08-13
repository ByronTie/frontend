import 'babel-polyfill';
import '../styles/style.css';
import favIcon from '../images/favIcon.ico';
import { printMe } from './print';
import data from '../data/data.xml';

function component() {
    let element = document.createElement('div');
    let btn = document.createElement('button');
    let myIcon = new Image();

    element.innerHTML = _.join(['Hello', 'world'], ' ');
    element.classList.add("hello");

    myIcon.src = favIcon;
    element.appendChild(myIcon);

    btn.innerHTML = 'Click here for console message';
    btn.onclick = printMe;
    element.appendChild(btn);

    console.log(data);
    return element;
}

document.body.appendChild(component());