import Homepage from "./components/Homepage";
import deck from "./components/Deck";

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-green-800">
      <Homepage deck={deck} />
    </div>
  );
}

export default App;
