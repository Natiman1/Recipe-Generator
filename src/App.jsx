//import { useState } from 'react'

import Header from "./components/Header";
import Main from "./components/Main";

// import Data from "./Data";

//import Japan from "./assets/Rectangle77.png";

import "./App.css";

const App = () => {

  // const journalData = Data.map((data) => {
  //   return (
  //     <Entry key={Data.id}
  //       {...data}
  //     />
  //   )
  // })

  return (
    <>
      <Header />
      <Main />
    </>

  );
};

export default App;
