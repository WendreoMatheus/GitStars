import { IRepo } from "@/models";
import { Serializer } from "miragejs";

export const RepoSerializer = Serializer.extend({
    serialize(object): IRepo {
        const repo = object.attrs || object
        return {
            id: repo.id,
            nodeID: repo.node_id,
            owner: repo.owner.login,
            private: repo.private ? 'true' : 'false',
            name: repo.name,
            htmlURL: repo.html_url,
            description: repo.description,
            url: repo.url,
            createdAt: new Date(repo.created_at),
            updatedAt: new Date(repo.updated_at),
            homepage: repo.homepage,
            size: repo.size,
            watchersCount: repo.watchers_count,
            language: repo.language,
            forksCount: repo.forks_count,
            openIssuesCount: repo.open_issues_count,
            allowForking: repo.allow_forking,
            visibility: repo.visibility,
            forks: repo.forks,
            openIssues: repo.open_issues,
            watchers: repo.watchers,
            subscribersCount: repo.subscribers_count,
        }
    }
})