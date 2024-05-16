type Project = {
    node: {
        description: string
        id: string
        name: string
        updatedAt: string
        services: {
            edges: Array<{
                node: {
                    id: string
                    deployments: {
                        edges: Array<{
                            node: {
                                staticUrl?: string
                            }
                        }>
                    }
                }
            }>
        }
    }
}