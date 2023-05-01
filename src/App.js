import { useState } from "react";
import { back, deck } from "./components/Deck";
import Homepage from "./components/Homepage";

function App() {
  //POT + POT INCREMENTER (MY MONEY COMPONENT)
  let [pot, setPot] = useState(30);
  let [initialPot, setInitialPot] = useState(0);
  let [handPot, setHandPot] = useState(0);
  let [myMoney, setMymoney] = useState(1000);
  let [yourMoney, setYourMoney] = useState(1000);
  //MAIN INTERFACE
  const [iterableDeck, setIterableDeck] = useState(deck);
  const [myHand, setMyHand] = useState([]);
  const [opponentHand, setOpponentHand] = useState([]);
  const [commonCards, setCommonCards] = useState([]);
  const [disappear, setDisappear] = useState(false);
  const [showCard, setShowCards] = useState(false);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-green-800">
      <Homepage
        deck={deck}
        back={back}
        pot={pot}
        setPot={setPot}
        initialPot={initialPot}
        setInitialPot={setInitialPot}
        handPot={handPot}
        setHandPot={setHandPot}
        myMoney={myMoney}
        setMymoney={setMymoney}
        yourMoney={yourMoney}
        setYourMoney={setYourMoney}
        iterableDeck={iterableDeck}
        setIterableDeck={setIterableDeck}
        myHand={myHand}
        setMyHand={setMyHand}
        opponentHand={opponentHand}
        setOpponentHand={setOpponentHand}
        commonCards={commonCards}
        setCommonCards={setCommonCards}
        disappear={disappear}
        setDisappear={setDisappear}
        showCard={showCard}
        setShowCards={setShowCards}
      />
    </div>
  );
}

export default App;
