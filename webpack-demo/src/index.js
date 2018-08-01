import _ from 'lodash';
import '../styles/style.css';
import favIcon from '../images/favIcon.ico';
import Data from '../data/data.xml';

function component() {
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'world'], ' ');
    element.classList.add("hello");

    var myIcon = new Image();
    myIcon.src = favIcon;

    element.appendChild(myIcon);

    console.log(Data);

    return element;
};

document.body.appendChild(component());