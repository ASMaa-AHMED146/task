import { Suspense } from "react";
import LottieHandler from "./LottieHandler";
import React from "react";

const pageSuspenseFallback=({children})=>{
    return(
        <Suspense fallback={
            <LottieHandler type='loading' message='loading please wait..'/>
        }>
            {children}
        </Suspense>
    )
}
export default pageSuspenseFallback;
