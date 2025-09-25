import Lottie from "lottie-react";
import notfound from "../../assets/lotties/Page Not Found 404.json"
import loading from "../../assets/lotties/loading.json"
import empty from "../../assets/lotties/Empty box by partho.json"
import React from "react";

const lottiesFilesMap={
    notfound,
    loading,
    empty
};

export default function LottieHandler({type,message}) {
    const lottie=lottiesFilesMap[type];
  return (
    <div className="flex flex-col items-center justify-center text-center ">
      <Lottie animationData={lottie} className=" h-[600px]"/>
      {
        message&&<h3 className="text-red-500 text-center" >{message}</h3>
      }
    </div>
  )
}


