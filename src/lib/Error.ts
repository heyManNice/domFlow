
class ParamError extends Error {
    constructor(message, exclude) {
        if (!exclude) {
            super(`${message}\nTips: 使用ParamError时,第二个参数传入当前作用域函数名以忽略该函数细节`);
        } else {
            if (typeof exclude !== 'function') {
                super('第二个参数exclude必须是函数');
            } else {
                super(message);
                (Error as any).captureStackTrace(this, exclude);
            }
        }
        this.name = 'ParamError';
    }
}

export { ParamError };