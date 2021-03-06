import React from "react";
import { lazy, Suspense, FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import BeatLoader from "react-spinners/BeatLoader";
import Colors from "./constants/colors";

const About = lazy(() => import("./pages/about"));
const Uses = lazy(() => import("./pages/uses"));
const Contact = lazy(() => import("./pages/contact"));
const Courses = lazy(() => import("./pages/courses"));
const Books = lazy(() => import("./pages/books"));
const Projects = lazy(() => import("./pages/projects"));
const ReactProjects = lazy(() => import("./pages/react"));
const AllProjects = lazy(() => import("./pages/allProjects"));
const Stats = lazy(() => import("./pages/stats"));
const OldWebsites = lazy(() => import("./pages/old-website"));
const BookList = lazy(() => import("./pages/bookList"));
const NotFoundPage = lazy(() => import("./pages/404"));

const App: FunctionComponent = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: 100,
            }}
          >
            <BeatLoader color={Colors.blog} size={30} loading={true} />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/uses" exact component={Uses} />
          <Route path="/courses" exact component={Courses} />
          <Route path="/books" exact component={Books} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/react" exact component={ReactProjects} />
          <Route path="/allProjects" exact component={AllProjects} />
          <Route path="/stats" exact component={Stats} />
          <Route path="/old-website" exact component={OldWebsites} />
          <Route path="/bookList" exact component={BookList} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
