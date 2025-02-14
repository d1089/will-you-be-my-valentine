"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a nice hot chocolate...",
      "What about some savoury, to relish 😘😋",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to my ghost now",
      ":((((",
      "PRETTY CUTTTTTIEEEEEE",
      "Palakkkkkk !!!!",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <div className="flex space-x-1">
            <img
              // src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              src="https://gifdb.com/images/high/cuddling-milk-and-mocha-bear-lifting-n3r8nthjt77zlvyw.webp"
              className="w-auto h-auto"
            />
            <img
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              className="w-auto h-auto"
            />
          </div>
          <>
            <div className="my-4 text-4xl font-bold">
              WOOOOOO!!! I love you sooooo much, my pookie!! ;))
            </div>
          </>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            // src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            src="https://gifdb.com/images/high/hello-animated-milk-and-mocha-mad-poke-wczos5085dw6qo6c.webp"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
