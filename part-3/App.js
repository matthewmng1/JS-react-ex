const App = () => {
  return(
    <div>
      <Person name='Bob' age='15' hobbies={['cycling','basketball','fishing']}/>
      <Person name='Billy' age='21'hobbies={['netflix','couch potato','food']}/>
      <Person name='Alexander' age='45' hobbies={['painting','nerf guns','surfing']}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
