import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Card from "./components/card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div
      style={{
        backgroundColor: useSelector((state) => state.color),
        flexDirection: "column",
      }}
      className="App d-flex justify-content-center align-items-center "
    >
      <Card />
      <p style={{ color: "white", marginTop: "20px" }}>David Wisseh</p>
    </div>
  );
}

export default App;
