import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../meetup2020/components/Hero";
import Welcome from "../meetup2020/components/Welcome";
import Play from "../meetup2020/components/Play";
import Speakers from "../meetup2020/components/Speakers";
import About from "../meetup2020/components/About";
import Paneldebate from "../meetup2020/components/Paneldebate";
import Program from "../meetup2020/components/Program";
import Sponsor from "../meetup2020/components/Sponsor";
import Footer from "../meetup2020/components/Footer";
import "./meetup.scss";

const Meetup = () => {
    return (
        <>
            <Helmet>
                <html lang="no-nb" />
                <title>Meetup - Beyond Design Systems</title>
            </Helmet>
            <Hero />
            <main className="meetup-main">
                <Welcome />
                <About />
                <Play />
                <Speakers />
                <Paneldebate />
                <Program />
                <Sponsor />
                <Footer />
            </main>
        </>
    );
};

export default Meetup;
