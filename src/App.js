import './App.css';
import Header from "./comonents/header/header";
import Main_section_one from "./comonents/main_section_one/main_section_one";
import SectionTwoAbout from "./comonents/section_two_about/section_two_about";

function App() {
  return (
    <div className="App">
        <div className="background_section_one">
            <Header />
            <div className="wrapper">
                <Main_section_one />
                <SectionTwoAbout />
            </div>
        </div>
    </div>
  );
}

export default App;
