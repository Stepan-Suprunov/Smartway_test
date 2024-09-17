import styles from "./style.module.css";
import React from "react";

type MainLayoutPropsType = {
    children: React.ReactNode;
};

export function MainLayout (props: MainLayoutPropsType) {
    const {children} = props;

    return (
        <div className={styles.MainLayout}>
            {children}
        </div>
    );
};