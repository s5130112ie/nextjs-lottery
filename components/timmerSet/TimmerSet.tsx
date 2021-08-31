import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setLotterySec } from "../../redux/lotterySlice";

export const TimmerSet: React.FC = () => {
  const [minute, setMinute] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h3>抽獎時間</h3>
      <div>
        <input
          type="number"
          style={{ width: "80px" }}
          value={minute}
          onChange={(e) => setMinute(e.target.value)}
        />
        <span style={{ margin: '0px 20px' }}>分鐘</span>
        <button
          style={{ color: '#fff', backgroundColor: '#343a40', borderColor: '#343a40' }}
          onClick={() => {
            let numbers = /^[0-9]+$/;
            if (!minute.match(numbers) || Number(minute) > 60 || Number(minute) < 0) {
                alert('請輸入0~60的數字'); return "";
            }
            dispatch(setLotterySec(Number(minute) * 60));
          }}
        >
          設定
        </button>
      </div>
    </div>
  );
}