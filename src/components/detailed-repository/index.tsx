import {NavLink} from "react-router-dom";
import styles from './style.module.css'
import {detailRepositoryStore} from "../../stores/detailed-repository-store";
import React from "react";

export function DetailedRepository() {
    return (
        <div className={styles.DetailedRepository}>
            <NavLink to='/'>
                <button>Вернуться к списку</button>
            </NavLink>
            <img className={styles.RepositoryLogo}
                 src={detailRepositoryStore.repository.owner.avatar_url}/>
            <a className={styles.RepositoryLink}
               href={detailRepositoryStore.repository.html_url}>
                {detailRepositoryStore.repository.full_name}
            </a>
            <span className={styles.StringInfo}>Число старов: {detailRepositoryStore.repository.stargazers_count}</span>
            <span className={styles.StringInfo}>Число форков: {detailRepositoryStore.repository.forks}</span>
            <span className={styles.StringInfo}>Создан: {detailRepositoryStore.repository.created_at}</span>
            <span className={styles.StringInfo}>Описание: {detailRepositoryStore.repository.description}</span>
            <span className={styles.StringInfo}>Язык: {detailRepositoryStore.repository.language}</span>
            <span className={styles.StringInfo}>Принадлежит: {detailRepositoryStore.repository.owner.login}</span>
        </div>
    );
};