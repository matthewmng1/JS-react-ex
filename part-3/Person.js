// Create a component called Person. Inside of this component, render a p tag which displays “Learn some information about this person”. Each person should have name and age properties.

// If the person is over 18 years old, display an additional h3 that says “please go vote!”. Otherwise, display an h3 that says “you must be 18”. If the person’s name is longer than 8 characters, only display the first six characters of their name.

// Add a property called hobbies to your Person component that accepts an array of hobbies (an array of strings). Your Person component should list each one of these hobbies as an li.

// Add an App component that renders at least three copies of the Person component on the page.

const Person = (props) => {
  let reply;
  let name;
  let hobbies = props.hobbies.map(h => <li>{h}</li>)

  if(props.age > 18){
    reply = "Please go vote!"
  } else {
    reply = "You must be 18"
  }

  if (props.name.length > 8){
    name = props.name.slice(0,6)
  } else {
    name = props.name
  }
  return(
    <div>
      <p>Learn some information about this person</p>
      <ul>
        <li><b>Name:</b> {name}</li>
        <li><b>Age:</b> {props.age}</li>
        <li><b>Hobbies:</b> <ul>{hobbies}</ul> </li>
        <li><h3>{reply}</h3></li>
      </ul>
    </div>
  )
}