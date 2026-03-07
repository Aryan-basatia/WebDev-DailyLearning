import EXAMPLES from './components/Examples.jsx';
import Header from './components/Header/Header.jsx'
import CoreConcepts from "./components/CoreConcepts.jsx";


function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <EXAMPLES />
      </main>
    </>
  );
}

export default App;
