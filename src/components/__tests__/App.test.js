import React from 'react';
// import ReactDOM from 'react-dom';
// import App from '../App';
import { shallow } from 'enzyme';
// import CommentBox from './../CommentBox';
// import CommentList from './../CommentList';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

// it means what the file name (component App)
// goal of the test is to prove that the App component renders CommentBox component in it.
// it('shows a comment box', () => {
//   const div = document.createElement('div');

//   ReactDOM.render(<App />, div);

//   // Look inside the div
//   // and check to see if the CommentBox is in there
//  // console.log(div.innerHTML); // <div>I am the app component<div>Comment Box</div><div>Comment List</div></div>

//  // expect(div.innerHTML).toContain('Comment Box');
//   ReactDOM.unmountComponentAtNode(div);
// })

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
})

it('shows a comment box', () => {
  // const wrapped = shallow(<App />);
  expect(wrapped.find(CommentBox).length).toEqual(1);
})

it('show a comment list', () => {
  // const wrapped = shallow(<App />);
  expect(wrapped.find(CommentList).length).toEqual(1);
})



// Any time we want to run our tests, we are gonna execute npm run test command in the terminal
// this starts up jest which is our aotomated test runner
// So when we run jest, its being executed inside our command line environment/ terminal.
// the issue with that is when we try to run React in any way shape or form, React expects that its being executed inside the browser.
// The react library itself only functions correctly if its being executed inside the browser.
// We see that browser and the command line environment is not the same thing. But we want to run our react code nonetheless.
// To solve this problem, create-react-app automatically installed a dependency when we installed the project - JSDOM
// JSDOM is the javascript code implementtation of how the code works
// So JSDOM fakes out the existance of browser and fools/ tricks the React library into thinking that there is infact a browser that React is working with.
// When we make reference to document or creata a div element, we are not actually reating a div inside of a browser(no chrome/ no firefox here). Instead when this code is executed inside of terminal, we make use of JSDOM library to create a fake div.
// This div is a fake div that exists solely insid of the memory inside the terminal (not inside of any briwser)
// But this is good enaough to fool out React and make it think that its working inside of a browser. This is because document is a n object that exists solely inside of a browser.  
// document here is furnished by JSDOM
// We than create an instance of App component inside of this div. React takes the App componeney, the html prodiced by that App coponent and sticks it into the div element
// After that we can write some logic to inspect what happens inside of the App component.
// ReactDOM.unmountComponentAtNode() is the cleanup for the performance.
