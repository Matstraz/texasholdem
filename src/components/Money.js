export default function Money() {
  const myMoney = 1000;
  const yourMoney = 1000;
  return (
    <div className="flex flex-col justify-between items-center absolute p-1 px-3 left-5 top-0 py-5 h-full">
      <div className="border-2 border-black p-1 px-3">
        Money : {yourMoney} $
      </div>
      <div className="border-2 border-black p-1 px-3">Money : {myMoney} $</div>
    </div>
  );
}
