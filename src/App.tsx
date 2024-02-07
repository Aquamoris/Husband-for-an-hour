import React, {useState} from 'react';
import MainForm from "./modules/MainForm";
import Modal from "./modules/Modal";
import Header from "./modules/Header.tsx";
import Main from "./components/Main.tsx";
import Services from "./components/Services.tsx";
import Prices from "./components/Prices.tsx";
import Calculate from "./components/Calculate.tsx";
import MapBlock from "./components/MapBlock.tsx";
import Guarantees from "./components/Guarantees.tsx";
import Footer from "./modules/Footer.tsx";
import Works from "./components/Works.tsx";

const App:React.FC = () => {
    const [modalActive, setModalActive] = useState<boolean>(false);

    return (
        <div className="App">
            <Header openForm={setModalActive}/>
            <Main />
            <main>
                <Services setActive={setModalActive}/>
                <Prices />
                <Calculate setActive={setModalActive}/>
                <Guarantees />
                <Works />
                <MapBlock />
            </main>
            <Footer />
            <Modal active={modalActive} setActive={setModalActive}><MainForm/></Modal>
        </div>
    );
}

export default App;
