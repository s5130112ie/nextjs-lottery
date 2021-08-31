import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { setWinnerData } from "../../redux/lotterySlice";
import memberData from "../mockupdata/member.json";
import styles from "../../styles/Home.module.css";

export const DisplayResult: React.FC = () => {
    const winnerData: any = useSelector((state: RootState) => state.lotto.winnerData);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        const wIndex: number = Math.floor(Math.random() * memberData.length);
        dispatch(setWinnerData({ id: memberData[wIndex].id, name: memberData[wIndex].name }))
    }, []);

    return (
        <div>
            <h3>抽獎結果</h3>
            <div>
                <div className={styles.col} style={{ width: "35%", border: "1px solid #ddd", margin: "30px auto" }}>
                    <img alt="robot" src={`https://robohash.org/${winnerData.id}`}
                        style={{ backgroundColor: "#4fafbf", width: "100%" }}
                    />
                    <div style={{ textAlign: "left", marginLeft: "20px", lineHeight: "20px" }}>{winnerData.name}</div>
                </div>
            </div>
        </div>
    )
}