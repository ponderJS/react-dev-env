import {Component} from 'react';

import BaseInput from '../components/base-input';

import Checkbox from '../components/checkbox';
import Radio from '../components/radio';

class Test extends Component{
    render (){
        return (
            <div>
                <h3>单选框</h3>
                <label htmlFor="">未选中</label>
                <Radio />
                <br/>
                <label htmlFor="">已选中</label>
                <Radio checked={true} />
                <br/>
                <label htmlFor="">未选中(禁用)</label>
                <Radio disabled={true} />
                <br/>
                <label htmlFor="">已选中(禁用)</label>
                <Radio checked={true} disabled={true} />

                <h3>复选框</h3>
                <label htmlFor="">未选中</label>
                <Checkbox />
                <br/>
                <label htmlFor="">已选中</label>
                <Checkbox checked={true} />
                <label htmlFor="">已选中</label>
                <br/>
                <label htmlFor="">未选中(禁用)</label>
                <Checkbox disabled={true} />
                <br/>
                <label htmlFor="">已选中(禁用)</label>
                <Checkbox checked={true} disabled={true} />
            </div>
        );
    }
}

export default Test;