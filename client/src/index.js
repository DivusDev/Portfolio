import React from 'react';
import ReactDOM from 'react-dom';
import App from './AppRouter';
import reportWebVitals from './reportWebVitals';

//Router
import { BrowserRouter } from "react-router-dom";
import AppRouter from './AppRouter';


//Icons

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faReact, faNodeJs, faAws, faGripfire } from '@fortawesome/free-brands-svg-icons'

library.add( fas, faReact, faNodeJs, faAws, faGripfire )



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
