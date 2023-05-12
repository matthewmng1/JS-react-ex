// Define a Tweet component which takes as props the username of the user who wrote the tweet, the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted.

// Create an App component that renders at least three tweets.

const Tweet = (props) => {
  return (
    <div>
      <p>
        Username: {props.username}<br/>
        Name: {props.name}<br/>
        Date: {props.date}<br/>
        {props.tweet}
        </p>
    </div>
  )
}