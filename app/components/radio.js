import Checkbox from './checkbox';

function Radio (props){
    return <Checkbox  {...props} type={'radio'} defaultClassName={'radio'} />
}

export default Radio;