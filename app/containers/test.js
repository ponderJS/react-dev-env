import { Component } from 'react';
import Checkbox, { CheckboxOnly } from '../components/checkbox';
import Radio from '../components/radio';
import Input from '../components/input';

class Test extends Component {
    constructor(props) {
        super(props);
        this.checkBoxHandler = this.checkBoxHandler.bind(this);
        this.state = {
            checkbox: false,
            radio: null
        }
    }
    checkBoxHandler(e) {
        this.setState({
            [e.target.name]: e.target.type == 'checkbox' ? e.target.checked : e.target.value
        });
    }
    render() {
        return (
            <form>
                <h3>单选框</h3>
                <div style={{ padding: '10px' }}>
                    <Radio name={'radio'} value={'male'} checked={this.state.radio == 'male'} labelText={'男'} onChange={this.checkBoxHandler} />
                    <Radio name={'radio'} value={'female'} checked={this.state.radio == 'female'} labelText={'女'} onChange={this.checkBoxHandler} />
                </div>

                <h3>复选框</h3>
                <div style={{ padding: '10px' }}>
                    <Checkbox name={'checkbox'} checked={this.state.checkbox} onChange={this.checkBoxHandler} labelText={'可勾选'} />
                    <Checkbox name={'checkbox2'} labelText={'未选中(禁用)'} disabled={true} />
                    <Checkbox name={'checkbox3'} labelText={'已选中(禁用)'} disabled={true} checked={true} />
                    <CheckboxOnly /> <span>受控组件不可操作</span>
                </div>

                <h3>输入框</h3>  
                <Input placeholder={'请输入'} onChange={e=>{console.log(e.target,e.target.value)}} />
                <Input disabled={true} placeholder={'请输入'} onClick={e=>{console.log(e.target)}}/>
            </form>
        );
    }
}

export default Test;