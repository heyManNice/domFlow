import { ParamError } from "./Error.ts";
import "./HTMLElement.ts"

export function add(a:number, b:number) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new ParamError('参数a,b必须是数字',add);
    }
    return a + b;
}

export function w(){
    return window;
}
