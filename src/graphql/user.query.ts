import { graphql } from "gql.tada"

export const userQuery = graphql(`
query User {
    me {
        avatar
        createdAt
        email
        id
        name
        termsAgreedOn
        username
        customer {
            teamId
            userId
        }
    }
    projects {
        edges {
            node {
                baseEnvironmentId
                createdAt
                deletedAt
                description
                expiredAt
                id
                isPublic
                isTempProject
                name
                prDeploys
                prForks
                subscriptionPlanLimit
                subscriptionType
                teamId
                updatedAt
            }
        }
    }
}
`)