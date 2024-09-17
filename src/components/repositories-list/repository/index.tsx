import styles from "./style.module.css";
import React from "react";

type RepositoryPropsType = {
    repository: any
}

export function Repository (props: RepositoryPropsType) {
    return (
        <div className={styles.Repository}>
            <a className={styles.RepositoryLink}
               href={props.repository.html_url}>
                {props.repository.full_name}
            </a>
            <span className={styles.StargazersCount}>Число старов: {props.repository.stargazers_count}</span>
            <span className={styles.ForksCount}>Число форков: {props.repository.forks}</span>
            <img className={styles.RepositoryLogo}
                 src={props.repository.owner.avatar_url}/>
        </div>
    );
};