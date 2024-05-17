import './App.css';
import Search from './components/Search/Search.jsx';
import Filter from './components/Filters/Filters.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Editor } from './components/Editor/Editor.jsx';
import { SwitchButton } from './components/Switcher/Switcher.jsx';

function App() {
  return (
    <div className="App">
      {/* <Search /> */}
      {/* <Filter/> */}
      {/* <Footer /> */}
      {/* <SwitchButton /> */}
      <Editor />
    </div>
  );
}

export default App;
