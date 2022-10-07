import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homeindex from "./pages/homeindex";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./pages/error-page";
import Blogindex from "./pages/blogindex";
import Artpage from "./pages/articleindex";
import IntroWriting from "./articles/IntroTechWriting";
import EthicalHack from "./articles/EthicalHackers";
import DataVisual from "./articles/DataVis";
import PythonData from "./articles/PythonData";
import SatSpy from "./articles/SatSpies";
import TechFuture from "./articles/TechJobs";
import TechWriter from "./articles/WhyTechWriter";
import WebChange from "./articles/WebPlans";

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
    },
    {
        path: '/article',
        element: <Artpage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/intro-tech-writing',
        element: <IntroWriting/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/ethical-hacking-is-needed',
        element: <EthicalHack/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/profitable-data-vis',
        element: <DataVisual/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/python-taking-over-data-science',
        element: <PythonData/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/satellite-space-spies',
        element: <SatSpy/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/jobs-for-the-technical-future',
        element: <TechFuture/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/what-makes-a-good-technical-copywriter',
        element: <TechWriter/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/changes-coming-to-webminers',
        element: <WebChange/>,
        errorElement: <ErrorPage/>
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={pages}/>
    </React.StrictMode>,
);

export default root;