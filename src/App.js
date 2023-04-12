import About from "./components/About";
import Contacts from "./components/Contacts";
import Content from "./components/Content";
import Header from "./components/Header";
import Nav from "./components/nav/Nav";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <div className="acw-container">
        <About />
        <Content />
        <Work />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
