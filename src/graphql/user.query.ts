import { gql, useQuery } from '@apollo/client';

export const userQuery = gql`
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
`