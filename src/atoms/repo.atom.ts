import { api } from '@/config/api';
import { IRepo } from '@/models';
import { atom } from 'jotai';

export const REPO_DETAIL_ATOM = atom<IRepo | undefined>();
export const REPO_DETAIL_ERROR_ATOM = atom<string | undefined>();
export const REPO_DETAIL_LOADING_ATOM = atom<boolean>(true);

export const FETCH_REPO_DETAIL_ATOM = atom(
  null,
  async (_get, set, { username, repoName }) => {
    set(REPO_DETAIL_ATOM, undefined); 
    try {
      const response = await api.get(`/repos/${username}/${repoName}`);
      set(REPO_DETAIL_ATOM, response.data);
      set(REPO_DETAIL_LOADING_ATOM, true)
    } catch (error) {
      console.log(error)
      set(REPO_DETAIL_ERROR_ATOM, "Erro ao buscar repositório");
    } finally {
        set(REPO_DETAIL_LOADING_ATOM, false)
    }
  }
);
