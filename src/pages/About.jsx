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
        style={{
          width: 90,
          height: 90
        }}
      />
      <p></p>
      </div>
    </div>
  )
}
