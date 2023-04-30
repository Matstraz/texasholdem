import { useState } from "react";

export default function Money() {
  let [pot, setPot] = useState(0);
  let [initialPot, setInitialPot] = useState(0);
  let [myMoney, setMymoney] = useState(1000);
  let [yourMoney, seYourMoney] = useState(1000);

  //SERIE DI INCREMENTO PROVVISORIA
  function potIncrementer() {
    setPot(pot + 30);
  }

  function varyPot() {
    setInitialPot(pot);
    setMymoney(myMoney - pot / 3);
    seYourMoney(yourMoney - (pot / 3) * 2);
  }

  setInterval(potIncrementer, 3000);

  return (
    <div className="flex flex-col justify-between absolute p-1 px-3 left-5 top-0 py-5 h-full text-center">
      <div className="border-2 border-black p-1 px-3">
        Opponent Money : {yourMoney} $
      </div>
      <div className="border-2 border-black p-1 px-3">Pot : {initialPot} $</div>
      <div className="border-2 border-black p-1 px-3" onClick={varyPot}>
        Your Money : {myMoney} $
      </div>
    </div>
  );
}
