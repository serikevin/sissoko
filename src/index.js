import React from 'react';
import './assets/css/init.css';
import './assets/css/costum.css';
import './assets/css/responsive.css';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from 'pages';
import { PortfolioDetail } from 'pages/portofolio-detail';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

const container = document.getElementById('root');
const root = createRoot(container);

Sentry.init({
    dsn: "https://9701bffc94fd43a0aa001263d16a36a9@o1342163.ingest.sentry.io/6615968",
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
});

root.render(
    <BrowserRouter>
        <Routes>
            <Route index exact path="/" element={<Home />} />
            <Route path="/detail/:id" element={<PortfolioDetail />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
