const GetMessage = () => {
  let MessagesArray = [
    "hello lovely people!",
    "hey there!",
    "I love react",
    "how crazy is this rain!",
    "bring on the thunder y'all!"
  ]
  let message = MessagesArray[Math.floor(Math.random() * MessagesArray.length)];
  return <h1>Your Happy Message is: {message}</h1>
}

// console.log(HelperFunc())

// const HappyMessage = () => {
//   return
//   `<h1>${GetMessage()}</h1>`
// }

function App() {
  return (
    <GetMessage />    
  );
}

export default App;
