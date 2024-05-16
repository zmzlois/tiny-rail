import { graphql } from "gql.tada"


export const userQuery = `
query User {
    me {
        avatar
        email
        id
        name
        username
        customer {
            teamId
            userId
        }
     
        teams {
            edges {
                node {
                    id
                    name
                }
            }
        }
    }
   
}
`

export const userProjectQuery = `query Projects {
    projects {
        edges {
            node {
                description
                id
                name
                updatedAt
                services {
                    edges {
                        node {
                            id
                            deployments {
                                edges {
                                    node {
                                        staticUrl
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


`