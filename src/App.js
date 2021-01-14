import { Route, Switch } from "react-router-dom";
import ManageAddress from "./components/address/ManageAddress";
import ManageBlockchain from "./components/ManageBlockchain";
import Header from "./components/common/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="container">
      <ToastContainer autoClose={5000} hideProgressBar></ToastContainer>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={ManageAddress}></Route>
        <Route path="/Address" component={ManageAddress}></Route>
        <Route path="/Blockchain" component={ManageBlockchain}></Route>
      </Switch>
    </div>
  );
}

export default App;
