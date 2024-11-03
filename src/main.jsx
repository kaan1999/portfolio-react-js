import React from "react";
import ReactDOM from "react-dom/client";
import './index.scss';
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { CaseStudies } from "./components/CaseStudies/CaseStudies";
import { Testimonials } from "./components/Testimonials/Testimonials";
import { RecentWork } from "./components/RecentWork/RecentWork";
import img1 from "./assets/RecentWork/img-1.png";
import { RecentWorks } from "./components/RecentWorks/RecentWorks";
import { GetInTouch } from "./components/GetInTouch/GetInTouch";
import { Footer } from "./components/Footer/Footer";

const root = document.querySelector('#root');

ReactDOM.createRoot(root).render(
<>
<Header />
<Hero />
<CaseStudies />
<Testimonials />
<RecentWorks />
<GetInTouch />
<Footer />
</>
);