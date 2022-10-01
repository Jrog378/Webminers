import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homeindex from "./pages/homeindex";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/error-page";
import Blogindex from "./pages/blogindex";

const pages = createBrowserRouter([
    {
        path: '/',
        element: <Homeindex/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/blog',
        element: <Blogindex/>,
        errorElement: <ErrorPage/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={pages}/>
    </React.StrictMode>,
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
