import React from 'react';
import './Calculator.css';


class Calculator extends React.Component{

constructor(props){
    super(props);
    this.state ={
        display:''
    }
}
onNumberClicked(number){
    console.log(number);
    this.setState({display:`${this.state.display}${number}`});
}
render(){
    const numbers = [9,8,7,6,5,4,3,2,1,0];
    const renderNumbers = numbers.map(number => {
        return <div key={number} onClick={()=>this.onNumberClicked(number)} className="key">{number}</div>
    });
    return (
        <div className="calculator">
            <div className="display">
            {this.state.display}
            </div>
            <div className="controls">
                <div className="numpad">
                    {renderNumbers}
                    <div className="key">=</div>
                    <div className="key">.</div>
                </div>
            
                 <div className="operators">
                    <div className="keyOp">DEL</div>
                    <div className="keyOp">+</div>
                    <div className="keyOp">x</div>
                    <div className="keyOp">-</div>
                    <div className="keyOp">+</div>
                </div>
        </div> 
    </div>
    )
}
}

export default Calculator;