import "./App.css";
import Dashboard from "./Components/Dashboard";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import View from "./Components/View";
import { Route, Routes } from "react-router-dom";
import Team from "./Components/Team";
import Signup from "./Components/Signup";
import Private from "./Routes/Private";
import Public from "./Routes/Public";
import Allproduct from "./Api/Allproduct";
import Singleproduct from "./Api/Singleproduct";
import PostDetails from "./Components/postDetails";
import Contact from "./Components/contact";
import Register from "./Components/register";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route element={<Private />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/view" element={<View />} />
          <Route path="/team" element={<Team />} />
          <Route path="/allproduct" element={<Allproduct />} />
          <Route path="/singleproduct" element={<Singleproduct />} />
          <Route path="/postDetails" element={<PostDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />

        </Route>

        <Route element={<Public />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />

        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
