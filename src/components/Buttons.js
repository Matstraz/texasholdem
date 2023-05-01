import { useState } from "react";

export default function Buttons({ myMoney, pot, handPot, setHandPot }) {
  let [betValue, setBetValue] = useState(pot);

  function handleValue(event) {
    setBetValue(event.target.value);
  }

  function handleBet(event) {
    event.preventDefault();
    setHandPot(betValue);
  }

  return (
    <div className="flex justify-center items-center absolute bottom-5 right-5 border-2 border-black gap-5 p-3">
      <form className=" flex flex-col gap-2 w-1/4">
        <input
          type="number"
          value={betValue}
          onChange={handleValue}
          step={10}
          min={pot}
          max={myMoney}
        />
        <input
          type="range"
          min={pot}
          max={myMoney}
          step={10}
          value={betValue}
          onChange={handleValue}
        />
        <button
          type="submit"
          className="border-2 border-slate-700 px-5 hover:bg-slate-600"
          onClick={handleBet}
        >
          BET
        </button>
      </form>
      <button className="border-2 border-slate-700 px-5 hover:bg-slate-600 w-1/4">
        CHECK
      </button>

      <button className="border-2 border-slate-700 px-5 hover:bg-slate-600 w-1/4">
        FOLD
      </button>
    </div>
  );
}
