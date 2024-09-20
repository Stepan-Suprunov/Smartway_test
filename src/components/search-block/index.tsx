import React, {ChangeEvent, useCallback} from "react";
import {repositoriesStore} from "../../stores";
import {observer} from "mobx-react";
import throttle from "lodash.throttle";
import {Input, ClipboardCopyButton} from "../index";

function SearchBlockComponent () {

    const [input, setInput] = React.useState("");

    const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        throttledLoadRepositories(e.target.value)
    }, []);

    const throttledLoadRepositories = useCallback(
        throttle((title) => {
            repositoriesStore.getRequest(title);
        }, 2000),
        [repositoriesStore.getRequest]
    );

    return (
        <div>
            <Input placeholder='Введите название репозитория'
                   onChangeHandler={onChangeHandler}
                   value={input}/>
        <ClipboardCopyButton title={'Копировать'} text={input}/>
        </div>
    );
};

export const SearchBlock = observer(SearchBlockComponent);