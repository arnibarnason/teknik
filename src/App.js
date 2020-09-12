import React from "react";
import "./App.css";
import { Menu } from "./components/Menu";
import { Hero } from "./components/Hero";
import { ContentSection } from "./components/ContentSection";
import { Employees } from "./components/Employees";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Hero />
      <Menu />
      <ContentSection title="Fyrirtækið">
        <p>
          Teknik er fyrirtæki sem samanstendur af sérfræðingum með áratuga
          reynslu á sviði ráðgjafar, hönnunar, verkefnastjórnunar og eftirliti.
          Lögð er áhersla á góða þjónustu við viðskiptavini og virðisaukandi
          ráðgjöf.
        </p>
        <p>
          Hönnuðir Teknik eru sérhæfðir í öllu sem tengist hönnun pípulagna,
          loftræsikerfa og vatnsúðakerfa. Þeir hafa komið að ráðgjöf, hönnun og
          eftirliti við stór og smá verkefni, innanlands og erlendis.
        </p>
        <p>
          Teknik getur veitt heildstæða ráðgjöf við allt sem viðkemur
          byggingaframkvæmdum í samvinnu við reynslumikla samstarfsaðila.
        </p>
      </ContentSection>
      <ContentSection title="Þjónusta">
        <p>
          Meðal verkefna sem starfsmenn Teknik hafa komið að eru einbýlis- og
          fjölbýlishús, atvinnu- og iðnaðarhúsnæði, skólabyggingar,
          íþróttamannvirki, hjúkrunarheimili ásamt ýmsum verkefnum í stóriðju.
        </p>
        <ul>
          <li>Úttektir og ástandsmat</li>
          <li>Kostnaðaráætlanir</li>
          <li>Hönnun</li>
          <li>Útboðsgögn</li>
          <li>Verkeftirlit</li>
        </ul>
        <h3>Loftræsing</h3>
        <p>
          Hitastig og loftgæði í byggingum hafa áhrif á afköst, vellíðan og
          heilsu notenda. Með góðri ráðgjöf má ná fram endingarbetri
          loftræsikerfum, lægri rekstrarkostnaði og betri innivist í byggingum.
        </p>
        <p>
          Ráðgjöfin felur í sér útreikninga á loftgæðum og kostnaðarmat
          mismunandi útfærslna á fyrstu stigum hönnunar til að styðja við
          ákvarðanatöku og val á lausnum.
        </p>
        <p>
          Teknik býður jafnframt upp á þarfagreiningu, ráðgjöf og hönnun vegna
          úrbóta og stækkunar á eldri loftræsikerfum:
        </p>
        <ul>
          <li>Loftgæðamælingar og ráðgjöf vegna innivistar</li>
          <li>Hermanir á loftgæðum og hitastigi í byggingum</li>
          <li>Hönnun loftræsikerfa fyrir allar gerðir mannvirkja</li>
          <li>Orkuútreikningar fyrir byggingar</li>
          <li>Útreikningar á orkuramma samkvæmt reglugerð</li>
        </ul>
        <h3>Pípulagnir</h3>
        <p>
          Með góðri ráðgjöf má ná fram endingarbetri lagnakerfum, lægri
          rekstrarkostnaði og betri innivist í byggingum.
        </p>
        <p>
          Lögð er áhersla á að vinna með arkitekt og verkkaupa á fyrstu stigum
          verkefnis, aðstoða við ákvarðanatöku og gera kostnaðar- og gæðamat á
          mismunandi lausnum.
        </p>
        <p>
          Teknik býður jafnframt upp á þarfagreiningu, ráðgjöf og hönnun vegna
          úrbóta og stækkunar á eldri lagnakerfum:
        </p>
        <ul>
          <li>Hitakerfi</li>
          <li>Snjóbræðslukerfi</li>
          <li>Neysluvatnskerfi</li>
          <li>Vatnsúðakerfi</li>
          <li>Frárennsliskerfi</li>
          <li>Kæli- og frystikerfi</li>
          <li>Sundlaugakerfi</li>
          <li>Varmadælukerfi fyrir hús og sumarbústaði</li>
        </ul>
        <h3>Hönnunarstjórn og verkeftirlit</h3>
        <p>
          Teknik tekur að sér að aðstoða við undirbúning, skipulagningu og
          áætlanagerð verkefna ásamt eftirliti með öllum þáttum verkefnisins á
          framkvæmdatíma:
        </p>
        <ul>
          <li>Forhönnun</li>
          <li>Kostnaðaráætlanir</li>
          <li>Gerð útboðsgagna</li>
          <li>Verkeftirlit</li>
        </ul>
      </ContentSection>
      <Employees />
      <Footer />
    </>
  );
}

export default App;
