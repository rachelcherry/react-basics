import "../index.css";
import React from 'react';
import  NavBar  from '/Users/rachelcherry/hw3-react-rachelcherry/src/components/NavBar.jsx';
import Footer from '/Users/rachelcherry/hw3-react-rachelcherry/src/components/Footer.jsx';
export function About() {

  return (
    <div>
<NavBar />
      <br></br>
    <h1>About Spark! Bookpals!</h1>
    <p>Spark! BookPals was conceived with a simple idea in mind - to make it easy for Boston University community members to find new books to read. We recognized the potential of connecting those who have read a lot with those are just dipping their feet into reading.</p>
    <div>
      <h1>{"About the Author"}</h1>
      <img
        className="author-img"
        src={'me.png'} 
      />
      <li>Bio: My name is Rachel Cherry, and I am a Junior at Boston University studying Computer Science. </li>
      <li>Education: Boston University, BA in Computer Science, intended 2025</li>
      <li>Profession: Student and TA</li>
      </div>
 <div>
  <br></br>
<Footer />
 </div>
    </div>
  )
}
