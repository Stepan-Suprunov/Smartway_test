import styles from "../layouts/top-layer-layout/style.module.css";
import React from "react";

type ButtonPropsType = {
    title: string
};

export function Button (props: ButtonPropsType) {
    return (
        <button className={styles.CopyButton}>
            {props.title}
        </button>
    );
};