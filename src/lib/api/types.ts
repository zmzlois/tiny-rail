export default {
    "scalars": [
        1,
        9,
        11,
        12,
        13,
        15,
        17,
        21,
        30,
        31,
        32,
        34,
        37,
        39,
        68,
        73,
        80,
        82,
        83,
        91,
        93,
        99,
        101,
        102,
        118,
        119,
        153,
        207,
        210,
        215,
        216,
        218,
        236,
        238,
        241,
        245,
        246,
        247,
        262,
        269,
        278,
        281,
        287,
        289,
        294,
        296,
        297,
        303,
        328,
        335
    ],
    "types": {
        "AccessRule": {
            "disallowed": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ActiveFeatureFlag": {},
        "AdoptionInfo": {
            "adoptionLevel": [
                73
            ],
            "createdAt": [
                34
            ],
            "customer": [
                250
            ],
            "deltaLevel": [
                73
            ],
            "id": [
                80
            ],
            "matchedIcpEmail": [
                241
            ],
            "monthlyEstimatedUsage": [
                73
            ],
            "numConfigFile": [
                83
            ],
            "numCronSchedule": [
                83
            ],
            "numDeploys": [
                83
            ],
            "numEnvs": [
                83
            ],
            "numFailedDeploys": [
                83
            ],
            "numHealthcheck": [
                83
            ],
            "numIconConfig": [
                83
            ],
            "numRegion": [
                83
            ],
            "numReplicas": [
                83
            ],
            "numRootDirectory": [
                83
            ],
            "numSeats": [
                83
            ],
            "numServices": [
                83
            ],
            "numSupportRequests": [
                83
            ],
            "numVariables": [
                83
            ],
            "numWatchPatterns": [
                83
            ],
            "totalCores": [
                73
            ],
            "totalDisk": [
                73
            ],
            "totalNetwork": [
                73
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                241
            ]
        },
        "AggregatedUsage": {
            "measurement": [
                101
            ],
            "tags": [
                103
            ],
            "value": [
                73
            ],
            "__typename": [
                241
            ]
        },
        "AllDomains": {
            "customDomains": [
                22
            ],
            "serviceDomains": [
                224
            ],
            "__typename": [
                241
            ]
        },
        "ApiToken": {
            "displayToken": [
                241
            ],
            "id": [
                80
            ],
            "name": [
                241
            ],
            "teamId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ApiTokenCreateInput": {
            "name": [
                241
            ],
            "teamId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "BanReasonHistory": {
            "actor": [
                301
            ],
            "banReason": [
                241
            ],
            "createdAt": [
                34
            ],
            "id": [
                80
            ],
            "__typename": [
                241
            ]
        },
        "BaseEnvironmentOverrideInput": {
            "baseEnvironmentOverrideId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "BigInt": {},
        "BillingPeriod": {
            "end": [
                34
            ],
            "start": [
                34
            ],
            "__typename": [
                241
            ]
        },
        "Boolean": {},
        "Builder": {},
        "CDNProvider": {},
        "CertificatePublicData": {
            "domainNames": [
                241
            ],
            "expiresAt": [
                34
            ],
            "fingerprintSha256": [
                241
            ],
            "issuedAt": [
                34
            ],
            "keyType": [
                93
            ],
            "__typename": [
                241
            ]
        },
        "CertificateStatus": {},
        "CnameCheck": {
            "link": [
                241
            ],
            "message": [
                241
            ],
            "status": [
                17
            ],
            "__typename": [
                241
            ]
        },
        "CnameCheckStatus": {},
        "Container": {
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "environment": [
                49
            ],
            "environmentId": [
                241
            ],
            "id": [
                80
            ],
            "migratedAt": [
                34
            ],
            "plugin": [
                113
            ],
            "pluginId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "Credit": {
            "amount": [
                73
            ],
            "createdAt": [
                34
            ],
            "customerId": [
                241
            ],
            "id": [
                80
            ],
            "memo": [
                241
            ],
            "type": [
                21
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                241
            ]
        },
        "CreditTransferMetrics": {
            "creditTransferAvg": [
                73
            ],
            "creditTransferCount": [
                83
            ],
            "creditTransferSum": [
                83
            ],
            "__typename": [
                241
            ]
        },
        "CreditType": {},
        "CustomDomain": {
            "cnameCheck": [
                16
            ],
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "domain": [
                241
            ],
            "environmentId": [
                241
            ],
            "id": [
                80
            ],
            "projectId": [
                241
            ],
            "serviceId": [
                241
            ],
            "status": [
                24
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                241
            ]
        },
        "CustomDomainCreateInput": {
            "domain": [
                241
            ],
            "environmentId": [
                241
            ],
            "projectId": [
                241
            ],
            "serviceId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "CustomDomainStatus": {
            "cdnProvider": [
                13
            ],
            "certificateStatus": [
                15
            ],
            "certificates": [
                14
            ],
            "dnsRecords": [
                33
            ],
            "__typename": [
                241
            ]
        },
        "Customer": {
            "appliedCredits": [
                73
            ],
            "billingEmail": [
                241
            ],
            "billingPeriod": [
                10
            ],
            "creditBalance": [
                73
            ],
            "credits": [
                26,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "defaultPaymentMethod": [
                109
            ],
            "defaultPaymentMethodId": [
                241
            ],
            "id": [
                80
            ],
            "invoices": [
                28
            ],
            "isPrepaying": [
                11
            ],
            "isTrialing": [
                11
            ],
            "isUsageSubscriber": [
                11
            ],
            "planLimitOverride": [
                111
            ],
            "remainingUsageCreditBalance": [
                73
            ],
            "state": [
                247
            ],
            "stripeCustomerId": [
                241
            ],
            "subscriptions": [
                29
            ],
            "teamId": [
                241
            ],
            "usageLimit": [
                298
            ],
            "userId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "CustomerCreditsConnection": {
            "edges": [
                27
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "CustomerCreditsConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                19
            ],
            "__typename": [
                241
            ]
        },
        "CustomerInvoice": {
            "amountPaid": [
                73
            ],
            "hostedURL": [
                241
            ],
            "invoiceId": [
                241
            ],
            "items": [
                244
            ],
            "paymentIntentStatus": [
                241
            ],
            "pdfURL": [
                241
            ],
            "periodEnd": [
                241
            ],
            "periodStart": [
                241
            ],
            "status": [
                241
            ],
            "subscriptionId": [
                241
            ],
            "total": [
                83
            ],
            "__typename": [
                241
            ]
        },
        "CustomerSubscription": {
            "billingCycleAnchor": [
                34
            ],
            "cancelAt": [
                241
            ],
            "cancelAtPeriodEnd": [
                11
            ],
            "couponId": [
                241
            ],
            "discounts": [
                243
            ],
            "id": [
                241
            ],
            "items": [
                244
            ],
            "latestInvoiceId": [
                241
            ],
            "nextInvoiceCurrentTotal": [
                83
            ],
            "nextInvoiceDate": [
                241
            ],
            "status": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "DNSRecordPurpose": {},
        "DNSRecordStatus": {},
        "DNSRecordType": {},
        "DNSRecords": {
            "currentValue": [
                241
            ],
            "fqdn": [
                241
            ],
            "hostlabel": [
                241
            ],
            "purpose": [
                30
            ],
            "recordType": [
                32
            ],
            "requiredValue": [
                241
            ],
            "status": [
                31
            ],
            "zone": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "DateTime": {},
        "Deployment": {
            "canRedeploy": [
                11
            ],
            "canRollback": [
                11
            ],
            "createdAt": [
                34
            ],
            "creator": [
                301
            ],
            "environment": [
                49
            ],
            "environmentId": [
                241
            ],
            "id": [
                80
            ],
            "meta": [
                37
            ],
            "projectId": [
                241
            ],
            "service": [
                219
            ],
            "serviceId": [
                241
            ],
            "snapshotId": [
                241
            ],
            "staticUrl": [
                241
            ],
            "status": [
                39
            ],
            "suggestAddServiceDomain": [
                11
            ],
            "updatedAt": [
                34
            ],
            "url": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "DeploymentListInput": {
            "environmentId": [
                241
            ],
            "includeDeleted": [
                11
            ],
            "projectId": [
                241
            ],
            "serviceId": [
                241
            ],
            "status": [
                40
            ],
            "__typename": [
                241
            ]
        },
        "DeploymentMeta": {},
        "DeploymentSnapshot": {
            "createdAt": [
                34
            ],
            "id": [
                80
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                241
            ]
        },
        "DeploymentStatus": {},
        "DeploymentStatusInput": {
            "in": [
                39
            ],
            "notIn": [
                39
            ],
            "__typename": [
                241
            ]
        },
        "DeploymentTrigger": {
            "baseEnvironmentOverrideId": [
                241
            ],
            "branch": [
                241
            ],
            "checkSuites": [
                11
            ],
            "environmentId": [
                241
            ],
            "id": [
                80
            ],
            "projectId": [
                241
            ],
            "provider": [
                241
            ],
            "repository": [
                241
            ],
            "serviceId": [
                241
            ],
            "validCheckSuites": [
                83
            ],
            "__typename": [
                241
            ]
        },
        "DeploymentTriggerCreateInput": {
            "branch": [
                241
            ],
            "checkSuites": [
                11
            ],
            "environmentId": [
                241
            ],
            "projectId": [
                241
            ],
            "provider": [
                241
            ],
            "repository": [
                241
            ],
            "rootDirectory": [
                241
            ],
            "serviceId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "DeploymentTriggerUpdateInput": {
            "branch": [
                241
            ],
            "checkSuites": [
                11
            ],
            "repository": [
                241
            ],
            "rootDirectory": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "Domain": {
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "domain": [
                241
            ],
            "environmentId": [
                241
            ],
            "id": [
                80
            ],
            "projectId": [
                241
            ],
            "serviceId": [
                241
            ],
            "updatedAt": [
                34
            ],
            "on_CustomDomain": [
                22
            ],
            "on_ServiceDomain": [
                224
            ],
            "__typename": [
                241
            ]
        },
        "DomainAvailable": {
            "available": [
                11
            ],
            "message": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "DomainWithStatus": {
            "cdnProvider": [
                13
            ],
            "certificateStatus": [
                15
            ],
            "certificates": [
                14
            ],
            "dnsRecords": [
                33
            ],
            "domain": [
                44
            ],
            "__typename": [
                241
            ]
        },
        "EgressGateway": {
            "ipv4": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "EgressGatewayCreateInput": {
            "environmentId": [
                241
            ],
            "serviceId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "Environment": {
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "deploymentTriggers": [
                51,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "deployments": [
                53,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "id": [
                80
            ],
            "isEphemeral": [
                11
            ],
            "meta": [
                55
            ],
            "name": [
                241
            ],
            "projectId": [
                241
            ],
            "serviceInstances": [
                57,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "sourceEnvironment": [
                49
            ],
            "unmergedChangesCount": [
                83
            ],
            "updatedAt": [
                34
            ],
            "variables": [
                60,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "volumeInstances": [
                62,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "__typename": [
                241
            ]
        },
        "EnvironmentCreateInput": {
            "ephemeral": [
                11
            ],
            "name": [
                241
            ],
            "projectId": [
                241
            ],
            "skipInitialDeploys": [
                11
            ],
            "sourceEnvironmentId": [
                241
            ],
            "stageInitialChanges": [
                11
            ],
            "__typename": [
                241
            ]
        },
        "EnvironmentDeploymentTriggersConnection": {
            "edges": [
                52
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "EnvironmentDeploymentTriggersConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                41
            ],
            "__typename": [
                241
            ]
        },
        "EnvironmentDeploymentsConnection": {
            "edges": [
                54
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "EnvironmentDeploymentsConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                35
            ],
            "__typename": [
                241
            ]
        },
        "EnvironmentMeta": {
            "baseBranch": [
                241
            ],
            "branch": [
                241
            ],
            "prCommentId": [
                83
            ],
            "prNumber": [
                83
            ],
            "prRepo": [
                241
            ],
            "prTitle": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "EnvironmentRenameInput": {
            "name": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "EnvironmentServiceInstancesConnection": {
            "edges": [
                58
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "EnvironmentServiceInstancesConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                227
            ],
            "__typename": [
                241
            ]
        },
        "EnvironmentTriggersDeployInput": {
            "environmentId": [
                241
            ],
            "projectId": [
                241
            ],
            "serviceId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "EnvironmentVariablesConnection": {
            "edges": [
                61
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "EnvironmentVariablesConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                317
            ],
            "__typename": [
                241
            ]
        },
        "EnvironmentVolumeInstancesConnection": {
            "edges": [
                63
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "EnvironmentVolumeInstancesConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                326
            ],
            "__typename": [
                241
            ]
        },
        "EstimatedUsage": {
            "estimatedValue": [
                73
            ],
            "measurement": [
                101
            ],
            "projectId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "Event": {
            "action": [
                241
            ],
            "createdAt": [
                34
            ],
            "environment": [
                49
            ],
            "environmentId": [
                241
            ],
            "id": [
                80
            ],
            "object": [
                241
            ],
            "payload": [
                91
            ],
            "project": [
                129
            ],
            "projectId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "EventBatchTrackInput": {
            "events": [
                70
            ],
            "__typename": [
                241
            ]
        },
        "EventFilterInput": {
            "action": [
                69
            ],
            "object": [
                69
            ],
            "__typename": [
                241
            ]
        },
        "EventProperties": {},
        "EventStringListFilter": {
            "in": [
                241
            ],
            "notIn": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "EventTrackInput": {
            "eventName": [
                241
            ],
            "properties": [
                68
            ],
            "ts": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ExplicitOwnerInput": {
            "id": [
                241
            ],
            "type": [
                215
            ],
            "__typename": [
                241
            ]
        },
        "FeatureFlagToggleInput": {
            "flag": [
                1
            ],
            "__typename": [
                241
            ]
        },
        "Float": {},
        "GitHubBranch": {
            "name": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "GitHubRepo": {
            "defaultBranch": [
                241
            ],
            "fullName": [
                241
            ],
            "id": [
                83
            ],
            "installationId": [
                241
            ],
            "isPrivate": [
                11
            ],
            "name": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "GitHubRepoDeployInput": {
            "branch": [
                241
            ],
            "projectId": [
                241
            ],
            "repo": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "GitHubRepoUpdateInput": {
            "environmentId": [
                241
            ],
            "projectId": [
                241
            ],
            "serviceId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "HerokuApp": {
            "id": [
                241
            ],
            "name": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "HerokuImportVariablesInput": {
            "environmentId": [
                241
            ],
            "herokuAppId": [
                241
            ],
            "projectId": [
                241
            ],
            "serviceId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ID": {},
        "Incident": {
            "id": [
                241
            ],
            "message": [
                241
            ],
            "status": [
                82
            ],
            "url": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "IncidentStatus": {},
        "Int": {},
        "Integration": {
            "config": [
                91
            ],
            "id": [
                80
            ],
            "name": [
                241
            ],
            "projectId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "IntegrationAuth": {
            "id": [
                80
            ],
            "integrations": [
                86,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "provider": [
                241
            ],
            "providerId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "IntegrationAuthIntegrationsConnection": {
            "edges": [
                87
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "IntegrationAuthIntegrationsConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                84
            ],
            "__typename": [
                241
            ]
        },
        "IntegrationCreateInput": {
            "config": [
                91
            ],
            "integrationAuthId": [
                241
            ],
            "name": [
                241
            ],
            "projectId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "IntegrationUpdateInput": {
            "config": [
                91
            ],
            "integrationAuthId": [
                241
            ],
            "name": [
                241
            ],
            "projectId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "InviteCode": {
            "code": [
                241
            ],
            "createdAt": [
                34
            ],
            "id": [
                80
            ],
            "project": [
                129
            ],
            "projectId": [
                241
            ],
            "role": [
                153
            ],
            "__typename": [
                241
            ]
        },
        "JSON": {},
        "JobApplicationCreateInput": {
            "email": [
                241
            ],
            "jobId": [
                241
            ],
            "name": [
                241
            ],
            "why": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "KeyType": {},
        "Log": {
            "attributes": [
                95
            ],
            "message": [
                241
            ],
            "severity": [
                241
            ],
            "tags": [
                96
            ],
            "timestamp": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "LogAttribute": {
            "key": [
                241
            ],
            "value": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "LogTags": {
            "deploymentId": [
                241
            ],
            "deploymentInstanceId": [
                241
            ],
            "environmentId": [
                241
            ],
            "pluginId": [
                241
            ],
            "projectId": [
                241
            ],
            "serviceId": [
                241
            ],
            "snapshotId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "LoginSessionAuthInput": {
            "code": [
                241
            ],
            "hostname": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "Maintenance": {
            "id": [
                241
            ],
            "message": [
                241
            ],
            "status": [
                99
            ],
            "url": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "MaintenanceStatus": {},
        "Metric": {
            "ts": [
                83
            ],
            "value": [
                73
            ],
            "__typename": [
                241
            ]
        },
        "MetricMeasurement": {},
        "MetricTag": {},
        "MetricTags": {
            "deploymentId": [
                241
            ],
            "environmentId": [
                241
            ],
            "pluginId": [
                241
            ],
            "projectId": [
                241
            ],
            "serviceId": [
                241
            ],
            "volumeId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "MetricsResult": {
            "measurement": [
                101
            ],
            "tags": [
                103
            ],
            "values": [
                100
            ],
            "__typename": [
                241
            ]
        },
        "MissingCommandAlertInput": {
            "page": [
                241
            ],
            "text": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "Mutation": {
            "apiTokenCreate": [
                241,
                {
                    "input": [
                        6,
                        "ApiTokenCreateInput!"
                    ]
                }
            ],
            "apiTokenDelete": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "baseEnvironmentOverride": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        8,
                        "BaseEnvironmentOverrideInput!"
                    ]
                }
            ],
            "customDomainCreate": [
                22,
                {
                    "input": [
                        23,
                        "CustomDomainCreateInput!"
                    ]
                }
            ],
            "customDomainDelete": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "customerMigrateToHobbyPlan": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "deploymentCancel": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "deploymentRedeploy": [
                35,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "usePreviousImageTag": [
                        11
                    ]
                }
            ],
            "deploymentRemove": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "deploymentRestart": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "deploymentRollback": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggerCreate": [
                41,
                {
                    "input": [
                        42,
                        "DeploymentTriggerCreateInput!"
                    ]
                }
            ],
            "deploymentTriggerDelete": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggerUpdate": [
                41,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        43,
                        "DeploymentTriggerUpdateInput!"
                    ]
                }
            ],
            "egressGatewayAssociationCreate": [
                47,
                {
                    "input": [
                        48,
                        "EgressGatewayCreateInput!"
                    ]
                }
            ],
            "emailChangeConfirm": [
                11,
                {
                    "nonce": [
                        241,
                        "String!"
                    ]
                }
            ],
            "emailChangeInitiate": [
                11,
                {
                    "newEmail": [
                        241,
                        "String!"
                    ]
                }
            ],
            "environmentCreate": [
                49,
                {
                    "input": [
                        50,
                        "EnvironmentCreateInput!"
                    ]
                }
            ],
            "environmentDelete": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "environmentRename": [
                49,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        56,
                        "EnvironmentRenameInput!"
                    ]
                }
            ],
            "environmentTriggersDeploy": [
                11,
                {
                    "input": [
                        59,
                        "EnvironmentTriggersDeployInput!"
                    ]
                }
            ],
            "eventBatchTrack": [
                11,
                {
                    "input": [
                        66,
                        "EventBatchTrackInput!"
                    ]
                }
            ],
            "eventTrack": [
                11,
                {
                    "input": [
                        70,
                        "EventTrackInput!"
                    ]
                }
            ],
            "fairUseAgree": [
                11,
                {
                    "agree": [
                        11,
                        "Boolean!"
                    ]
                }
            ],
            "featureFlagAdd": [
                11,
                {
                    "input": [
                        72,
                        "FeatureFlagToggleInput!"
                    ]
                }
            ],
            "featureFlagRemove": [
                11,
                {
                    "input": [
                        72,
                        "FeatureFlagToggleInput!"
                    ]
                }
            ],
            "githubRepoDeploy": [
                11,
                {
                    "input": [
                        76,
                        "GitHubRepoDeployInput!"
                    ]
                }
            ],
            "githubRepoUpdate": [
                11,
                {
                    "input": [
                        77,
                        "GitHubRepoUpdateInput!"
                    ]
                }
            ],
            "herokuImportVariables": [
                83,
                {
                    "input": [
                        79,
                        "HerokuImportVariablesInput!"
                    ]
                }
            ],
            "integrationCreate": [
                84,
                {
                    "input": [
                        88,
                        "IntegrationCreateInput!"
                    ]
                }
            ],
            "integrationDelete": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "integrationUpdate": [
                84,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        89,
                        "IntegrationUpdateInput!"
                    ]
                }
            ],
            "inviteCodeUse": [
                129,
                {
                    "code": [
                        241,
                        "String!"
                    ]
                }
            ],
            "jobApplicationCreate": [
                11,
                {
                    "input": [
                        92,
                        "JobApplicationCreateInput!"
                    ],
                    "resume": [
                        294,
                        "Upload!"
                    ]
                }
            ],
            "loginSessionAuth": [
                11,
                {
                    "input": [
                        97,
                        "LoginSessionAuthInput!"
                    ]
                }
            ],
            "loginSessionCancel": [
                11,
                {
                    "code": [
                        241,
                        "String!"
                    ]
                }
            ],
            "loginSessionConsume": [
                241,
                {
                    "code": [
                        241,
                        "String!"
                    ]
                }
            ],
            "loginSessionCreate": [
                241
            ],
            "loginSessionVerify": [
                11,
                {
                    "code": [
                        241,
                        "String!"
                    ]
                }
            ],
            "logout": [
                11
            ],
            "missingCommandAlert": [
                11,
                {
                    "input": [
                        105,
                        "MissingCommandAlertInput!"
                    ]
                }
            ],
            "pluginCreate": [
                113,
                {
                    "input": [
                        116,
                        "PluginCreateInput!"
                    ]
                }
            ],
            "pluginDelete": [
                11,
                {
                    "environmentId": [
                        241
                    ],
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "pluginReset": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        213,
                        "ResetPluginInput!"
                    ]
                }
            ],
            "pluginResetCredentials": [
                241,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        212,
                        "ResetPluginCredentialsInput!"
                    ]
                }
            ],
            "pluginRestart": [
                113,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        117,
                        "PluginRestartInput!"
                    ]
                }
            ],
            "pluginStart": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        117,
                        "PluginRestartInput!"
                    ]
                }
            ],
            "pluginUpdate": [
                113,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        120,
                        "PluginUpdateInput!"
                    ]
                }
            ],
            "preferencesUpdate": [
                123,
                {
                    "input": [
                        124,
                        "PreferencesUpdateData!"
                    ]
                }
            ],
            "privateNetworkCreateOrGet": [
                125,
                {
                    "input": [
                        126,
                        "PrivateNetworkCreateOrGetInput!"
                    ]
                }
            ],
            "privateNetworkEndpointCreateOrGet": [
                127,
                {
                    "input": [
                        128,
                        "PrivateNetworkEndpointCreateOrGetInput!"
                    ]
                }
            ],
            "privateNetworkEndpointDelete": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "privateNetworkEndpointRename": [
                11,
                {
                    "dnsName": [
                        241,
                        "String!"
                    ],
                    "id": [
                        241,
                        "String!"
                    ],
                    "privateNetworkId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "privateNetworksForEnvironmentDelete": [
                11,
                {
                    "environmentId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "projectClaim": [
                129,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "projectCreate": [
                129,
                {
                    "input": [
                        130,
                        "ProjectCreateInput!"
                    ]
                }
            ],
            "projectDelete": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "projectInvitationAccept": [
                147,
                {
                    "code": [
                        241,
                        "String!"
                    ]
                }
            ],
            "projectInvitationCreate": [
                140,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        143,
                        "ProjectInvitee!"
                    ]
                }
            ],
            "projectInvitationDelete": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "projectInvitationResend": [
                140,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "projectInviteUser": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        142,
                        "ProjectInviteUserInput!"
                    ]
                }
            ],
            "projectLeave": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "projectMemberRemove": [
                144,
                {
                    "input": [
                        145,
                        "ProjectMemberRemoveInput!"
                    ]
                }
            ],
            "projectMemberUpdate": [
                144,
                {
                    "input": [
                        146,
                        "ProjectMemberUpdateInput!"
                    ]
                }
            ],
            "projectTokenCreate": [
                241,
                {
                    "input": [
                        157,
                        "ProjectTokenCreateInput!"
                    ]
                }
            ],
            "projectTokenDelete": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "projectTransferConfirm": [
                11,
                {
                    "input": [
                        158,
                        "ProjectTransferConfirmInput!"
                    ]
                }
            ],
            "projectTransferInitiate": [
                11,
                {
                    "input": [
                        159,
                        "ProjectTransferInitiateInput!"
                    ]
                }
            ],
            "projectTransferToTeam": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        160,
                        "ProjectTransferToTeamInput!"
                    ]
                }
            ],
            "projectTransferToUser": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "projectUpdate": [
                129,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        161,
                        "ProjectUpdateInput!"
                    ]
                }
            ],
            "providerAuthRemove": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "recoveryCodeGenerate": [
                203
            ],
            "recoveryCodeValidate": [
                11,
                {
                    "input": [
                        202,
                        "RecoveryCodeValidateInput!"
                    ]
                }
            ],
            "referralInfoUpdate": [
                204,
                {
                    "input": [
                        205,
                        "ReferralInfoUpdateInput!"
                    ]
                }
            ],
            "sendCommunityThreadNotificationEmail": [
                11,
                {
                    "input": [
                        217,
                        "SendCommunityThreadNotificationEmailInput!"
                    ]
                }
            ],
            "serviceConnect": [
                219,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        220,
                        "ServiceConnectInput!"
                    ]
                }
            ],
            "serviceCreate": [
                219,
                {
                    "input": [
                        221,
                        "ServiceCreateInput!"
                    ]
                }
            ],
            "serviceDelete": [
                11,
                {
                    "environmentId": [
                        241
                    ],
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "serviceDisconnect": [
                219,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "serviceDomainCreate": [
                224,
                {
                    "input": [
                        225,
                        "ServiceDomainCreateInput!"
                    ]
                }
            ],
            "serviceDomainDelete": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "serviceDomainUpdate": [
                11,
                {
                    "input": [
                        226,
                        "ServiceDomainUpdateInput!"
                    ]
                }
            ],
            "serviceInstanceDeploy": [
                11,
                {
                    "environmentId": [
                        241,
                        "String!"
                    ],
                    "serviceId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceRedeploy": [
                11,
                {
                    "environmentId": [
                        241,
                        "String!"
                    ],
                    "serviceId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceUpdate": [
                11,
                {
                    "environmentId": [
                        241
                    ],
                    "input": [
                        228,
                        "ServiceInstanceUpdateInput!"
                    ],
                    "serviceId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "serviceRemoveUpstreamUrl": [
                219,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "serviceUpdate": [
                219,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        235,
                        "ServiceUpdateInput!"
                    ]
                }
            ],
            "sessionDelete": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "sharedVariableConfigure": [
                317,
                {
                    "input": [
                        239,
                        "SharedVariableConfigureInput!"
                    ]
                }
            ],
            "tcpProxyCreate": [
                248,
                {
                    "input": [
                        249,
                        "TCPProxyCreateInput!"
                    ]
                }
            ],
            "tcpProxyDelete": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "teamBulkProjectTransfer": [
                11,
                {
                    "input": [
                        251,
                        "TeamBulkProjectTransferInput!"
                    ]
                }
            ],
            "teamCreate": [
                250,
                {
                    "input": [
                        254,
                        "TeamCreateInput!"
                    ]
                }
            ],
            "teamCreateAndSubscribe": [
                253,
                {
                    "input": [
                        252,
                        "TeamCreateAndSubscribeInput!"
                    ]
                }
            ],
            "teamDelete": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "teamInviteCodeCreate": [
                241,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        256,
                        "TeamInviteCodeCreateInput!"
                    ]
                }
            ],
            "teamInviteCodeUse": [
                250,
                {
                    "code": [
                        241,
                        "String!"
                    ]
                }
            ],
            "teamLeave": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "teamPermissionChange": [
                11,
                {
                    "input": [
                        259,
                        "TeamPermissionChangeInput!"
                    ]
                }
            ],
            "teamUpdate": [
                250,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        263,
                        "TeamUpdateInput!"
                    ]
                }
            ],
            "teamUserInvite": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        264,
                        "TeamUserInviteInput!"
                    ]
                }
            ],
            "teamUserRemove": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        265,
                        "TeamUserRemoveInput!"
                    ]
                }
            ],
            "telemetrySend": [
                11,
                {
                    "input": [
                        266,
                        "TelemetrySendInput!"
                    ]
                }
            ],
            "templateClone": [
                267,
                {
                    "input": [
                        268,
                        "TemplateCloneInput!"
                    ]
                }
            ],
            "templateCreate": [
                267,
                {
                    "input": [
                        270,
                        "TemplateCreateInput!"
                    ]
                }
            ],
            "templateDelete": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        272,
                        "TemplateDeleteInput!"
                    ]
                }
            ],
            "templateDeploy": [
                274,
                {
                    "input": [
                        273,
                        "TemplateDeployInput!"
                    ]
                }
            ],
            "templateGenerate": [
                267,
                {
                    "input": [
                        276,
                        "TemplateGenerateInput!"
                    ]
                }
            ],
            "templateMaybeUnsetCommunityThreadSlug": [
                11,
                {
                    "communityThreadSlug": [
                        241,
                        "String!"
                    ]
                }
            ],
            "templatePublish": [
                267,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        279,
                        "TemplatePublishInput!"
                    ]
                }
            ],
            "templateServiceSourceEject": [
                11,
                {
                    "input": [
                        283,
                        "TemplateServiceSourceEjectInput!"
                    ]
                }
            ],
            "templateUnpublish": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "templateUpdate": [
                267,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        288,
                        "TemplateUpdateInput!"
                    ]
                }
            ],
            "twoFactorInfoCreate": [
                203,
                {
                    "input": [
                        291,
                        "TwoFactorInfoCreateInput!"
                    ]
                }
            ],
            "twoFactorInfoDelete": [
                11
            ],
            "twoFactorInfoSecret": [
                292
            ],
            "twoFactorInfoValidate": [
                11,
                {
                    "input": [
                        293,
                        "TwoFactorInfoValidateInput!"
                    ]
                }
            ],
            "upsertSlackChannelForTeam": [
                11,
                {
                    "teamId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "usageLimitRemove": [
                11,
                {
                    "input": [
                        299,
                        "UsageLimitRemoveInput!"
                    ]
                }
            ],
            "usageLimitSet": [
                11,
                {
                    "input": [
                        300,
                        "UsageLimitSetInput!"
                    ]
                }
            ],
            "userBetaLeave": [
                11
            ],
            "userDelete": [
                11
            ],
            "userDiscordDisconnect": [
                11
            ],
            "userFlagsRemove": [
                11,
                {
                    "input": [
                        304,
                        "UserFlagsRemoveInput!"
                    ]
                }
            ],
            "userFlagsSet": [
                11,
                {
                    "input": [
                        305,
                        "UserFlagsSetInput!"
                    ]
                }
            ],
            "userProfileUpdate": [
                11,
                {
                    "input": [
                        309,
                        "UserProfileUpdateInput!"
                    ]
                }
            ],
            "userTermsUpdate": [
                301
            ],
            "userUpdate": [
                301,
                {
                    "input": [
                        316,
                        "UserUpdateInput!"
                    ]
                }
            ],
            "variableCollectionUpsert": [
                11,
                {
                    "input": [
                        318,
                        "VariableCollectionUpsertInput!"
                    ]
                }
            ],
            "variableDelete": [
                11,
                {
                    "input": [
                        319,
                        "VariableDeleteInput!"
                    ]
                }
            ],
            "variableUpsert": [
                11,
                {
                    "input": [
                        320,
                        "VariableUpsertInput!"
                    ]
                }
            ],
            "volumeCreate": [
                324,
                {
                    "input": [
                        325,
                        "VolumeCreateInput!"
                    ]
                }
            ],
            "volumeDelete": [
                11,
                {
                    "volumeId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceUpdate": [
                11,
                {
                    "environmentId": [
                        241
                    ],
                    "input": [
                        327,
                        "VolumeInstanceUpdateInput!"
                    ],
                    "volumeId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "volumeUpdate": [
                324,
                {
                    "input": [
                        329,
                        "VolumeUpdateInput!"
                    ],
                    "volumeId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "webhookCreate": [
                164,
                {
                    "input": [
                        332,
                        "WebhookCreateInput!"
                    ]
                }
            ],
            "webhookDelete": [
                11,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "webhookUpdate": [
                164,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "input": [
                        333,
                        "WebhookUpdateInput!"
                    ]
                }
            ],
            "__typename": [
                241
            ]
        },
        "Node": {
            "id": [
                80
            ],
            "on_AdoptionInfo": [
                2
            ],
            "on_ApiToken": [
                5
            ],
            "on_BanReasonHistory": [
                7
            ],
            "on_Container": [
                18
            ],
            "on_Credit": [
                19
            ],
            "on_Customer": [
                25
            ],
            "on_Deployment": [
                35
            ],
            "on_DeploymentSnapshot": [
                38
            ],
            "on_DeploymentTrigger": [
                41
            ],
            "on_Environment": [
                49
            ],
            "on_Event": [
                65
            ],
            "on_Integration": [
                84
            ],
            "on_IntegrationAuth": [
                85
            ],
            "on_InviteCode": [
                90
            ],
            "on_PlanLimitOverride": [
                111
            ],
            "on_Plugin": [
                113
            ],
            "on_Preferences": [
                123
            ],
            "on_Project": [
                129
            ],
            "on_ProjectPermission": [
                147
            ],
            "on_ProjectToken": [
                156
            ],
            "on_ProjectWebhook": [
                164
            ],
            "on_ProviderAuth": [
                167
            ],
            "on_ReferralInfo": [
                204
            ],
            "on_Service": [
                219
            ],
            "on_ServiceInstance": [
                227
            ],
            "on_Session": [
                237
            ],
            "on_Team": [
                250
            ],
            "on_TeamPermission": [
                258
            ],
            "on_Template": [
                267
            ],
            "on_TemplateService": [
                280
            ],
            "on_UsageAnomaly": [
                295
            ],
            "on_UsageLimit": [
                298
            ],
            "on_User": [
                301
            ],
            "on_Variable": [
                317
            ],
            "on_Volume": [
                324
            ],
            "on_VolumeInstance": [
                326
            ],
            "__typename": [
                241
            ]
        },
        "PageInfo": {
            "endCursor": [
                241
            ],
            "hasNextPage": [
                11
            ],
            "hasPreviousPage": [
                11
            ],
            "startCursor": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "PaymentMethod": {
            "card": [
                110
            ],
            "id": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "PaymentMethodCard": {
            "brand": [
                241
            ],
            "country": [
                241
            ],
            "last4": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "PlanLimitOverride": {
            "config": [
                245
            ],
            "id": [
                80
            ],
            "__typename": [
                241
            ]
        },
        "PlatformStatus": {
            "incident": [
                81
            ],
            "isStable": [
                11
            ],
            "maintenance": [
                98
            ],
            "__typename": [
                241
            ]
        },
        "Plugin": {
            "containers": [
                114,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "deprecatedAt": [
                34
            ],
            "friendlyName": [
                241
            ],
            "id": [
                80
            ],
            "logsEnabled": [
                11
            ],
            "migrationDatabaseServiceId": [
                241
            ],
            "name": [
                119
            ],
            "project": [
                129
            ],
            "status": [
                118
            ],
            "variables": [
                121,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "__typename": [
                241
            ]
        },
        "PluginContainersConnection": {
            "edges": [
                115
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "PluginContainersConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                18
            ],
            "__typename": [
                241
            ]
        },
        "PluginCreateInput": {
            "environmentId": [
                241
            ],
            "friendlyName": [
                241
            ],
            "name": [
                241
            ],
            "projectId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "PluginRestartInput": {
            "environmentId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "PluginStatus": {},
        "PluginType": {},
        "PluginUpdateInput": {
            "friendlyName": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "PluginVariablesConnection": {
            "edges": [
                122
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "PluginVariablesConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                317
            ],
            "__typename": [
                241
            ]
        },
        "Preferences": {
            "buildFailedEmail": [
                11
            ],
            "changelogEmail": [
                11
            ],
            "communityEmail": [
                11
            ],
            "deployCrashedEmail": [
                11
            ],
            "id": [
                80
            ],
            "marketingEmail": [
                11
            ],
            "subprocessorUpdatesEmail": [
                11
            ],
            "usageEmail": [
                11
            ],
            "__typename": [
                241
            ]
        },
        "PreferencesUpdateData": {
            "buildFailedEmail": [
                11
            ],
            "changelogEmail": [
                11
            ],
            "communityEmail": [
                11
            ],
            "deployCrashedEmail": [
                11
            ],
            "marketingEmail": [
                11
            ],
            "subprocessorUpdatesEmail": [
                11
            ],
            "token": [
                241
            ],
            "usageEmail": [
                11
            ],
            "__typename": [
                241
            ]
        },
        "PrivateNetwork": {
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "dnsName": [
                241
            ],
            "environmentId": [
                241
            ],
            "name": [
                241
            ],
            "networkId": [
                9
            ],
            "projectId": [
                241
            ],
            "publicId": [
                241
            ],
            "tags": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "PrivateNetworkCreateOrGetInput": {
            "environmentId": [
                241
            ],
            "name": [
                241
            ],
            "projectId": [
                241
            ],
            "tags": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "PrivateNetworkEndpoint": {
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "dnsName": [
                241
            ],
            "privateIps": [
                241
            ],
            "publicId": [
                241
            ],
            "serviceInstanceId": [
                241
            ],
            "tags": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "PrivateNetworkEndpointCreateOrGetInput": {
            "environmentId": [
                241
            ],
            "privateNetworkId": [
                241
            ],
            "serviceId": [
                241
            ],
            "serviceName": [
                241
            ],
            "tags": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "Project": {
            "baseEnvironment": [
                49
            ],
            "baseEnvironmentId": [
                241
            ],
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "deploymentTriggers": [
                132,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "deployments": [
                134,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "description": [
                241
            ],
            "environments": [
                136,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "expiredAt": [
                34
            ],
            "groups": [
                138,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "id": [
                80
            ],
            "isPublic": [
                11
            ],
            "isTempProject": [
                11
            ],
            "members": [
                144
            ],
            "name": [
                241
            ],
            "plugins": [
                148,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "prDeploys": [
                11
            ],
            "prForks": [
                11
            ],
            "projectPermissions": [
                150,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "services": [
                154,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "subscriptionPlanLimit": [
                245
            ],
            "subscriptionType": [
                246
            ],
            "team": [
                250
            ],
            "teamId": [
                241
            ],
            "updatedAt": [
                34
            ],
            "volumes": [
                162,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "webhooks": [
                165,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "__typename": [
                241
            ]
        },
        "ProjectCreateInput": {
            "defaultEnvironmentName": [
                241
            ],
            "description": [
                241
            ],
            "isPublic": [
                11
            ],
            "name": [
                241
            ],
            "plugins": [
                241
            ],
            "prDeploys": [
                11
            ],
            "repo": [
                131
            ],
            "teamId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ProjectCreateRepo": {
            "branch": [
                241
            ],
            "fullRepoName": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ProjectDeploymentTriggersConnection": {
            "edges": [
                133
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "ProjectDeploymentTriggersConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                41
            ],
            "__typename": [
                241
            ]
        },
        "ProjectDeploymentsConnection": {
            "edges": [
                135
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "ProjectDeploymentsConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                35
            ],
            "__typename": [
                241
            ]
        },
        "ProjectEnvironmentsConnection": {
            "edges": [
                137
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "ProjectEnvironmentsConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                49
            ],
            "__typename": [
                241
            ]
        },
        "ProjectGroupsConnection": {
            "edges": [
                139
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "ProjectGroupsConnectionEdge": {
            "cursor": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ProjectInvitation": {
            "email": [
                241
            ],
            "expiresAt": [
                34
            ],
            "id": [
                80
            ],
            "inviter": [
                141
            ],
            "isExpired": [
                11
            ],
            "project": [
                168
            ],
            "__typename": [
                241
            ]
        },
        "ProjectInvitationInviter": {
            "email": [
                241
            ],
            "name": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ProjectInviteUserInput": {
            "email": [
                241
            ],
            "link": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ProjectInvitee": {
            "email": [
                241
            ],
            "role": [
                153
            ],
            "__typename": [
                241
            ]
        },
        "ProjectMember": {
            "avatar": [
                241
            ],
            "email": [
                241
            ],
            "id": [
                241
            ],
            "name": [
                241
            ],
            "role": [
                153
            ],
            "__typename": [
                241
            ]
        },
        "ProjectMemberRemoveInput": {
            "projectId": [
                241
            ],
            "userId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ProjectMemberUpdateInput": {
            "projectId": [
                241
            ],
            "role": [
                153
            ],
            "userId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ProjectPermission": {
            "id": [
                80
            ],
            "projectId": [
                241
            ],
            "role": [
                153
            ],
            "userId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ProjectPluginsConnection": {
            "edges": [
                149
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "ProjectPluginsConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                113
            ],
            "__typename": [
                241
            ]
        },
        "ProjectProjectPermissionsConnection": {
            "edges": [
                151
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "ProjectProjectPermissionsConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                147
            ],
            "__typename": [
                241
            ]
        },
        "ProjectResourceAccess": {
            "customDomain": [
                0
            ],
            "databaseDeployment": [
                0
            ],
            "deployment": [
                0
            ],
            "environment": [
                0
            ],
            "plugin": [
                0
            ],
            "__typename": [
                241
            ]
        },
        "ProjectRole": {},
        "ProjectServicesConnection": {
            "edges": [
                155
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "ProjectServicesConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                219
            ],
            "__typename": [
                241
            ]
        },
        "ProjectToken": {
            "createdAt": [
                34
            ],
            "displayToken": [
                241
            ],
            "environment": [
                49
            ],
            "environmentId": [
                241
            ],
            "id": [
                80
            ],
            "name": [
                241
            ],
            "project": [
                129
            ],
            "projectId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ProjectTokenCreateInput": {
            "environmentId": [
                241
            ],
            "name": [
                241
            ],
            "projectId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ProjectTransferConfirmInput": {
            "ownershipTransferId": [
                241
            ],
            "projectId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ProjectTransferInitiateInput": {
            "memberId": [
                241
            ],
            "projectId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ProjectTransferToTeamInput": {
            "teamId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ProjectUpdateInput": {
            "baseEnvironmentId": [
                241
            ],
            "description": [
                241
            ],
            "isPublic": [
                11
            ],
            "name": [
                241
            ],
            "prDeploys": [
                11
            ],
            "prForks": [
                11
            ],
            "__typename": [
                241
            ]
        },
        "ProjectVolumesConnection": {
            "edges": [
                163
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "ProjectVolumesConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                324
            ],
            "__typename": [
                241
            ]
        },
        "ProjectWebhook": {
            "id": [
                80
            ],
            "lastStatus": [
                83
            ],
            "projectId": [
                241
            ],
            "url": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ProjectWebhooksConnection": {
            "edges": [
                166
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "ProjectWebhooksConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                164
            ],
            "__typename": [
                241
            ]
        },
        "ProviderAuth": {
            "email": [
                241
            ],
            "id": [
                80
            ],
            "metadata": [
                91
            ],
            "provider": [
                241
            ],
            "userId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "PublicProjectInformation": {
            "id": [
                80
            ],
            "name": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "PublicProjectInvitation": {
            "on_InviteCode": [
                90
            ],
            "on_ProjectInvitation": [
                140
            ],
            "on_Node": [
                107
            ],
            "__typename": [
                241
            ]
        },
        "PublicStats": {
            "totalDeploymentsLastMonth": [
                83
            ],
            "totalLogsLastMonth": [
                9
            ],
            "totalProjects": [
                83
            ],
            "totalRequestsLastMonth": [
                9
            ],
            "totalServices": [
                83
            ],
            "totalUsers": [
                83
            ],
            "__typename": [
                241
            ]
        },
        "Query": {
            "adminVolumeInstancesForVolume": [
                326,
                {
                    "volumeId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "apiTokens": [
                172,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "buildLogs": [
                94,
                {
                    "deploymentId": [
                        241,
                        "String!"
                    ],
                    "endDate": [
                        34
                    ],
                    "filter": [
                        241
                    ],
                    "limit": [
                        83
                    ],
                    "startDate": [
                        34
                    ]
                }
            ],
            "changelogBlockImage": [
                241,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "creditTransferMetrics": [
                20
            ],
            "customDomain": [
                22,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "projectId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "customDomainAvailable": [
                45,
                {
                    "domain": [
                        241,
                        "String!"
                    ]
                }
            ],
            "deployment": [
                35,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "deploymentLogs": [
                94,
                {
                    "deploymentId": [
                        241,
                        "String!"
                    ],
                    "endDate": [
                        34
                    ],
                    "filter": [
                        241
                    ],
                    "limit": [
                        83
                    ],
                    "startDate": [
                        34
                    ]
                }
            ],
            "deploymentTriggers": [
                174,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "environmentId": [
                        241,
                        "String!"
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ],
                    "projectId": [
                        241,
                        "String!"
                    ],
                    "serviceId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "deployments": [
                176,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "input": [
                        36,
                        "DeploymentListInput!"
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "domainStatus": [
                46,
                {
                    "id": [
                        241,
                        "String!"
                    ],
                    "projectId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "domains": [
                4,
                {
                    "environmentId": [
                        241,
                        "String!"
                    ],
                    "projectId": [
                        241,
                        "String!"
                    ],
                    "serviceId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "egressGateways": [
                47,
                {
                    "environmentId": [
                        241,
                        "String!"
                    ],
                    "serviceId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "environment": [
                49,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "environmentPatches": [
                178,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "environmentId": [
                        241,
                        "String!"
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "environments": [
                180,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "isEphemeral": [
                        11
                    ],
                    "last": [
                        83
                    ],
                    "projectId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "estimatedUsage": [
                64,
                {
                    "includeDeleted": [
                        11
                    ],
                    "measurements": [
                        101,
                        "[MetricMeasurement!]!"
                    ],
                    "projectId": [
                        241
                    ],
                    "teamId": [
                        241
                    ],
                    "userId": [
                        241
                    ]
                }
            ],
            "events": [
                182,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "environmentId": [
                        241
                    ],
                    "filter": [
                        67
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ],
                    "projectId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "githubIsRepoNameAvailable": [
                11,
                {
                    "fullRepoName": [
                        241,
                        "String!"
                    ]
                }
            ],
            "githubRepoBranches": [
                74,
                {
                    "owner": [
                        241,
                        "String!"
                    ],
                    "repo": [
                        241,
                        "String!"
                    ]
                }
            ],
            "githubRepos": [
                75
            ],
            "githubWritableScopes": [
                241
            ],
            "herokuApps": [
                78
            ],
            "integrationAuth": [
                85,
                {
                    "provider": [
                        241,
                        "String!"
                    ],
                    "providerId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "integrationAuths": [
                184,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "integrations": [
                186,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ],
                    "projectId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "inviteCode": [
                90,
                {
                    "code": [
                        241,
                        "String!"
                    ]
                }
            ],
            "me": [
                301
            ],
            "metrics": [
                104,
                {
                    "averagingWindowSeconds": [
                        83
                    ],
                    "endDate": [
                        34
                    ],
                    "environmentId": [
                        241
                    ],
                    "groupBy": [
                        102,
                        "[MetricTag!]"
                    ],
                    "includeDeleted": [
                        11
                    ],
                    "measurements": [
                        101,
                        "[MetricMeasurement!]!"
                    ],
                    "pluginId": [
                        241
                    ],
                    "projectId": [
                        241
                    ],
                    "sampleRateSeconds": [
                        83
                    ],
                    "serviceId": [
                        241
                    ],
                    "startDate": [
                        34,
                        "DateTime!"
                    ],
                    "teamId": [
                        241
                    ],
                    "userId": [
                        241
                    ],
                    "volumeId": [
                        241
                    ]
                }
            ],
            "node": [
                107,
                {
                    "id": [
                        80,
                        "ID!"
                    ]
                }
            ],
            "nodes": [
                107,
                {
                    "ids": [
                        80,
                        "[ID!]!"
                    ]
                }
            ],
            "plainCustomerIdForDiscordId": [
                241,
                {
                    "discordId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "plainJWTForDiscordId": [
                241,
                {
                    "discordId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "platformStatus": [
                112
            ],
            "plugin": [
                113,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "pluginLogs": [
                94,
                {
                    "endDate": [
                        34
                    ],
                    "environmentId": [
                        241,
                        "String!"
                    ],
                    "filter": [
                        241
                    ],
                    "limit": [
                        83
                    ],
                    "pluginId": [
                        241,
                        "String!"
                    ],
                    "startDate": [
                        34
                    ]
                }
            ],
            "preferences": [
                123,
                {
                    "token": [
                        241
                    ]
                }
            ],
            "privateNetworkEndpoint": [
                127,
                {
                    "environmentId": [
                        241,
                        "String!"
                    ],
                    "privateNetworkId": [
                        241,
                        "String!"
                    ],
                    "serviceId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "privateNetworkEndpointNameAvailable": [
                11,
                {
                    "environmentId": [
                        241,
                        "String!"
                    ],
                    "prefix": [
                        241,
                        "String!"
                    ],
                    "privateNetworkId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "privateNetworks": [
                125,
                {
                    "environmentId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "project": [
                129,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "projectInvitation": [
                169,
                {
                    "code": [
                        241,
                        "String!"
                    ]
                }
            ],
            "projectInvitations": [
                140,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "projectInviteCode": [
                90,
                {
                    "projectId": [
                        241,
                        "String!"
                    ],
                    "role": [
                        153,
                        "ProjectRole!"
                    ]
                }
            ],
            "projectMembers": [
                144,
                {
                    "projectId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "projectResourceAccess": [
                152,
                {
                    "projectId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "projectToken": [
                156
            ],
            "projectTokens": [
                188,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ],
                    "projectId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "projects": [
                190,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "includeDeleted": [
                        11
                    ],
                    "last": [
                        83
                    ],
                    "teamId": [
                        241
                    ],
                    "userId": [
                        241
                    ]
                }
            ],
            "publicStats": [
                170
            ],
            "referralInfo": [
                204
            ],
            "regions": [
                209
            ],
            "resourceAccess": [
                214,
                {
                    "explicitResourceOwner": [
                        71
                    ]
                }
            ],
            "service": [
                219,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "serviceDomainAvailable": [
                45,
                {
                    "domain": [
                        241,
                        "String!"
                    ]
                }
            ],
            "serviceInstance": [
                227,
                {
                    "environmentId": [
                        241,
                        "String!"
                    ],
                    "serviceId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceIsUpdatable": [
                11,
                {
                    "environmentId": [
                        241,
                        "String!"
                    ],
                    "serviceId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "sessions": [
                192,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "tcpProxies": [
                248,
                {
                    "environmentId": [
                        241,
                        "String!"
                    ],
                    "serviceId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "team": [
                250,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "teamByCode": [
                250,
                {
                    "code": [
                        241,
                        "String!"
                    ]
                }
            ],
            "teamDirectSupportDiscordInfoForDiscordId": [
                255,
                {
                    "discordId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "teamTemplates": [
                194,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ],
                    "teamId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "template": [
                267,
                {
                    "code": [
                        241
                    ],
                    "owner": [
                        241
                    ],
                    "repo": [
                        241
                    ]
                }
            ],
            "templateFromHerokuTemplate": [
                91,
                {
                    "repoUrl": [
                        241,
                        "String!"
                    ]
                }
            ],
            "templateKickbacksLeaderboard": [
                277
            ],
            "templateSourceForProject": [
                267,
                {
                    "projectId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "templatekickbacksTotal": [
                73
            ],
            "templates": [
                196,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ],
                    "recommended": [
                        11
                    ]
                }
            ],
            "twoFactorInfo": [
                290
            ],
            "usage": [
                3,
                {
                    "endDate": [
                        34
                    ],
                    "groupBy": [
                        102,
                        "[MetricTag!]"
                    ],
                    "includeDeleted": [
                        11
                    ],
                    "measurements": [
                        101,
                        "[MetricMeasurement!]!"
                    ],
                    "projectId": [
                        241
                    ],
                    "startDate": [
                        34
                    ],
                    "teamId": [
                        241
                    ],
                    "userId": [
                        241
                    ]
                }
            ],
            "userIdForDiscordId": [
                241,
                {
                    "discordId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "userKickbackEarnings": [
                306,
                {
                    "userId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "userProfile": [
                308,
                {
                    "username": [
                        241,
                        "String!"
                    ]
                }
            ],
            "userTemplates": [
                198,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "variables": [
                236,
                {
                    "environmentId": [
                        241,
                        "String!"
                    ],
                    "pluginId": [
                        241
                    ],
                    "projectId": [
                        241,
                        "String!"
                    ],
                    "serviceId": [
                        241
                    ],
                    "unrendered": [
                        11
                    ]
                }
            ],
            "variablesForServiceDeployment": [
                236,
                {
                    "environmentId": [
                        241,
                        "String!"
                    ],
                    "projectId": [
                        241,
                        "String!"
                    ],
                    "serviceId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "vercelInfo": [
                322
            ],
            "volumeInstance": [
                326,
                {
                    "id": [
                        241,
                        "String!"
                    ]
                }
            ],
            "webhooks": [
                200,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ],
                    "projectId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "workflowStatus": [
                334,
                {
                    "workflowId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                241
            ]
        },
        "QueryApiTokensConnection": {
            "edges": [
                173
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "QueryApiTokensConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                5
            ],
            "__typename": [
                241
            ]
        },
        "QueryDeploymentTriggersConnection": {
            "edges": [
                175
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "QueryDeploymentTriggersConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                41
            ],
            "__typename": [
                241
            ]
        },
        "QueryDeploymentsConnection": {
            "edges": [
                177
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "QueryDeploymentsConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                35
            ],
            "__typename": [
                241
            ]
        },
        "QueryEnvironmentPatchesConnection": {
            "edges": [
                179
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "QueryEnvironmentPatchesConnectionEdge": {
            "cursor": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "QueryEnvironmentsConnection": {
            "edges": [
                181
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "QueryEnvironmentsConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                49
            ],
            "__typename": [
                241
            ]
        },
        "QueryEventsConnection": {
            "edges": [
                183
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "QueryEventsConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                65
            ],
            "__typename": [
                241
            ]
        },
        "QueryIntegrationAuthsConnection": {
            "edges": [
                185
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "QueryIntegrationAuthsConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                85
            ],
            "__typename": [
                241
            ]
        },
        "QueryIntegrationsConnection": {
            "edges": [
                187
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "QueryIntegrationsConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                84
            ],
            "__typename": [
                241
            ]
        },
        "QueryProjectTokensConnection": {
            "edges": [
                189
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "QueryProjectTokensConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                156
            ],
            "__typename": [
                241
            ]
        },
        "QueryProjectsConnection": {
            "edges": [
                191
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "QueryProjectsConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                129
            ],
            "__typename": [
                241
            ]
        },
        "QuerySessionsConnection": {
            "edges": [
                193
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "QuerySessionsConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                237
            ],
            "__typename": [
                241
            ]
        },
        "QueryTeamTemplatesConnection": {
            "edges": [
                195
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "QueryTeamTemplatesConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                267
            ],
            "__typename": [
                241
            ]
        },
        "QueryTemplatesConnection": {
            "edges": [
                197
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "QueryTemplatesConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                267
            ],
            "__typename": [
                241
            ]
        },
        "QueryUserTemplatesConnection": {
            "edges": [
                199
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "QueryUserTemplatesConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                267
            ],
            "__typename": [
                241
            ]
        },
        "QueryWebhooksConnection": {
            "edges": [
                201
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "QueryWebhooksConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                164
            ],
            "__typename": [
                241
            ]
        },
        "RecoveryCodeValidateInput": {
            "code": [
                241
            ],
            "twoFactorLinkingKey": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "RecoveryCodes": {
            "recoveryCodes": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ReferralInfo": {
            "code": [
                241
            ],
            "id": [
                80
            ],
            "referralStats": [
                206
            ],
            "status": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ReferralInfoUpdateInput": {
            "code": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ReferralStats": {
            "credited": [
                83
            ],
            "pending": [
                83
            ],
            "__typename": [
                241
            ]
        },
        "ReferralStatus": {},
        "ReferralUser": {
            "code": [
                241
            ],
            "id": [
                241
            ],
            "status": [
                207
            ],
            "__typename": [
                241
            ]
        },
        "Region": {
            "name": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "RegistrationStatus": {},
        "RegistryCredentialsInput": {
            "password": [
                241
            ],
            "username": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ResetPluginCredentialsInput": {
            "environmentId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ResetPluginInput": {
            "environmentId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ResourceAccess": {
            "project": [
                0
            ],
            "__typename": [
                241
            ]
        },
        "ResourceOwnerType": {},
        "RestartPolicyType": {},
        "SendCommunityThreadNotificationEmailInput": {
            "threadTitle": [
                241
            ],
            "threadUrl": [
                241
            ],
            "userIds": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "SerializedTemplateConfig": {},
        "Service": {
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "deployments": [
                222,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "icon": [
                241
            ],
            "id": [
                80
            ],
            "name": [
                241
            ],
            "project": [
                129
            ],
            "projectId": [
                241
            ],
            "repoTriggers": [
                229,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "serviceInstances": [
                231,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "templateThreadSlug": [
                241
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                241
            ]
        },
        "ServiceConnectInput": {
            "branch": [
                241
            ],
            "image": [
                241
            ],
            "repo": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ServiceCreateInput": {
            "branch": [
                241
            ],
            "environmentId": [
                241
            ],
            "name": [
                241
            ],
            "projectId": [
                241
            ],
            "source": [
                234
            ],
            "variables": [
                236
            ],
            "__typename": [
                241
            ]
        },
        "ServiceDeploymentsConnection": {
            "edges": [
                223
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "ServiceDeploymentsConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                35
            ],
            "__typename": [
                241
            ]
        },
        "ServiceDomain": {
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "domain": [
                241
            ],
            "environmentId": [
                241
            ],
            "id": [
                80
            ],
            "projectId": [
                241
            ],
            "serviceId": [
                241
            ],
            "suffix": [
                241
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                241
            ]
        },
        "ServiceDomainCreateInput": {
            "environmentId": [
                241
            ],
            "serviceId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ServiceDomainUpdateInput": {
            "domain": [
                241
            ],
            "environmentId": [
                241
            ],
            "serviceId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ServiceInstance": {
            "buildCommand": [
                241
            ],
            "builder": [
                12
            ],
            "createdAt": [
                34
            ],
            "cronSchedule": [
                241
            ],
            "deletedAt": [
                34
            ],
            "domains": [
                4
            ],
            "environmentId": [
                241
            ],
            "healthcheckPath": [
                241
            ],
            "healthcheckTimeout": [
                83
            ],
            "id": [
                80
            ],
            "isUpdatable": [
                11
            ],
            "latestDeployment": [
                35
            ],
            "nextCronRunAt": [
                34
            ],
            "nixpacksPlan": [
                91
            ],
            "numReplicas": [
                83
            ],
            "railwayConfigFile": [
                241
            ],
            "region": [
                241
            ],
            "restartPolicyMaxRetries": [
                83
            ],
            "restartPolicyType": [
                216
            ],
            "rootDirectory": [
                241
            ],
            "serviceId": [
                241
            ],
            "sleepApplication": [
                11
            ],
            "source": [
                233
            ],
            "startCommand": [
                241
            ],
            "updatedAt": [
                34
            ],
            "upstreamUrl": [
                241
            ],
            "watchPatterns": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ServiceInstanceUpdateInput": {
            "buildCommand": [
                241
            ],
            "builder": [
                12
            ],
            "cronSchedule": [
                241
            ],
            "healthcheckPath": [
                241
            ],
            "healthcheckTimeout": [
                83
            ],
            "nixpacksPlan": [
                91
            ],
            "numReplicas": [
                83
            ],
            "railwayConfigFile": [
                241
            ],
            "region": [
                241
            ],
            "registryCredentials": [
                211
            ],
            "restartPolicyMaxRetries": [
                83
            ],
            "restartPolicyType": [
                216
            ],
            "rootDirectory": [
                241
            ],
            "source": [
                234
            ],
            "startCommand": [
                241
            ],
            "watchPatterns": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ServiceRepoTriggersConnection": {
            "edges": [
                230
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "ServiceRepoTriggersConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                41
            ],
            "__typename": [
                241
            ]
        },
        "ServiceServiceInstancesConnection": {
            "edges": [
                232
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "ServiceServiceInstancesConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                227
            ],
            "__typename": [
                241
            ]
        },
        "ServiceSource": {
            "image": [
                241
            ],
            "repo": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ServiceSourceInput": {
            "image": [
                241
            ],
            "repo": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ServiceUpdateInput": {
            "icon": [
                241
            ],
            "name": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "ServiceVariables": {},
        "Session": {
            "createdAt": [
                34
            ],
            "expiredAt": [
                34
            ],
            "id": [
                80
            ],
            "isCurrent": [
                11
            ],
            "name": [
                241
            ],
            "type": [
                238
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                241
            ]
        },
        "SessionType": {},
        "SharedVariableConfigureInput": {
            "disabledServiceIds": [
                241
            ],
            "enabledServiceIds": [
                241
            ],
            "environmentId": [
                241
            ],
            "name": [
                241
            ],
            "projectId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "SimilarTemplate": {
            "code": [
                241
            ],
            "createdAt": [
                34
            ],
            "creator": [
                271
            ],
            "deploys": [
                83
            ],
            "description": [
                241
            ],
            "health": [
                73
            ],
            "image": [
                241
            ],
            "name": [
                241
            ],
            "teamId": [
                241
            ],
            "userId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "String": {},
        "Subscription": {
            "buildLogs": [
                94,
                {
                    "deploymentId": [
                        241,
                        "String!"
                    ],
                    "filter": [
                        241
                    ],
                    "limit": [
                        83
                    ]
                }
            ],
            "deploymentLogs": [
                94,
                {
                    "deploymentId": [
                        241,
                        "String!"
                    ],
                    "filter": [
                        241
                    ],
                    "limit": [
                        83
                    ]
                }
            ],
            "pluginLogs": [
                94,
                {
                    "environmentId": [
                        241,
                        "String!"
                    ],
                    "filter": [
                        241
                    ],
                    "limit": [
                        83
                    ],
                    "pluginId": [
                        241,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                241
            ]
        },
        "SubscriptionDiscount": {
            "couponId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "SubscriptionItem": {
            "itemId": [
                241
            ],
            "priceId": [
                241
            ],
            "productId": [
                241
            ],
            "quantity": [
                9
            ],
            "__typename": [
                241
            ]
        },
        "SubscriptionPlanLimit": {},
        "SubscriptionPlanType": {},
        "SubscriptionState": {},
        "TCPProxy": {
            "applicationPort": [
                83
            ],
            "createdAt": [
                34
            ],
            "deletedAt": [
                34
            ],
            "domain": [
                241
            ],
            "environmentId": [
                241
            ],
            "id": [
                80
            ],
            "proxyPort": [
                83
            ],
            "serviceId": [
                241
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                241
            ]
        },
        "TCPProxyCreateInput": {
            "applicationPort": [
                83
            ],
            "environmentId": [
                241
            ],
            "serviceId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "Team": {
            "adoptionHistory": [
                2
            ],
            "adoptionLevel": [
                73
            ],
            "avatar": [
                241
            ],
            "banReason": [
                241
            ],
            "createdAt": [
                34
            ],
            "customer": [
                25
            ],
            "discordRole": [
                241
            ],
            "id": [
                80
            ],
            "isEligibleForDirectSupport": [
                11
            ],
            "members": [
                257
            ],
            "name": [
                241
            ],
            "projects": [
                260,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "slackChannelId": [
                241
            ],
            "teamPermissions": [
                258
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                241
            ]
        },
        "TeamBulkProjectTransferInput": {
            "projectIds": [
                241
            ],
            "teamId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TeamCreateAndSubscribeInput": {
            "avatar": [
                241
            ],
            "name": [
                241
            ],
            "paymentMethodId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TeamCreateAndSubscribeResponse": {
            "customerId": [
                241
            ],
            "paymentIntent": [
                91
            ],
            "teamId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TeamCreateInput": {
            "avatar": [
                241
            ],
            "name": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TeamDirectSupportDiscordInfo": {
            "memberDiscordIds": [
                241
            ],
            "teamId": [
                241
            ],
            "teamName": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TeamInviteCodeCreateInput": {
            "role": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TeamMember": {
            "avatar": [
                241
            ],
            "email": [
                241
            ],
            "id": [
                241
            ],
            "name": [
                241
            ],
            "role": [
                262
            ],
            "__typename": [
                241
            ]
        },
        "TeamPermission": {
            "createdAt": [
                34
            ],
            "id": [
                80
            ],
            "role": [
                262
            ],
            "teamId": [
                241
            ],
            "updatedAt": [
                34
            ],
            "userId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TeamPermissionChangeInput": {
            "role": [
                262
            ],
            "teamId": [
                241
            ],
            "userId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TeamProjectsConnection": {
            "edges": [
                261
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "TeamProjectsConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                129
            ],
            "__typename": [
                241
            ]
        },
        "TeamRole": {},
        "TeamUpdateInput": {
            "avatar": [
                241
            ],
            "name": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TeamUserInviteInput": {
            "code": [
                241
            ],
            "email": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TeamUserRemoveInput": {
            "userId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TelemetrySendInput": {
            "command": [
                241
            ],
            "environmentId": [
                241
            ],
            "error": [
                241
            ],
            "projectId": [
                241
            ],
            "stacktrace": [
                241
            ],
            "version": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "Template": {
            "activeProjects": [
                83
            ],
            "code": [
                241
            ],
            "communityThreadSlug": [
                241
            ],
            "config": [
                269
            ],
            "createdAt": [
                34
            ],
            "creator": [
                271
            ],
            "demoProjectId": [
                241
            ],
            "health": [
                73
            ],
            "id": [
                80
            ],
            "isApproved": [
                11
            ],
            "isV2Template": [
                11
            ],
            "metadata": [
                278
            ],
            "projects": [
                83
            ],
            "serializedConfig": [
                218
            ],
            "services": [
                285,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "similarTemplates": [
                240
            ],
            "status": [
                287
            ],
            "teamId": [
                241
            ],
            "totalPayout": [
                73
            ],
            "userId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TemplateCloneInput": {
            "code": [
                241
            ],
            "teamId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TemplateConfig": {},
        "TemplateCreateInput": {
            "config": [
                269
            ],
            "demoProjectId": [
                241
            ],
            "metadata": [
                278
            ],
            "services": [
                282
            ],
            "teamId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TemplateCreator": {
            "avatar": [
                241
            ],
            "hasPublicProfile": [
                11
            ],
            "name": [
                241
            ],
            "username": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TemplateDeleteInput": {
            "teamId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TemplateDeployInput": {
            "environmentId": [
                241
            ],
            "projectId": [
                241
            ],
            "services": [
                275
            ],
            "teamId": [
                241
            ],
            "templateCode": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TemplateDeployPayload": {
            "projectId": [
                241
            ],
            "workflowId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TemplateDeployService": {
            "commit": [
                241
            ],
            "hasDomain": [
                11
            ],
            "healthcheckPath": [
                241
            ],
            "id": [
                241
            ],
            "isPrivate": [
                11
            ],
            "name": [
                241
            ],
            "owner": [
                241
            ],
            "rootDirectory": [
                241
            ],
            "serviceIcon": [
                241
            ],
            "serviceName": [
                241
            ],
            "startCommand": [
                241
            ],
            "tcpProxyApplicationPort": [
                83
            ],
            "template": [
                241
            ],
            "variables": [
                236
            ],
            "volumes": [
                289
            ],
            "__typename": [
                241
            ]
        },
        "TemplateGenerateInput": {
            "projectId": [
                241
            ],
            "teamId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TemplateKickbacksLeaderboard": {
            "total_amount": [
                73
            ],
            "userId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TemplateMetadata": {},
        "TemplatePublishInput": {
            "category": [
                241
            ],
            "description": [
                241
            ],
            "image": [
                241
            ],
            "readme": [
                241
            ],
            "teamId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TemplateService": {
            "config": [
                281
            ],
            "createdAt": [
                34
            ],
            "id": [
                80
            ],
            "templateId": [
                241
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                241
            ]
        },
        "TemplateServiceConfig": {},
        "TemplateServiceCreateInput": {
            "config": [
                281
            ],
            "__typename": [
                241
            ]
        },
        "TemplateServiceSourceEjectInput": {
            "projectId": [
                241
            ],
            "repoName": [
                241
            ],
            "repoOwner": [
                241
            ],
            "serviceIds": [
                241
            ],
            "upstreamUrl": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TemplateServiceUpdateInput": {
            "config": [
                281
            ],
            "id": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TemplateServicesConnection": {
            "edges": [
                286
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "TemplateServicesConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                280
            ],
            "__typename": [
                241
            ]
        },
        "TemplateStatus": {},
        "TemplateUpdateInput": {
            "config": [
                269
            ],
            "demoProjectId": [
                241
            ],
            "forceUpdate": [
                11
            ],
            "metadata": [
                278
            ],
            "services": [
                284
            ],
            "teamId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TemplateVolume": {},
        "TwoFactorInfo": {
            "hasRecoveryCodes": [
                11
            ],
            "isVerified": [
                11
            ],
            "__typename": [
                241
            ]
        },
        "TwoFactorInfoCreateInput": {
            "token": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TwoFactorInfoSecret": {
            "secret": [
                241
            ],
            "uri": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "TwoFactorInfoValidateInput": {
            "token": [
                241
            ],
            "twoFactorLinkingKey": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "Upload": {},
        "UsageAnomaly": {
            "actedOn": [
                34
            ],
            "action": [
                296
            ],
            "actorId": [
                241
            ],
            "flaggedAt": [
                34
            ],
            "flaggedFor": [
                297
            ],
            "id": [
                80
            ],
            "__typename": [
                241
            ]
        },
        "UsageAnomalyAction": {},
        "UsageAnomalyFlagReason": {},
        "UsageLimit": {
            "customerId": [
                241
            ],
            "hardLimit": [
                83
            ],
            "id": [
                80
            ],
            "softLimit": [
                83
            ],
            "__typename": [
                241
            ]
        },
        "UsageLimitRemoveInput": {
            "customerId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "UsageLimitSetInput": {
            "customerId": [
                241
            ],
            "hardLimitDollars": [
                83
            ],
            "softLimitDollars": [
                83
            ],
            "__typename": [
                241
            ]
        },
        "User": {
            "agreedFairUse": [
                11
            ],
            "avatar": [
                241
            ],
            "banReason": [
                241
            ],
            "cost": [
                302
            ],
            "createdAt": [
                34
            ],
            "customer": [
                25
            ],
            "email": [
                241
            ],
            "featureFlags": [
                1
            ],
            "flags": [
                303
            ],
            "has2FA": [
                11
            ],
            "id": [
                80
            ],
            "isAdmin": [
                11
            ],
            "isConductor": [
                11
            ],
            "isDevPlan": [
                11
            ],
            "isEligibleForFreeHobbyPlan": [
                11
            ],
            "isOnHobbyPlan": [
                11
            ],
            "isVerified": [
                11
            ],
            "lastLogin": [
                34
            ],
            "name": [
                241
            ],
            "profile": [
                307
            ],
            "projects": [
                310,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "providerAuths": [
                312,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "referredUsers": [
                208
            ],
            "registrationStatus": [
                210
            ],
            "riskLevel": [
                73
            ],
            "teams": [
                314,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "termsAgreedOn": [
                34
            ],
            "username": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "UserCost": {
            "current": [
                73
            ],
            "estimated": [
                73
            ],
            "__typename": [
                241
            ]
        },
        "UserFlag": {},
        "UserFlagsRemoveInput": {
            "flags": [
                303
            ],
            "userId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "UserFlagsSetInput": {
            "flags": [
                303
            ],
            "userId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "UserKickbackEarnings": {
            "total_amount": [
                73
            ],
            "__typename": [
                241
            ]
        },
        "UserProfile": {
            "bio": [
                241
            ],
            "isPublic": [
                11
            ],
            "website": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "UserProfileResponse": {
            "avatar": [
                241
            ],
            "createdAt": [
                34
            ],
            "customerId": [
                241
            ],
            "isTrialing": [
                11
            ],
            "name": [
                241
            ],
            "profile": [
                307
            ],
            "publishedTemplates": [
                240
            ],
            "state": [
                241
            ],
            "totalDeploys": [
                83
            ],
            "username": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "UserProfileUpdateInput": {
            "bio": [
                241
            ],
            "isPublic": [
                11
            ],
            "website": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "UserProjectsConnection": {
            "edges": [
                311
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "UserProjectsConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                129
            ],
            "__typename": [
                241
            ]
        },
        "UserProviderAuthsConnection": {
            "edges": [
                313
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "UserProviderAuthsConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                167
            ],
            "__typename": [
                241
            ]
        },
        "UserTeamsConnection": {
            "edges": [
                315
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "UserTeamsConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                250
            ],
            "__typename": [
                241
            ]
        },
        "UserUpdateInput": {
            "avatar": [
                241
            ],
            "name": [
                241
            ],
            "username": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "Variable": {
            "createdAt": [
                34
            ],
            "environment": [
                49
            ],
            "environmentId": [
                241
            ],
            "id": [
                80
            ],
            "name": [
                241
            ],
            "plugin": [
                113
            ],
            "pluginId": [
                241
            ],
            "references": [
                241
            ],
            "service": [
                219
            ],
            "serviceId": [
                241
            ],
            "updatedAt": [
                34
            ],
            "__typename": [
                241
            ]
        },
        "VariableCollectionUpsertInput": {
            "environmentId": [
                241
            ],
            "projectId": [
                241
            ],
            "replace": [
                11
            ],
            "serviceId": [
                241
            ],
            "variables": [
                236
            ],
            "__typename": [
                241
            ]
        },
        "VariableDeleteInput": {
            "environmentId": [
                241
            ],
            "name": [
                241
            ],
            "projectId": [
                241
            ],
            "serviceId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "VariableUpsertInput": {
            "environmentId": [
                241
            ],
            "name": [
                241
            ],
            "projectId": [
                241
            ],
            "serviceId": [
                241
            ],
            "value": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "VercelAccount": {
            "id": [
                241
            ],
            "integrationAuthId": [
                241
            ],
            "isUser": [
                11
            ],
            "name": [
                241
            ],
            "projects": [
                323
            ],
            "slug": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "VercelInfo": {
            "accounts": [
                321
            ],
            "__typename": [
                241
            ]
        },
        "VercelProject": {
            "accountId": [
                241
            ],
            "id": [
                241
            ],
            "name": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "Volume": {
            "createdAt": [
                34
            ],
            "id": [
                80
            ],
            "name": [
                241
            ],
            "project": [
                129
            ],
            "projectId": [
                241
            ],
            "volumeInstances": [
                330,
                {
                    "after": [
                        241
                    ],
                    "before": [
                        241
                    ],
                    "first": [
                        83
                    ],
                    "last": [
                        83
                    ]
                }
            ],
            "__typename": [
                241
            ]
        },
        "VolumeCreateInput": {
            "environmentId": [
                241
            ],
            "mountPath": [
                241
            ],
            "projectId": [
                241
            ],
            "serviceId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "VolumeInstance": {
            "createdAt": [
                34
            ],
            "currentSizeMB": [
                73
            ],
            "environment": [
                49
            ],
            "environmentId": [
                241
            ],
            "externalId": [
                241
            ],
            "id": [
                80
            ],
            "mountPath": [
                241
            ],
            "region": [
                241
            ],
            "service": [
                219
            ],
            "serviceId": [
                241
            ],
            "sizeMB": [
                83
            ],
            "state": [
                328
            ],
            "volume": [
                324
            ],
            "volumeId": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "VolumeInstanceUpdateInput": {
            "mountPath": [
                241
            ],
            "serviceId": [
                241
            ],
            "state": [
                328
            ],
            "__typename": [
                241
            ]
        },
        "VolumeState": {},
        "VolumeUpdateInput": {
            "name": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "VolumeVolumeInstancesConnection": {
            "edges": [
                331
            ],
            "pageInfo": [
                108
            ],
            "__typename": [
                241
            ]
        },
        "VolumeVolumeInstancesConnectionEdge": {
            "cursor": [
                241
            ],
            "node": [
                326
            ],
            "__typename": [
                241
            ]
        },
        "WebhookCreateInput": {
            "projectId": [
                241
            ],
            "url": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "WebhookUpdateInput": {
            "url": [
                241
            ],
            "__typename": [
                241
            ]
        },
        "WorkflowResult": {
            "error": [
                241
            ],
            "status": [
                335
            ],
            "__typename": [
                241
            ]
        },
        "WorkflowStatus": {}
    }
}