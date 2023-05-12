const App = () => {
  return (
    <div>
      <Tweet 
        username="borkbork" 
        name="Matthew" 
        date={new Date().toDateString()}
        tweet="Hi, it's me"
      />
      <Tweet 
        username="TheCatMan" 
        name="Kat" 
        date={new Date().toDateString()}
        tweet="Cats are cool"
      />
      <Tweet 
        username="Horseman" 
        name="Bojack" 
        date={new Date().toDateString()}
        tweet="I'm a ddue horse"
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
