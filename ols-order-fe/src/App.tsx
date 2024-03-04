import React from 'react';
import loadable from '@loadable/component';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ScreenUrlPath } from './typings/ScreenUrlPath';
import {HeaderWrap as Header} from '@/components/HeaderWrap';
import {ScrollToTop} from '@/components/ScrollToTop';
const OLSHOME = loadable(() => import('./pages/OLSHOME'), {
  resolveComponent: (components) => components.OLSHOME
});

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path={ScreenUrlPath.Root} element={<OLSHOME/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
