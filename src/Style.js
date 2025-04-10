import { define,HEP } from "./tools";

const styleAbbr={
    'm':'margin',
    'mr':'margin-right',
    'mb':'margin-bottom',
    'ml':'margin-left',
    'mt':'margin-top',

    'p':'padding',
    'pr':'padding-right',
    'pb':'padding-bottom',
    'pl':'padding-left',
    'pt':'padding-top',

    'c':'color',
    'bg':'background',
    'bgc':'background-color',

    'b':'border',
    'f':'font',
    'w':'width', 
    'h':'height',
    's':'size',
    'd':'display',
    'br':'borderRadius',
    'fs':'fontSize',
    'ta':'textAlign'
}

define(HEP,'s',{
    get: function() {
        return this.style;
    },
    set: function(obj) {
        if(typeof obj !== 'object') {
            throw new TypeError('Style must be an object');
        }
        for(let key in obj) {
            const value = obj[key];
            if(styleAbbr[key]) {
                key = styleAbbr[key]; 
            }
            this.style[key] = value; 
        }
    }

})