import styles from "./style.module.css";
import React from "react";

type TopLayerPropsType = {
    children: React.ReactNode;
};

export function TopLayerLayout(props: TopLayerPropsType) {
    const {children} = props;

    return (
        <div className={styles.ButtonInput}>
            {children}
        </div>
    );
};