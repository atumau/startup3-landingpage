import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./Components/header";
import Body from "./Components/body";
function App() {
  AOS.init({
    duration: 1000,
  });
  return (
    <>
      <div className="full-body">
        <Header />
        <Body />
      </div>
    </>
  );
}

export default App;
