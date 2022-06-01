import React, { Component } from "react";

class Student extends Component {
  constructor(props) {
    super(props);
     //this.state = { count: "Ford" }; 
     //this.handleClick = this.handleClick.bind(this);
     //console.log(props);      
    //console.log(this.props);
  }

  //   handleClick  (e) {    
  //         this.setState({
  //       count: "New State"
  //     });
  // }
 
  render() {
     // console.log("render",this.props);
    // Error: Maximum update depth exceeded.This can happen when a
    // component repeatedly calls setState inside componentWillUpdate or
    // componentDidUpdate.React limits the number of nested updates to
    // prevent infinite loops.

    // this.setState({
    //     count: "Prakhar"
    //   });

    var postList = this.props.Items.length ? (
      this.props.Items.map((item) => {
        return (
          <div className="post card" key={item}>
            <div className="card-content">
              <span className="card-title red-text">{item}</span>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Items to Display</div>
    );

    return   <React.Fragment>      {postList}     </React.Fragment>    
       {/* {this.state.count } */}
     {/* <button type="button" onClick={this.handleClick} >
        Change color</button>*/}
   
  }
}

export default Student;
