import {NavLink} from "react-router-dom";
import styles from './style.module.css'
import React from "react";
import {RepositoryInterface} from "../../types";

type DetailedRepositoryPropsType = {
    repository: RepositoryInterface
};

export function DetailedRepository(props: DetailedRepositoryPropsType) {
    const {repository} = props;

    return (
        <div className={styles.DetailedRepository}>
            <NavLink to='/'>
                <button>Вернуться к списку</button>
            </NavLink>
            <img className={styles.RepositoryLogo}
                 src={repository.owner.avatar_url}/>
            <a className={styles.RepositoryLink}
               href={repository.html_url}>
                {repository.full_name}
            </a>
            <span className={styles.StringInfo}>Число старов: {repository.stargazers_count}</span>
            <span className={styles.StringInfo}>Число форков: {repository.forks}</span>
            <span className={styles.StringInfo}>Создан: {repository.created_at}</span>
            <span className={styles.StringInfo}>Описание: {repository.description}</span>
            <span className={styles.StringInfo}>Язык: {repository.language}</span>
            <span className={styles.StringInfo}>Принадлежит: {repository.owner.login}</span>
        </div>
    );
};