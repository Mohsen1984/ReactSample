import React,{Component} from 'react'

class Counter extends Component
{

    render()
    {
        return (

            <div>
                <span className={this.getBadgeClasses()}>{this.getValue()}</span>
                <button className="btn btn-sm btn-secondary m-2" onClick={()=>this.props.onClick(this.props.counter)}>Increase</button>
                <button className="btn btn-sm btn-danger" onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        );
    }

    getBadgeClasses(){
        let className="badge m-2 badge-";
        if(this.props.counter.value!==0)
        {
            className += "primary";
        }
        else
        {
            className += "warning";
        }
        return className;
    }
    getValue(){
        let value=this.props.counter.value;
        if(value===0)
        {
            return 'Zero';
        }
        else
        {
            return value;
        }
    }
}

export default Counter;

