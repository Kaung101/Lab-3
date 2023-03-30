//import "./App.css";
//import Home from "./components/Home";
//import Todo from "./components/Todo";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Calendar from "./pages/Calendar";
import Homepage from "./pages/Homepage";
import Todaypage from "./pages/Todaypage";
import Todopage from "./pages/Todopage";
function App() {
  return (
    // <div className="App">
    //   <div className="home">
    //     <Home />
    //   </div>
    //   <div className="todo">
    //     <Todo />
    //   </div>
    // </div>
    // < Todopage />
    <Routes>
      <Route exect path="/" element={<Homepage/>}/>
      <Route path="/todo" element={<Todopage/>}/>
      <Route path="/today" element={<Todaypage/>}/>
      <Route path="/calendar" element={<Calendar/>}/>
    </Routes>
    // <div className="App">
    //   <div className="home">
    //     <Home />
    //   </div>
    // </div>
    // <Routes>
    //   <Route path="/" element={<Homepage/>}/>
    // </Routes>
  );
}

export default App;
