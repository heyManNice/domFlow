interface HTMLElement {
    test(): void;
}

HTMLElement.prototype.test = function(){
    console.log('Hello World');
}
console.log('加载原型');

