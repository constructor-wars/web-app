import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";

import Header from "./components/Header/Header";
import EditorRoute from "./Routes/EditorRoute";
import ProfileRoute from "./Routes/ProfileRoute";
import SyllabusRoute from "./Routes/SyllabusRoute";
import AdminRoute from "./Routes/AdminRoute";
import AboutRoute from "./Routes/AboutRoute";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/editor" render={() => <EditorRoute />} />
          <Route exact path="/profile" render={() => <ProfileRoute />} />
          <Route exact path="/about" render={() => <AboutRoute />} />
          <Route exact path="/syllabus" render={() => <SyllabusRoute />} />
          <Route exact path="/admin" render={() => <AdminRoute />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
