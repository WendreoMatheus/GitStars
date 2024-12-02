export interface IRepo {
    id:                       number;
    nodeID:                   string;
    owner:                    IOwner;
    private:                  string;
    name:                     string;
    htmlURL:                  string;
    description:              string;
    url:                      string;
    createdAt:                Date;
    updatedAt:                Date;
    homepage:                 null | string;
    size:                     number;
    watchersCount:            number;
    language:                 string;
    forksCount:               number;
    openIssuesCount:          number;
    allowForking:             boolean;
    visibility:               string;
    forks:                    number;
    openIssues:               number;
    watchers:                 number;
    subscribersCount:         number;
}

interface IOwner {
    login: string
}