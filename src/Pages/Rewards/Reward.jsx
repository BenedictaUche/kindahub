import React from "react";
import rewardImg from "../../assets/reward.png";


const Reward = () => {
  return (
    <div className="flex justify-between bg-slate-50 min-h-screen p-10">
      <div className="inline-flex flex-col gap-10">
        <h2 className="text-[30px] font-bold">Your reward points</h2>
        <h1 className="text-pink-700 text-6xl font-extrabold">2500</h1>
        <p className="w-[555px] text-black text-[25px] font-lg">
          Congratulations! You have accumulated 2500 reward points for helping
          others with their code. Keep up the great work!
        </p>
        <div>
        <button className="bg-pink-400 rounded-lg h-[3em] px-4 text-pink-950 text-[15px] font-medium">Reedem points</button>
        </div>
      </div>
      <div>
        <img src={rewardImg} alt="A reward icon" />
      </div>
    </div>
  );
};

export default Reward;
