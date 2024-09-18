import styles from "./style.module.css";
import React from "react";

type BodyLayoutPropsType = {
    children: React.ReactNode;
};

export function BodyLayout(props: BodyLayoutPropsType) {
    const {children} = props;

    return (
        <div className={styles.Body}>
            {children}
        </div>
    );
};