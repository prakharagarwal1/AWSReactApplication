// import React, { useState, useEffect, useLayoutEffect,useRef } from 'react';
// import { Link } from "react-router-dom";
// import Pokeball from "../pokeball.png";
// import { connect } from "react-redux";
// import MyLink from "./Link";


// const Task = ({ posts }) => {

//   useEffect(() => {
//     // This gets called after every render, by default
//     // (the first one, and every one after that)
//     //console.log('render!');

//     // If you want to implement componentWillUnmount,
//     // return a function from here, and React will call
//     // it prior to unmounting.
//     //return () => console.log('unmounting...');
//   }, [ // dependencies to watch = leave blank to run once or you will get a stack overflow 
//   ]);


//     const isMounted = useRef(false)
//     const isMounted1 = useRef("Prakhar");

// //     useEffect(() => {
// //         debugger;
// //         isMounted.current = true;
// //         isMounted1;
// //     return () => (isMounted.current = false)
// //   }, []);

//     const inputRef = React.useRef(null);

//   React.useEffect(() => {
//     console.log(inputRef.current.value);
//     inputRef.current.focus();
//   }, []);
//      console.log(inputRef.current);
//   const [listName, setlistName] = useState([]);
  
//   const [singleName, setSingleName] = useState("");
//   const [strikedCount, setStrikedCount] = useState(0);

//   const onSubmit = (e) => {

//     if(singleName!="")
//     {
//       setlistName(oldArray => [...oldArray, singleName]);
//       setSingleName("");   
//      }
// };   
    
//       const onSubmitRefresh = (e) => {
//           this.forceUpdate();
// };
//   const navigate = (e) => {
// e.currentTarget.className === 'is-done' ? e.currentTarget.className = '' : e.currentTarget.className = 'is-done';
//  setStrikedCount(listName.length - document.getElementsByClassName("is-done").length)
   
//   };
  
//    const NameList = listName.length ? (
//       listName.map((post) => {
//       return (
//        <li onClick={(e) => navigate(e)} key={post}>{post}</li>
//       );
//     })
//   ) : (
//       <div className="center">No Items to Display</div>
//     );

  
//   return (
//     <React.Fragment>
//        <style>{`
//                     .is-done {
//                         text-decoration: line-through;
//                     }
//                 `}
// </style>
//       <div className="container home">
//         <h4 className="center">Task</h4>
       
//       </div>

//           <div class="container">
//   <div class="row">
//     <div class="col-sm">
//       <input
//         value={singleName}
//                   onChange={(e) => setSingleName(e.target.value)}
//                   placeholder="Type Here"
//                   type="text"
//                   name="additionalComments"
//                   required
//             />
//            </div>
//     <div class="col-sm">
//        <input
//                   type="button"
//                   onClick={onSubmit}
//                   value="Add"
//                   className="btn btn-primary center"
//           />
//                   </div>
                  
//                      <input
//                   type="button"
//                   onClick={onSubmitRefresh}
//                   value="Click"
//                   className="btn btn-primary center"
//           />

//                    <input 
//         type="text"
//         placeholder="Enter Name" 
//         name="name" 
//                       ref={inputRef} />
                  
//                   <div class="col-sm">{ Math.random()}</div>
//   </div>
// </div>
//       <div>{strikedCount} remaining out of {listName.length} tasks  </div>
// {NameList}
//     </React.Fragment>
//   );
// };



// export default Task;




import React, { useState, useEffect, useLayoutEffect,useRef } from 'react';
export class Task extends React.Component {
    constructor(props) {
        // Calling the constructor of
        // Parent Class React.Component
        console.log("Calling the constructor")
        super(props);
        // initialization process
        this.state = {
            date: new Date(),
            clickedStatus: false
        };
    }

      componentWillMount() {
      console.log('Component will mount!')
   }
    componentDidMount() {
         console.log('Component did mount!')
      //this.getList();
   }
//   getList=()=>{
//    //** method to make api call***
//   }
  render() {
      return (
         <div>
            <h3>Hello mounting methods!</h3>            
         </div>
      );
   }
}
export default Task;