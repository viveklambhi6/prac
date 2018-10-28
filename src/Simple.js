import React, { Component } from 'react';
import './App.css'; 

class Simple extends Component {
    constructor(props){
        super(props);
        console.log(props,"constructor");
        this.state = {
            get:props
        }
      }
      componentDidMount(){
        console.log("DidMOunt")
      }
      componentWillMount(){
        console.log("willMount")
      }
      componentWillReceiveProps(){
        console.log("receiveProps")
      }
      shouldComponentUpdate(nextProps,nextState){
          
        console.log(nextProps,nextState,"shouldComponentUpdate")
        return true;
      }
      componentDidUpdate(prevProps, prevState, snapshot){
          console.log(prevProps, prevState, snapshot,"didUpdate")
      }
      componentWillUnmount() {
        console.log("unmount")
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("snap")
        return prevProps;
    }
    render(){
        console.log(this.props,"render")
        return <div>
            <p>ssdd</p>
            {this.props.message}
        </div>
    }
}

export default Simple;