import styles from "./style.module.css";
import React, {ChangeEvent} from "react";

type InputPropsType = {
    placeholder?: string;
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
};

export function Input (props: InputPropsType) {
    const { placeholder, onChangeHandler, value } = props;

    return (
        <input className={styles.RepositoryInput}
               placeholder={placeholder}
               onChange={onChangeHandler}
               value={value}
        />
    );
};