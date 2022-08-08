
import './App.css';
import SearchBox from './SearchBox';
// import Card from './Card';
import users from './users.json';
import CardList from './CardList';
import React, {Component} from "react";

class App extends Component{
  constructor(){
    super();
    this.state= {
      SearchInput: "",
    }
  }
  addSearchInput= (event)=>{
    console.log(event.target.value)
    this.setState({ SearchInput: event.target.value })
  }

  render(){
    const filteredRobots = users.filter(item => (
      item.name.toLowerCase().includes(this.state.SearchInput.toLowerCase())
    ))

    console.log("Filtered Robots: ", filteredRobots);

    return (
      <div className="App">
        <header className="App-header">
        <SearchBox addSearchInput={this.addSearchInput}/>
        {/* <CardList/> */}
        <CardList users={filteredRobots}/>
        </header>
      </div>
    );
  }
}


export default App;





// function App() {
//   console.log(users)
//   return (
//     <div className="App">
//       <header className="App-header">
//         <SearchBox/>
//         <div className="card-wrapper">
//           <Card name="Gabbie" username= "gabs" email="gabbie@gmail.com"/>
//           <Card name="abbie" username= "abby" email="abbie@gmail.com"/>
//           <Card name="John Doe" username= "Johny" email="Johnnie@gmail.com"/>
//           <Card name="Mary smith" username= "Mary" email="Mary@gmail.com"/>
//           <Card name="Justin grey" username= "Justin" email="Justin@gmail.com"/>
//         </div>
        
//       </header>
//     </div>
//   );
// }


