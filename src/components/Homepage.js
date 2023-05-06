import Money from "./Money";
import MainInterface from "./MainInterface";

export default function Homepage({
  back,
  blind,
  setBlind,
  initialPot,
  setInitialPot,
  handPot,
  setHandPot,
  myMoney,
  setMyMoney,
  yourMoney,
  setYourMoney,
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
}) {
  return (
    <div className="bg-green-600 p-5 w-11/12 h-5/6 relative flex justify-center items-center">
      <Money
        blind={blind}
        setBlind={setBlind}
        initialPot={initialPot}
        setInitialPot={setInitialPot}
        myMoney={myMoney}
        setMyMoney={setMyMoney}
        yourMoney={yourMoney}
        setYourMoney={setYourMoney}
        handPot={handPot}
        setHandPot={setHandPot}
      />
      <MainInterface
        back={back}
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
        yourMoney={yourMoney}
        setYourMoney={setYourMoney}
        myMoney={myMoney}
        setMyMoney={setMyMoney}
        blind={blind}
        handPot={handPot}
        setHandPot={setHandPot}
      />
    </div>
  );
}
