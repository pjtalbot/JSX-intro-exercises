import logo from './logo.svg';
import './App.css';
import FirstComponent from "./FirstComponent.js"
import NamedComponent from './NamedComponent.js';
import Tweet from "./Tweet.js"
import Person from "./Person.js"
function App() {
  return (
    <div className="App">
      
        <FirstComponent />
        <NamedComponent name="Paul"/>
        <Tweet username="user1"
            name="Joe"
            date="01/01/01"
            message="I'm pretty happy"/>
        <Tweet username="user2"
            name="Joey"
            date="01/01/02"
            message="I'm pretty bummed out"/>
        <Person name="Mary"
            age={20}
        />
        <Person name="Sue"
            age={17}
        />
            
        
      
    </div>
  );
}

export default App;
