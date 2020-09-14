import React from "react";
import "./App.css";
import { Menu } from "./components/Menu";
import { Hero } from "./components/Hero";
import { Employees } from "./components/Employees";
import { Footer } from "./components/Footer";
import { ContentCard } from "./components/ContentCard";
import { ContactForm } from "./components/ContactForm";

function App() {
  return (
    <>
      <Menu />
      <Hero />
      <section className="section">
        <div className="container has-text-centered">
          <h1 class="title">Fyrirtækið</h1>
          <div className="columns">
            <div className="column is-one-third">
              <ContentCard header="Sérhæfing">
                Hönnuðir Teknik eru sérhæfðir í öllu sem tengist hönnun
                pípulagna, loftræsikerfa og vatnsúðakerfa. Þeir hafa komið að
                ráðgjöf, hönnun og eftirliti við stór og smá verkefni,
                innanlands og erlendis.
              </ContentCard>
            </div>
            <div className="column is-one-third">
              <ContentCard header="Áratuga reynsla">
                Teknik er fyrirtæki sem samanstendur af sérfræðingum með áratuga
                reynslu á sviði ráðgjafar, hönnunar, verkefnastjórnunar og
                eftirliti. Lögð er áhersla á góða þjónustu við viðskiptavini og
                virðisaukandi ráðgjöf.
              </ContentCard>
            </div>
            <div className="column is-one-third">
              <ContentCard header="Heildstæð ráðgjöf">
                Teknik getur veitt heildstæða ráðgjöf við allt sem viðkemur
                byggingaframkvæmdum í samvinnu við reynslumikla samstarfsaðila.
              </ContentCard>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
      <Employees />
      </section>
      <section className="section">
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}

export default App;
