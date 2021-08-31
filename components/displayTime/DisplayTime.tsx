import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLotteryTimeOut } from "../../redux/lotterySlice";
import { RootState } from "../../redux/store";
import { AppDispatch } from "../../redux/store";

export const DisplayTime: React.FC = () => {
    const lottoSec = useSelector((state: RootState) => state.lotto.sec);
    const dispatch = useDispatch<AppDispatch>();
    
    const [sec, setSec] = useState(0);
    let ref = useRef<any>(null);

    useEffect(() => {
        clearInterval(ref.current);
        setSec(lottoSec);
    }, [lottoSec]);

    useEffect(() => {        
        if (sec > 0) {
            ref.current = setInterval(() => {
                setSec(sec - 1);
                if (sec === 1) {
                    dispatch(setLotteryTimeOut());
                }
                return clearInterval(ref.current);
            }, 1000);
        }
    }, [sec]);

    const culmin = Math.floor(sec/60);
    const culsec = Math.floor(sec%60);
    const displayMin = culmin >= 10 ? culmin : "0" + culmin;
    const displaySec = culsec >= 10 ? culsec : "0" + culsec;
    
    return (
        <div>
            <div
                style={{
                    fontSize: '10rem', color: 'blue', marginTop: "50px"
                }}>{displayMin}:{displaySec}</div>
        </div>
    )
}