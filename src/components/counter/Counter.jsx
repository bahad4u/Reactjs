import React, { Component } from 'react';
import './Counter.css'


class Counter extends Component{

    constructor() {

        super();

        this.state ={
            counter:0
        }

        this.increment=this.increment.bind(this);
        this.decrement=this.decrement.bind(this);
        this.reset=this.reset.bind(this);

    }
    render() {
        return (
          <div className="Counter">
          
           <CounterButton no={1}  incrementMethod={this.increment}  decrementMethod={this.decrement}></CounterButton>
           <CounterButton no={5}  incrementMethod={this.increment}  decrementMethod={this.decrement}></CounterButton>
           <CounterButton no={10} incrementMethod={this.increment}  decrementMethod={this.decrement}></CounterButton>
           
           <span className="count">{this.state.counter}</span>
           <div><button onClick={this.reset} className="reset"> Reset</button></div>
          </div>


        );
      }

      reset(){
        this.setState(
            {
              counter: 0             }
          );

      }
      increment(no){
        this.setState(
            (prevState) =>  {
              return {counter: prevState.counter+no}
               }
          );
    }
    decrement(no){
        this.setState(
          (prevState) =>  {
            return {counter: prevState.counter-no}
               }
        );
    }
      
}


class CounterButton extends Component{

    // constructor() {

    //     super();

    //     this.state ={
    //         counter:0
    //     }

    //     this.increment=this.increment.bind(this);
    //     this.decrement=this.decrement.bind(this);

//    }

    render(){
        return (
            <div className="Counter">
           <button onClick={() => {this.props.incrementMethod(this.props.no)}}>+{this.props.no}</button>
           <button onClick={()=> {this.props.decrementMethod(this.props.no)}}>-{this.props.no}</button>
            </div>
        )
    }


    // increment(){
    //     this.setState({
    //         counter: this.state.counter+this.props.no
    //     });

    //     this.props.incrementMethod(this.props.no)
    // }

    // decrement(){
    //     this.setState({
    //         counter: this.state.counter-this.props.no
    //     });

    //     this.props.decrementMethod(this.props.no)
    // }
   
}


export default Counter;