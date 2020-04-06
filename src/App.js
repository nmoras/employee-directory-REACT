import React from "react";
import Wrapper from "./components/Wrapper";
import employees from "./employees.json";
import "./App.css";
import SearchEmployee from "./components/SearchEmployee";
import Header from "./components/Header";




function App() {
  function handleFriendClick(){
    
  }
  return(
    <Wrapper>
      
      
      <Header />
      <SearchEmployee />
      
    </Wrapper>
  );
}

export default App;

{/* <div onClick={handleFriendClick}></div> */}
// {friends.map( friend => <div onClick={this.handleFriendClick}><FriendCard { ...friend} /></div>)}
