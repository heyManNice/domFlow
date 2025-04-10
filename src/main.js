import './HTMLElement'
import './Document'
import './Window'
import './Style'
import './FlowElement'


function Counter(title) {
    const value = span('0');
    const container = div({
        w: '400px', h: '200px',
        bg: '#ccc', m: '2rem auto',
        br: '10px', ta: 'center',
        p: '2rem', fs: '1.5rem',
        position: 'relative',
    })
    .add(
        button({
            position: 'absolute', top: '1rem', right: '1rem',
        },'X').on('click', () => {
            container.hide();
        }),
        h1({fs:'1.2rem'}, '计数器'+title),
        p(title===1,"第一个计数器"),
        p("计数器的值是:",value),
        button({p:'0.5rem 2rem'},'加1').on('click', () => {
            value.t++;
        })
    );
    return container;
}

const arr = [1,2,3,4,5];

body.add(...arr.map(num=>Counter(num)));