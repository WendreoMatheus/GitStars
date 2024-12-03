import { IRepo } from "@/models";
import { atom } from "jotai";
import axios, { AxiosError } from "axios";

export const REPOS_LIST_ATOM = atom<Array<IRepo> | undefined>()

export const REPOS_ERROR_ATOM = atom<string|undefined>(undefined)

export const REPOS_LOADING_ATOM = atom<boolean>(false)

export const GET_REPOS_LIST_ATOM = atom(
    null,
    async (_get, set, username) => {
        console.log(username)
            set(REPOS_LIST_ATOM, undefined)
            
            set(REPOS_LOADING_ATOM, true)
            
            set(REPOS_ERROR_ATOM, undefined)

        try {
            const response = await axios.get(`/api.github.com/users/${username}/repos`);
            set(REPOS_LIST_ATOM, response.data)
        } catch (error) {
            if (axios.isAxiosError(error)) {
            const { response } = error as AxiosError<{ msg: string } >;

            if (response && response.data && response.data.msg) {
                set(REPOS_ERROR_ATOM, response.data.msg);
            } else {
                set(REPOS_ERROR_ATOM, 'Erro desconhecido ou sem mensagem');
            }
            } else {
                console.log(error)
            set(REPOS_ERROR_ATOM, 'Erro desconhecido');
            }
        } finally {
            set(REPOS_LOADING_ATOM, false)
        }
    }
)