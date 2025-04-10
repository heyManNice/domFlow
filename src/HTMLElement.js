import { define,HEP } from "./tools";

define(HEP, 'q', {
    get: function() {
        return this.querySelector.bind(this);
    }
});

define(HEP, 'qa', {
    get: function() {
        return this.querySelectorAll.bind(this);
    } 
})

define(HEP, 't', {
    get: function() {
        return this.innerText; 
    },
    set: function(value) {
        this.innerText = value;  
    }
})

define(HEP, 'h', {
    get: function() {
        return this.innerHTML;
    },
    set: function(value) {
        this.innerHTML = value;
    } 
})

HEP.r=function(...args) {
    this.replaceWith(...args);
    return this;
}

HEP.add=function(...args) {
    args = args.filter(arg=>arg);
    this.append(...args);
    return this;
}
HEP.on = function(eventName, callback) {
    this.addEventListener(eventName, callback);
    return this; 
}
HEP.x = function(){
    this.remove();
    return null;
}
HEP.hide = function(duration = 300){
    if (duration > 0) {
        const oldtransition = this.style.transition;
        this.style.transition = `opacity ${duration}ms`;
        this.style.opacity = 0;
        setTimeout(() => {
            this.style.display = 'none';
            this.style.transition = oldtransition;
        }, duration);
        return this;
    }
    this.originalDisplay = this.style.display;
    this.style.display = 'none';
    return this;
}
HEP.show = function(){
    this.style.display = this.originalDisplay || 'block';
    return this; 
}