import { useState } from "react";

export default function Homepage({ deck }) {
  const [iterableDeck, setIterableDeck] = useState(deck);
  const [myHand, setMyHand] = useState([]);
  const [opponentHand, setOpponentHand] = useState([]);
  const [commonCards, setCommonCards] = useState([]);
  const [disappear, setDisappear] = useState(false);

  let myIntialHand = [];
  let opponentInitialHand = [];
  let progressiveCommonCards = [];

  function generateRandomHand() {
    for (let i = 0; i < 2; i++) {
      const randomCard = Math.floor(Math.random() * (iterableDeck.length - i));
      myIntialHand.push(iterableDeck[randomCard]);
      iterableDeck.splice(randomCard, 1);
    }

    for (let i = 0; i < 2; i++) {
      const randomCard = Math.floor(Math.random() * (iterableDeck.length - i));
      opponentInitialHand.push(iterableDeck[randomCard]);
      iterableDeck.splice(randomCard, 1);
    }

    setMyHand([...myHand, ...myIntialHand]);
    setOpponentHand([...opponentHand, ...opponentInitialHand]);
  }

  function generateCommonCards() {
    if (commonCards.length < 3) {
      for (let i = 0; i < 3; i++) {
        const randomCard = Math.floor(
          Math.random() * (iterableDeck.length - i)
        );
        progressiveCommonCards.push(iterableDeck[randomCard]);
        iterableDeck.splice(randomCard, 1);
      }
    } else {
      const randomCard = Math.floor(Math.random() * iterableDeck.length);
      progressiveCommonCards.push(iterableDeck[randomCard]);
      iterableDeck.splice(randomCard, 1);
    }

    setCommonCards([...commonCards, ...progressiveCommonCards]);
  }

  function reset() {
    setMyHand([]);
    setOpponentHand([]);
    setCommonCards([]);
    setDisappear(false);
    setIterableDeck([
      ...iterableDeck,
      ...myHand,
      ...opponentHand,
      ...commonCards,
    ]);
  }

  return (
    <div className="flex flex-col justify-between items-center bg-green-600 p-5 w-11/12 h-5/6">
      <div className="flex justify-center items-center w-full h-1/4">
        {opponentHand.map((el) => (
          <img src={el[0]} key={el[1]} alt="cardImage" className="h-full" />
        ))}
      </div>
      <div className="flex justify-center items-center w-full h-1/4">
        {commonCards.map((el) => (
          <img src={el[0]} key={el[1]} alt="cardImage" className="h-full" />
        ))}
      </div>
      <div className="flex justify-center items-center w-full h-1/4">
        {myHand.map((el) => (
          <img src={el[0]} key={el[1]} alt="cardImage" className="h-full" />
        ))}
      </div>
      <button
        onClick={() => {
          generateRandomHand();
          setDisappear(true);
        }}
        className={disappear ? "hidden" : "bg-green-500 p-1 px-8"}
      >
        START
      </button>
      <button
        onClick={generateCommonCards}
        className={
          disappear && commonCards.length < 5
            ? "bg-green-500 p-1 px-8"
            : "hidden"
        }
      >
        GIVE CARDS
      </button>
      <button
        onClick={reset}
        className={
          disappear && commonCards.length >= 5
            ? "bg-green-500 p-1 px-8"
            : "hidden"
        }
      >
        RESET
      </button>
    </div>
  );
}
