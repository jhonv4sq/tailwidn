import logo from './logo.svg';
import './App.css';

import ButtonProfileUnsub from './components/buttonsFolder/ButtonProfileUnsub';
import { AuthzHeaderButton } from './components/buttonsFolder/ButtonsHeader';

import ProfileSubEvntCard from './components/cardsFolder/ProfileSubEvntCard';
import SmallEventCard from './components/cardsFolder/SmallEventCard'
import TallEventCard from './components/cardsFolder/TallEventCard';

import EditCreateEvent from './components/formsFolder/EditCreateEvent';
import LoginUser from './components/formsFolder/LoginUser';
import PassRecovery from './components/formsFolder/PassRecovery';
import ProfileAuthz from './components/formsFolder/ProfileAuthz';
import RegisterUser from './components/formsFolder/RegisterUser';

import Footer from './components/layoutsFolder/Footer'
import Header from './components/layoutsFolder/Header'


function App() {
  return (
    <div className="from-colorTourq bg-gradient-to-b bg-colorYellow flex flex-col w-screen  min-h-screen">
      <Header />
      
      {/* <SmallEventCard /> */}
      <TallEventCard />
      
      {/* <ButtonProfileUnsub />
      <AuthzHeaderButton /> */}
      <Footer />
    </div>
  );
}

export default App;
