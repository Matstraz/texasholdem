//blind + blind INCREMENTER

import { useEffect } from "react";

export default function Money({
  blind,
  setBlind,
  initialPot,
  setInitialPot,
  handPot,
  myMoney,
  setMyMoney,
  yourMoney,
  setYourMoney,
}) {
  //INITIAL BLIND SETTING

  useEffect(() => {
    setMyMoney(myMoney - blind / 3);
    setYourMoney(yourMoney - (blind / 3) * 2);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log("I Only run once (When the component gets mounted)");
  }, []);

  //SERIE DI INCREMENTO PROVVISORIA

  function blindIncrementer() {
    setBlind(blind + 30);
  }

  //QUESTO DEVE AVVENIRE AL CLICK DEL BOTTONE "NEW HAND"!!!!!!!!!!!!!!
  function varyBlind() {
    setInitialPot(blind);
    if (myMoney - blind / 3 <= 0) {
      setMyMoney(0);
    } else {
      setMyMoney(myMoney - blind / 3);
    }

    if (yourMoney - (blind / 3) * 2 <= 0) {
      setYourMoney(0);
    } else {
      setYourMoney(yourMoney - (blind / 3) * 2);
    }
  }

  setInterval(blindIncrementer, 3000);

  return (
    <div className="flex flex-col justify-between absolute p-1 px-3 left-5 top-0 py-5 h-full text-center">
      <div className="border-2 border-black p-1 px-3">
        Opponent Money : {yourMoney} $
      </div>
      <div className="flex flex-col gap-2">
        <div className="border-2 border-black p-1 px-3">
          Blind : {initialPot} $
        </div>
        <div className="border-2 border-black p-1 px-3">Pot : {handPot} $</div>
      </div>
      <div className="border-2 border-black p-1 px-3" onClick={varyBlind}>
        Your Money : {myMoney} $
      </div>
    </div>
  );
}
