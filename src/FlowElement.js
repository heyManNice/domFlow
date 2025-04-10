class LazyElement {
    on(){
        console.log('test');
    }
}
window.LazyElement = LazyElement;

class E {
    constructor(tagName, style, text) {
        const element = document.createElement(tagName);
        if (style) {
            element.s = style;
        }
        if (text) {
            element.t = text;
        }
        return element;
    }
}
window.E = E;

const comTag = [
    'div',
    'p',
    'span',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'a',
    'img',
    'ul',
    'ol',
    'li',
    'table',
    'thead',
    'tbody',
    'tr',
    'th',
    'td',
    'form',
    'input',
    'button',
    'select',
    'option',
    'textarea',
    'label',
]
comTag.forEach(tagName => {
    if (!window[tagName]) {
        window[tagName] = function(style, text) {
            return new E(tagName, style, text);
        };
    }else{
        console.warn(`window.${tagName}已存在`);
    }
})