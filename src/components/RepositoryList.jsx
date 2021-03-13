import { useState, useEffect } from "react";

import RepositoryItem from "./RepositoryItem";

import '../styles/repositories.scss'

// https://api.github.com/orgs/rocketseat/repos


function RespositoryList() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => (
          <RepositoryItem repository={repository} key={repository.name} />
        ))}

      </ul>
    </section>
  );
}

export default RespositoryList;
