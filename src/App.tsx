import pattern from '../public/pattern-divider-mobile.svg';
import iconDice from '../public/icon-dice.svg';
import { useState } from 'react';

type Msg = {
  id: number;
  advice: string;
};

type AdviceSlip = {
  slip: {
    id: number;
    advice: string;
  };
};

function App() {
  const [message, setMessage] = useState<Msg | undefined>();

  /* GOTTA ADD USEEFFECT TO IMPORT BEFORE */
  /*   useEffect(() => {
    getAdvice();
  }, []); */

  async function getAdvice() {
    try {
      const res = await fetch('https://api.adviceslip.com/advice');

      if (!res.ok) {
        throw new Error(`Res status: ${res.status}`);
      }

      const data: AdviceSlip = await res.json();
      setMessage({ id: data.slip.id, advice: data.slip.advice });
    } catch (error) {
      console.log(error);
      setMessage({
        id: 1,
        advice: `Can't connect to the server try again later`,
      });
    }
  }

  return (
    <>
      <div className="bg-myBlue-900 p-8 rounded-xl grid gap-8 relative max-w-[500px]">
        <h1 className="text-myGreen-300  text-center text-sm tracking-widest">
          Advice #{message ? message.id : ''}
        </h1>
        <p className="text-center text-myBlue-200 font-bold text-[1.2rem] opacity-100">
          "{message ? message.advice : `Let's see what the fate holds`}"
        </p>

        <div className="flex justify-center">
          <img src={pattern} alt="" />
        </div>
        <div></div>
        <button
          className="bg-myGreen-300 absolute p-2 rounded-[50%] flex justify-center items-center -bottom-5 left-1/2 -translate-x-1/2 w-11 h-11 cursor-pointer hover:bg-green-400"
          onClick={getAdvice}
        >
          <span>
            <img src={iconDice} alt="" className="w-5" />
          </span>
        </button>
      </div>
    </>
  );
}

export default App;
