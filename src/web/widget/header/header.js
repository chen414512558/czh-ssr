import './header.less';
class Header {
    constructor() {
        this.init();
    }

    init() {
        // console.log('header init');
        const _logo = require('./img/logo.png');
        const _greentree = require('./img/greentree.png');
        document.getElementById('logo').src = _logo;
        document.getElementById('js-greentree').src = _greentree;
    }
};
export
default Header;