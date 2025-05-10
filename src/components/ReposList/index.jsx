import { useEffect, useState } from "react";

import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => res.json())
        .then(resJson => {
            setRepos(resJson)
        })
    }, [nomeUsuario]);

    return (
        <div className="container">
            <ul className={styles.list}>
                {repos.map(respositorio => (
                    <li className={styles.listItem} key={respositorio.id}>
                        <div className={styles.itemName}>
                        <b>Nome:</b> {respositorio.name} <br />
                        </div>
                        <div className={styles.itemLanguage}>
                        <b>Linguagem:</b> {respositorio.language} <br />
                        </div>
                        <div className={styles.itemLink}>
                        <a className={styles.itemLink} href={respositorio.html_url} target="_blank">Visitar no GitHub</a>
                        </div>
                    </li>
                ))}
            </ul>        
        </div>
    )
}

export default ReposList;