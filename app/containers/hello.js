import BaseInput from '../components/base-input.js';

import style from './hello.css';

function Hello(){
    return <div>
        <p>欢迎</p>
        <BaseInput inputClassName={style.input} inputChange={(e)=>{console.log(e)}} />
    </div>;
}

export default Hello;