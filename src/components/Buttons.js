export default function Buttons() {
  return (
    <div className="flex justify-center items-center absolute bottom-5 right-5 border-2 border-black gap-5 p-3">
      <button className="border-2 border-slate-700 px-5 hover:bg-slate-600">
        CHECK
      </button>
      <button className="border-2 border-slate-700 px-5 hover:bg-slate-600">
        BET
      </button>
      <button className="border-2 border-slate-700 px-5 hover:bg-slate-600">
        FOLD
      </button>
    </div>
  );
}
