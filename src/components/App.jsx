import React from "react";
import Term from "./Term";
import emojipedia from "../emojipedia";


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">      
      {emojipedia.map( (emo) =>{
        return <Term 
        key = {emo.id}
        id = {emo.id}
        emoji = {emo.emoji}
        name = {emo.name}
        meaning = {emo.meaning}
        />
      })
      }</dl>
    </div>
  );
}

export default App;
