import { define } from "./tools";

define(document, 'b', {
    get: function() {
        return document.body;
    } 
})

define(document, 'q', {
    get: function() {
        return document.querySelector.bind(document); 
    } 
})

define(document, 'qa', {
    get: function() {
        return document.querySelectorAll.bind(document);
    }
})
