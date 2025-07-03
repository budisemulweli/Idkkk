
import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

export default function IceCreamCoupon() {
  const [rewardShown, setRewardShown] = useState(false);
  const [redirectPrompt, setRedirectPrompt] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [noBtnPosition, setNoBtnPosition] = useState({ top: "0px", left: "0px" });
  const [dodgeNo, setDodgeNo] = useState(false);

  const handleYes = () => {
    setRewardShown(true);
    setConfetti(true);
    setRedirectPrompt(true);
  };

  const handleMouseOver = () => {
    const top = Math.floor(Math.random() * 300) + "px";
    const left = Math.floor(Math.random() * 200) + "px";
    setNoBtnPosition({ top, left });
  };

  const handleRedirect = () => {
    window.location.href =
      "https://wa.me/27670177765?text=Hey!%20I%20just%20claimed%20my%20ice%20cream%20date%20coupon%20🍦";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-blue-100 p-4">
      {confetti && <Confetti numberOfPieces={200} recycle={false} />}

      <motion.h1
        className="text-2xl md:text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        You brighten the internet a bit today 🌞
      </motion.h1>

      {!rewardShown && (
        <div className="space-x-4 relative h-[100px]">
          <button onClick={handleYes} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl">
            Yes
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl absolute"
            style={noBtnPosition}
            onMouseOver={handleMouseOver}
          >
            No
          </button>
        </div>
      )}

      {rewardShown && (
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-6 max-w-md text-center mt-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-pink-600 mb-2">
            🍦 Ice Cream Date Coupon
          </h2>
          <img
            src="https://cdn-icons-png.flaticon.com/512/857/857681.png"
            alt="Ice Cream"
            className="w-20 mx-auto my-4"
          />
          <p className="text-gray-600">
            This coupon entitles you to one delicious ice cream date with me. Redeemable anytime
            you're in the mood for sprinkles and smiles 😊
          </p>

          {redirectPrompt && (
            <div className="mt-6">
              <p className="font-medium text-gray-700 mb-2">
                Would you like to redeem this coupon by chatting on WhatsApp?
              </p>
              <div className="relative h-[60px]">
                <button onClick={handleRedirect} className="mr-4 bg-green-500 text-white px-4 py-2 rounded-xl">
                  Yes 😄
                </button>
                {dodgeNo ? (
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-xl absolute"
                    onMouseOver={() => {
                      const top = Math.floor(Math.random() * 50) + "px";
                      const left = Math.floor(Math.random() * 150) + "px";
                      setNoBtnPosition({ top, left });
                    }}
                    style={noBtnPosition}
                  >
                    No 😅
                  </button>
                ) : (
                  <button
                    onClick={() => setDodgeNo(true)}
                    className="bg-red-500 text-white px-4 py-2 rounded-xl"
                  >
                    No 😅
                  </button>
                )}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
