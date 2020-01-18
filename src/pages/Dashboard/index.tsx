import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, RepoTile } from "../../components";
import apiGit from "../../services/apigit";
import "./styles.css";
import paginate from "jw-paginate";

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

export type DashboardProps = {};
export const Dashboard: React.FC<DashboardProps> = () => {
  const [repos, setRepos] = useState<RepoTileProps[]>([]);
  const [page, setPage] = useState(1);
  let paginateData = paginate(repos.length, page, 5);

  const exitPage = () => localStorage.setItem("user", "");

  useEffect(() => {
    console.log("UseEffect");
    async function loadRepo() {
      const user = localStorage.getItem("user");
      apiGit.get(user + "/repos", {}).then(res => setRepos(res.data));
    }
    loadRepo();
  }, []);

  useEffect(() => console.log(repos), [repos]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    paginateData = paginate(repos.length, page, 5);
  }, [page]);

  return (
    <>
      <ul className="repos-list">
        {repos
          .slice(paginateData.startIndex, paginateData.endIndex + 1)
          .map(repoData => RepoTile(repoData))}
      </ul>
      <div className="pagination">
        <Button
          onClick={() => setPage(page - 1)}
          disabled={page === paginateData.startPage}
          key="backwards"
        >
          Anterior
        </Button>
        <div style={{ width: "5px" }} />
        <Button
          onClick={() => setPage(page + 1)}
          disabled={page === paginateData.endPage}
          key="forwards"
        >
          Próximo
        </Button>
      </div>
      <Link to="/">
        <Button onClick={exitPage}>Sair</Button>
      </Link>
    </>
  );
};

export default Dashboard;
