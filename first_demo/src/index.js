import React from 'react'
import ReactDOM from 'react-dom'

// render method take only one jsx element 
ReactDOM.render(<h1>Hello world</h1>,document.getElementById('root') )

// if we want multiple jsx element then we need to wrape in single element 
// first method
ReactDOM.render(
  <div>
         <h1>Hello world</h1>
         <p>Multiple element</p>
  </div>,
document.getElementById('root') )

// second method --> return array of element
ReactDOM.render(
  [       
     <h1>Hello world</h1>,
     <p>Multiple element</p>
  ],
document.getElementById('root') )

// React Fragment
// if we are using <div> for multiple element it can give output 
// <div id='root'>
  //      <div>
  //           <h1></h1>
  //           <p></p>
  //      </div>
  // </div>     like this for avoid this we use fragment
  ReactDOM.render(
    <React.Fragment>
           <h1>Hello world</h1>
           <p>Multiple element</p>
    </React.Fragment>,
  document.getElementById('root') )
  // we can also use framgment like this
  ReactDOM.render(
    <>
           <h1>Hello world,,</h1>
           <p>Multiple element</p>
    </>,
  document.getElementById('root') )

  

