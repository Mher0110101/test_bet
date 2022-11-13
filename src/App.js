import './App.css';
import Header from './components/header';
import DashboardPanel from './components/Dashboard/dashboardPanel';
import Section from './components/Sections/sections';
import DiagramsArea from './components/Diagrams/diagramsArea';
import BottomTitlesArea from './components/BottomTitles/BottomTitlesArea';
import TablesArea from './components/Tables/tablesArea';
function App() {
  return (
    <div className="App">
     <Header/>
     <DashboardPanel/>
     <Section/>
     <DiagramsArea/>
     <BottomTitlesArea/>
     <TablesArea/>
    </div>
  );
}

export default App;
