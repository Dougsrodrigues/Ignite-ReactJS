interface RespositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

function RepositoryItem(props: RespositoryItemProps) {
  return (
    <li>
      <strong>{props.repository?.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>Acessar repositório</a>
    </li>
  );
}

export default RepositoryItem;
