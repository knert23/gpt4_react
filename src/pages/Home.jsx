import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import { EarlyAccess } from "../components/EarlyAccess";
import { RegistrationBar } from "../components/RegistrationBar";
import News from "../components/News";
import End from "../components/End";

const Home = () => {
  return (
    <>
    <div class ="page">
    <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section early_access">
        <EarlyAccess />
      </section>
      <section className="section registration_bar">
        <RegistrationBar />
      </section>
      <section className="section news">
        <News />
      </section>
      <section className="section end">
        <End />
      </section>
    </div>
    </>
  );
};

export default Home;
