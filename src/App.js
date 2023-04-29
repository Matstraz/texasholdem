import { back, deck } from "./components/Deck";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-green-800">
      <Homepage deck={deck} back={back} />
    </div>
  );
}

export default App;
