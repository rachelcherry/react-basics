import "../index.css";

export function About() {

  return (
    <div>
    <h1>About Spark! Bookpals!</h1>
    <p>Spark! BookPals was conceived with a simple idea in mind - to make it easy for Boston University community members to find new books to read. We recognized the potential of connecting those who have read a lot with those are just dipping their feet into reading.</p>
    <div>
      <h1>{"About the Author"}</h1>
      <img
        className="avatar"
        src={'me.png'} 
        style={{width: 150, height: 150, borderRadius: 150 / 2}} 
      />

      <li>Bio: My name is Rachel Cherry, and I am a Junior at Boston University studying Computer Science. </li>
      <li>Education: Boston University, BA in Computer Science, intended 2025</li>
      <li>Profession: Student and TA</li>
      </div>
    </div>
  )
}
