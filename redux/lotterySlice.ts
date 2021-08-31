import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface WinnerDataType {
    id: number,
    name: string
}

export interface lotteryState {
    isTimeout: boolean;
    sec: number;
    winnerData: WinnerDataType;
}

const initialState: lotteryState = {
    isTimeout: false,
    sec: 0,
    winnerData: { id: 0, name: "" },
}

const lotterySlice = createSlice({
    name: "lotto",
    initialState,
    reducers: {
        setLotterySec(state, action: PayloadAction<number>) {   
            return {...initialState, sec: action.payload};
        },
        setLotteryTimeOut(state) {
            state.isTimeout = true;
        },
        setWinnerData(state, action: PayloadAction<WinnerDataType>) {
            state.winnerData = { id: action.payload.id, name: action.payload.name };
        }
    }
})

export const { setLotterySec, setLotteryTimeOut, setWinnerData } = lotterySlice.actions;
export default lotterySlice.reducer;
