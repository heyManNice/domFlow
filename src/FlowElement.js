
class E {
    constructor(tagName, ...args) {
        const element = document.createElement(tagName);
        for (const arg of args) {
            if (typeof arg === 'string') {
                element.t = arg;
            } else if (arg instanceof HTMLElement){
                element.add(arg);
            } else if (typeof arg === 'object') {
                element.s=arg;
            } else if (typeof arg === 'function') {
                arg(element);
            }
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
        window[tagName] = function(...args) {
            if (typeof args[0] === 'boolean' && !args[0]) {
                return null;
            }
            return new E(tagName, ...args);
        };
    }else{
        console.warn(`window.${tagName}已存在`);
    }
})