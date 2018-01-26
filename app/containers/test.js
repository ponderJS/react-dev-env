import {Component} from 'react';

import BaseInput from '../components/base-input';

import {CheckboxOnly as Checkbox} from '../components/checkbox';
import Radio from '../components/radio';

class Test extends Component{
    constructor(props){
        super(props);
        this.checkBoxHandler=this.checkBoxHandler.bind(this);
        this.radioHandler=this.radioHandler.bind(this);
        this.state={
            checkbox:false,
            radio:null
        }
    }
    checkBoxHandler(e){
        this.setState({
            [e.target.name]:e.target.checked
        });
    }
    radioHandler(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    render (){
        return (
            <div>
                <h3>单选框</h3>
                <Radio name={'radio'} value={'male'} checked={this.state.radio=='male'} labelText={'男'} onChange={this.radioHandler} />
                <Radio name={'radio'} value={'female'} checked={this.state.radio=='female'} labelText={'女'} onChange={this.radioHandler} />

                <h3>复选框</h3>
                <label htmlFor="test-checkbox">勾选</label>
                <Checkbox id={'test-checkbox'} name={'checkbox'} checked={this.state.checkbox} onChange={this.checkBoxHandler} />
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