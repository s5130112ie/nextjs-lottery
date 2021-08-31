import React, { useEffect, useRef } from "react";
import memberData from "../mockupdata/member.json";
import styles from "../../styles/Home.module.css";

export const MemberList: React.FC = () => {
    return (
        <div style={{
            height: "500px",
            overflow: "scroll",
            border: "1px solid #ddd",
            marginRight: "20px",
            marginBottom: "40px",
        }}>
            {memberData.map((memberData, index) => {
                return (
                    <div key={index}
                        className={`${styles.row}
                            ${styles["member-list-container"]}`
                        }
                        style={{
                            margin: '15px',
                            backgroundColor: "#dcdcdc"
                        }}
                    >
                        <div className={styles.col}
                            style={{
                                backgroundColor: "#f5bf41"
                            }}>
                            <img alt="robot" src={`https://robohash.org/${memberData.id}`} />
                        </div>
                        <div className={styles.col}
                            style={{ flex: '3 1 auto', margin: 'auto' }}>
                            {memberData.username}
                        </div>
                    </div>
                );
            })}
        </div>
    )
}