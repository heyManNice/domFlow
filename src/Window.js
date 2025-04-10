import { define } from "./tools";

define(window, 'qs', {
    get: function() {
        return this.document.querySelector.bind(this.document);
    }
})

define(window, 'qsa', {
    get: function() {
        return this.document.querySelectorAll.bind(this.document);
    } 
})


define(window, 'body', {
    get: function() {
        return this.document.body;
    } 
})

define(window, 'docu', {
    get: function() {
        return this.document;
    } 
})