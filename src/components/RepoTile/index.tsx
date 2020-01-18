import React from "react";

export type Owner = {
  avatar_url: string;
};

export type RepoTileProps = {
  id: number;
  owner: Owner;
  html_url: string;
  name: string;
  language: string;
};
export const RepoTile: React.FC<RepoTileProps> = ({
  id,
  owner,
  html_url,
  name,
  language
}) => {
  console.log({ id });
  return (
    <li className="repos-item" key={id}>
      <header style={{ backgroundImage: `url(${owner.avatar_url})` }} />
      <div className="repos-content">
        <strong>
          <a className="repos-link" target="blank" href={html_url}>
            {name}
          </a>
        </strong>
        <p>
          {language ? `Linguagem: ${language}` : "Linguagem: Não cadastrada"}
        </p>
      </div>
    </li>
  );
};

export default RepoTile;