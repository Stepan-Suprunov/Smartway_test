import styles from "./style.module.css";
import React, {ChangeEvent} from "react";
import {requestStore} from "../../stores/request-store";
import {observer} from "mobx-react";

type InputPropsType = {
    placeholder: string
};

function InputComponent (props: InputPropsType) {

    const [title, setTitle] = React.useState("");

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            requestStore.setRequest(title);
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

export const Input = observer(InputComponent);