import styles from "./style.module.css";
import React, {ChangeEvent, useCallback} from "react";
import {requestStore} from "../../stores/index";
import {observer} from "mobx-react";
import {Button} from "../button";

type InputPropsType = {
    placeholder: string
};

function InputComponent (props: InputPropsType) {
    const {placeholder} = props;

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        requestStore.setRequest(e.currentTarget.value);
    }, []);

    // const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === "Enter") {
    //         requestStore.setRequest(title);
    //         setTitle('')
    //     }
    // };

    return (
        <div>
        <input className={styles.RepositoryInput}
               placeholder={placeholder}
               onChange={onChangeHandler}
               value={requestStore.request}
               // onKeyPress={onKeyPressHandler}
        />
        <Button title={'Копировать'} text={requestStore.request}/>
        </div>
    );
};

export const Input = observer(InputComponent);