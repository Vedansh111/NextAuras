import Background from "./components/Background";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div className="text-white text-opacity-80 h-full">
        <Background />
        <div className="flex flex-col justify-stretch min-h-svh relative h-full">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
