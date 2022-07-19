import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import SmallEventCard from './components/SmallEventCard'
import TallEventCard from './components/TallEventCard';
import ButtonProfileUnsub from './components/buttonsFolder/ButtonProfileUnsub';
import { AuthzHeaderButton } from './components/buttonsFolder/ButtonsHeader';

function App() {
  return (
    <div className="from-colorTourq bg-gradient-to-b bg-colorYellow flex flex-col w-screen h-screen">
      <Header />
      <br></br>
      {/* <SmallEventCard /> */}
      {/* <TallEventCard /> */}
      <br></br>
      {/* <Footer /> */}
      {/* <ButtonProfileUnsub />
      <AuthzHeaderButton /> */}
    </div>
  );
}

export default App;
