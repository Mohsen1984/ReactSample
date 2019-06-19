import React,{Component} from 'react'
import Counter from './Counter'
class Counters extends Component
{
    state ={
        counters:
        [
        {id:1,value:0},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0},
        {id:5,value:0}
        ]
    
    };

    render()
    {
        return(
            <div>
            <button className="btn m-2 btn-sm btn-danger" onClick={this.doHandleReset}>Reset</button>
            {this.state.counters.map(counter => 
            <Counter key={counter.id} counter={counter} onClick={this.doHandleIncrement} onDelete={this.doHandleDelete}></Counter>)
            }
        </div>
        );
    }

    doHandleIncrement=counter=>
    {
        const counters=[...this.state.counters];
        const index=counters.indexOf(counter);
        counters[index].value++;
        
        this.setState({counters});
        console.log(counter);
    }
    doHandleDelete=id=>
    {
        const counters=this.state.counters.filter(counter=>counter.id!==id);
       /*  const index=counters.indexOf(counter);
        counters[index].value=0; */
        this.setState({counters});
    }
    doHandleReset=()=>
    {
        
      
        const counters= this.state.counters.map(counter=>{ counter.value=0; return counter;});
        this.setState({counters});
    }

}

export default Counters;