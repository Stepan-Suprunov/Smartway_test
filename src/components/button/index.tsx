import styles from "../layouts/top-layer-layout/style.module.css";
import React, {useCallback} from "react";
import clipboardCopy from "clipboard-copy";

type ButtonPropsType = {
    title: string
    text: string
};

export function Button (props: ButtonPropsType) {
    const {title, text} = props;

    const [buttonTitle, setButtonTitle] = React.useState(title);

    const onClickHandler = useCallback(async () => {
        setButtonTitle('Copied');
        await clipboardCopy(text);
        setTimeout(() => {
            setButtonTitle(title);
        }, 2000);
    }, [text]);

    return (
        <button className={styles.CopyButton}
                onClick={onClickHandler}>
            {buttonTitle}
        </button>
    );
};