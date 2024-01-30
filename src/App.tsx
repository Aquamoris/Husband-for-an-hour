import React, {useState} from 'react';
import MainForm from "./modules/MainForm";
import Modal from "./modules/Modal";
import Header from "./modules/Header.tsx";
import Footer from "./modules/Footer.tsx";
import Main from "./components/Main.tsx";

const App:React.FC = () => {
    const [modalActive, setModalActive] = useState<boolean>(false);

    return (
        <div className="App">
            <Header openForm={setModalActive}/>
            {/*<button onClick={() => setModalActive(true)}>Open</button>*/}
            <Main />
            <main>

            </main>
            <Modal active={modalActive} setActive={setModalActive}><MainForm/></Modal>
            <Footer />
        </div>
    );
}

export default App;
