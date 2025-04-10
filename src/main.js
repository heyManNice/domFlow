import './HTMLElement'
import './Document'
import './Window'
import './Style'
import './FlowElement'


function Counter(title) {
    const value = span(null, '0');
    return div({
        w: '400px', h: '200px',
        bg: '#ccc', m: '2rem auto',
        br: '10px', ta: 'center',
        p: '2rem', fs: '1.5rem'
    })
    .add(
        h1({fs:'1.2rem'}, '计数器'+title),
        (title===1)&&p(null,"第一个计数器"),
        p(null, "计数器的值是:").add(value),
        button({p:'0.5rem 2rem'}, '加1').on('click', () => {
            value.t++;
        })
    );
}

const arr = [1,2,3,4,5];

body.add(...arr.map(num=>Counter(num)));