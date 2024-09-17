import styles from "./style.module.css";
import React, {ChangeEvent} from "react";

type InputPropsType = {
    placeholder: string
    setTitle: (title: string) => void
};

export function Input (props: InputPropsType) {

    const [title, setTitle] = React.useState("");

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            props.setTitle(title)
            setTitle('')
        }
    };

    return (
        <input className={styles.RepositoryInput}
               placeholder={props.placeholder}
               onChange={onChangeHandler}
               value={title}
               onKeyPress={onKeyPressHandler}/>
    );
};