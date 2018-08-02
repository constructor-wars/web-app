import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import EditorRoute from "./Routes/EditorRoute";
import ProfileRoute from "./Routes/ProfileRoute";
import CurriculumRoute from "./Routes/CurriculumRoute";


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <ProfileRoute />} />
          <Route exact path="/editor" render={() => <EditorRoute />} />
          <Route exact path="/profile" render={() => <ProfileRoute />} />
          <Route exact path="/curriculum" render={() => <CurriculumRoute />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
