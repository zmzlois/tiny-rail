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
                baseEnvironmentId
                description
                expiredAt
                id
                name
                subscriptionPlanLimit
                subscriptionType
                updatedAt
            }
        }
    }
}
`