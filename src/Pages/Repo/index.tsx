import { useEffect } from 'react';
import { useSetAtom, useAtomValue } from 'jotai';
import { useParams } from 'react-router';
import { REPO_DETAIL_ATOM, FETCH_REPO_DETAIL_ATOM } from '@/atoms/repo.atom';
import { REPO_DETAIL_ERROR_ATOM, REPO_DETAIL_LOADING_ATOM } from '@/atoms/repo.atom';
import { Breadcrumb } from '@/components';

const RepoDetail = () => {
  const { username, repoName } = useParams(); 
  const fetchRepoDetail = useSetAtom(FETCH_REPO_DETAIL_ATOM);
  const repo = useAtomValue(REPO_DETAIL_ATOM);
  const error = useAtomValue(REPO_DETAIL_ERROR_ATOM);
  const loading = useAtomValue(REPO_DETAIL_LOADING_ATOM);

  useEffect(() => {
    fetchRepoDetail({ username, repoName });
  }, [username, repoName]);

  if (loading) {
    return <div className="notification is-info">Carregando...</div>;
  }

  if (error || !repo) {
    return <div className="notification is-danger">{error ? error : 'Repositório não encontrado'}</div>;
  }

  return (
    <div className="container mt-5">
      <Breadcrumb />
      <div className="card">
        <div className="card-content">
          <p className="title is-4">{repo.name}</p>
          <p className="subtitle is-6">{repo.language || 'Sem linguagem'}</p>
          <div className="content">
            {repo.description || 'Nenhuma descrição disponível.'}
            <br />
            <strong>⭐ Estrelas:</strong> {repo.stargazers_count}
            <br />
            <strong>🍴 Forks:</strong> {repo.forks_count}
            <br />
            <strong>🔗 Link:</strong>{' '}
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              Visite o repositório no GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoDetail;
