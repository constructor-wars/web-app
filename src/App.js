import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import EditorContainer from "./Containers/EditorContainer";
import ProfileRoute from "./Routes/ProfileRoute";
import SyllabusRoute from "./Routes/SyllabusRoute";
import AdminContainer from "./Containers/AdminContainer";

import DashboardRoute from "./Routes/DashboardRoute";

import AboutRoute from "./Routes/AboutRoute";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route
            exact
            path="/editor"
            render={() => <EditorContainer {...this.props.GITHUB_DATA} />}
          />
          <Route exact path="/about" render={() => <AboutRoute />} />
          <Route exact path="/syllabus" render={() => <SyllabusRoute />} />
          <Route exact path="/admin" render={() => <AdminContainer github_username={this.props.GITHUB_DATA.username} />} />
          <Route exact path="/dashboard" render={() => <DashboardRoute />} />
          <Route exact path="/" render={() => <DashboardRoute />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
