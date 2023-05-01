//POT + POT INCREMENTER

export default function Money({
  pot,
  setPot,
  initialPot,
  setInitialPot,
  handPot,
  myMoney,
  setMymoney,
  yourMoney,
  setYourMoney,
}) {
  //SERIE DI INCREMENTO PROVVISORIA
  function potIncrementer() {
    setPot(pot + 30);
  }

  function varyPot() {
    setInitialPot(pot);
    if (myMoney - pot / 3 <= 0) {
      setMymoney(0);
    } else {
      setMymoney(myMoney - pot / 3);
    }

    if (yourMoney - (pot / 3) * 2 <= 0) {
      setYourMoney(0);
    } else {
      setYourMoney(yourMoney - (pot / 3) * 2);
    }
  }

  setInterval(potIncrementer, 3000);

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
      <div className="border-2 border-black p-1 px-3" onClick={varyPot}>
        Your Money : {myMoney} $
      </div>
    </div>
  );
}
