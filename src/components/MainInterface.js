import Buttons from "./Buttons";

export default function MainInterface({
  back,
  iterableDeck,
  setIterableDeck,
  myHand,
  setMyHand,
  opponentHand,
  setOpponentHand,
  commonCards,
  setCommonCards,
  disappear,
  setDisappear,
  showCard,
  setShowCards,
  yourMoney,
  setYourMoney,
  myMoney,
  setMyMoney,
  pot,
  handPot,
  setHandPot,
}) {
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
      //THIS IS THE FUNCTION TO SHOW OPPONENT'S HAND
    } else if (commonCards.length === 5) {
      setShowCards(true);
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
    <div className="flex flex-col justify-between items-center bg-green-600 p-5 w-full h-full">
      <div className="flex justify-center items-center w-full h-1/4">
        {showCard &&
          opponentHand.map((el) => (
            <img src={el[0]} key={el[1]} alt="cardImage" className="h-full" />
          ))}
        {!showCard && (
          <img
            src={back}
            alt="cardImage"
            className={disappear ? "h-full" : "hidden"}
          />
        )}
        {!showCard && (
          <img
            src={back}
            alt="cardImage"
            className={disappear ? "h-full" : "hidden"}
          />
        )}
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
        NEW HAND
      </button>
      <Buttons
        yourMoney={yourMoney}
        setYourMoney={setYourMoney}
        myMoney={myMoney}
        setMyMoney={setMyMoney}
        pot={pot}
        handPot={handPot}
        setHandPot={setHandPot}
      />
    </div>
  );
}
