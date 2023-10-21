// import React from 'react'
// import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { RouterProvider } from 'react-router-dom'

// import { Route, RouterProvider } from "react-router-dom";
import router from "./Components/Router/Router.jsx";

// import { document } from "postcss";
// import React from "react";
// import AuthProvider from "./AuthProvaider/AuthProvaider";
// import { RouterProvider } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
// <AuthProvider>
//   <RouterProvider router={router}></RouterProvider>
// </AuthProvider>
//   </React.StrictMode>,
// );






// import React from 'react'
// import ReactDOM from 'react-dom/client'
// // import App from './App.jsx'
// import './index.css'
// import router from './router/router.jsx';
// import { RouterProvider } from 'react-router-dom';
// import AuthProvider from './AuthProvider/AuthProvider.jsx';

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </React.StrictMode>
// );


// import React from 'react';
// import ReactDOM from 'react-dom'; // Import ReactDOM like this
// import './index.css';
// import router from './router/router.jsx';
// import { RouterProvider } from 'react-router-dom';
// import AuthProvider from './AuthProvider/AuthProvider.jsx';



// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <RouterProvider router={router} />
//     </AuthProvider>
//   </React.StrictMode>
// );


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// // import { RouterProvider } from 'react-router-dom';
// import AuthProvider from './AuthProvider/AuthProvider.jsx';

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AuthProvider>
//       <RouterProvider router={Route} />
//     </AuthProvider>
//   </React.StrictMode>
// );


import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'



import AuthProvider from './Components/AuthProvaider/AuthProvaider';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);









