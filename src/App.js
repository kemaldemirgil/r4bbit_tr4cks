import "./App.css";
// import Test from './components/Test';
import home from "./components/home";
import notfound from "./components/notfound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import rabbit from "./components/About/rabbit";
import flags from "./components/About/flags";
import inspiration from "./components/About/inspiration";
import work from "./components/About/mywork";
import milestones from "./components/Blog/milestones";
import tracks from "./components/Blog/tracks";
import list from "./components/Games/list";
import moments from "./components/Games/moments";
import screenshots from "./components/Games/screenshots";
import earth from "./components/Misc/earth";
import water from "./components/Misc/water";
import deep from "./components/Music/deep";
import slow from "./components/Music/slow";
import tempo from "./components/Music/tempo";
import life from "./components/Photos/life";
import moon from "./components/Photos/moon";
import nature from "./components/Photos/nature";
import sky from "./components/Photos/sky";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/about/rabbit" component={rabbit} />
          <Route exact path="/about/mywork" component={work} />
          <Route exact path="/about/inspiration" component={inspiration} />
          <Route exact path="/about/flags" component={flags} />
          <Route exact path="/blog/tracks" component={tracks} />
          <Route exact path="/blog/milestones" component={milestones} />
          <Route exact path="/photos/sky" component={sky} />
          <Route exact path="/photos/nature" component={nature} />
          <Route exact path="/photos/life" component={life} />
          <Route exact path="/photos/moon" component={moon} />
          <Route exact path="/music/slow" component={slow} />
          <Route exact path="/music/tempo" component={tempo} />
          <Route exact path="/music/deep" component={deep} />
          <Route exact path="/games/screenshots" component={screenshots} />
          <Route exact path="/games/moments" component={moments} />
          <Route exact path="/games/list" component={list} />
          <Route exact path="/misc/water" component={water} />
          <Route exact path="/misc/earth" component={earth} />
          <Route component={notfound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
