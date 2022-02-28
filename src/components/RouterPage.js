import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Campaign_create from './Campaign_create';
import Creative from './Creative';
function RouterPage() {
  return(
  <div>
      <Router>
          <Routes>
              <Route path="/campaign" exact component={Campaign_create} />
              <Route path="/creative" component={Creative} />
          </Routes>
      </Router>
  </div>
  );
}

export default RouterPage;
