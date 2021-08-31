import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { TimmerSet, MemberList, DisplayTime, DisplayResult } from "../components";
import { RootState } from "../redux/store";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  const isTimeout: boolean = useSelector((state: RootState) => state.lotto.isTimeout);
  
  return (
    <div className={styles.App}>
      {isTimeout ? <DisplayResult /> :
        <div className={styles.row}>
          <div className={styles.col}
            style={{
              marginLeft: '30px',
              flexGrow: 2,
              textAlign: "left",
            }}>
            <TimmerSet />
            <DisplayTime />
          </div>
          <div style={{ width: "35%" }}>
            <h3>參與抽獎名單</h3>
            <MemberList />
          </div>
        </div>
      }
    </div>
  )
}

export default Home
