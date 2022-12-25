import Initial from "./Sections/Initial";
import Header from "./Sections/Header";

const appContainer = {
  width: 'min(100vw, 1800px)',
}
function App() {
  return (
    <div style={appContainer}>
      <Header />
      <Initial />
    </div>
  );
}

export default App;
