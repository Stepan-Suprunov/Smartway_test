import {makeAutoObservable} from "mobx";

class RequestStore {
    request: string = "";

    constructor() {
        makeAutoObservable(this);
    };

    setRequest(request: string) {
        this.request = request;
    };
};

export const requestStore = new RequestStore();