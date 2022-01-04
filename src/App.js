import Article from "./Article";
import { homepageData } from "./wikiData";
import "./App.css";

function App() {
  return (
    <div className="App">
      {homepageData.map((section) => (
        <Article
          key={section.title}
          title={section.title}
          paragraphs={section.paragraphs}
        />
      ))}
    </div>
  );
}

export default App;
