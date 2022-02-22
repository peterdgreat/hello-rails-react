import React from "react"
import { Provider } from "react-redux"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import HelloWorld from "./HelloWorld"
import store from "../redux/configureStore"
class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HelloWorld greeting="Peter" />}/>
        </Routes>
        </Router>
      </Provider>
    );
  }
}

export default App
