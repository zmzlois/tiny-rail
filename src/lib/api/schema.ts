// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    BigInt: any,
    Boolean: boolean,
    DateTime: any,
    DeploymentMeta: any,
    EventProperties: any,
    Float: number,
    ID: string,
    Int: number,
    JSON: any,
    SerializedTemplateConfig: any,
    ServiceVariables: any,
    String: string,
    SubscriptionPlanLimit: any,
    TemplateConfig: any,
    TemplateMetadata: any,
    TemplateServiceConfig: any,
    TemplateVolume: any,
    Upload: any,
}

export interface AccessRule {
    disallowed: (Scalars['String'] | null)
    __typename: 'AccessRule'
}

export type ActiveFeatureFlag = 'OBSERVABILITY_V2' | 'SERVICE_GROUPS' | 'STACKER_WORKFLOWS' | 'TEMPLATE_CONFIG_PANE' | 'TEMPLATE_SERVICE_EJECT'

export interface AdoptionInfo {
    adoptionLevel: (Scalars['Float'] | null)
    createdAt: Scalars['DateTime']
    customer: Team
    deltaLevel: (Scalars['Float'] | null)
    id: Scalars['ID']
    matchedIcpEmail: (Scalars['String'] | null)
    monthlyEstimatedUsage: (Scalars['Float'] | null)
    numConfigFile: Scalars['Int']
    numCronSchedule: Scalars['Int']
    numDeploys: Scalars['Int']
    numEnvs: Scalars['Int']
    numFailedDeploys: Scalars['Int']
    numHealthcheck: Scalars['Int']
    numIconConfig: Scalars['Int']
    numRegion: Scalars['Int']
    numReplicas: Scalars['Int']
    numRootDirectory: Scalars['Int']
    numSeats: Scalars['Int']
    numServices: Scalars['Int']
    numSupportRequests: Scalars['Int']
    numVariables: Scalars['Int']
    numWatchPatterns: Scalars['Int']
    totalCores: (Scalars['Float'] | null)
    totalDisk: (Scalars['Float'] | null)
    totalNetwork: (Scalars['Float'] | null)
    updatedAt: Scalars['DateTime']
    __typename: 'AdoptionInfo'
}


/** The aggregated usage of a single measurement. */
export interface AggregatedUsage {
    /** The measurement that was aggregated. */
    measurement: MetricMeasurement
    /** The tags that were used to group the metric. Only the tags that were used in the `groupBy` will be present. */
    tags: MetricTags
    /** The aggregated value. */
    value: Scalars['Float']
    __typename: 'AggregatedUsage'
}

export interface AllDomains {
    customDomains: CustomDomain[]
    serviceDomains: ServiceDomain[]
    __typename: 'AllDomains'
}

export interface ApiToken {
    displayToken: Scalars['String']
    id: Scalars['ID']
    name: Scalars['String']
    teamId: (Scalars['String'] | null)
    __typename: 'ApiToken'
}

export interface BanReasonHistory {
    actor: User
    banReason: (Scalars['String'] | null)
    createdAt: Scalars['DateTime']
    id: Scalars['ID']
    __typename: 'BanReasonHistory'
}


/** The billing period for a customers subscription. */
export interface BillingPeriod {
    end: Scalars['DateTime']
    start: Scalars['DateTime']
    __typename: 'BillingPeriod'
}

export type Builder = 'HEROKU' | 'NIXPACKS' | 'PAKETO'

export type CDNProvider = 'DETECTED_CDN_PROVIDER_CLOUDFLARE' | 'DETECTED_CDN_PROVIDER_UNSPECIFIED' | 'UNRECOGNIZED'

export interface CertificatePublicData {
    domainNames: Scalars['String'][]
    expiresAt: (Scalars['DateTime'] | null)
    fingerprintSha256: Scalars['String']
    issuedAt: (Scalars['DateTime'] | null)
    keyType: KeyType
    __typename: 'CertificatePublicData'
}

export type CertificateStatus = 'CERTIFICATE_STATUS_TYPE_ISSUE_FAILED' | 'CERTIFICATE_STATUS_TYPE_ISSUING' | 'CERTIFICATE_STATUS_TYPE_UNSPECIFIED' | 'CERTIFICATE_STATUS_TYPE_VALID' | 'UNRECOGNIZED'

export interface CnameCheck {
    link: (Scalars['String'] | null)
    message: Scalars['String']
    status: CnameCheckStatus
    __typename: 'CnameCheck'
}

export type CnameCheckStatus = 'ERROR' | 'INFO' | 'INVALID' | 'VALID' | 'WAITING'

export interface Container {
    createdAt: Scalars['DateTime']
    deletedAt: (Scalars['DateTime'] | null)
    environment: Environment
    environmentId: Scalars['String']
    id: Scalars['ID']
    migratedAt: (Scalars['DateTime'] | null)
    plugin: Plugin
    pluginId: Scalars['String']
    __typename: 'Container'
}

export interface Credit {
    amount: Scalars['Float']
    createdAt: Scalars['DateTime']
    customerId: Scalars['String']
    id: Scalars['ID']
    memo: (Scalars['String'] | null)
    type: CreditType
    updatedAt: Scalars['DateTime']
    __typename: 'Credit'
}

export interface CreditTransferMetrics {
    creditTransferAvg: (Scalars['Float'] | null)
    creditTransferCount: (Scalars['Int'] | null)
    creditTransferSum: (Scalars['Int'] | null)
    __typename: 'CreditTransferMetrics'
}

export type CreditType = 'APPLIED' | 'CREDIT' | 'DEBIT' | 'STRIPE' | 'TRANSFER' | 'WAIVED'

export interface CustomDomain {
    /** @deprecated Use the `status` field instead. */
    cnameCheck: CnameCheck
    createdAt: (Scalars['DateTime'] | null)
    deletedAt: (Scalars['DateTime'] | null)
    domain: Scalars['String']
    environmentId: Scalars['String']
    id: Scalars['ID']
    projectId: (Scalars['String'] | null)
    serviceId: Scalars['String']
    status: CustomDomainStatus
    updatedAt: (Scalars['DateTime'] | null)
    __typename: 'CustomDomain'
}

export interface CustomDomainStatus {
    cdnProvider: (CDNProvider | null)
    certificateStatus: CertificateStatus
    certificates: (CertificatePublicData[] | null)
    dnsRecords: DNSRecords[]
    __typename: 'CustomDomainStatus'
}

export interface Customer {
    appliedCredits: Scalars['Float']
    billingEmail: (Scalars['String'] | null)
    billingPeriod: BillingPeriod
    creditBalance: Scalars['Float']
    credits: CustomerCreditsConnection
    defaultPaymentMethod: (PaymentMethod | null)
    defaultPaymentMethodId: (Scalars['String'] | null)
    id: Scalars['ID']
    invoices: CustomerInvoice[]
    isPrepaying: Scalars['Boolean']
    isTrialing: Scalars['Boolean']
    isUsageSubscriber: Scalars['Boolean']
    planLimitOverride: (PlanLimitOverride | null)
    remainingUsageCreditBalance: Scalars['Float']
    state: SubscriptionState
    stripeCustomerId: Scalars['String']
    subscriptions: CustomerSubscription[]
    teamId: (Scalars['String'] | null)
    usageLimit: (UsageLimit | null)
    userId: (Scalars['String'] | null)
    __typename: 'Customer'
}

export interface CustomerCreditsConnection {
    edges: CustomerCreditsConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'CustomerCreditsConnection'
}

export interface CustomerCreditsConnectionEdge {
    cursor: Scalars['String']
    node: Credit
    __typename: 'CustomerCreditsConnectionEdge'
}

export interface CustomerInvoice {
    amountPaid: Scalars['Float']
    hostedURL: (Scalars['String'] | null)
    invoiceId: Scalars['String']
    items: SubscriptionItem[]
    paymentIntentStatus: (Scalars['String'] | null)
    pdfURL: (Scalars['String'] | null)
    periodEnd: Scalars['String']
    periodStart: Scalars['String']
    status: (Scalars['String'] | null)
    subscriptionId: (Scalars['String'] | null)
    total: Scalars['Int']
    __typename: 'CustomerInvoice'
}

export interface CustomerSubscription {
    billingCycleAnchor: Scalars['DateTime']
    cancelAt: (Scalars['String'] | null)
    cancelAtPeriodEnd: Scalars['Boolean']
    couponId: (Scalars['String'] | null)
    discounts: SubscriptionDiscount[]
    id: Scalars['String']
    items: SubscriptionItem[]
    latestInvoiceId: Scalars['String']
    nextInvoiceCurrentTotal: Scalars['Int']
    nextInvoiceDate: Scalars['String']
    status: Scalars['String']
    __typename: 'CustomerSubscription'
}

export type DNSRecordPurpose = 'DNS_RECORD_PURPOSE_ACME_DNS01_CHALLENGE' | 'DNS_RECORD_PURPOSE_TRAFFIC_ROUTE' | 'DNS_RECORD_PURPOSE_UNSPECIFIED' | 'UNRECOGNIZED'

export type DNSRecordStatus = 'DNS_RECORD_STATUS_PROPAGATED' | 'DNS_RECORD_STATUS_REQUIRES_UPDATE' | 'DNS_RECORD_STATUS_UNSPECIFIED' | 'UNRECOGNIZED'

export type DNSRecordType = 'DNS_RECORD_TYPE_A' | 'DNS_RECORD_TYPE_CNAME' | 'DNS_RECORD_TYPE_NS' | 'DNS_RECORD_TYPE_UNSPECIFIED' | 'UNRECOGNIZED'

export interface DNSRecords {
    currentValue: Scalars['String']
    fqdn: Scalars['String']
    hostlabel: Scalars['String']
    purpose: DNSRecordPurpose
    recordType: DNSRecordType
    requiredValue: Scalars['String']
    status: DNSRecordStatus
    zone: Scalars['String']
    __typename: 'DNSRecords'
}

export interface Deployment {
    canRedeploy: Scalars['Boolean']
    canRollback: Scalars['Boolean']
    createdAt: Scalars['DateTime']
    creator: (User | null)
    environment: Environment
    environmentId: Scalars['String']
    id: Scalars['ID']
    meta: (Scalars['DeploymentMeta'] | null)
    projectId: Scalars['String']
    service: Service
    serviceId: (Scalars['String'] | null)
    snapshotId: (Scalars['String'] | null)
    staticUrl: (Scalars['String'] | null)
    status: DeploymentStatus
    suggestAddServiceDomain: Scalars['Boolean']
    updatedAt: Scalars['DateTime']
    url: (Scalars['String'] | null)
    __typename: 'Deployment'
}

export interface DeploymentSnapshot {
    createdAt: Scalars['DateTime']
    id: Scalars['ID']
    updatedAt: Scalars['DateTime']
    __typename: 'DeploymentSnapshot'
}

export type DeploymentStatus = 'BUILDING' | 'CRASHED' | 'DEPLOYING' | 'FAILED' | 'INITIALIZING' | 'QUEUED' | 'REMOVED' | 'REMOVING' | 'SKIPPED' | 'SLEEPING' | 'SUCCESS' | 'WAITING'

export interface DeploymentTrigger {
    baseEnvironmentOverrideId: (Scalars['String'] | null)
    branch: Scalars['String']
    checkSuites: Scalars['Boolean']
    environmentId: Scalars['String']
    id: Scalars['ID']
    projectId: Scalars['String']
    provider: Scalars['String']
    repository: Scalars['String']
    serviceId: (Scalars['String'] | null)
    validCheckSuites: Scalars['Int']
    __typename: 'DeploymentTrigger'
}

export type Domain = (CustomDomain | ServiceDomain) & { __isUnion?: true }

export interface DomainAvailable {
    available: Scalars['Boolean']
    message: Scalars['String']
    __typename: 'DomainAvailable'
}

export interface DomainWithStatus {
    cdnProvider: (CDNProvider | null)
    certificateStatus: CertificateStatus
    certificates: (CertificatePublicData[] | null)
    dnsRecords: DNSRecords[]
    domain: (Domain | null)
    __typename: 'DomainWithStatus'
}

export interface EgressGateway {
    ipv4: Scalars['String']
    __typename: 'EgressGateway'
}

export interface Environment {
    createdAt: Scalars['DateTime']
    deletedAt: (Scalars['DateTime'] | null)
    deploymentTriggers: EnvironmentDeploymentTriggersConnection
    deployments: EnvironmentDeploymentsConnection
    id: Scalars['ID']
    isEphemeral: Scalars['Boolean']
    meta: (EnvironmentMeta | null)
    name: Scalars['String']
    projectId: Scalars['String']
    serviceInstances: EnvironmentServiceInstancesConnection
    sourceEnvironment: (Environment | null)
    unmergedChangesCount: (Scalars['Int'] | null)
    updatedAt: Scalars['DateTime']
    variables: EnvironmentVariablesConnection
    volumeInstances: EnvironmentVolumeInstancesConnection
    __typename: 'Environment'
}

export interface EnvironmentDeploymentTriggersConnection {
    edges: EnvironmentDeploymentTriggersConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'EnvironmentDeploymentTriggersConnection'
}

export interface EnvironmentDeploymentTriggersConnectionEdge {
    cursor: Scalars['String']
    node: DeploymentTrigger
    __typename: 'EnvironmentDeploymentTriggersConnectionEdge'
}

export interface EnvironmentDeploymentsConnection {
    edges: EnvironmentDeploymentsConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'EnvironmentDeploymentsConnection'
}

export interface EnvironmentDeploymentsConnectionEdge {
    cursor: Scalars['String']
    node: Deployment
    __typename: 'EnvironmentDeploymentsConnectionEdge'
}

export interface EnvironmentMeta {
    baseBranch: (Scalars['String'] | null)
    branch: (Scalars['String'] | null)
    prCommentId: (Scalars['Int'] | null)
    prNumber: (Scalars['Int'] | null)
    prRepo: (Scalars['String'] | null)
    prTitle: (Scalars['String'] | null)
    __typename: 'EnvironmentMeta'
}

export interface EnvironmentServiceInstancesConnection {
    edges: EnvironmentServiceInstancesConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'EnvironmentServiceInstancesConnection'
}

export interface EnvironmentServiceInstancesConnectionEdge {
    cursor: Scalars['String']
    node: ServiceInstance
    __typename: 'EnvironmentServiceInstancesConnectionEdge'
}

export interface EnvironmentVariablesConnection {
    edges: EnvironmentVariablesConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'EnvironmentVariablesConnection'
}

export interface EnvironmentVariablesConnectionEdge {
    cursor: Scalars['String']
    node: Variable
    __typename: 'EnvironmentVariablesConnectionEdge'
}

export interface EnvironmentVolumeInstancesConnection {
    edges: EnvironmentVolumeInstancesConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'EnvironmentVolumeInstancesConnection'
}

export interface EnvironmentVolumeInstancesConnectionEdge {
    cursor: Scalars['String']
    node: VolumeInstance
    __typename: 'EnvironmentVolumeInstancesConnectionEdge'
}


/** The estimated usage of a single measurement. */
export interface EstimatedUsage {
    /** The estimated value. */
    estimatedValue: Scalars['Float']
    /** The measurement that was estimated. */
    measurement: MetricMeasurement
    projectId: Scalars['String']
    __typename: 'EstimatedUsage'
}

export interface Event {
    action: Scalars['String']
    createdAt: Scalars['DateTime']
    environment: (Environment | null)
    environmentId: (Scalars['String'] | null)
    id: Scalars['ID']
    object: Scalars['String']
    payload: (Scalars['JSON'] | null)
    project: Project
    projectId: Scalars['String']
    __typename: 'Event'
}

export interface GitHubBranch {
    name: Scalars['String']
    __typename: 'GitHubBranch'
}

export interface GitHubRepo {
    defaultBranch: Scalars['String']
    fullName: Scalars['String']
    id: Scalars['Int']
    installationId: Scalars['String']
    isPrivate: Scalars['Boolean']
    name: Scalars['String']
    __typename: 'GitHubRepo'
}

export interface HerokuApp {
    id: Scalars['String']
    name: Scalars['String']
    __typename: 'HerokuApp'
}

export interface Incident {
    id: Scalars['String']
    message: Scalars['String']
    status: IncidentStatus
    url: Scalars['String']
    __typename: 'Incident'
}

export type IncidentStatus = 'IDENTIFIED' | 'INVESTIGATING' | 'MONITORING' | 'RESOLVED'

export interface Integration {
    config: Scalars['JSON']
    id: Scalars['ID']
    name: Scalars['String']
    projectId: Scalars['String']
    __typename: 'Integration'
}

export interface IntegrationAuth {
    id: Scalars['ID']
    integrations: IntegrationAuthIntegrationsConnection
    provider: Scalars['String']
    providerId: Scalars['String']
    __typename: 'IntegrationAuth'
}

export interface IntegrationAuthIntegrationsConnection {
    edges: IntegrationAuthIntegrationsConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'IntegrationAuthIntegrationsConnection'
}

export interface IntegrationAuthIntegrationsConnectionEdge {
    cursor: Scalars['String']
    node: Integration
    __typename: 'IntegrationAuthIntegrationsConnectionEdge'
}

export interface InviteCode {
    code: Scalars['String']
    createdAt: Scalars['DateTime']
    id: Scalars['ID']
    project: Project
    projectId: Scalars['String']
    role: ProjectRole
    __typename: 'InviteCode'
}

export type KeyType = 'KEY_TYPE_ECDSA' | 'KEY_TYPE_RSA_2048' | 'KEY_TYPE_RSA_4096' | 'KEY_TYPE_UNSPECIFIED' | 'UNRECOGNIZED'


/** The result of a logs query. */
export interface Log {
    /** The attributes that were parsed from a structured log */
    attributes: LogAttribute[]
    /** The contents of the log message */
    message: Scalars['String']
    /** The severity of the log message (eg. err) */
    severity: (Scalars['String'] | null)
    /** The tags that were associated with the log */
    tags: (LogTags | null)
    /** The timestamp of the log message in format RFC3339 (nano) */
    timestamp: Scalars['String']
    __typename: 'Log'
}


/** The attributes associated with a structured log */
export interface LogAttribute {
    key: Scalars['String']
    value: Scalars['String']
    __typename: 'LogAttribute'
}


/** The tags associated with a specific log */
export interface LogTags {
    deploymentId: (Scalars['String'] | null)
    deploymentInstanceId: (Scalars['String'] | null)
    environmentId: (Scalars['String'] | null)
    pluginId: (Scalars['String'] | null)
    projectId: (Scalars['String'] | null)
    serviceId: (Scalars['String'] | null)
    snapshotId: (Scalars['String'] | null)
    __typename: 'LogTags'
}

export interface Maintenance {
    id: Scalars['String']
    message: Scalars['String']
    status: MaintenanceStatus
    url: Scalars['String']
    __typename: 'Maintenance'
}

export type MaintenanceStatus = 'COMPLETED' | 'INPROGRESS' | 'NOTSTARTEDYET'


/** A single sample of a metric. */
export interface Metric {
    /** The timestamp of the sample. Represented has number of seconds since the Unix epoch. */
    ts: Scalars['Int']
    /** The value of the sample. */
    value: Scalars['Float']
    __typename: 'Metric'
}


/** A thing that can be measured on Railway. */
export type MetricMeasurement = 'CPU_LIMIT' | 'CPU_USAGE' | 'DISK_USAGE_GB' | 'EPHEMERAL_DISK_USAGE_GB' | 'MEASUREMENT_UNSPECIFIED' | 'MEMORY_LIMIT_GB' | 'MEMORY_USAGE_GB' | 'NETWORK_RX_GB' | 'NETWORK_TX_GB' | 'UNRECOGNIZED'


/** A property that can be used to group metrics. */
export type MetricTag = 'DEPLOYMENT_ID' | 'DEPLOYMENT_INSTANCE_ID' | 'ENVIRONMENT_ID' | 'KEY_UNSPECIFIED' | 'PLUGIN_ID' | 'PROJECT_ID' | 'SERVICE_ID' | 'UNRECOGNIZED' | 'VOLUME_ID'


/** The tags that were used to group the metric. */
export interface MetricTags {
    deploymentId: (Scalars['String'] | null)
    environmentId: (Scalars['String'] | null)
    pluginId: (Scalars['String'] | null)
    projectId: (Scalars['String'] | null)
    serviceId: (Scalars['String'] | null)
    volumeId: (Scalars['String'] | null)
    __typename: 'MetricTags'
}


/** The result of a metrics query. */
export interface MetricsResult {
    /** The measurement of the metric. */
    measurement: MetricMeasurement
    /** The tags that were used to group the metric. Only the tags that were used to by will be present. */
    tags: MetricTags
    /** The samples of the metric. */
    values: Metric[]
    __typename: 'MetricsResult'
}

export interface Mutation {
    /** Creates a new API token. */
    apiTokenCreate: Scalars['String']
    /** Deletes an API token. */
    apiTokenDelete: Scalars['Boolean']
    /** Sets the base environment override for a deployment trigger. */
    baseEnvironmentOverride: Scalars['Boolean']
    /** Creates a new custom domain. */
    customDomainCreate: CustomDomain
    /** Deletes a custom domain. */
    customDomainDelete: Scalars['Boolean']
    /** Migrate a customer to the hobby plan */
    customerMigrateToHobbyPlan: Scalars['Boolean']
    /** Cancels a deployment. */
    deploymentCancel: Scalars['Boolean']
    /** Redeploys a deployment. */
    deploymentRedeploy: Deployment
    /** Removes a deployment. */
    deploymentRemove: Scalars['Boolean']
    /** Restarts a deployment. */
    deploymentRestart: Scalars['Boolean']
    /** Rolls back to a deployment. */
    deploymentRollback: Scalars['Boolean']
    /** Creates a deployment trigger. */
    deploymentTriggerCreate: DeploymentTrigger
    /** Deletes a deployment trigger. */
    deploymentTriggerDelete: Scalars['Boolean']
    /** Updates a deployment trigger. */
    deploymentTriggerUpdate: DeploymentTrigger
    /** Create a new egress gateway association for a service instance */
    egressGatewayAssociationCreate: EgressGateway[]
    /** Change the User's account email if there is a valid change email request. */
    emailChangeConfirm: Scalars['Boolean']
    /** Initiate an email change request for a user */
    emailChangeInitiate: Scalars['Boolean']
    /** Creates a new environment. */
    environmentCreate: Environment
    /** Deletes an environment. */
    environmentDelete: Scalars['Boolean']
    /** Renames an environment. */
    environmentRename: Environment
    /** Deploys all connected triggers for an environment. */
    environmentTriggersDeploy: Scalars['Boolean']
    /** Track a batch of events for authenticated user */
    eventBatchTrack: Scalars['Boolean']
    /** Track event for authenticated user */
    eventTrack: Scalars['Boolean']
    /** Agree to the fair use policy for the currently authenticated user */
    fairUseAgree: Scalars['Boolean']
    /** Add a feature flag for a user */
    featureFlagAdd: Scalars['Boolean']
    /** Remove a feature flag for a user */
    featureFlagRemove: Scalars['Boolean']
    /** Deploys a GitHub repo */
    githubRepoDeploy: Scalars['Boolean']
    /** Updates a GitHub repo through the linked template */
    githubRepoUpdate: Scalars['Boolean']
    /** Import variables from a Heroku app into a Railway service. Returns the number of variables imports */
    herokuImportVariables: Scalars['Int']
    /** Create an integration for a project */
    integrationCreate: Integration
    /** Delete an integration for a project */
    integrationDelete: Scalars['Boolean']
    /** Update an integration for a project */
    integrationUpdate: Integration
    /** Join a project using an invite code */
    inviteCodeUse: Project
    /** Creates a new job application. */
    jobApplicationCreate: Scalars['Boolean']
    /** Auth a login session for a user */
    loginSessionAuth: Scalars['Boolean']
    /** Cancel a login session */
    loginSessionCancel: Scalars['Boolean']
    /** Get a token for a login session if it exists */
    loginSessionConsume: (Scalars['String'] | null)
    /** Start a CLI login session */
    loginSessionCreate: Scalars['String']
    /** Verify if a login session is valid */
    loginSessionVerify: Scalars['Boolean']
    /** Deletes session for current user if it exists */
    logout: Scalars['Boolean']
    /** Alert the team of a missing command palette command */
    missingCommandAlert: Scalars['Boolean']
    /**
     * @deprecated Plugins are deprecated on Railway. Use database templates instead.
     * Creates a new plugin.
     */
    pluginCreate: Plugin
    /** Deletes a plugin. */
    pluginDelete: Scalars['Boolean']
    /** Reset envs and container for a plugin in an environment */
    pluginReset: Scalars['Boolean']
    /** Resets the credentials for a plugin in an environment */
    pluginResetCredentials: Scalars['String']
    /** Restarts a plugin. */
    pluginRestart: Plugin
    /** Force start a plugin */
    pluginStart: Scalars['Boolean']
    /** Updates an existing plugin. */
    pluginUpdate: Plugin
    /** Update the email preferences for a user */
    preferencesUpdate: Preferences
    /** Create or get a private network. */
    privateNetworkCreateOrGet: PrivateNetwork
    /** Create or get a private network endpoint. */
    privateNetworkEndpointCreateOrGet: PrivateNetworkEndpoint
    /** Delete a private network endpoint. */
    privateNetworkEndpointDelete: Scalars['Boolean']
    /** Rename a private network endpoint. */
    privateNetworkEndpointRename: Scalars['Boolean']
    /** Delete all private networks for an environment. */
    privateNetworksForEnvironmentDelete: Scalars['Boolean']
    /** Claims a project. */
    projectClaim: Project
    /** Creates a new project. */
    projectCreate: Project
    /** Deletes a project. */
    projectDelete: Scalars['Boolean']
    /** Accept a project invitation using the invite code */
    projectInvitationAccept: ProjectPermission
    /** Create an invitation for a project */
    projectInvitationCreate: ProjectInvitation
    /** Delete an invitation for a project */
    projectInvitationDelete: Scalars['Boolean']
    /** Resend an invitation for a project */
    projectInvitationResend: ProjectInvitation
    /** Invite a user by email to a project */
    projectInviteUser: Scalars['Boolean']
    /** Leave project as currently authenticated user */
    projectLeave: Scalars['Boolean']
    /** Remove user from a project */
    projectMemberRemove: ProjectMember[]
    /** Change the role for a user within a project */
    projectMemberUpdate: ProjectMember
    /** Create a token for a project that has access to a specific environment */
    projectTokenCreate: Scalars['String']
    /** Delete a project token */
    projectTokenDelete: Scalars['Boolean']
    /** Confirm the transfer of project ownership */
    projectTransferConfirm: Scalars['Boolean']
    /** Initiate the transfer of project ownership */
    projectTransferInitiate: Scalars['Boolean']
    /** Transfer a project to a team */
    projectTransferToTeam: Scalars['Boolean']
    /** Transfer a project to a user */
    projectTransferToUser: Scalars['Boolean']
    /** Updates a project. */
    projectUpdate: Project
    /** Deletes a ProviderAuth. */
    providerAuthRemove: Scalars['Boolean']
    /** Generates a new set of recovery codes for the authenticated user. */
    recoveryCodeGenerate: RecoveryCodes
    /** Validates a recovery code. */
    recoveryCodeValidate: Scalars['Boolean']
    /** Updates the ReferralInfo for the authenticated user. */
    referralInfoUpdate: ReferralInfo
    /** Send a community thread notification email */
    sendCommunityThreadNotificationEmail: Scalars['Boolean']
    /** Connect a service to a source */
    serviceConnect: Service
    /** Creates a new service. */
    serviceCreate: Service
    /** Deletes a service. */
    serviceDelete: Scalars['Boolean']
    /** Disconnect a service from a repo */
    serviceDisconnect: Service
    /** Creates a new service domain. */
    serviceDomainCreate: ServiceDomain
    /** Deletes a service domain. */
    serviceDomainDelete: Scalars['Boolean']
    /** Updates a service domain. */
    serviceDomainUpdate: Scalars['Boolean']
    /** Deploy a service instance */
    serviceInstanceDeploy: Scalars['Boolean']
    /** Redeploy a service instance */
    serviceInstanceRedeploy: Scalars['Boolean']
    /** Update a service instance */
    serviceInstanceUpdate: Scalars['Boolean']
    /** Remove the upstream URL from all service instances for this service */
    serviceRemoveUpstreamUrl: Service
    /** Updates a service. */
    serviceUpdate: Service
    /** Deletes a session. */
    sessionDelete: Scalars['Boolean']
    /** Configure a shared variable. */
    sharedVariableConfigure: Variable
    /** Creates a new TCP proxy for a service instance. */
    tcpProxyCreate: TCPProxy
    /** Deletes a TCP proxy by id */
    tcpProxyDelete: Scalars['Boolean']
    /** Bulk transfer projects from user to team */
    teamBulkProjectTransfer: Scalars['Boolean']
    /** Create a team */
    teamCreate: Team
    /** Create a team and subscribe to the Pro plan */
    teamCreateAndSubscribe: TeamCreateAndSubscribeResponse
    /** Delete a team and all data associated with it */
    teamDelete: Scalars['Boolean']
    /** Get an invite code for a team and role */
    teamInviteCodeCreate: Scalars['String']
    /** Use an invite code to join a team */
    teamInviteCodeUse: Team
    /** Leave a team */
    teamLeave: Scalars['Boolean']
    /** Changes a user team permissions. */
    teamPermissionChange: Scalars['Boolean']
    /** Update a team by id */
    teamUpdate: Team
    /** Invite a user by email to a team */
    teamUserInvite: Scalars['Boolean']
    /** Remove a user from a team */
    teamUserRemove: Scalars['Boolean']
    /** Logs panics from CLI to Datadog */
    telemetrySend: Scalars['Boolean']
    /** Duplicates an existing template */
    templateClone: Template
    /** Creates a template. */
    templateCreate: Template
    /** Deletes a template. */
    templateDelete: Scalars['Boolean']
    /** Deploys a template. */
    templateDeploy: TemplateDeployPayload
    /** Generate a template for a project */
    templateGenerate: Template
    /** Nullify the community thread slug for a template, if one is found with the provided slug */
    templateMaybeUnsetCommunityThreadSlug: Scalars['Boolean']
    /** Publishes a template. */
    templatePublish: Template
    /** Ejects a service from the template and creates a new repo in the provided org. */
    templateServiceSourceEject: Scalars['Boolean']
    /** Unpublishes a template. */
    templateUnpublish: Scalars['Boolean']
    /** Updates a template. */
    templateUpdate: Template
    /** Setup 2FA authorization for authenticated user. */
    twoFactorInfoCreate: RecoveryCodes
    /** Deletes the TwoFactorInfo for the authenticated user. */
    twoFactorInfoDelete: Scalars['Boolean']
    /** Generates the 2FA app secret for the authenticated user. */
    twoFactorInfoSecret: TwoFactorInfoSecret
    /** Validates the token for a 2FA action or for a login request. */
    twoFactorInfoValidate: Scalars['Boolean']
    /** Generate a Slack channel for a team */
    upsertSlackChannelForTeam: Scalars['Boolean']
    /** Remove the usage limit for a customer */
    usageLimitRemove: Scalars['Boolean']
    /** Set the usage limit for a customer */
    usageLimitSet: Scalars['Boolean']
    /** Unsubscribe from the Beta program. */
    userBetaLeave: Scalars['Boolean']
    /** Delete the currently authenticated user */
    userDelete: Scalars['Boolean']
    /** Disconnect your Railway account from Discord. */
    userDiscordDisconnect: Scalars['Boolean']
    /** Remove a flag on the user. */
    userFlagsRemove: Scalars['Boolean']
    /** Set flags on the authenticated user. */
    userFlagsSet: Scalars['Boolean']
    /** Updates the profile for the authenticated user */
    userProfileUpdate: Scalars['Boolean']
    /** Update date of TermsAgreedOn */
    userTermsUpdate: (User | null)
    /** Update currently logged in user */
    userUpdate: (User | null)
    /** Upserts a collection of variables. */
    variableCollectionUpsert: Scalars['Boolean']
    /** Deletes a variable. */
    variableDelete: Scalars['Boolean']
    /** Upserts a variable. */
    variableUpsert: Scalars['Boolean']
    /** Create a persistent volume in a project */
    volumeCreate: Volume
    /** Delete a persistent volume in a project */
    volumeDelete: Scalars['Boolean']
    /** Update a volume instance. If no environmentId is provided, all volume instances for the volume will be updated. */
    volumeInstanceUpdate: Scalars['Boolean']
    /** Update a persistent volume in a project */
    volumeUpdate: Volume
    /** Create a webhook on a project */
    webhookCreate: ProjectWebhook
    /** Delete a webhook from a project */
    webhookDelete: Scalars['Boolean']
    /** Update a webhook on a project */
    webhookUpdate: ProjectWebhook
    __typename: 'Mutation'
}

export type Node = (AdoptionInfo | ApiToken | BanReasonHistory | Container | Credit | Customer | Deployment | DeploymentSnapshot | DeploymentTrigger | Environment | Event | Integration | IntegrationAuth | InviteCode | PlanLimitOverride | Plugin | Preferences | Project | ProjectPermission | ProjectToken | ProjectWebhook | ProviderAuth | ReferralInfo | Service | ServiceInstance | Session | Team | TeamPermission | Template | TemplateService | UsageAnomaly | UsageLimit | User | Variable | Volume | VolumeInstance) & { __isUnion?: true }

export interface PageInfo {
    endCursor: (Scalars['String'] | null)
    hasNextPage: Scalars['Boolean']
    hasPreviousPage: Scalars['Boolean']
    startCursor: (Scalars['String'] | null)
    __typename: 'PageInfo'
}

export interface PaymentMethod {
    card: (PaymentMethodCard | null)
    id: Scalars['String']
    __typename: 'PaymentMethod'
}

export interface PaymentMethodCard {
    brand: Scalars['String']
    country: (Scalars['String'] | null)
    last4: Scalars['String']
    __typename: 'PaymentMethodCard'
}

export interface PlanLimitOverride {
    config: Scalars['SubscriptionPlanLimit']
    id: Scalars['ID']
    __typename: 'PlanLimitOverride'
}

export interface PlatformStatus {
    incident: (Incident | null)
    isStable: Scalars['Boolean']
    maintenance: (Maintenance | null)
    __typename: 'PlatformStatus'
}

export interface Plugin {
    containers: PluginContainersConnection
    createdAt: Scalars['DateTime']
    deletedAt: (Scalars['DateTime'] | null)
    deprecatedAt: (Scalars['DateTime'] | null)
    friendlyName: Scalars['String']
    id: Scalars['ID']
    logsEnabled: Scalars['Boolean']
    migrationDatabaseServiceId: (Scalars['String'] | null)
    name: PluginType
    project: Project
    status: PluginStatus
    variables: PluginVariablesConnection
    __typename: 'Plugin'
}

export interface PluginContainersConnection {
    edges: PluginContainersConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'PluginContainersConnection'
}

export interface PluginContainersConnectionEdge {
    cursor: Scalars['String']
    node: Container
    __typename: 'PluginContainersConnectionEdge'
}

export type PluginStatus = 'DEPRECATED' | 'LOCKED' | 'REMOVED' | 'RUNNING' | 'STOPPED'

export type PluginType = 'mongodb' | 'mysql' | 'postgresql' | 'redis'

export interface PluginVariablesConnection {
    edges: PluginVariablesConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'PluginVariablesConnection'
}

export interface PluginVariablesConnectionEdge {
    cursor: Scalars['String']
    node: Variable
    __typename: 'PluginVariablesConnectionEdge'
}

export interface Preferences {
    buildFailedEmail: Scalars['Boolean']
    changelogEmail: Scalars['Boolean']
    communityEmail: Scalars['Boolean']
    deployCrashedEmail: Scalars['Boolean']
    id: Scalars['ID']
    marketingEmail: Scalars['Boolean']
    subprocessorUpdatesEmail: Scalars['Boolean']
    usageEmail: Scalars['Boolean']
    __typename: 'Preferences'
}

export interface PrivateNetwork {
    createdAt: (Scalars['DateTime'] | null)
    deletedAt: (Scalars['DateTime'] | null)
    dnsName: Scalars['String']
    environmentId: Scalars['String']
    name: Scalars['String']
    networkId: Scalars['BigInt']
    projectId: Scalars['String']
    publicId: Scalars['String']
    tags: Scalars['String'][]
    __typename: 'PrivateNetwork'
}

export interface PrivateNetworkEndpoint {
    createdAt: (Scalars['DateTime'] | null)
    deletedAt: (Scalars['DateTime'] | null)
    dnsName: Scalars['String']
    privateIps: Scalars['String'][]
    publicId: Scalars['String']
    serviceInstanceId: Scalars['String']
    tags: Scalars['String'][]
    __typename: 'PrivateNetworkEndpoint'
}

export interface Project {
    baseEnvironment: (Environment | null)
    baseEnvironmentId: (Scalars['String'] | null)
    createdAt: Scalars['DateTime']
    deletedAt: (Scalars['DateTime'] | null)
    deploymentTriggers: ProjectDeploymentTriggersConnection
    deployments: ProjectDeploymentsConnection
    description: (Scalars['String'] | null)
    environments: ProjectEnvironmentsConnection
    expiredAt: (Scalars['DateTime'] | null)
    groups: ProjectGroupsConnection
    id: Scalars['ID']
    isPublic: Scalars['Boolean']
    isTempProject: Scalars['Boolean']
    members: ProjectMember[]
    name: Scalars['String']
    plugins: ProjectPluginsConnection
    prDeploys: Scalars['Boolean']
    prForks: Scalars['Boolean']
    projectPermissions: ProjectProjectPermissionsConnection
    services: ProjectServicesConnection
    subscriptionPlanLimit: Scalars['SubscriptionPlanLimit']
    subscriptionType: SubscriptionPlanType
    team: (Team | null)
    teamId: (Scalars['String'] | null)
    updatedAt: Scalars['DateTime']
    volumes: ProjectVolumesConnection
    webhooks: ProjectWebhooksConnection
    __typename: 'Project'
}

export interface ProjectDeploymentTriggersConnection {
    edges: ProjectDeploymentTriggersConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'ProjectDeploymentTriggersConnection'
}

export interface ProjectDeploymentTriggersConnectionEdge {
    cursor: Scalars['String']
    node: DeploymentTrigger
    __typename: 'ProjectDeploymentTriggersConnectionEdge'
}

export interface ProjectDeploymentsConnection {
    edges: ProjectDeploymentsConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'ProjectDeploymentsConnection'
}

export interface ProjectDeploymentsConnectionEdge {
    cursor: Scalars['String']
    node: Deployment
    __typename: 'ProjectDeploymentsConnectionEdge'
}

export interface ProjectEnvironmentsConnection {
    edges: ProjectEnvironmentsConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'ProjectEnvironmentsConnection'
}

export interface ProjectEnvironmentsConnectionEdge {
    cursor: Scalars['String']
    node: Environment
    __typename: 'ProjectEnvironmentsConnectionEdge'
}

export interface ProjectGroupsConnection {
    edges: ProjectGroupsConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'ProjectGroupsConnection'
}

export interface ProjectGroupsConnectionEdge {
    cursor: Scalars['String']
    __typename: 'ProjectGroupsConnectionEdge'
}

export interface ProjectInvitation {
    email: Scalars['String']
    expiresAt: Scalars['DateTime']
    id: Scalars['ID']
    inviter: (ProjectInvitationInviter | null)
    isExpired: Scalars['Boolean']
    project: PublicProjectInformation
    __typename: 'ProjectInvitation'
}

export interface ProjectInvitationInviter {
    email: Scalars['String']
    name: (Scalars['String'] | null)
    __typename: 'ProjectInvitationInviter'
}

export interface ProjectMember {
    avatar: (Scalars['String'] | null)
    email: Scalars['String']
    id: Scalars['String']
    name: (Scalars['String'] | null)
    role: ProjectRole
    __typename: 'ProjectMember'
}

export interface ProjectPermission {
    id: Scalars['ID']
    projectId: Scalars['String']
    role: ProjectRole
    userId: Scalars['String']
    __typename: 'ProjectPermission'
}

export interface ProjectPluginsConnection {
    edges: ProjectPluginsConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'ProjectPluginsConnection'
}

export interface ProjectPluginsConnectionEdge {
    cursor: Scalars['String']
    node: Plugin
    __typename: 'ProjectPluginsConnectionEdge'
}

export interface ProjectProjectPermissionsConnection {
    edges: ProjectProjectPermissionsConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'ProjectProjectPermissionsConnection'
}

export interface ProjectProjectPermissionsConnectionEdge {
    cursor: Scalars['String']
    node: ProjectPermission
    __typename: 'ProjectProjectPermissionsConnectionEdge'
}

export interface ProjectResourceAccess {
    customDomain: AccessRule
    databaseDeployment: AccessRule
    deployment: AccessRule
    environment: AccessRule
    plugin: AccessRule
    __typename: 'ProjectResourceAccess'
}

export type ProjectRole = 'ADMIN' | 'MEMBER' | 'VIEWER'

export interface ProjectServicesConnection {
    edges: ProjectServicesConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'ProjectServicesConnection'
}

export interface ProjectServicesConnectionEdge {
    cursor: Scalars['String']
    node: Service
    __typename: 'ProjectServicesConnectionEdge'
}

export interface ProjectToken {
    createdAt: Scalars['DateTime']
    displayToken: Scalars['String']
    environment: Environment
    environmentId: Scalars['String']
    id: Scalars['ID']
    name: Scalars['String']
    project: Project
    projectId: Scalars['String']
    __typename: 'ProjectToken'
}

export interface ProjectVolumesConnection {
    edges: ProjectVolumesConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'ProjectVolumesConnection'
}

export interface ProjectVolumesConnectionEdge {
    cursor: Scalars['String']
    node: Volume
    __typename: 'ProjectVolumesConnectionEdge'
}

export interface ProjectWebhook {
    id: Scalars['ID']
    lastStatus: (Scalars['Int'] | null)
    projectId: Scalars['String']
    url: Scalars['String']
    __typename: 'ProjectWebhook'
}

export interface ProjectWebhooksConnection {
    edges: ProjectWebhooksConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'ProjectWebhooksConnection'
}

export interface ProjectWebhooksConnectionEdge {
    cursor: Scalars['String']
    node: ProjectWebhook
    __typename: 'ProjectWebhooksConnectionEdge'
}

export interface ProviderAuth {
    email: Scalars['String']
    id: Scalars['ID']
    metadata: Scalars['JSON']
    provider: Scalars['String']
    userId: Scalars['String']
    __typename: 'ProviderAuth'
}

export interface PublicProjectInformation {
    id: Scalars['ID']
    name: Scalars['String']
    __typename: 'PublicProjectInformation'
}

export type PublicProjectInvitation = (InviteCode | ProjectInvitation) & { __isUnion?: true }

export interface PublicStats {
    totalDeploymentsLastMonth: Scalars['Int']
    totalLogsLastMonth: Scalars['BigInt']
    totalProjects: Scalars['Int']
    totalRequestsLastMonth: Scalars['BigInt']
    totalServices: Scalars['Int']
    totalUsers: Scalars['Int']
    __typename: 'PublicStats'
}

export interface Query {
    /** Get all volume instances for a given volume */
    adminVolumeInstancesForVolume: VolumeInstance[]
    /** Gets all API tokens for the authenticated user. */
    apiTokens: QueryApiTokensConnection
    /** Fetch logs for a build */
    buildLogs: Log[]
    /** Gets the image URL for a Notion image block */
    changelogBlockImage: Scalars['String']
    /** Get the total count and sum of transfers to date. */
    creditTransferMetrics: CreditTransferMetrics
    /** Fetch details for a custom domain */
    customDomain: CustomDomain
    /** Checks if a custom domain is available. */
    customDomainAvailable: DomainAvailable
    /** Find a single deployment */
    deployment: Deployment
    /** Fetch logs for a deployment */
    deploymentLogs: Log[]
    /** All deployment triggers. */
    deploymentTriggers: QueryDeploymentTriggersConnection
    /** Get all deployments */
    deployments: QueryDeploymentsConnection
    /**
     * @deprecated Use the `status` field within the `domain` query instead
     * Domain with status
     */
    domainStatus: DomainWithStatus
    /** All domains for a service instance */
    domains: AllDomains
    /** All egress gateways assigned to a service instance */
    egressGateways: EgressGateway[]
    /** Find a single environment */
    environment: Environment
    /** Get the patches for an environment */
    environmentPatches: QueryEnvironmentPatchesConnection
    /** Gets all environments for a project. */
    environments: QueryEnvironmentsConnection
    /** Get the estimated total cost of the project at the end of the current billing cycle */
    estimatedUsage: EstimatedUsage[]
    /** Gets the events for a project. */
    events: QueryEventsConnection
    /** Check if a repo name is available */
    githubIsRepoNameAvailable: Scalars['Boolean']
    /** Get branches for a GitHub repo that the authenticated user has access to */
    githubRepoBranches: GitHubBranch[]
    /** Get a list of repos for a user that Railway has access to */
    githubRepos: GitHubRepo[]
    /** Get a list of scopes the user has installed the installation to */
    githubWritableScopes: Scalars['String'][]
    /** Get the Herokus apps for the current user */
    herokuApps: HerokuApp[]
    /** Get an integration auth by provider providerId */
    integrationAuth: IntegrationAuth
    /** Get all integration auths for a user */
    integrationAuths: QueryIntegrationAuthsConnection
    /** Get all integrations for a project */
    integrations: QueryIntegrationsConnection
    /** Get an invite code by the code */
    inviteCode: InviteCode
    /** Gets the authenticated user. */
    me: User
    /** Get metrics for a project, environment, and service */
    metrics: MetricsResult[]
    node: (Node | null)
    nodes: (Node | null)[]
    /** Get a user's Plain Customer ID given their Discord ID. */
    plainCustomerIdForDiscordId: Scalars['String']
    /** Get a user JWT token for a Discord id */
    plainJWTForDiscordId: Scalars['String']
    /** Get the current status of the platform */
    platformStatus: PlatformStatus
    /** Get a plugin by ID. */
    plugin: Plugin
    /** Fetch logs for a plugin */
    pluginLogs: Log[]
    /** Get the email preferences for a user */
    preferences: Preferences
    /** Get a private network endpoint for a service instance. */
    privateNetworkEndpoint: (PrivateNetworkEndpoint | null)
    /** Check if an endpoint name is available. */
    privateNetworkEndpointNameAvailable: Scalars['Boolean']
    /** List private networks for an environment. */
    privateNetworks: PrivateNetwork[]
    /** Get a project by ID */
    project: Project
    /** Get a project invitation by code */
    projectInvitation: PublicProjectInvitation
    /** Get invitations for a project */
    projectInvitations: ProjectInvitation[]
    /** Get an invite code for a project for a specifc role */
    projectInviteCode: InviteCode
    /** Gets users who belong to a project along with their role */
    projectMembers: ProjectMember[]
    /** Get resource access rules for project-specific actions */
    projectResourceAccess: ProjectResourceAccess
    /** Get a single project token by the value in the header */
    projectToken: ProjectToken
    /** Get all project tokens for a project */
    projectTokens: QueryProjectTokensConnection
    /** Gets all projects for a user or a team. */
    projects: QueryProjectsConnection
    /** Get public Railway stats. Primarily used for the landing page. */
    publicStats: PublicStats
    /** Gets the ReferralInfo for the authenticated user. */
    referralInfo: ReferralInfo
    /** List available regions */
    regions: Region[]
    /** Get resource access for the current user or team */
    resourceAccess: ResourceAccess
    /** Get a service by ID */
    service: Service
    /** Checks if a service domain is available */
    serviceDomainAvailable: DomainAvailable
    /** Get a service instance belonging to a service and environment */
    serviceInstance: ServiceInstance
    /** Check if the upstream repo for a service has an update available */
    serviceInstanceIsUpdatable: Scalars['Boolean']
    /** Gets all sessions for authenticated user. */
    sessions: QuerySessionsConnection
    /** All TCP proxies for a service instance */
    tcpProxies: TCPProxy[]
    /** Find a team by ID */
    team: Team
    /** Find a team by invite code */
    teamByCode: Team
    /** Fetch Discord info associated with Direct Support-eligible team members, given a Discord UID */
    teamDirectSupportDiscordInfoForDiscordId: (TeamDirectSupportDiscordInfo | null)
    /** Get all templates for a team. */
    teamTemplates: QueryTeamTemplatesConnection
    /** Get a template by code or GitHub owner and repo. */
    template: Template
    /** Convert a Heroku template to a (legacy) Railway template config object. */
    templateFromHerokuTemplate: Scalars['JSON']
    /** Get the top 25 users with the most template kickback earnings. */
    templateKickbacksLeaderboard: TemplateKickbacksLeaderboard[]
    /** Get the source template for a project. */
    templateSourceForProject: (Template | null)
    /** Get the all-time sum of template kickbacks. */
    templatekickbacksTotal: Scalars['Float']
    /** Get all published templates. */
    templates: QueryTemplatesConnection
    /** Gets the TwoFactorInfo for the authenticated user. */
    twoFactorInfo: TwoFactorInfo
    /** Get the usage for a single project or all projects for a user/team. If no `projectId` or `teamId` is provided, the usage for the current user is returned. */
    usage: AggregatedUsage[]
    /** Get the user id corresponding to a Discord id */
    userIdForDiscordId: Scalars['String']
    /** Get the total kickback earnings for a user. */
    userKickbackEarnings: UserKickbackEarnings
    /** Get the public profile for a user */
    userProfile: UserProfileResponse
    /** Get all templates for the current user. */
    userTemplates: QueryUserTemplatesConnection
    /** All variables by pluginId or serviceId. If neither are provided, all shared variables are returned. */
    variables: Scalars['ServiceVariables']
    /** All rendered variables that are required for a service deployment. */
    variablesForServiceDeployment: Scalars['ServiceVariables']
    /** Get information about the user's Vercel accounts */
    vercelInfo: VercelInfo
    /** Get a single volume instance by id */
    volumeInstance: VolumeInstance
    /** Get all webhooks for a project */
    webhooks: QueryWebhooksConnection
    /** Gets the status of a workflow */
    workflowStatus: WorkflowResult
    __typename: 'Query'
}

export interface QueryApiTokensConnection {
    edges: QueryApiTokensConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'QueryApiTokensConnection'
}

export interface QueryApiTokensConnectionEdge {
    cursor: Scalars['String']
    node: ApiToken
    __typename: 'QueryApiTokensConnectionEdge'
}

export interface QueryDeploymentTriggersConnection {
    edges: QueryDeploymentTriggersConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'QueryDeploymentTriggersConnection'
}

export interface QueryDeploymentTriggersConnectionEdge {
    cursor: Scalars['String']
    node: DeploymentTrigger
    __typename: 'QueryDeploymentTriggersConnectionEdge'
}

export interface QueryDeploymentsConnection {
    edges: QueryDeploymentsConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'QueryDeploymentsConnection'
}

export interface QueryDeploymentsConnectionEdge {
    cursor: Scalars['String']
    node: Deployment
    __typename: 'QueryDeploymentsConnectionEdge'
}

export interface QueryEnvironmentPatchesConnection {
    edges: QueryEnvironmentPatchesConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'QueryEnvironmentPatchesConnection'
}

export interface QueryEnvironmentPatchesConnectionEdge {
    cursor: Scalars['String']
    __typename: 'QueryEnvironmentPatchesConnectionEdge'
}

export interface QueryEnvironmentsConnection {
    edges: QueryEnvironmentsConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'QueryEnvironmentsConnection'
}

export interface QueryEnvironmentsConnectionEdge {
    cursor: Scalars['String']
    node: Environment
    __typename: 'QueryEnvironmentsConnectionEdge'
}

export interface QueryEventsConnection {
    edges: QueryEventsConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'QueryEventsConnection'
}

export interface QueryEventsConnectionEdge {
    cursor: Scalars['String']
    node: Event
    __typename: 'QueryEventsConnectionEdge'
}

export interface QueryIntegrationAuthsConnection {
    edges: QueryIntegrationAuthsConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'QueryIntegrationAuthsConnection'
}

export interface QueryIntegrationAuthsConnectionEdge {
    cursor: Scalars['String']
    node: IntegrationAuth
    __typename: 'QueryIntegrationAuthsConnectionEdge'
}

export interface QueryIntegrationsConnection {
    edges: QueryIntegrationsConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'QueryIntegrationsConnection'
}

export interface QueryIntegrationsConnectionEdge {
    cursor: Scalars['String']
    node: Integration
    __typename: 'QueryIntegrationsConnectionEdge'
}

export interface QueryProjectTokensConnection {
    edges: QueryProjectTokensConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'QueryProjectTokensConnection'
}

export interface QueryProjectTokensConnectionEdge {
    cursor: Scalars['String']
    node: ProjectToken
    __typename: 'QueryProjectTokensConnectionEdge'
}

export interface QueryProjectsConnection {
    edges: QueryProjectsConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'QueryProjectsConnection'
}

export interface QueryProjectsConnectionEdge {
    cursor: Scalars['String']
    node: Project
    __typename: 'QueryProjectsConnectionEdge'
}

export interface QuerySessionsConnection {
    edges: QuerySessionsConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'QuerySessionsConnection'
}

export interface QuerySessionsConnectionEdge {
    cursor: Scalars['String']
    node: Session
    __typename: 'QuerySessionsConnectionEdge'
}

export interface QueryTeamTemplatesConnection {
    edges: QueryTeamTemplatesConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'QueryTeamTemplatesConnection'
}

export interface QueryTeamTemplatesConnectionEdge {
    cursor: Scalars['String']
    node: Template
    __typename: 'QueryTeamTemplatesConnectionEdge'
}

export interface QueryTemplatesConnection {
    edges: QueryTemplatesConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'QueryTemplatesConnection'
}

export interface QueryTemplatesConnectionEdge {
    cursor: Scalars['String']
    node: Template
    __typename: 'QueryTemplatesConnectionEdge'
}

export interface QueryUserTemplatesConnection {
    edges: QueryUserTemplatesConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'QueryUserTemplatesConnection'
}

export interface QueryUserTemplatesConnectionEdge {
    cursor: Scalars['String']
    node: Template
    __typename: 'QueryUserTemplatesConnectionEdge'
}

export interface QueryWebhooksConnection {
    edges: QueryWebhooksConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'QueryWebhooksConnection'
}

export interface QueryWebhooksConnectionEdge {
    cursor: Scalars['String']
    node: ProjectWebhook
    __typename: 'QueryWebhooksConnectionEdge'
}

export interface RecoveryCodes {
    recoveryCodes: Scalars['String'][]
    __typename: 'RecoveryCodes'
}

export interface ReferralInfo {
    code: Scalars['String']
    id: Scalars['ID']
    referralStats: ReferralStats
    status: Scalars['String']
    __typename: 'ReferralInfo'
}

export interface ReferralStats {
    credited: Scalars['Int']
    pending: Scalars['Int']
    __typename: 'ReferralStats'
}

export type ReferralStatus = 'REFEREE_CREDITED' | 'REFERRER_CREDITED' | 'REGISTERED'

export interface ReferralUser {
    code: Scalars['String']
    id: Scalars['String']
    status: ReferralStatus
    __typename: 'ReferralUser'
}

export interface Region {
    name: Scalars['String']
    __typename: 'Region'
}

export type RegistrationStatus = 'ONBOARDED' | 'REGISTERED' | 'WAITLISTED'

export interface ResourceAccess {
    project: AccessRule
    __typename: 'ResourceAccess'
}

export type ResourceOwnerType = 'TEAM' | 'USER'

export type RestartPolicyType = 'ALWAYS' | 'NEVER' | 'ON_FAILURE'

export interface Service {
    createdAt: Scalars['DateTime']
    deletedAt: (Scalars['DateTime'] | null)
    deployments: ServiceDeploymentsConnection
    icon: (Scalars['String'] | null)
    id: Scalars['ID']
    name: Scalars['String']
    project: Project
    projectId: Scalars['String']
    repoTriggers: ServiceRepoTriggersConnection
    serviceInstances: ServiceServiceInstancesConnection
    templateThreadSlug: (Scalars['String'] | null)
    updatedAt: Scalars['DateTime']
    __typename: 'Service'
}

export interface ServiceDeploymentsConnection {
    edges: ServiceDeploymentsConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'ServiceDeploymentsConnection'
}

export interface ServiceDeploymentsConnectionEdge {
    cursor: Scalars['String']
    node: Deployment
    __typename: 'ServiceDeploymentsConnectionEdge'
}

export interface ServiceDomain {
    createdAt: (Scalars['DateTime'] | null)
    deletedAt: (Scalars['DateTime'] | null)
    domain: Scalars['String']
    environmentId: Scalars['String']
    id: Scalars['ID']
    projectId: (Scalars['String'] | null)
    serviceId: Scalars['String']
    suffix: (Scalars['String'] | null)
    updatedAt: (Scalars['DateTime'] | null)
    __typename: 'ServiceDomain'
}

export interface ServiceInstance {
    buildCommand: (Scalars['String'] | null)
    builder: Builder
    createdAt: Scalars['DateTime']
    cronSchedule: (Scalars['String'] | null)
    deletedAt: (Scalars['DateTime'] | null)
    domains: AllDomains
    environmentId: Scalars['String']
    healthcheckPath: (Scalars['String'] | null)
    healthcheckTimeout: (Scalars['Int'] | null)
    id: Scalars['ID']
    isUpdatable: Scalars['Boolean']
    latestDeployment: (Deployment | null)
    nextCronRunAt: (Scalars['DateTime'] | null)
    nixpacksPlan: (Scalars['JSON'] | null)
    numReplicas: (Scalars['Int'] | null)
    railwayConfigFile: (Scalars['String'] | null)
    region: (Scalars['String'] | null)
    restartPolicyMaxRetries: Scalars['Int']
    restartPolicyType: RestartPolicyType
    rootDirectory: (Scalars['String'] | null)
    serviceId: Scalars['String']
    sleepApplication: (Scalars['Boolean'] | null)
    source: (ServiceSource | null)
    startCommand: (Scalars['String'] | null)
    updatedAt: Scalars['DateTime']
    upstreamUrl: (Scalars['String'] | null)
    watchPatterns: Scalars['String'][]
    __typename: 'ServiceInstance'
}

export interface ServiceRepoTriggersConnection {
    edges: ServiceRepoTriggersConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'ServiceRepoTriggersConnection'
}

export interface ServiceRepoTriggersConnectionEdge {
    cursor: Scalars['String']
    node: DeploymentTrigger
    __typename: 'ServiceRepoTriggersConnectionEdge'
}

export interface ServiceServiceInstancesConnection {
    edges: ServiceServiceInstancesConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'ServiceServiceInstancesConnection'
}

export interface ServiceServiceInstancesConnectionEdge {
    cursor: Scalars['String']
    node: ServiceInstance
    __typename: 'ServiceServiceInstancesConnectionEdge'
}

export interface ServiceSource {
    image: (Scalars['String'] | null)
    repo: (Scalars['String'] | null)
    __typename: 'ServiceSource'
}

export interface Session {
    createdAt: Scalars['DateTime']
    expiredAt: Scalars['DateTime']
    id: Scalars['ID']
    isCurrent: Scalars['Boolean']
    name: Scalars['String']
    type: SessionType
    updatedAt: Scalars['DateTime']
    __typename: 'Session'
}

export type SessionType = 'BROWSER' | 'CLI' | 'FORUMS'

export interface SimilarTemplate {
    code: Scalars['String']
    createdAt: Scalars['DateTime']
    creator: (TemplateCreator | null)
    deploys: Scalars['Int']
    description: (Scalars['String'] | null)
    health: (Scalars['Float'] | null)
    image: (Scalars['String'] | null)
    name: Scalars['String']
    teamId: (Scalars['String'] | null)
    userId: (Scalars['String'] | null)
    __typename: 'SimilarTemplate'
}

export interface Subscription {
    /** Stream logs for a build */
    buildLogs: Log[]
    /** Stream logs for a deployment */
    deploymentLogs: Log[]
    /** Stream logs for a plugin */
    pluginLogs: Log[]
    __typename: 'Subscription'
}

export interface SubscriptionDiscount {
    couponId: Scalars['String']
    __typename: 'SubscriptionDiscount'
}

export interface SubscriptionItem {
    itemId: Scalars['String']
    priceId: Scalars['String']
    productId: Scalars['String']
    quantity: (Scalars['BigInt'] | null)
    __typename: 'SubscriptionItem'
}

export type SubscriptionPlanType = 'hobby' | 'pro' | 'trial'

export type SubscriptionState = 'ACTIVE' | 'CANCELLED' | 'INACTIVE' | 'PAST_DUE' | 'UNPAID'

export interface TCPProxy {
    applicationPort: Scalars['Int']
    createdAt: (Scalars['DateTime'] | null)
    deletedAt: (Scalars['DateTime'] | null)
    domain: Scalars['String']
    environmentId: Scalars['String']
    id: Scalars['ID']
    proxyPort: Scalars['Int']
    serviceId: Scalars['String']
    updatedAt: (Scalars['DateTime'] | null)
    __typename: 'TCPProxy'
}

export interface Team {
    adoptionHistory: AdoptionInfo[]
    adoptionLevel: Scalars['Float']
    avatar: (Scalars['String'] | null)
    banReason: (Scalars['String'] | null)
    createdAt: Scalars['DateTime']
    customer: Customer
    discordRole: (Scalars['String'] | null)
    id: Scalars['ID']
    isEligibleForDirectSupport: Scalars['Boolean']
    members: TeamMember[]
    name: Scalars['String']
    projects: TeamProjectsConnection
    slackChannelId: (Scalars['String'] | null)
    teamPermissions: TeamPermission[]
    updatedAt: Scalars['DateTime']
    __typename: 'Team'
}

export interface TeamCreateAndSubscribeResponse {
    customerId: Scalars['String']
    paymentIntent: (Scalars['JSON'] | null)
    teamId: Scalars['String']
    __typename: 'TeamCreateAndSubscribeResponse'
}

export interface TeamDirectSupportDiscordInfo {
    memberDiscordIds: Scalars['String'][]
    teamId: Scalars['String']
    teamName: Scalars['String']
    __typename: 'TeamDirectSupportDiscordInfo'
}

export interface TeamMember {
    avatar: (Scalars['String'] | null)
    email: Scalars['String']
    id: Scalars['String']
    name: (Scalars['String'] | null)
    role: TeamRole
    __typename: 'TeamMember'
}

export interface TeamPermission {
    createdAt: Scalars['DateTime']
    id: Scalars['ID']
    role: TeamRole
    teamId: Scalars['String']
    updatedAt: Scalars['DateTime']
    userId: Scalars['String']
    __typename: 'TeamPermission'
}

export interface TeamProjectsConnection {
    edges: TeamProjectsConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'TeamProjectsConnection'
}

export interface TeamProjectsConnectionEdge {
    cursor: Scalars['String']
    node: Project
    __typename: 'TeamProjectsConnectionEdge'
}

export type TeamRole = 'ADMIN' | 'MEMBER'

export interface Template {
    activeProjects: Scalars['Int']
    code: Scalars['String']
    communityThreadSlug: (Scalars['String'] | null)
    config: Scalars['TemplateConfig']
    createdAt: Scalars['DateTime']
    creator: (TemplateCreator | null)
    demoProjectId: (Scalars['String'] | null)
    health: (Scalars['Float'] | null)
    id: Scalars['ID']
    isApproved: Scalars['Boolean']
    isV2Template: Scalars['Boolean']
    metadata: Scalars['TemplateMetadata']
    projects: Scalars['Int']
    serializedConfig: (Scalars['SerializedTemplateConfig'] | null)
    services: TemplateServicesConnection
    similarTemplates: SimilarTemplate[]
    status: TemplateStatus
    teamId: (Scalars['String'] | null)
    totalPayout: Scalars['Float']
    userId: (Scalars['String'] | null)
    __typename: 'Template'
}

export interface TemplateCreator {
    avatar: (Scalars['String'] | null)
    hasPublicProfile: Scalars['Boolean']
    name: (Scalars['String'] | null)
    username: (Scalars['String'] | null)
    __typename: 'TemplateCreator'
}

export interface TemplateDeployPayload {
    projectId: Scalars['String']
    workflowId: (Scalars['String'] | null)
    __typename: 'TemplateDeployPayload'
}

export interface TemplateKickbacksLeaderboard {
    total_amount: Scalars['Float']
    userId: Scalars['String']
    __typename: 'TemplateKickbacksLeaderboard'
}

export interface TemplateService {
    config: Scalars['TemplateServiceConfig']
    createdAt: Scalars['DateTime']
    id: Scalars['ID']
    templateId: Scalars['String']
    updatedAt: Scalars['DateTime']
    __typename: 'TemplateService'
}

export interface TemplateServicesConnection {
    edges: TemplateServicesConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'TemplateServicesConnection'
}

export interface TemplateServicesConnectionEdge {
    cursor: Scalars['String']
    node: TemplateService
    __typename: 'TemplateServicesConnectionEdge'
}

export type TemplateStatus = 'HIDDEN' | 'PUBLISHED' | 'UNPUBLISHED'

export interface TwoFactorInfo {
    hasRecoveryCodes: Scalars['Boolean']
    isVerified: Scalars['Boolean']
    __typename: 'TwoFactorInfo'
}

export interface TwoFactorInfoSecret {
    secret: Scalars['String']
    uri: Scalars['String']
    __typename: 'TwoFactorInfoSecret'
}

export interface UsageAnomaly {
    actedOn: (Scalars['DateTime'] | null)
    action: (UsageAnomalyAction | null)
    actorId: (Scalars['String'] | null)
    flaggedAt: Scalars['DateTime']
    flaggedFor: UsageAnomalyFlagReason
    id: Scalars['ID']
    __typename: 'UsageAnomaly'
}


/** Possible actions for a UsageAnomaly. */
export type UsageAnomalyAction = 'ALLOWED' | 'AUTOBANNED' | 'BANNED'


/** Possible flag reasons for a UsageAnomaly. */
export type UsageAnomalyFlagReason = 'HIGH_CPU_USAGE' | 'HIGH_DISK_USAGE' | 'HIGH_NETWORK_USAGE'

export interface UsageLimit {
    customerId: Scalars['String']
    hardLimit: (Scalars['Int'] | null)
    id: Scalars['ID']
    softLimit: Scalars['Int']
    __typename: 'UsageLimit'
}

export interface User {
    agreedFairUse: Scalars['Boolean']
    avatar: (Scalars['String'] | null)
    banReason: (Scalars['String'] | null)
    cost: UserCost
    createdAt: Scalars['DateTime']
    customer: Customer
    email: Scalars['String']
    featureFlags: ActiveFeatureFlag[]
    flags: UserFlag[]
    has2FA: Scalars['Boolean']
    id: Scalars['ID']
    isAdmin: Scalars['Boolean']
    isConductor: Scalars['Boolean']
    isDevPlan: Scalars['Boolean']
    isEligibleForFreeHobbyPlan: Scalars['Boolean']
    isOnHobbyPlan: Scalars['Boolean']
    isVerified: Scalars['Boolean']
    lastLogin: Scalars['DateTime']
    name: (Scalars['String'] | null)
    profile: (UserProfile | null)
    projects: UserProjectsConnection
    providerAuths: UserProviderAuthsConnection
    referredUsers: ReferralUser[]
    registrationStatus: RegistrationStatus
    riskLevel: (Scalars['Float'] | null)
    teams: UserTeamsConnection
    termsAgreedOn: (Scalars['DateTime'] | null)
    username: (Scalars['String'] | null)
    __typename: 'User'
}

export interface UserCost {
    current: Scalars['Float']
    estimated: Scalars['Float']
    __typename: 'UserCost'
}

export type UserFlag = 'BETA'

export interface UserKickbackEarnings {
    total_amount: Scalars['Float']
    __typename: 'UserKickbackEarnings'
}

export interface UserProfile {
    bio: (Scalars['String'] | null)
    isPublic: Scalars['Boolean']
    website: (Scalars['String'] | null)
    __typename: 'UserProfile'
}

export interface UserProfileResponse {
    avatar: (Scalars['String'] | null)
    createdAt: Scalars['DateTime']
    customerId: (Scalars['String'] | null)
    isTrialing: (Scalars['Boolean'] | null)
    name: (Scalars['String'] | null)
    profile: UserProfile
    publishedTemplates: SimilarTemplate[]
    state: (Scalars['String'] | null)
    totalDeploys: Scalars['Int']
    username: (Scalars['String'] | null)
    __typename: 'UserProfileResponse'
}

export interface UserProjectsConnection {
    edges: UserProjectsConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'UserProjectsConnection'
}

export interface UserProjectsConnectionEdge {
    cursor: Scalars['String']
    node: Project
    __typename: 'UserProjectsConnectionEdge'
}

export interface UserProviderAuthsConnection {
    edges: UserProviderAuthsConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'UserProviderAuthsConnection'
}

export interface UserProviderAuthsConnectionEdge {
    cursor: Scalars['String']
    node: ProviderAuth
    __typename: 'UserProviderAuthsConnectionEdge'
}

export interface UserTeamsConnection {
    edges: UserTeamsConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'UserTeamsConnection'
}

export interface UserTeamsConnectionEdge {
    cursor: Scalars['String']
    node: Team
    __typename: 'UserTeamsConnectionEdge'
}

export interface Variable {
    createdAt: Scalars['DateTime']
    environment: Environment
    environmentId: (Scalars['String'] | null)
    id: Scalars['ID']
    name: Scalars['String']
    plugin: Plugin
    pluginId: (Scalars['String'] | null)
    references: Scalars['String'][]
    service: Service
    serviceId: (Scalars['String'] | null)
    updatedAt: Scalars['DateTime']
    __typename: 'Variable'
}

export interface VercelAccount {
    id: Scalars['String']
    integrationAuthId: Scalars['String']
    isUser: Scalars['Boolean']
    name: (Scalars['String'] | null)
    projects: VercelProject[]
    slug: (Scalars['String'] | null)
    __typename: 'VercelAccount'
}

export interface VercelInfo {
    accounts: VercelAccount[]
    __typename: 'VercelInfo'
}

export interface VercelProject {
    accountId: Scalars['String']
    id: Scalars['String']
    name: Scalars['String']
    __typename: 'VercelProject'
}

export interface Volume {
    createdAt: Scalars['DateTime']
    id: Scalars['ID']
    name: Scalars['String']
    project: Project
    projectId: Scalars['String']
    volumeInstances: VolumeVolumeInstancesConnection
    __typename: 'Volume'
}

export interface VolumeInstance {
    createdAt: Scalars['DateTime']
    currentSizeMB: Scalars['Float']
    environment: Environment
    environmentId: Scalars['String']
    externalId: (Scalars['String'] | null)
    id: Scalars['ID']
    mountPath: Scalars['String']
    region: (Scalars['String'] | null)
    service: Service
    serviceId: (Scalars['String'] | null)
    sizeMB: Scalars['Int']
    state: (VolumeState | null)
    volume: Volume
    volumeId: Scalars['String']
    __typename: 'VolumeInstance'
}

export type VolumeState = 'DELETED' | 'DELETING' | 'ERROR' | 'MIGRATING' | 'MIGRATION_PENDING' | 'READY' | 'UPDATING'

export interface VolumeVolumeInstancesConnection {
    edges: VolumeVolumeInstancesConnectionEdge[]
    pageInfo: PageInfo
    __typename: 'VolumeVolumeInstancesConnection'
}

export interface VolumeVolumeInstancesConnectionEdge {
    cursor: Scalars['String']
    node: VolumeInstance
    __typename: 'VolumeVolumeInstancesConnectionEdge'
}

export interface WorkflowResult {
    error: (Scalars['String'] | null)
    status: WorkflowStatus
    __typename: 'WorkflowResult'
}

export type WorkflowStatus = 'Complete' | 'Error' | 'NotFound' | 'Running'

export interface AccessRuleGenqlSelection{
    disallowed?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AdoptionInfoGenqlSelection{
    adoptionLevel?: boolean | number
    createdAt?: boolean | number
    customer?: TeamGenqlSelection
    deltaLevel?: boolean | number
    id?: boolean | number
    matchedIcpEmail?: boolean | number
    monthlyEstimatedUsage?: boolean | number
    numConfigFile?: boolean | number
    numCronSchedule?: boolean | number
    numDeploys?: boolean | number
    numEnvs?: boolean | number
    numFailedDeploys?: boolean | number
    numHealthcheck?: boolean | number
    numIconConfig?: boolean | number
    numRegion?: boolean | number
    numReplicas?: boolean | number
    numRootDirectory?: boolean | number
    numSeats?: boolean | number
    numServices?: boolean | number
    numSupportRequests?: boolean | number
    numVariables?: boolean | number
    numWatchPatterns?: boolean | number
    totalCores?: boolean | number
    totalDisk?: boolean | number
    totalNetwork?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The aggregated usage of a single measurement. */
export interface AggregatedUsageGenqlSelection{
    /** The measurement that was aggregated. */
    measurement?: boolean | number
    /** The tags that were used to group the metric. Only the tags that were used in the `groupBy` will be present. */
    tags?: MetricTagsGenqlSelection
    /** The aggregated value. */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AllDomainsGenqlSelection{
    customDomains?: CustomDomainGenqlSelection
    serviceDomains?: ServiceDomainGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ApiTokenGenqlSelection{
    displayToken?: boolean | number
    id?: boolean | number
    name?: boolean | number
    teamId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ApiTokenCreateInput {name: Scalars['String'],teamId?: (Scalars['String'] | null)}

export interface BanReasonHistoryGenqlSelection{
    actor?: UserGenqlSelection
    banReason?: boolean | number
    createdAt?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface BaseEnvironmentOverrideInput {baseEnvironmentOverrideId?: (Scalars['String'] | null)}


/** The billing period for a customers subscription. */
export interface BillingPeriodGenqlSelection{
    end?: boolean | number
    start?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CertificatePublicDataGenqlSelection{
    domainNames?: boolean | number
    expiresAt?: boolean | number
    fingerprintSha256?: boolean | number
    issuedAt?: boolean | number
    keyType?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CnameCheckGenqlSelection{
    link?: boolean | number
    message?: boolean | number
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ContainerGenqlSelection{
    createdAt?: boolean | number
    deletedAt?: boolean | number
    environment?: EnvironmentGenqlSelection
    environmentId?: boolean | number
    id?: boolean | number
    migratedAt?: boolean | number
    plugin?: PluginGenqlSelection
    pluginId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreditGenqlSelection{
    amount?: boolean | number
    createdAt?: boolean | number
    customerId?: boolean | number
    id?: boolean | number
    memo?: boolean | number
    type?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreditTransferMetricsGenqlSelection{
    creditTransferAvg?: boolean | number
    creditTransferCount?: boolean | number
    creditTransferSum?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomDomainGenqlSelection{
    /** @deprecated Use the `status` field instead. */
    cnameCheck?: CnameCheckGenqlSelection
    createdAt?: boolean | number
    deletedAt?: boolean | number
    domain?: boolean | number
    environmentId?: boolean | number
    id?: boolean | number
    projectId?: boolean | number
    serviceId?: boolean | number
    status?: CustomDomainStatusGenqlSelection
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomDomainCreateInput {domain: Scalars['String'],environmentId: Scalars['String'],projectId: Scalars['String'],serviceId: Scalars['String']}

export interface CustomDomainStatusGenqlSelection{
    cdnProvider?: boolean | number
    certificateStatus?: boolean | number
    certificates?: CertificatePublicDataGenqlSelection
    dnsRecords?: DNSRecordsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomerGenqlSelection{
    appliedCredits?: boolean | number
    billingEmail?: boolean | number
    billingPeriod?: BillingPeriodGenqlSelection
    creditBalance?: boolean | number
    credits?: (CustomerCreditsConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    defaultPaymentMethod?: PaymentMethodGenqlSelection
    defaultPaymentMethodId?: boolean | number
    id?: boolean | number
    invoices?: CustomerInvoiceGenqlSelection
    isPrepaying?: boolean | number
    isTrialing?: boolean | number
    isUsageSubscriber?: boolean | number
    planLimitOverride?: PlanLimitOverrideGenqlSelection
    remainingUsageCreditBalance?: boolean | number
    state?: boolean | number
    stripeCustomerId?: boolean | number
    subscriptions?: CustomerSubscriptionGenqlSelection
    teamId?: boolean | number
    usageLimit?: UsageLimitGenqlSelection
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomerCreditsConnectionGenqlSelection{
    edges?: CustomerCreditsConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomerCreditsConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: CreditGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomerInvoiceGenqlSelection{
    amountPaid?: boolean | number
    hostedURL?: boolean | number
    invoiceId?: boolean | number
    items?: SubscriptionItemGenqlSelection
    paymentIntentStatus?: boolean | number
    pdfURL?: boolean | number
    periodEnd?: boolean | number
    periodStart?: boolean | number
    status?: boolean | number
    subscriptionId?: boolean | number
    total?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomerSubscriptionGenqlSelection{
    billingCycleAnchor?: boolean | number
    cancelAt?: boolean | number
    cancelAtPeriodEnd?: boolean | number
    couponId?: boolean | number
    discounts?: SubscriptionDiscountGenqlSelection
    id?: boolean | number
    items?: SubscriptionItemGenqlSelection
    latestInvoiceId?: boolean | number
    nextInvoiceCurrentTotal?: boolean | number
    nextInvoiceDate?: boolean | number
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DNSRecordsGenqlSelection{
    currentValue?: boolean | number
    fqdn?: boolean | number
    hostlabel?: boolean | number
    purpose?: boolean | number
    recordType?: boolean | number
    requiredValue?: boolean | number
    status?: boolean | number
    zone?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeploymentGenqlSelection{
    canRedeploy?: boolean | number
    canRollback?: boolean | number
    createdAt?: boolean | number
    creator?: UserGenqlSelection
    environment?: EnvironmentGenqlSelection
    environmentId?: boolean | number
    id?: boolean | number
    meta?: boolean | number
    projectId?: boolean | number
    service?: ServiceGenqlSelection
    serviceId?: boolean | number
    snapshotId?: boolean | number
    staticUrl?: boolean | number
    status?: boolean | number
    suggestAddServiceDomain?: boolean | number
    updatedAt?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeploymentListInput {environmentId?: (Scalars['String'] | null),includeDeleted?: (Scalars['Boolean'] | null),projectId?: (Scalars['String'] | null),serviceId?: (Scalars['String'] | null),status?: (DeploymentStatusInput | null)}

export interface DeploymentSnapshotGenqlSelection{
    createdAt?: boolean | number
    id?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeploymentStatusInput {in?: (DeploymentStatus[] | null),notIn?: (DeploymentStatus[] | null)}

export interface DeploymentTriggerGenqlSelection{
    baseEnvironmentOverrideId?: boolean | number
    branch?: boolean | number
    checkSuites?: boolean | number
    environmentId?: boolean | number
    id?: boolean | number
    projectId?: boolean | number
    provider?: boolean | number
    repository?: boolean | number
    serviceId?: boolean | number
    validCheckSuites?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DeploymentTriggerCreateInput {branch: Scalars['String'],checkSuites?: (Scalars['Boolean'] | null),environmentId: Scalars['String'],projectId: Scalars['String'],provider: Scalars['String'],repository: Scalars['String'],rootDirectory?: (Scalars['String'] | null),serviceId: Scalars['String']}

export interface DeploymentTriggerUpdateInput {branch?: (Scalars['String'] | null),checkSuites?: (Scalars['Boolean'] | null),repository?: (Scalars['String'] | null),rootDirectory?: (Scalars['String'] | null)}

export interface DomainGenqlSelection{
    createdAt?: boolean | number
    deletedAt?: boolean | number
    domain?: boolean | number
    environmentId?: boolean | number
    id?: boolean | number
    projectId?: boolean | number
    serviceId?: boolean | number
    updatedAt?: boolean | number
    on_CustomDomain?: CustomDomainGenqlSelection
    on_ServiceDomain?: ServiceDomainGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DomainAvailableGenqlSelection{
    available?: boolean | number
    message?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface DomainWithStatusGenqlSelection{
    cdnProvider?: boolean | number
    certificateStatus?: boolean | number
    certificates?: CertificatePublicDataGenqlSelection
    dnsRecords?: DNSRecordsGenqlSelection
    domain?: DomainGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EgressGatewayGenqlSelection{
    ipv4?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EgressGatewayCreateInput {environmentId: Scalars['String'],serviceId: Scalars['String']}

export interface EnvironmentGenqlSelection{
    createdAt?: boolean | number
    deletedAt?: boolean | number
    deploymentTriggers?: (EnvironmentDeploymentTriggersConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    deployments?: (EnvironmentDeploymentsConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    id?: boolean | number
    isEphemeral?: boolean | number
    meta?: EnvironmentMetaGenqlSelection
    name?: boolean | number
    projectId?: boolean | number
    serviceInstances?: (EnvironmentServiceInstancesConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    sourceEnvironment?: EnvironmentGenqlSelection
    unmergedChangesCount?: boolean | number
    updatedAt?: boolean | number
    variables?: (EnvironmentVariablesConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    volumeInstances?: (EnvironmentVolumeInstancesConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EnvironmentCreateInput {ephemeral?: (Scalars['Boolean'] | null),name: Scalars['String'],projectId: Scalars['String'],
/** When committing the changes immediately, skip any initial deployments. */
skipInitialDeploys?: (Scalars['Boolean'] | null),
/** Create the environment with all of the services, volumes, configuration, and variables from this source environment. */
sourceEnvironmentId?: (Scalars['String'] | null),
/** Stage the initial changes for the environment. If false (default), the changes will be committed immediately. */
stageInitialChanges?: (Scalars['Boolean'] | null)}

export interface EnvironmentDeploymentTriggersConnectionGenqlSelection{
    edges?: EnvironmentDeploymentTriggersConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EnvironmentDeploymentTriggersConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: DeploymentTriggerGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EnvironmentDeploymentsConnectionGenqlSelection{
    edges?: EnvironmentDeploymentsConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EnvironmentDeploymentsConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: DeploymentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EnvironmentMetaGenqlSelection{
    baseBranch?: boolean | number
    branch?: boolean | number
    prCommentId?: boolean | number
    prNumber?: boolean | number
    prRepo?: boolean | number
    prTitle?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EnvironmentRenameInput {name: Scalars['String']}

export interface EnvironmentServiceInstancesConnectionGenqlSelection{
    edges?: EnvironmentServiceInstancesConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EnvironmentServiceInstancesConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: ServiceInstanceGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EnvironmentTriggersDeployInput {environmentId: Scalars['String'],projectId: Scalars['String'],serviceId: Scalars['String']}

export interface EnvironmentVariablesConnectionGenqlSelection{
    edges?: EnvironmentVariablesConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EnvironmentVariablesConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: VariableGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EnvironmentVolumeInstancesConnectionGenqlSelection{
    edges?: EnvironmentVolumeInstancesConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EnvironmentVolumeInstancesConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: VolumeInstanceGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The estimated usage of a single measurement. */
export interface EstimatedUsageGenqlSelection{
    /** The estimated value. */
    estimatedValue?: boolean | number
    /** The measurement that was estimated. */
    measurement?: boolean | number
    projectId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventGenqlSelection{
    action?: boolean | number
    createdAt?: boolean | number
    environment?: EnvironmentGenqlSelection
    environmentId?: boolean | number
    id?: boolean | number
    object?: boolean | number
    payload?: boolean | number
    project?: ProjectGenqlSelection
    projectId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EventBatchTrackInput {events: EventTrackInput[]}

export interface EventFilterInput {action?: (EventStringListFilter | null),object?: (EventStringListFilter | null)}

export interface EventStringListFilter {in?: (Scalars['String'][] | null),notIn?: (Scalars['String'][] | null)}

export interface EventTrackInput {eventName: Scalars['String'],properties?: (Scalars['EventProperties'] | null),ts: Scalars['String']}

export interface ExplicitOwnerInput {
/** The ID of the owner */
id: Scalars['String'],
/** The type of owner */
type: ResourceOwnerType}

export interface FeatureFlagToggleInput {flag: ActiveFeatureFlag}

export interface GitHubBranchGenqlSelection{
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GitHubRepoGenqlSelection{
    defaultBranch?: boolean | number
    fullName?: boolean | number
    id?: boolean | number
    installationId?: boolean | number
    isPrivate?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GitHubRepoDeployInput {branch?: (Scalars['String'] | null),projectId: Scalars['String'],repo: Scalars['String']}

export interface GitHubRepoUpdateInput {environmentId: Scalars['String'],projectId: Scalars['String'],serviceId: Scalars['String']}

export interface HerokuAppGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface HerokuImportVariablesInput {environmentId: Scalars['String'],herokuAppId: Scalars['String'],projectId: Scalars['String'],serviceId: Scalars['String']}

export interface IncidentGenqlSelection{
    id?: boolean | number
    message?: boolean | number
    status?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IntegrationGenqlSelection{
    config?: boolean | number
    id?: boolean | number
    name?: boolean | number
    projectId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IntegrationAuthGenqlSelection{
    id?: boolean | number
    integrations?: (IntegrationAuthIntegrationsConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    provider?: boolean | number
    providerId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IntegrationAuthIntegrationsConnectionGenqlSelection{
    edges?: IntegrationAuthIntegrationsConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IntegrationAuthIntegrationsConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: IntegrationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface IntegrationCreateInput {config: Scalars['JSON'],integrationAuthId?: (Scalars['String'] | null),name: Scalars['String'],projectId: Scalars['String']}

export interface IntegrationUpdateInput {config: Scalars['JSON'],integrationAuthId?: (Scalars['String'] | null),name: Scalars['String'],projectId: Scalars['String']}

export interface InviteCodeGenqlSelection{
    code?: boolean | number
    createdAt?: boolean | number
    id?: boolean | number
    project?: ProjectGenqlSelection
    projectId?: boolean | number
    role?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface JobApplicationCreateInput {email: Scalars['String'],jobId: Scalars['String'],name: Scalars['String'],why: Scalars['String']}


/** The result of a logs query. */
export interface LogGenqlSelection{
    /** The attributes that were parsed from a structured log */
    attributes?: LogAttributeGenqlSelection
    /** The contents of the log message */
    message?: boolean | number
    /** The severity of the log message (eg. err) */
    severity?: boolean | number
    /** The tags that were associated with the log */
    tags?: LogTagsGenqlSelection
    /** The timestamp of the log message in format RFC3339 (nano) */
    timestamp?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The attributes associated with a structured log */
export interface LogAttributeGenqlSelection{
    key?: boolean | number
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The tags associated with a specific log */
export interface LogTagsGenqlSelection{
    deploymentId?: boolean | number
    deploymentInstanceId?: boolean | number
    environmentId?: boolean | number
    pluginId?: boolean | number
    projectId?: boolean | number
    serviceId?: boolean | number
    snapshotId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LoginSessionAuthInput {code: Scalars['String'],hostname?: (Scalars['String'] | null)}

export interface MaintenanceGenqlSelection{
    id?: boolean | number
    message?: boolean | number
    status?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A single sample of a metric. */
export interface MetricGenqlSelection{
    /** The timestamp of the sample. Represented has number of seconds since the Unix epoch. */
    ts?: boolean | number
    /** The value of the sample. */
    value?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The tags that were used to group the metric. */
export interface MetricTagsGenqlSelection{
    deploymentId?: boolean | number
    environmentId?: boolean | number
    pluginId?: boolean | number
    projectId?: boolean | number
    serviceId?: boolean | number
    volumeId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The result of a metrics query. */
export interface MetricsResultGenqlSelection{
    /** The measurement of the metric. */
    measurement?: boolean | number
    /** The tags that were used to group the metric. Only the tags that were used to by will be present. */
    tags?: MetricTagsGenqlSelection
    /** The samples of the metric. */
    values?: MetricGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MissingCommandAlertInput {page: Scalars['String'],text: Scalars['String']}

export interface MutationGenqlSelection{
    /** Creates a new API token. */
    apiTokenCreate?: { __args: {input: ApiTokenCreateInput} }
    /** Deletes an API token. */
    apiTokenDelete?: { __args: {id: Scalars['String']} }
    /** Sets the base environment override for a deployment trigger. */
    baseEnvironmentOverride?: { __args: {id: Scalars['String'], input: BaseEnvironmentOverrideInput} }
    /** Creates a new custom domain. */
    customDomainCreate?: (CustomDomainGenqlSelection & { __args: {input: CustomDomainCreateInput} })
    /** Deletes a custom domain. */
    customDomainDelete?: { __args: {id: Scalars['String']} }
    /** Migrate a customer to the hobby plan */
    customerMigrateToHobbyPlan?: { __args: {id: Scalars['String']} }
    /** Cancels a deployment. */
    deploymentCancel?: { __args: {id: Scalars['String']} }
    /** Redeploys a deployment. */
    deploymentRedeploy?: (DeploymentGenqlSelection & { __args: {id: Scalars['String'], usePreviousImageTag?: (Scalars['Boolean'] | null)} })
    /** Removes a deployment. */
    deploymentRemove?: { __args: {id: Scalars['String']} }
    /** Restarts a deployment. */
    deploymentRestart?: { __args: {id: Scalars['String']} }
    /** Rolls back to a deployment. */
    deploymentRollback?: { __args: {id: Scalars['String']} }
    /** Creates a deployment trigger. */
    deploymentTriggerCreate?: (DeploymentTriggerGenqlSelection & { __args: {input: DeploymentTriggerCreateInput} })
    /** Deletes a deployment trigger. */
    deploymentTriggerDelete?: { __args: {id: Scalars['String']} }
    /** Updates a deployment trigger. */
    deploymentTriggerUpdate?: (DeploymentTriggerGenqlSelection & { __args: {id: Scalars['String'], input: DeploymentTriggerUpdateInput} })
    /** Create a new egress gateway association for a service instance */
    egressGatewayAssociationCreate?: (EgressGatewayGenqlSelection & { __args: {input: EgressGatewayCreateInput} })
    /** Change the User's account email if there is a valid change email request. */
    emailChangeConfirm?: { __args: {nonce: Scalars['String']} }
    /** Initiate an email change request for a user */
    emailChangeInitiate?: { __args: {newEmail: Scalars['String']} }
    /** Creates a new environment. */
    environmentCreate?: (EnvironmentGenqlSelection & { __args: {input: EnvironmentCreateInput} })
    /** Deletes an environment. */
    environmentDelete?: { __args: {id: Scalars['String']} }
    /** Renames an environment. */
    environmentRename?: (EnvironmentGenqlSelection & { __args: {id: Scalars['String'], input: EnvironmentRenameInput} })
    /** Deploys all connected triggers for an environment. */
    environmentTriggersDeploy?: { __args: {input: EnvironmentTriggersDeployInput} }
    /** Track a batch of events for authenticated user */
    eventBatchTrack?: { __args: {input: EventBatchTrackInput} }
    /** Track event for authenticated user */
    eventTrack?: { __args: {input: EventTrackInput} }
    /** Agree to the fair use policy for the currently authenticated user */
    fairUseAgree?: { __args: {agree: Scalars['Boolean']} }
    /** Add a feature flag for a user */
    featureFlagAdd?: { __args: {input: FeatureFlagToggleInput} }
    /** Remove a feature flag for a user */
    featureFlagRemove?: { __args: {input: FeatureFlagToggleInput} }
    /** Deploys a GitHub repo */
    githubRepoDeploy?: { __args: {input: GitHubRepoDeployInput} }
    /** Updates a GitHub repo through the linked template */
    githubRepoUpdate?: { __args: {input: GitHubRepoUpdateInput} }
    /** Import variables from a Heroku app into a Railway service. Returns the number of variables imports */
    herokuImportVariables?: { __args: {input: HerokuImportVariablesInput} }
    /** Create an integration for a project */
    integrationCreate?: (IntegrationGenqlSelection & { __args: {input: IntegrationCreateInput} })
    /** Delete an integration for a project */
    integrationDelete?: { __args: {id: Scalars['String']} }
    /** Update an integration for a project */
    integrationUpdate?: (IntegrationGenqlSelection & { __args: {id: Scalars['String'], input: IntegrationUpdateInput} })
    /** Join a project using an invite code */
    inviteCodeUse?: (ProjectGenqlSelection & { __args: {code: Scalars['String']} })
    /** Creates a new job application. */
    jobApplicationCreate?: { __args: {input: JobApplicationCreateInput, resume: Scalars['Upload']} }
    /** Auth a login session for a user */
    loginSessionAuth?: { __args: {input: LoginSessionAuthInput} }
    /** Cancel a login session */
    loginSessionCancel?: { __args: {code: Scalars['String']} }
    /** Get a token for a login session if it exists */
    loginSessionConsume?: { __args: {code: Scalars['String']} }
    /** Start a CLI login session */
    loginSessionCreate?: boolean | number
    /** Verify if a login session is valid */
    loginSessionVerify?: { __args: {code: Scalars['String']} }
    /** Deletes session for current user if it exists */
    logout?: boolean | number
    /** Alert the team of a missing command palette command */
    missingCommandAlert?: { __args: {input: MissingCommandAlertInput} }
    /**
     * @deprecated Plugins are deprecated on Railway. Use database templates instead.
     * Creates a new plugin.
     */
    pluginCreate?: (PluginGenqlSelection & { __args: {input: PluginCreateInput} })
    /** Deletes a plugin. */
    pluginDelete?: { __args: {environmentId?: (Scalars['String'] | null), id: Scalars['String']} }
    /** Reset envs and container for a plugin in an environment */
    pluginReset?: { __args: {id: Scalars['String'], input: ResetPluginInput} }
    /** Resets the credentials for a plugin in an environment */
    pluginResetCredentials?: { __args: {id: Scalars['String'], input: ResetPluginCredentialsInput} }
    /** Restarts a plugin. */
    pluginRestart?: (PluginGenqlSelection & { __args: {id: Scalars['String'], input: PluginRestartInput} })
    /** Force start a plugin */
    pluginStart?: { __args: {id: Scalars['String'], input: PluginRestartInput} }
    /** Updates an existing plugin. */
    pluginUpdate?: (PluginGenqlSelection & { __args: {id: Scalars['String'], input: PluginUpdateInput} })
    /** Update the email preferences for a user */
    preferencesUpdate?: (PreferencesGenqlSelection & { __args: {input: PreferencesUpdateData} })
    /** Create or get a private network. */
    privateNetworkCreateOrGet?: (PrivateNetworkGenqlSelection & { __args: {input: PrivateNetworkCreateOrGetInput} })
    /** Create or get a private network endpoint. */
    privateNetworkEndpointCreateOrGet?: (PrivateNetworkEndpointGenqlSelection & { __args: {input: PrivateNetworkEndpointCreateOrGetInput} })
    /** Delete a private network endpoint. */
    privateNetworkEndpointDelete?: { __args: {id: Scalars['String']} }
    /** Rename a private network endpoint. */
    privateNetworkEndpointRename?: { __args: {dnsName: Scalars['String'], id: Scalars['String'], privateNetworkId: Scalars['String']} }
    /** Delete all private networks for an environment. */
    privateNetworksForEnvironmentDelete?: { __args: {environmentId: Scalars['String']} }
    /** Claims a project. */
    projectClaim?: (ProjectGenqlSelection & { __args: {id: Scalars['String']} })
    /** Creates a new project. */
    projectCreate?: (ProjectGenqlSelection & { __args: {input: ProjectCreateInput} })
    /** Deletes a project. */
    projectDelete?: { __args: {id: Scalars['String']} }
    /** Accept a project invitation using the invite code */
    projectInvitationAccept?: (ProjectPermissionGenqlSelection & { __args: {code: Scalars['String']} })
    /** Create an invitation for a project */
    projectInvitationCreate?: (ProjectInvitationGenqlSelection & { __args: {id: Scalars['String'], input: ProjectInvitee} })
    /** Delete an invitation for a project */
    projectInvitationDelete?: { __args: {id: Scalars['String']} }
    /** Resend an invitation for a project */
    projectInvitationResend?: (ProjectInvitationGenqlSelection & { __args: {id: Scalars['String']} })
    /** Invite a user by email to a project */
    projectInviteUser?: { __args: {id: Scalars['String'], input: ProjectInviteUserInput} }
    /** Leave project as currently authenticated user */
    projectLeave?: { __args: {id: Scalars['String']} }
    /** Remove user from a project */
    projectMemberRemove?: (ProjectMemberGenqlSelection & { __args: {input: ProjectMemberRemoveInput} })
    /** Change the role for a user within a project */
    projectMemberUpdate?: (ProjectMemberGenqlSelection & { __args: {input: ProjectMemberUpdateInput} })
    /** Create a token for a project that has access to a specific environment */
    projectTokenCreate?: { __args: {input: ProjectTokenCreateInput} }
    /** Delete a project token */
    projectTokenDelete?: { __args: {id: Scalars['String']} }
    /** Confirm the transfer of project ownership */
    projectTransferConfirm?: { __args: {input: ProjectTransferConfirmInput} }
    /** Initiate the transfer of project ownership */
    projectTransferInitiate?: { __args: {input: ProjectTransferInitiateInput} }
    /** Transfer a project to a team */
    projectTransferToTeam?: { __args: {id: Scalars['String'], input: ProjectTransferToTeamInput} }
    /** Transfer a project to a user */
    projectTransferToUser?: { __args: {id: Scalars['String']} }
    /** Updates a project. */
    projectUpdate?: (ProjectGenqlSelection & { __args: {id: Scalars['String'], input: ProjectUpdateInput} })
    /** Deletes a ProviderAuth. */
    providerAuthRemove?: { __args: {id: Scalars['String']} }
    /** Generates a new set of recovery codes for the authenticated user. */
    recoveryCodeGenerate?: RecoveryCodesGenqlSelection
    /** Validates a recovery code. */
    recoveryCodeValidate?: { __args: {input: RecoveryCodeValidateInput} }
    /** Updates the ReferralInfo for the authenticated user. */
    referralInfoUpdate?: (ReferralInfoGenqlSelection & { __args: {input: ReferralInfoUpdateInput} })
    /** Send a community thread notification email */
    sendCommunityThreadNotificationEmail?: { __args: {input: SendCommunityThreadNotificationEmailInput} }
    /** Connect a service to a source */
    serviceConnect?: (ServiceGenqlSelection & { __args: {id: Scalars['String'], input: ServiceConnectInput} })
    /** Creates a new service. */
    serviceCreate?: (ServiceGenqlSelection & { __args: {input: ServiceCreateInput} })
    /** Deletes a service. */
    serviceDelete?: { __args: {
    /** [Experimental] Environment ID. If the environment is a forked environment, the service will only be deleted in the specified environment, otherwise it will deleted in all environments that are not forks of other environments */
    environmentId?: (Scalars['String'] | null), id: Scalars['String']} }
    /** Disconnect a service from a repo */
    serviceDisconnect?: (ServiceGenqlSelection & { __args: {id: Scalars['String']} })
    /** Creates a new service domain. */
    serviceDomainCreate?: (ServiceDomainGenqlSelection & { __args: {input: ServiceDomainCreateInput} })
    /** Deletes a service domain. */
    serviceDomainDelete?: { __args: {id: Scalars['String']} }
    /** Updates a service domain. */
    serviceDomainUpdate?: { __args: {input: ServiceDomainUpdateInput} }
    /** Deploy a service instance */
    serviceInstanceDeploy?: { __args: {environmentId: Scalars['String'], serviceId: Scalars['String']} }
    /** Redeploy a service instance */
    serviceInstanceRedeploy?: { __args: {environmentId: Scalars['String'], serviceId: Scalars['String']} }
    /** Update a service instance */
    serviceInstanceUpdate?: { __args: {
    /** [Experimental] Environment ID. If the environment is a fork, the service will only be updated in it. Otherwise it will updated in all environments that are not forks of other environments */
    environmentId?: (Scalars['String'] | null), input: ServiceInstanceUpdateInput, serviceId: Scalars['String']} }
    /** Remove the upstream URL from all service instances for this service */
    serviceRemoveUpstreamUrl?: (ServiceGenqlSelection & { __args: {id: Scalars['String']} })
    /** Updates a service. */
    serviceUpdate?: (ServiceGenqlSelection & { __args: {id: Scalars['String'], input: ServiceUpdateInput} })
    /** Deletes a session. */
    sessionDelete?: { __args: {id: Scalars['String']} }
    /** Configure a shared variable. */
    sharedVariableConfigure?: (VariableGenqlSelection & { __args: {input: SharedVariableConfigureInput} })
    /** Creates a new TCP proxy for a service instance. */
    tcpProxyCreate?: (TCPProxyGenqlSelection & { __args: {input: TCPProxyCreateInput} })
    /** Deletes a TCP proxy by id */
    tcpProxyDelete?: { __args: {id: Scalars['String']} }
    /** Bulk transfer projects from user to team */
    teamBulkProjectTransfer?: { __args: {input: TeamBulkProjectTransferInput} }
    /** Create a team */
    teamCreate?: (TeamGenqlSelection & { __args: {input: TeamCreateInput} })
    /** Create a team and subscribe to the Pro plan */
    teamCreateAndSubscribe?: (TeamCreateAndSubscribeResponseGenqlSelection & { __args: {input: TeamCreateAndSubscribeInput} })
    /** Delete a team and all data associated with it */
    teamDelete?: { __args: {id: Scalars['String']} }
    /** Get an invite code for a team and role */
    teamInviteCodeCreate?: { __args: {id: Scalars['String'], input: TeamInviteCodeCreateInput} }
    /** Use an invite code to join a team */
    teamInviteCodeUse?: (TeamGenqlSelection & { __args: {code: Scalars['String']} })
    /** Leave a team */
    teamLeave?: { __args: {id: Scalars['String']} }
    /** Changes a user team permissions. */
    teamPermissionChange?: { __args: {input: TeamPermissionChangeInput} }
    /** Update a team by id */
    teamUpdate?: (TeamGenqlSelection & { __args: {id: Scalars['String'], input: TeamUpdateInput} })
    /** Invite a user by email to a team */
    teamUserInvite?: { __args: {id: Scalars['String'], input: TeamUserInviteInput} }
    /** Remove a user from a team */
    teamUserRemove?: { __args: {id: Scalars['String'], input: TeamUserRemoveInput} }
    /** Logs panics from CLI to Datadog */
    telemetrySend?: { __args: {input: TelemetrySendInput} }
    /** Duplicates an existing template */
    templateClone?: (TemplateGenqlSelection & { __args: {input: TemplateCloneInput} })
    /** Creates a template. */
    templateCreate?: (TemplateGenqlSelection & { __args: {input: TemplateCreateInput} })
    /** Deletes a template. */
    templateDelete?: { __args: {id: Scalars['String'], input: TemplateDeleteInput} }
    /** Deploys a template. */
    templateDeploy?: (TemplateDeployPayloadGenqlSelection & { __args: {input: TemplateDeployInput} })
    /** Generate a template for a project */
    templateGenerate?: (TemplateGenqlSelection & { __args: {input: TemplateGenerateInput} })
    /** Nullify the community thread slug for a template, if one is found with the provided slug */
    templateMaybeUnsetCommunityThreadSlug?: { __args: {communityThreadSlug: Scalars['String']} }
    /** Publishes a template. */
    templatePublish?: (TemplateGenqlSelection & { __args: {id: Scalars['String'], input: TemplatePublishInput} })
    /** Ejects a service from the template and creates a new repo in the provided org. */
    templateServiceSourceEject?: { __args: {input: TemplateServiceSourceEjectInput} }
    /** Unpublishes a template. */
    templateUnpublish?: { __args: {id: Scalars['String']} }
    /** Updates a template. */
    templateUpdate?: (TemplateGenqlSelection & { __args: {id: Scalars['String'], input: TemplateUpdateInput} })
    /** Setup 2FA authorization for authenticated user. */
    twoFactorInfoCreate?: (RecoveryCodesGenqlSelection & { __args: {input: TwoFactorInfoCreateInput} })
    /** Deletes the TwoFactorInfo for the authenticated user. */
    twoFactorInfoDelete?: boolean | number
    /** Generates the 2FA app secret for the authenticated user. */
    twoFactorInfoSecret?: TwoFactorInfoSecretGenqlSelection
    /** Validates the token for a 2FA action or for a login request. */
    twoFactorInfoValidate?: { __args: {input: TwoFactorInfoValidateInput} }
    /** Generate a Slack channel for a team */
    upsertSlackChannelForTeam?: { __args: {teamId: Scalars['String']} }
    /** Remove the usage limit for a customer */
    usageLimitRemove?: { __args: {input: UsageLimitRemoveInput} }
    /** Set the usage limit for a customer */
    usageLimitSet?: { __args: {input: UsageLimitSetInput} }
    /** Unsubscribe from the Beta program. */
    userBetaLeave?: boolean | number
    /** Delete the currently authenticated user */
    userDelete?: boolean | number
    /** Disconnect your Railway account from Discord. */
    userDiscordDisconnect?: boolean | number
    /** Remove a flag on the user. */
    userFlagsRemove?: { __args: {input: UserFlagsRemoveInput} }
    /** Set flags on the authenticated user. */
    userFlagsSet?: { __args: {input: UserFlagsSetInput} }
    /** Updates the profile for the authenticated user */
    userProfileUpdate?: { __args: {input: UserProfileUpdateInput} }
    /** Update date of TermsAgreedOn */
    userTermsUpdate?: UserGenqlSelection
    /** Update currently logged in user */
    userUpdate?: (UserGenqlSelection & { __args: {input: UserUpdateInput} })
    /** Upserts a collection of variables. */
    variableCollectionUpsert?: { __args: {input: VariableCollectionUpsertInput} }
    /** Deletes a variable. */
    variableDelete?: { __args: {input: VariableDeleteInput} }
    /** Upserts a variable. */
    variableUpsert?: { __args: {input: VariableUpsertInput} }
    /** Create a persistent volume in a project */
    volumeCreate?: (VolumeGenqlSelection & { __args: {input: VolumeCreateInput} })
    /** Delete a persistent volume in a project */
    volumeDelete?: { __args: {volumeId: Scalars['String']} }
    /** Update a volume instance. If no environmentId is provided, all volume instances for the volume will be updated. */
    volumeInstanceUpdate?: { __args: {
    /** The environment of the volume instance to update. If null, all instances for the volume will be updated */
    environmentId?: (Scalars['String'] | null), input: VolumeInstanceUpdateInput, 
    /** The id of the volume to update */
    volumeId: Scalars['String']} }
    /** Update a persistent volume in a project */
    volumeUpdate?: (VolumeGenqlSelection & { __args: {input: VolumeUpdateInput, volumeId: Scalars['String']} })
    /** Create a webhook on a project */
    webhookCreate?: (ProjectWebhookGenqlSelection & { __args: {input: WebhookCreateInput} })
    /** Delete a webhook from a project */
    webhookDelete?: { __args: {id: Scalars['String']} }
    /** Update a webhook on a project */
    webhookUpdate?: (ProjectWebhookGenqlSelection & { __args: {id: Scalars['String'], input: WebhookUpdateInput} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface NodeGenqlSelection{
    id?: boolean | number
    on_AdoptionInfo?: AdoptionInfoGenqlSelection
    on_ApiToken?: ApiTokenGenqlSelection
    on_BanReasonHistory?: BanReasonHistoryGenqlSelection
    on_Container?: ContainerGenqlSelection
    on_Credit?: CreditGenqlSelection
    on_Customer?: CustomerGenqlSelection
    on_Deployment?: DeploymentGenqlSelection
    on_DeploymentSnapshot?: DeploymentSnapshotGenqlSelection
    on_DeploymentTrigger?: DeploymentTriggerGenqlSelection
    on_Environment?: EnvironmentGenqlSelection
    on_Event?: EventGenqlSelection
    on_Integration?: IntegrationGenqlSelection
    on_IntegrationAuth?: IntegrationAuthGenqlSelection
    on_InviteCode?: InviteCodeGenqlSelection
    on_PlanLimitOverride?: PlanLimitOverrideGenqlSelection
    on_Plugin?: PluginGenqlSelection
    on_Preferences?: PreferencesGenqlSelection
    on_Project?: ProjectGenqlSelection
    on_ProjectPermission?: ProjectPermissionGenqlSelection
    on_ProjectToken?: ProjectTokenGenqlSelection
    on_ProjectWebhook?: ProjectWebhookGenqlSelection
    on_ProviderAuth?: ProviderAuthGenqlSelection
    on_ReferralInfo?: ReferralInfoGenqlSelection
    on_Service?: ServiceGenqlSelection
    on_ServiceInstance?: ServiceInstanceGenqlSelection
    on_Session?: SessionGenqlSelection
    on_Team?: TeamGenqlSelection
    on_TeamPermission?: TeamPermissionGenqlSelection
    on_Template?: TemplateGenqlSelection
    on_TemplateService?: TemplateServiceGenqlSelection
    on_UsageAnomaly?: UsageAnomalyGenqlSelection
    on_UsageLimit?: UsageLimitGenqlSelection
    on_User?: UserGenqlSelection
    on_Variable?: VariableGenqlSelection
    on_Volume?: VolumeGenqlSelection
    on_VolumeInstance?: VolumeInstanceGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageInfoGenqlSelection{
    endCursor?: boolean | number
    hasNextPage?: boolean | number
    hasPreviousPage?: boolean | number
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaymentMethodGenqlSelection{
    card?: PaymentMethodCardGenqlSelection
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaymentMethodCardGenqlSelection{
    brand?: boolean | number
    country?: boolean | number
    last4?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlanLimitOverrideGenqlSelection{
    config?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PlatformStatusGenqlSelection{
    incident?: IncidentGenqlSelection
    isStable?: boolean | number
    maintenance?: MaintenanceGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PluginGenqlSelection{
    containers?: (PluginContainersConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    createdAt?: boolean | number
    deletedAt?: boolean | number
    deprecatedAt?: boolean | number
    friendlyName?: boolean | number
    id?: boolean | number
    logsEnabled?: boolean | number
    migrationDatabaseServiceId?: boolean | number
    name?: boolean | number
    project?: ProjectGenqlSelection
    status?: boolean | number
    variables?: (PluginVariablesConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PluginContainersConnectionGenqlSelection{
    edges?: PluginContainersConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PluginContainersConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: ContainerGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PluginCreateInput {environmentId?: (Scalars['String'] | null),friendlyName?: (Scalars['String'] | null),name: Scalars['String'],projectId: Scalars['String']}

export interface PluginRestartInput {environmentId?: (Scalars['String'] | null)}

export interface PluginUpdateInput {friendlyName: Scalars['String']}

export interface PluginVariablesConnectionGenqlSelection{
    edges?: PluginVariablesConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PluginVariablesConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: VariableGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PreferencesGenqlSelection{
    buildFailedEmail?: boolean | number
    changelogEmail?: boolean | number
    communityEmail?: boolean | number
    deployCrashedEmail?: boolean | number
    id?: boolean | number
    marketingEmail?: boolean | number
    subprocessorUpdatesEmail?: boolean | number
    usageEmail?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PreferencesUpdateData {buildFailedEmail?: (Scalars['Boolean'] | null),changelogEmail?: (Scalars['Boolean'] | null),communityEmail?: (Scalars['Boolean'] | null),deployCrashedEmail?: (Scalars['Boolean'] | null),marketingEmail?: (Scalars['Boolean'] | null),subprocessorUpdatesEmail?: (Scalars['Boolean'] | null),token?: (Scalars['String'] | null),usageEmail?: (Scalars['Boolean'] | null)}

export interface PrivateNetworkGenqlSelection{
    createdAt?: boolean | number
    deletedAt?: boolean | number
    dnsName?: boolean | number
    environmentId?: boolean | number
    name?: boolean | number
    networkId?: boolean | number
    projectId?: boolean | number
    publicId?: boolean | number
    tags?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PrivateNetworkCreateOrGetInput {environmentId: Scalars['String'],name: Scalars['String'],projectId: Scalars['String'],tags: Scalars['String'][]}

export interface PrivateNetworkEndpointGenqlSelection{
    createdAt?: boolean | number
    deletedAt?: boolean | number
    dnsName?: boolean | number
    privateIps?: boolean | number
    publicId?: boolean | number
    serviceInstanceId?: boolean | number
    tags?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PrivateNetworkEndpointCreateOrGetInput {environmentId: Scalars['String'],privateNetworkId: Scalars['String'],serviceId: Scalars['String'],serviceName: Scalars['String'],tags: Scalars['String'][]}

export interface ProjectGenqlSelection{
    baseEnvironment?: EnvironmentGenqlSelection
    baseEnvironmentId?: boolean | number
    createdAt?: boolean | number
    deletedAt?: boolean | number
    deploymentTriggers?: (ProjectDeploymentTriggersConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    deployments?: (ProjectDeploymentsConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    description?: boolean | number
    environments?: (ProjectEnvironmentsConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    expiredAt?: boolean | number
    groups?: (ProjectGroupsConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    id?: boolean | number
    isPublic?: boolean | number
    isTempProject?: boolean | number
    members?: ProjectMemberGenqlSelection
    name?: boolean | number
    plugins?: (ProjectPluginsConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    prDeploys?: boolean | number
    prForks?: boolean | number
    projectPermissions?: (ProjectProjectPermissionsConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    services?: (ProjectServicesConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    subscriptionPlanLimit?: boolean | number
    subscriptionType?: boolean | number
    team?: TeamGenqlSelection
    teamId?: boolean | number
    updatedAt?: boolean | number
    volumes?: (ProjectVolumesConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    webhooks?: (ProjectWebhooksConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectCreateInput {defaultEnvironmentName?: (Scalars['String'] | null),description?: (Scalars['String'] | null),isPublic?: (Scalars['Boolean'] | null),name?: (Scalars['String'] | null),plugins?: (Scalars['String'][] | null),prDeploys?: (Scalars['Boolean'] | null),repo?: (ProjectCreateRepo | null),teamId?: (Scalars['String'] | null)}

export interface ProjectCreateRepo {branch: Scalars['String'],fullRepoName: Scalars['String']}

export interface ProjectDeploymentTriggersConnectionGenqlSelection{
    edges?: ProjectDeploymentTriggersConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectDeploymentTriggersConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: DeploymentTriggerGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectDeploymentsConnectionGenqlSelection{
    edges?: ProjectDeploymentsConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectDeploymentsConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: DeploymentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectEnvironmentsConnectionGenqlSelection{
    edges?: ProjectEnvironmentsConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectEnvironmentsConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: EnvironmentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectGroupsConnectionGenqlSelection{
    edges?: ProjectGroupsConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectGroupsConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectInvitationGenqlSelection{
    email?: boolean | number
    expiresAt?: boolean | number
    id?: boolean | number
    inviter?: ProjectInvitationInviterGenqlSelection
    isExpired?: boolean | number
    project?: PublicProjectInformationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectInvitationInviterGenqlSelection{
    email?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectInviteUserInput {email: Scalars['String'],link: Scalars['String']}

export interface ProjectInvitee {email: Scalars['String'],role: ProjectRole}

export interface ProjectMemberGenqlSelection{
    avatar?: boolean | number
    email?: boolean | number
    id?: boolean | number
    name?: boolean | number
    role?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectMemberRemoveInput {projectId: Scalars['String'],userId: Scalars['String']}

export interface ProjectMemberUpdateInput {projectId: Scalars['String'],role: ProjectRole,userId: Scalars['String']}

export interface ProjectPermissionGenqlSelection{
    id?: boolean | number
    projectId?: boolean | number
    role?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectPluginsConnectionGenqlSelection{
    edges?: ProjectPluginsConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectPluginsConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: PluginGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectProjectPermissionsConnectionGenqlSelection{
    edges?: ProjectProjectPermissionsConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectProjectPermissionsConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: ProjectPermissionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectResourceAccessGenqlSelection{
    customDomain?: AccessRuleGenqlSelection
    databaseDeployment?: AccessRuleGenqlSelection
    deployment?: AccessRuleGenqlSelection
    environment?: AccessRuleGenqlSelection
    plugin?: AccessRuleGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectServicesConnectionGenqlSelection{
    edges?: ProjectServicesConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectServicesConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: ServiceGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectTokenGenqlSelection{
    createdAt?: boolean | number
    displayToken?: boolean | number
    environment?: EnvironmentGenqlSelection
    environmentId?: boolean | number
    id?: boolean | number
    name?: boolean | number
    project?: ProjectGenqlSelection
    projectId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectTokenCreateInput {environmentId: Scalars['String'],name: Scalars['String'],projectId: Scalars['String']}

export interface ProjectTransferConfirmInput {ownershipTransferId: Scalars['String'],projectId: Scalars['String']}

export interface ProjectTransferInitiateInput {memberId: Scalars['String'],projectId: Scalars['String']}

export interface ProjectTransferToTeamInput {teamId: Scalars['String']}

export interface ProjectUpdateInput {baseEnvironmentId?: (Scalars['String'] | null),description?: (Scalars['String'] | null),isPublic?: (Scalars['Boolean'] | null),name?: (Scalars['String'] | null),prDeploys?: (Scalars['Boolean'] | null),
/** [Experimental] Will be deprecated eventually */
prForks?: (Scalars['Boolean'] | null)}

export interface ProjectVolumesConnectionGenqlSelection{
    edges?: ProjectVolumesConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectVolumesConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: VolumeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectWebhookGenqlSelection{
    id?: boolean | number
    lastStatus?: boolean | number
    projectId?: boolean | number
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectWebhooksConnectionGenqlSelection{
    edges?: ProjectWebhooksConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProjectWebhooksConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: ProjectWebhookGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProviderAuthGenqlSelection{
    email?: boolean | number
    id?: boolean | number
    metadata?: boolean | number
    provider?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PublicProjectInformationGenqlSelection{
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PublicProjectInvitationGenqlSelection{
    on_InviteCode?:InviteCodeGenqlSelection,
    on_ProjectInvitation?:ProjectInvitationGenqlSelection,
    on_Node?: NodeGenqlSelection,
    __typename?: boolean | number
}

export interface PublicStatsGenqlSelection{
    totalDeploymentsLastMonth?: boolean | number
    totalLogsLastMonth?: boolean | number
    totalProjects?: boolean | number
    totalRequestsLastMonth?: boolean | number
    totalServices?: boolean | number
    totalUsers?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryGenqlSelection{
    /** Get all volume instances for a given volume */
    adminVolumeInstancesForVolume?: (VolumeInstanceGenqlSelection & { __args: {volumeId: Scalars['String']} })
    /** Gets all API tokens for the authenticated user. */
    apiTokens?: (QueryApiTokensConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    /** Fetch logs for a build */
    buildLogs?: (LogGenqlSelection & { __args: {deploymentId: Scalars['String'], endDate?: (Scalars['DateTime'] | null), 
    /** Filter logs by a string. Providing an empty value will match all logs. */
    filter?: (Scalars['String'] | null), 
    /** Limit the number of logs returned (defaults 100, max 5000) */
    limit?: (Scalars['Int'] | null), startDate?: (Scalars['DateTime'] | null)} })
    /** Gets the image URL for a Notion image block */
    changelogBlockImage?: { __args: {id: Scalars['String']} }
    /** Get the total count and sum of transfers to date. */
    creditTransferMetrics?: CreditTransferMetricsGenqlSelection
    /** Fetch details for a custom domain */
    customDomain?: (CustomDomainGenqlSelection & { __args: {id: Scalars['String'], projectId: Scalars['String']} })
    /** Checks if a custom domain is available. */
    customDomainAvailable?: (DomainAvailableGenqlSelection & { __args: {domain: Scalars['String']} })
    /** Find a single deployment */
    deployment?: (DeploymentGenqlSelection & { __args: {id: Scalars['String']} })
    /** Fetch logs for a deployment */
    deploymentLogs?: (LogGenqlSelection & { __args: {deploymentId: Scalars['String'], endDate?: (Scalars['DateTime'] | null), 
    /** Filter logs by a string. Providing an empty value will match all logs. */
    filter?: (Scalars['String'] | null), 
    /** Limit the number of logs returned (defaults 100, max 5000) */
    limit?: (Scalars['Int'] | null), startDate?: (Scalars['DateTime'] | null)} })
    /** All deployment triggers. */
    deploymentTriggers?: (QueryDeploymentTriggersConnectionGenqlSelection & { __args: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), environmentId: Scalars['String'], first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), projectId: Scalars['String'], serviceId: Scalars['String']} })
    /** Get all deployments */
    deployments?: (QueryDeploymentsConnectionGenqlSelection & { __args: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), input: DeploymentListInput, last?: (Scalars['Int'] | null)} })
    /**
     * @deprecated Use the `status` field within the `domain` query instead
     * Domain with status
     */
    domainStatus?: (DomainWithStatusGenqlSelection & { __args: {id: Scalars['String'], projectId: Scalars['String']} })
    /** All domains for a service instance */
    domains?: (AllDomainsGenqlSelection & { __args: {environmentId: Scalars['String'], projectId: Scalars['String'], serviceId: Scalars['String']} })
    /** All egress gateways assigned to a service instance */
    egressGateways?: (EgressGatewayGenqlSelection & { __args: {environmentId: Scalars['String'], serviceId: Scalars['String']} })
    /** Find a single environment */
    environment?: (EnvironmentGenqlSelection & { __args: {id: Scalars['String']} })
    /** Get the patches for an environment */
    environmentPatches?: (QueryEnvironmentPatchesConnectionGenqlSelection & { __args: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), environmentId: Scalars['String'], first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    /** Gets all environments for a project. */
    environments?: (QueryEnvironmentsConnectionGenqlSelection & { __args: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), isEphemeral?: (Scalars['Boolean'] | null), last?: (Scalars['Int'] | null), projectId: Scalars['String']} })
    /** Get the estimated total cost of the project at the end of the current billing cycle */
    estimatedUsage?: (EstimatedUsageGenqlSelection & { __args: {
    /** Whether to include deleted projects in estimations. */
    includeDeleted?: (Scalars['Boolean'] | null), measurements: MetricMeasurement[], projectId?: (Scalars['String'] | null), teamId?: (Scalars['String'] | null), userId?: (Scalars['String'] | null)} })
    /** Gets the events for a project. */
    events?: (QueryEventsConnectionGenqlSelection & { __args: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), environmentId?: (Scalars['String'] | null), filter?: (EventFilterInput | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), projectId: Scalars['String']} })
    /** Check if a repo name is available */
    githubIsRepoNameAvailable?: { __args: {fullRepoName: Scalars['String']} }
    /** Get branches for a GitHub repo that the authenticated user has access to */
    githubRepoBranches?: (GitHubBranchGenqlSelection & { __args: {owner: Scalars['String'], repo: Scalars['String']} })
    /** Get a list of repos for a user that Railway has access to */
    githubRepos?: GitHubRepoGenqlSelection
    /** Get a list of scopes the user has installed the installation to */
    githubWritableScopes?: boolean | number
    /** Get the Herokus apps for the current user */
    herokuApps?: HerokuAppGenqlSelection
    /** Get an integration auth by provider providerId */
    integrationAuth?: (IntegrationAuthGenqlSelection & { __args: {provider: Scalars['String'], providerId: Scalars['String']} })
    /** Get all integration auths for a user */
    integrationAuths?: (QueryIntegrationAuthsConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    /** Get all integrations for a project */
    integrations?: (QueryIntegrationsConnectionGenqlSelection & { __args: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), projectId: Scalars['String']} })
    /** Get an invite code by the code */
    inviteCode?: (InviteCodeGenqlSelection & { __args: {code: Scalars['String']} })
    /** Gets the authenticated user. */
    me?: UserGenqlSelection
    /** Get metrics for a project, environment, and service */
    metrics?: (MetricsResultGenqlSelection & { __args: {
    /** The averaging window when computing CPU usage. By default, it is the same as the `sampleRateSeconds`. */
    averagingWindowSeconds?: (Scalars['Int'] | null), 
    /** The end of the period to get metrics for. If not provided, the current datetime is used. */
    endDate?: (Scalars['DateTime'] | null), environmentId?: (Scalars['String'] | null), 
    /** What to group the aggregated usage by. By default, it is grouped over the entire project. */
    groupBy?: (MetricTag[] | null), 
    /** Whether or not to include deleted projects in the results */
    includeDeleted?: (Scalars['Boolean'] | null), measurements: MetricMeasurement[], pluginId?: (Scalars['String'] | null), projectId?: (Scalars['String'] | null), 
    /** The frequency of data points in the response. If the `sampleRateSeconds` is 60, then the response will contain one data point per minute. */
    sampleRateSeconds?: (Scalars['Int'] | null), serviceId?: (Scalars['String'] | null), 
    /** The start of the period to get metrics for. */
    startDate: Scalars['DateTime'], teamId?: (Scalars['String'] | null), userId?: (Scalars['String'] | null), volumeId?: (Scalars['String'] | null)} })
    node?: (NodeGenqlSelection & { __args: {id: Scalars['ID']} })
    nodes?: (NodeGenqlSelection & { __args: {ids: Scalars['ID'][]} })
    /** Get a user's Plain Customer ID given their Discord ID. */
    plainCustomerIdForDiscordId?: { __args: {discordId: Scalars['String']} }
    /** Get a user JWT token for a Discord id */
    plainJWTForDiscordId?: { __args: {discordId: Scalars['String']} }
    /** Get the current status of the platform */
    platformStatus?: PlatformStatusGenqlSelection
    /** Get a plugin by ID. */
    plugin?: (PluginGenqlSelection & { __args: {id: Scalars['String']} })
    /** Fetch logs for a plugin */
    pluginLogs?: (LogGenqlSelection & { __args: {endDate?: (Scalars['DateTime'] | null), environmentId: Scalars['String'], 
    /** Filter logs by a string. Providing an empty value will match all logs. */
    filter?: (Scalars['String'] | null), 
    /** Limit the number of logs returned (defaults 100, max 5000) */
    limit?: (Scalars['Int'] | null), pluginId: Scalars['String'], startDate?: (Scalars['DateTime'] | null)} })
    /** Get the email preferences for a user */
    preferences?: (PreferencesGenqlSelection & { __args?: {token?: (Scalars['String'] | null)} })
    /** Get a private network endpoint for a service instance. */
    privateNetworkEndpoint?: (PrivateNetworkEndpointGenqlSelection & { __args: {environmentId: Scalars['String'], privateNetworkId: Scalars['String'], serviceId: Scalars['String']} })
    /** Check if an endpoint name is available. */
    privateNetworkEndpointNameAvailable?: { __args: {environmentId: Scalars['String'], prefix: Scalars['String'], privateNetworkId: Scalars['String']} }
    /** List private networks for an environment. */
    privateNetworks?: (PrivateNetworkGenqlSelection & { __args: {environmentId: Scalars['String']} })
    /** Get a project by ID */
    project?: (ProjectGenqlSelection & { __args: {id: Scalars['String']} })
    /** Get a project invitation by code */
    projectInvitation?: (PublicProjectInvitationGenqlSelection & { __args: {code: Scalars['String']} })
    /** Get invitations for a project */
    projectInvitations?: (ProjectInvitationGenqlSelection & { __args: {id: Scalars['String']} })
    /** Get an invite code for a project for a specifc role */
    projectInviteCode?: (InviteCodeGenqlSelection & { __args: {projectId: Scalars['String'], role: ProjectRole} })
    /** Gets users who belong to a project along with their role */
    projectMembers?: (ProjectMemberGenqlSelection & { __args: {projectId: Scalars['String']} })
    /** Get resource access rules for project-specific actions */
    projectResourceAccess?: (ProjectResourceAccessGenqlSelection & { __args: {projectId: Scalars['String']} })
    /** Get a single project token by the value in the header */
    projectToken?: ProjectTokenGenqlSelection
    /** Get all project tokens for a project */
    projectTokens?: (QueryProjectTokensConnectionGenqlSelection & { __args: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), projectId: Scalars['String']} })
    /** Gets all projects for a user or a team. */
    projects?: (QueryProjectsConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), includeDeleted?: (Scalars['Boolean'] | null), last?: (Scalars['Int'] | null), teamId?: (Scalars['String'] | null), userId?: (Scalars['String'] | null)} })
    /** Get public Railway stats. Primarily used for the landing page. */
    publicStats?: PublicStatsGenqlSelection
    /** Gets the ReferralInfo for the authenticated user. */
    referralInfo?: ReferralInfoGenqlSelection
    /** List available regions */
    regions?: RegionGenqlSelection
    /** Get resource access for the current user or team */
    resourceAccess?: (ResourceAccessGenqlSelection & { __args?: {explicitResourceOwner?: (ExplicitOwnerInput | null)} })
    /** Get a service by ID */
    service?: (ServiceGenqlSelection & { __args: {id: Scalars['String']} })
    /** Checks if a service domain is available */
    serviceDomainAvailable?: (DomainAvailableGenqlSelection & { __args: {domain: Scalars['String']} })
    /** Get a service instance belonging to a service and environment */
    serviceInstance?: (ServiceInstanceGenqlSelection & { __args: {environmentId: Scalars['String'], serviceId: Scalars['String']} })
    /** Check if the upstream repo for a service has an update available */
    serviceInstanceIsUpdatable?: { __args: {environmentId: Scalars['String'], serviceId: Scalars['String']} }
    /** Gets all sessions for authenticated user. */
    sessions?: (QuerySessionsConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    /** All TCP proxies for a service instance */
    tcpProxies?: (TCPProxyGenqlSelection & { __args: {environmentId: Scalars['String'], serviceId: Scalars['String']} })
    /** Find a team by ID */
    team?: (TeamGenqlSelection & { __args: {id: Scalars['String']} })
    /** Find a team by invite code */
    teamByCode?: (TeamGenqlSelection & { __args: {code: Scalars['String']} })
    /** Fetch Discord info associated with Direct Support-eligible team members, given a Discord UID */
    teamDirectSupportDiscordInfoForDiscordId?: (TeamDirectSupportDiscordInfoGenqlSelection & { __args: {discordId: Scalars['String']} })
    /** Get all templates for a team. */
    teamTemplates?: (QueryTeamTemplatesConnectionGenqlSelection & { __args: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), teamId: Scalars['String']} })
    /** Get a template by code or GitHub owner and repo. */
    template?: (TemplateGenqlSelection & { __args?: {code?: (Scalars['String'] | null), owner?: (Scalars['String'] | null), repo?: (Scalars['String'] | null)} })
    /** Convert a Heroku template to a (legacy) Railway template config object. */
    templateFromHerokuTemplate?: { __args: {repoUrl: Scalars['String']} }
    /** Get the top 25 users with the most template kickback earnings. */
    templateKickbacksLeaderboard?: TemplateKickbacksLeaderboardGenqlSelection
    /** Get the source template for a project. */
    templateSourceForProject?: (TemplateGenqlSelection & { __args: {projectId: Scalars['String']} })
    /** Get the all-time sum of template kickbacks. */
    templatekickbacksTotal?: boolean | number
    /** Get all published templates. */
    templates?: (QueryTemplatesConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), 
    /** If set to true, only recommended templates will be returned. */
    recommended?: (Scalars['Boolean'] | null)} })
    /** Gets the TwoFactorInfo for the authenticated user. */
    twoFactorInfo?: TwoFactorInfoGenqlSelection
    /** Get the usage for a single project or all projects for a user/team. If no `projectId` or `teamId` is provided, the usage for the current user is returned. */
    usage?: (AggregatedUsageGenqlSelection & { __args: {endDate?: (Scalars['DateTime'] | null), 
    /** What to group the aggregated usage by. By default, it is grouped over the entire project. */
    groupBy?: (MetricTag[] | null), 
    /** Whether to include deleted projects in the usage. */
    includeDeleted?: (Scalars['Boolean'] | null), measurements: MetricMeasurement[], projectId?: (Scalars['String'] | null), startDate?: (Scalars['DateTime'] | null), teamId?: (Scalars['String'] | null), userId?: (Scalars['String'] | null)} })
    /** Get the user id corresponding to a Discord id */
    userIdForDiscordId?: { __args: {discordId: Scalars['String']} }
    /** Get the total kickback earnings for a user. */
    userKickbackEarnings?: (UserKickbackEarningsGenqlSelection & { __args: {userId: Scalars['String']} })
    /** Get the public profile for a user */
    userProfile?: (UserProfileResponseGenqlSelection & { __args: {username: Scalars['String']} })
    /** Get all templates for the current user. */
    userTemplates?: (QueryUserTemplatesConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    /** All variables by pluginId or serviceId. If neither are provided, all shared variables are returned. */
    variables?: { __args: {environmentId: Scalars['String'], 
    /** Provide a pluginId to get all variables for a specific plugin. */
    pluginId?: (Scalars['String'] | null), projectId: Scalars['String'], 
    /** Provide a serviceId to get all variables for a specific service. */
    serviceId?: (Scalars['String'] | null), unrendered?: (Scalars['Boolean'] | null)} }
    /** All rendered variables that are required for a service deployment. */
    variablesForServiceDeployment?: { __args: {environmentId: Scalars['String'], projectId: Scalars['String'], serviceId: Scalars['String']} }
    /** Get information about the user's Vercel accounts */
    vercelInfo?: VercelInfoGenqlSelection
    /** Get a single volume instance by id */
    volumeInstance?: (VolumeInstanceGenqlSelection & { __args: {id: Scalars['String']} })
    /** Get all webhooks for a project */
    webhooks?: (QueryWebhooksConnectionGenqlSelection & { __args: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), projectId: Scalars['String']} })
    /** Gets the status of a workflow */
    workflowStatus?: (WorkflowResultGenqlSelection & { __args: {workflowId: Scalars['String']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryApiTokensConnectionGenqlSelection{
    edges?: QueryApiTokensConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryApiTokensConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: ApiTokenGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryDeploymentTriggersConnectionGenqlSelection{
    edges?: QueryDeploymentTriggersConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryDeploymentTriggersConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: DeploymentTriggerGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryDeploymentsConnectionGenqlSelection{
    edges?: QueryDeploymentsConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryDeploymentsConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: DeploymentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryEnvironmentPatchesConnectionGenqlSelection{
    edges?: QueryEnvironmentPatchesConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryEnvironmentPatchesConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryEnvironmentsConnectionGenqlSelection{
    edges?: QueryEnvironmentsConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryEnvironmentsConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: EnvironmentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryEventsConnectionGenqlSelection{
    edges?: QueryEventsConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryEventsConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: EventGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryIntegrationAuthsConnectionGenqlSelection{
    edges?: QueryIntegrationAuthsConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryIntegrationAuthsConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: IntegrationAuthGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryIntegrationsConnectionGenqlSelection{
    edges?: QueryIntegrationsConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryIntegrationsConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: IntegrationGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryProjectTokensConnectionGenqlSelection{
    edges?: QueryProjectTokensConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryProjectTokensConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: ProjectTokenGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryProjectsConnectionGenqlSelection{
    edges?: QueryProjectsConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryProjectsConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: ProjectGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QuerySessionsConnectionGenqlSelection{
    edges?: QuerySessionsConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QuerySessionsConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: SessionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryTeamTemplatesConnectionGenqlSelection{
    edges?: QueryTeamTemplatesConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryTeamTemplatesConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: TemplateGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryTemplatesConnectionGenqlSelection{
    edges?: QueryTemplatesConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryTemplatesConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: TemplateGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryUserTemplatesConnectionGenqlSelection{
    edges?: QueryUserTemplatesConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryUserTemplatesConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: TemplateGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryWebhooksConnectionGenqlSelection{
    edges?: QueryWebhooksConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryWebhooksConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: ProjectWebhookGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RecoveryCodeValidateInput {code: Scalars['String'],twoFactorLinkingKey?: (Scalars['String'] | null)}

export interface RecoveryCodesGenqlSelection{
    recoveryCodes?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ReferralInfoGenqlSelection{
    code?: boolean | number
    id?: boolean | number
    referralStats?: ReferralStatsGenqlSelection
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ReferralInfoUpdateInput {code: Scalars['String']}

export interface ReferralStatsGenqlSelection{
    credited?: boolean | number
    pending?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ReferralUserGenqlSelection{
    code?: boolean | number
    id?: boolean | number
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RegionGenqlSelection{
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Private Docker registry credentials. Only available for Pro plan deployments. */
export interface RegistryCredentialsInput {password: Scalars['String'],username: Scalars['String']}

export interface ResetPluginCredentialsInput {environmentId: Scalars['String']}

export interface ResetPluginInput {environmentId: Scalars['String']}

export interface ResourceAccessGenqlSelection{
    project?: AccessRuleGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SendCommunityThreadNotificationEmailInput {threadTitle: Scalars['String'],threadUrl: Scalars['String'],userIds: Scalars['String'][]}

export interface ServiceGenqlSelection{
    createdAt?: boolean | number
    deletedAt?: boolean | number
    deployments?: (ServiceDeploymentsConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    icon?: boolean | number
    id?: boolean | number
    name?: boolean | number
    project?: ProjectGenqlSelection
    projectId?: boolean | number
    repoTriggers?: (ServiceRepoTriggersConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    serviceInstances?: (ServiceServiceInstancesConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    templateThreadSlug?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ServiceConnectInput {
/** The branch to connect to. e.g. 'main' */
branch?: (Scalars['String'] | null),
/** Name of the Dockerhub or GHCR image to connect this service to. */
image?: (Scalars['String'] | null),
/** The full name of the repo to connect to. e.g. 'railwayapp/starters' */
repo?: (Scalars['String'] | null)}

export interface ServiceCreateInput {branch?: (Scalars['String'] | null),
/** Environment ID. If the specified environment is a fork, the service will only be created in it. Otherwise it will created in all environments that are not forks of other environments */
environmentId?: (Scalars['String'] | null),name?: (Scalars['String'] | null),projectId: Scalars['String'],source?: (ServiceSourceInput | null),variables?: (Scalars['ServiceVariables'] | null)}

export interface ServiceDeploymentsConnectionGenqlSelection{
    edges?: ServiceDeploymentsConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ServiceDeploymentsConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: DeploymentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ServiceDomainGenqlSelection{
    createdAt?: boolean | number
    deletedAt?: boolean | number
    domain?: boolean | number
    environmentId?: boolean | number
    id?: boolean | number
    projectId?: boolean | number
    serviceId?: boolean | number
    suffix?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ServiceDomainCreateInput {environmentId: Scalars['String'],serviceId: Scalars['String']}

export interface ServiceDomainUpdateInput {domain: Scalars['String'],environmentId: Scalars['String'],serviceId: Scalars['String']}

export interface ServiceInstanceGenqlSelection{
    buildCommand?: boolean | number
    builder?: boolean | number
    createdAt?: boolean | number
    cronSchedule?: boolean | number
    deletedAt?: boolean | number
    domains?: AllDomainsGenqlSelection
    environmentId?: boolean | number
    healthcheckPath?: boolean | number
    healthcheckTimeout?: boolean | number
    id?: boolean | number
    isUpdatable?: boolean | number
    latestDeployment?: DeploymentGenqlSelection
    nextCronRunAt?: boolean | number
    nixpacksPlan?: boolean | number
    numReplicas?: boolean | number
    railwayConfigFile?: boolean | number
    region?: boolean | number
    restartPolicyMaxRetries?: boolean | number
    restartPolicyType?: boolean | number
    rootDirectory?: boolean | number
    serviceId?: boolean | number
    sleepApplication?: boolean | number
    source?: ServiceSourceGenqlSelection
    startCommand?: boolean | number
    updatedAt?: boolean | number
    upstreamUrl?: boolean | number
    watchPatterns?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ServiceInstanceUpdateInput {buildCommand?: (Scalars['String'] | null),builder?: (Builder | null),cronSchedule?: (Scalars['String'] | null),healthcheckPath?: (Scalars['String'] | null),healthcheckTimeout?: (Scalars['Int'] | null),nixpacksPlan?: (Scalars['JSON'] | null),numReplicas?: (Scalars['Int'] | null),railwayConfigFile?: (Scalars['String'] | null),region?: (Scalars['String'] | null),registryCredentials?: (RegistryCredentialsInput | null),restartPolicyMaxRetries?: (Scalars['Int'] | null),restartPolicyType?: (RestartPolicyType | null),rootDirectory?: (Scalars['String'] | null),source?: (ServiceSourceInput | null),startCommand?: (Scalars['String'] | null),watchPatterns?: (Scalars['String'][] | null)}

export interface ServiceRepoTriggersConnectionGenqlSelection{
    edges?: ServiceRepoTriggersConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ServiceRepoTriggersConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: DeploymentTriggerGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ServiceServiceInstancesConnectionGenqlSelection{
    edges?: ServiceServiceInstancesConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ServiceServiceInstancesConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: ServiceInstanceGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ServiceSourceGenqlSelection{
    image?: boolean | number
    repo?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ServiceSourceInput {image?: (Scalars['String'] | null),repo?: (Scalars['String'] | null)}

export interface ServiceUpdateInput {icon?: (Scalars['String'] | null),name?: (Scalars['String'] | null)}

export interface SessionGenqlSelection{
    createdAt?: boolean | number
    expiredAt?: boolean | number
    id?: boolean | number
    isCurrent?: boolean | number
    name?: boolean | number
    type?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SharedVariableConfigureInput {disabledServiceIds: Scalars['String'][],enabledServiceIds: Scalars['String'][],environmentId: Scalars['String'],name: Scalars['String'],projectId: Scalars['String']}

export interface SimilarTemplateGenqlSelection{
    code?: boolean | number
    createdAt?: boolean | number
    creator?: TemplateCreatorGenqlSelection
    deploys?: boolean | number
    description?: boolean | number
    health?: boolean | number
    image?: boolean | number
    name?: boolean | number
    teamId?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SubscriptionGenqlSelection{
    /** Stream logs for a build */
    buildLogs?: (LogGenqlSelection & { __args: {deploymentId: Scalars['String'], 
    /** Filter logs by a string. Providing an empty value will match all logs. */
    filter?: (Scalars['String'] | null), 
    /** Limit the number of logs returned (defaults 100, max 5000) */
    limit?: (Scalars['Int'] | null)} })
    /** Stream logs for a deployment */
    deploymentLogs?: (LogGenqlSelection & { __args: {deploymentId: Scalars['String'], 
    /** Filter logs by a string. Providing an empty value will match all logs. */
    filter?: (Scalars['String'] | null), 
    /** Limit the number of logs returned (defaults 100, max 5000) */
    limit?: (Scalars['Int'] | null)} })
    /** Stream logs for a plugin */
    pluginLogs?: (LogGenqlSelection & { __args: {environmentId: Scalars['String'], 
    /** Filter logs by a string. Providing an empty value will match all logs. */
    filter?: (Scalars['String'] | null), 
    /** Limit the number of logs returned (defaults 100, max 5000) */
    limit?: (Scalars['Int'] | null), pluginId: Scalars['String']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SubscriptionDiscountGenqlSelection{
    couponId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SubscriptionItemGenqlSelection{
    itemId?: boolean | number
    priceId?: boolean | number
    productId?: boolean | number
    quantity?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TCPProxyGenqlSelection{
    applicationPort?: boolean | number
    createdAt?: boolean | number
    deletedAt?: boolean | number
    domain?: boolean | number
    environmentId?: boolean | number
    id?: boolean | number
    proxyPort?: boolean | number
    serviceId?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TCPProxyCreateInput {applicationPort: Scalars['Int'],environmentId: Scalars['String'],serviceId: Scalars['String']}

export interface TeamGenqlSelection{
    adoptionHistory?: AdoptionInfoGenqlSelection
    adoptionLevel?: boolean | number
    avatar?: boolean | number
    banReason?: boolean | number
    createdAt?: boolean | number
    customer?: CustomerGenqlSelection
    discordRole?: boolean | number
    id?: boolean | number
    isEligibleForDirectSupport?: boolean | number
    members?: TeamMemberGenqlSelection
    name?: boolean | number
    projects?: (TeamProjectsConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    slackChannelId?: boolean | number
    teamPermissions?: TeamPermissionGenqlSelection
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TeamBulkProjectTransferInput {projectIds: Scalars['String'][],teamId: Scalars['String']}

export interface TeamCreateAndSubscribeInput {avatar?: (Scalars['String'] | null),name: Scalars['String'],paymentMethodId: Scalars['String']}

export interface TeamCreateAndSubscribeResponseGenqlSelection{
    customerId?: boolean | number
    paymentIntent?: boolean | number
    teamId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TeamCreateInput {avatar?: (Scalars['String'] | null),name: Scalars['String']}

export interface TeamDirectSupportDiscordInfoGenqlSelection{
    memberDiscordIds?: boolean | number
    teamId?: boolean | number
    teamName?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TeamInviteCodeCreateInput {role: Scalars['String']}

export interface TeamMemberGenqlSelection{
    avatar?: boolean | number
    email?: boolean | number
    id?: boolean | number
    name?: boolean | number
    role?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TeamPermissionGenqlSelection{
    createdAt?: boolean | number
    id?: boolean | number
    role?: boolean | number
    teamId?: boolean | number
    updatedAt?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TeamPermissionChangeInput {role: TeamRole,teamId: Scalars['String'],userId: Scalars['String']}

export interface TeamProjectsConnectionGenqlSelection{
    edges?: TeamProjectsConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TeamProjectsConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: ProjectGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TeamUpdateInput {avatar?: (Scalars['String'] | null),name: Scalars['String']}

export interface TeamUserInviteInput {code: Scalars['String'],email: Scalars['String']}

export interface TeamUserRemoveInput {userId: Scalars['String']}

export interface TelemetrySendInput {command: Scalars['String'],environmentId?: (Scalars['String'] | null),error: Scalars['String'],projectId?: (Scalars['String'] | null),stacktrace: Scalars['String'],version?: (Scalars['String'] | null)}

export interface TemplateGenqlSelection{
    activeProjects?: boolean | number
    code?: boolean | number
    communityThreadSlug?: boolean | number
    config?: boolean | number
    createdAt?: boolean | number
    creator?: TemplateCreatorGenqlSelection
    demoProjectId?: boolean | number
    health?: boolean | number
    id?: boolean | number
    isApproved?: boolean | number
    isV2Template?: boolean | number
    metadata?: boolean | number
    projects?: boolean | number
    serializedConfig?: boolean | number
    services?: (TemplateServicesConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    similarTemplates?: SimilarTemplateGenqlSelection
    status?: boolean | number
    teamId?: boolean | number
    totalPayout?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TemplateCloneInput {code: Scalars['String'],teamId?: (Scalars['String'] | null)}

export interface TemplateCreateInput {config: Scalars['TemplateConfig'],demoProjectId?: (Scalars['String'] | null),metadata: Scalars['TemplateMetadata'],services: TemplateServiceCreateInput[],teamId?: (Scalars['String'] | null)}

export interface TemplateCreatorGenqlSelection{
    avatar?: boolean | number
    hasPublicProfile?: boolean | number
    name?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TemplateDeleteInput {teamId?: (Scalars['String'] | null)}

export interface TemplateDeployInput {environmentId?: (Scalars['String'] | null),projectId?: (Scalars['String'] | null),services: TemplateDeployService[],teamId?: (Scalars['String'] | null),templateCode?: (Scalars['String'] | null)}

export interface TemplateDeployPayloadGenqlSelection{
    projectId?: boolean | number
    workflowId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TemplateDeployService {commit?: (Scalars['String'] | null),hasDomain?: (Scalars['Boolean'] | null),healthcheckPath?: (Scalars['String'] | null),id?: (Scalars['String'] | null),isPrivate?: (Scalars['Boolean'] | null),name?: (Scalars['String'] | null),owner?: (Scalars['String'] | null),rootDirectory?: (Scalars['String'] | null),serviceIcon?: (Scalars['String'] | null),serviceName: Scalars['String'],startCommand?: (Scalars['String'] | null),tcpProxyApplicationPort?: (Scalars['Int'] | null),template: Scalars['String'],variables?: (Scalars['ServiceVariables'] | null),volumes?: (Scalars['TemplateVolume'][] | null)}

export interface TemplateGenerateInput {projectId: Scalars['String'],teamId?: (Scalars['String'] | null)}

export interface TemplateKickbacksLeaderboardGenqlSelection{
    total_amount?: boolean | number
    userId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TemplatePublishInput {category: Scalars['String'],description: Scalars['String'],image?: (Scalars['String'] | null),readme: Scalars['String'],teamId?: (Scalars['String'] | null)}

export interface TemplateServiceGenqlSelection{
    config?: boolean | number
    createdAt?: boolean | number
    id?: boolean | number
    templateId?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TemplateServiceCreateInput {config: Scalars['TemplateServiceConfig']}

export interface TemplateServiceSourceEjectInput {projectId: Scalars['String'],repoName: Scalars['String'],repoOwner: Scalars['String'],
/** Provide multiple serviceIds when ejecting services from a monorepo. */
serviceIds: Scalars['String'][],upstreamUrl: Scalars['String']}

export interface TemplateServiceUpdateInput {config: Scalars['TemplateServiceConfig'],id?: (Scalars['String'] | null)}

export interface TemplateServicesConnectionGenqlSelection{
    edges?: TemplateServicesConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TemplateServicesConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: TemplateServiceGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TemplateUpdateInput {config: Scalars['TemplateConfig'],demoProjectId?: (Scalars['String'] | null),
/** An admin-only flag to force-update a template. */
forceUpdate?: (Scalars['Boolean'] | null),metadata: Scalars['TemplateMetadata'],services: TemplateServiceUpdateInput[],teamId?: (Scalars['String'] | null)}

export interface TwoFactorInfoGenqlSelection{
    hasRecoveryCodes?: boolean | number
    isVerified?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TwoFactorInfoCreateInput {token: Scalars['String']}

export interface TwoFactorInfoSecretGenqlSelection{
    secret?: boolean | number
    uri?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TwoFactorInfoValidateInput {token: Scalars['String'],twoFactorLinkingKey?: (Scalars['String'] | null)}

export interface UsageAnomalyGenqlSelection{
    actedOn?: boolean | number
    action?: boolean | number
    actorId?: boolean | number
    flaggedAt?: boolean | number
    flaggedFor?: boolean | number
    id?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsageLimitGenqlSelection{
    customerId?: boolean | number
    hardLimit?: boolean | number
    id?: boolean | number
    softLimit?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UsageLimitRemoveInput {customerId: Scalars['String']}

export interface UsageLimitSetInput {customerId: Scalars['String'],hardLimitDollars?: (Scalars['Int'] | null),softLimitDollars: Scalars['Int']}

export interface UserGenqlSelection{
    agreedFairUse?: boolean | number
    avatar?: boolean | number
    banReason?: boolean | number
    cost?: UserCostGenqlSelection
    createdAt?: boolean | number
    customer?: CustomerGenqlSelection
    email?: boolean | number
    featureFlags?: boolean | number
    flags?: boolean | number
    has2FA?: boolean | number
    id?: boolean | number
    isAdmin?: boolean | number
    isConductor?: boolean | number
    isDevPlan?: boolean | number
    isEligibleForFreeHobbyPlan?: boolean | number
    isOnHobbyPlan?: boolean | number
    isVerified?: boolean | number
    lastLogin?: boolean | number
    name?: boolean | number
    profile?: UserProfileGenqlSelection
    projects?: (UserProjectsConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    providerAuths?: (UserProviderAuthsConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    referredUsers?: ReferralUserGenqlSelection
    registrationStatus?: boolean | number
    riskLevel?: boolean | number
    teams?: (UserTeamsConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    termsAgreedOn?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserCostGenqlSelection{
    current?: boolean | number
    estimated?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserFlagsRemoveInput {flags: UserFlag[],userId?: (Scalars['String'] | null)}

export interface UserFlagsSetInput {flags: UserFlag[],userId?: (Scalars['String'] | null)}

export interface UserKickbackEarningsGenqlSelection{
    total_amount?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserProfileGenqlSelection{
    bio?: boolean | number
    isPublic?: boolean | number
    website?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserProfileResponseGenqlSelection{
    avatar?: boolean | number
    createdAt?: boolean | number
    customerId?: boolean | number
    isTrialing?: boolean | number
    name?: boolean | number
    profile?: UserProfileGenqlSelection
    publishedTemplates?: SimilarTemplateGenqlSelection
    state?: boolean | number
    totalDeploys?: boolean | number
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserProfileUpdateInput {bio?: (Scalars['String'] | null),isPublic: Scalars['Boolean'],website?: (Scalars['String'] | null)}

export interface UserProjectsConnectionGenqlSelection{
    edges?: UserProjectsConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserProjectsConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: ProjectGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserProviderAuthsConnectionGenqlSelection{
    edges?: UserProviderAuthsConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserProviderAuthsConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: ProviderAuthGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserTeamsConnectionGenqlSelection{
    edges?: UserTeamsConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserTeamsConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: TeamGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserUpdateInput {avatar?: (Scalars['String'] | null),name?: (Scalars['String'] | null),username?: (Scalars['String'] | null)}

export interface VariableGenqlSelection{
    createdAt?: boolean | number
    environment?: EnvironmentGenqlSelection
    environmentId?: boolean | number
    id?: boolean | number
    name?: boolean | number
    plugin?: PluginGenqlSelection
    pluginId?: boolean | number
    references?: boolean | number
    service?: ServiceGenqlSelection
    serviceId?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VariableCollectionUpsertInput {environmentId: Scalars['String'],projectId: Scalars['String'],
/** When set to true, removes all existing variables before upserting the new collection. */
replace?: (Scalars['Boolean'] | null),serviceId?: (Scalars['String'] | null),variables: Scalars['ServiceVariables']}

export interface VariableDeleteInput {environmentId: Scalars['String'],name: Scalars['String'],projectId: Scalars['String'],serviceId?: (Scalars['String'] | null)}

export interface VariableUpsertInput {environmentId: Scalars['String'],name: Scalars['String'],projectId: Scalars['String'],serviceId?: (Scalars['String'] | null),value: Scalars['String']}

export interface VercelAccountGenqlSelection{
    id?: boolean | number
    integrationAuthId?: boolean | number
    isUser?: boolean | number
    name?: boolean | number
    projects?: VercelProjectGenqlSelection
    slug?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VercelInfoGenqlSelection{
    accounts?: VercelAccountGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VercelProjectGenqlSelection{
    accountId?: boolean | number
    id?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VolumeGenqlSelection{
    createdAt?: boolean | number
    id?: boolean | number
    name?: boolean | number
    project?: ProjectGenqlSelection
    projectId?: boolean | number
    volumeInstances?: (VolumeVolumeInstancesConnectionGenqlSelection & { __args?: {after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VolumeCreateInput {
/** The environment to deploy the volume instances into. If `null`, the volume will not be deployed to any environment. `undefined` will deploy to all environments. */
environmentId?: (Scalars['String'] | null),
/** The path in the container to mount the volume to */
mountPath: Scalars['String'],
/** The project to create the volume in */
projectId: Scalars['String'],
/** The service to attach the volume to. If not provided, the volume will be disconnected. */
serviceId?: (Scalars['String'] | null)}

export interface VolumeInstanceGenqlSelection{
    createdAt?: boolean | number
    currentSizeMB?: boolean | number
    environment?: EnvironmentGenqlSelection
    environmentId?: boolean | number
    externalId?: boolean | number
    id?: boolean | number
    mountPath?: boolean | number
    region?: boolean | number
    service?: ServiceGenqlSelection
    serviceId?: boolean | number
    sizeMB?: boolean | number
    state?: boolean | number
    volume?: VolumeGenqlSelection
    volumeId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VolumeInstanceUpdateInput {
/** The mount path of the volume instance. If not provided, the mount path will not be updated. */
mountPath?: (Scalars['String'] | null),
/** The service to attach the volume to. If not provided, the volume will be disconnected. */
serviceId?: (Scalars['String'] | null),
/** The state of the volume instance. If not provided, the state will not be updated. */
state?: (VolumeState | null)}

export interface VolumeUpdateInput {
/** The name of the volume */
name?: (Scalars['String'] | null)}

export interface VolumeVolumeInstancesConnectionGenqlSelection{
    edges?: VolumeVolumeInstancesConnectionEdgeGenqlSelection
    pageInfo?: PageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VolumeVolumeInstancesConnectionEdgeGenqlSelection{
    cursor?: boolean | number
    node?: VolumeInstanceGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WebhookCreateInput {projectId: Scalars['String'],url: Scalars['String']}

export interface WebhookUpdateInput {url: Scalars['String']}

export interface WorkflowResultGenqlSelection{
    error?: boolean | number
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const AccessRule_possibleTypes: string[] = ['AccessRule']
    export const isAccessRule = (obj?: { __typename?: any } | null): obj is AccessRule => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAccessRule"')
      return AccessRule_possibleTypes.includes(obj.__typename)
    }
    


    const AdoptionInfo_possibleTypes: string[] = ['AdoptionInfo']
    export const isAdoptionInfo = (obj?: { __typename?: any } | null): obj is AdoptionInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAdoptionInfo"')
      return AdoptionInfo_possibleTypes.includes(obj.__typename)
    }
    


    const AggregatedUsage_possibleTypes: string[] = ['AggregatedUsage']
    export const isAggregatedUsage = (obj?: { __typename?: any } | null): obj is AggregatedUsage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAggregatedUsage"')
      return AggregatedUsage_possibleTypes.includes(obj.__typename)
    }
    


    const AllDomains_possibleTypes: string[] = ['AllDomains']
    export const isAllDomains = (obj?: { __typename?: any } | null): obj is AllDomains => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAllDomains"')
      return AllDomains_possibleTypes.includes(obj.__typename)
    }
    


    const ApiToken_possibleTypes: string[] = ['ApiToken']
    export const isApiToken = (obj?: { __typename?: any } | null): obj is ApiToken => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isApiToken"')
      return ApiToken_possibleTypes.includes(obj.__typename)
    }
    


    const BanReasonHistory_possibleTypes: string[] = ['BanReasonHistory']
    export const isBanReasonHistory = (obj?: { __typename?: any } | null): obj is BanReasonHistory => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBanReasonHistory"')
      return BanReasonHistory_possibleTypes.includes(obj.__typename)
    }
    


    const BillingPeriod_possibleTypes: string[] = ['BillingPeriod']
    export const isBillingPeriod = (obj?: { __typename?: any } | null): obj is BillingPeriod => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBillingPeriod"')
      return BillingPeriod_possibleTypes.includes(obj.__typename)
    }
    


    const CertificatePublicData_possibleTypes: string[] = ['CertificatePublicData']
    export const isCertificatePublicData = (obj?: { __typename?: any } | null): obj is CertificatePublicData => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCertificatePublicData"')
      return CertificatePublicData_possibleTypes.includes(obj.__typename)
    }
    


    const CnameCheck_possibleTypes: string[] = ['CnameCheck']
    export const isCnameCheck = (obj?: { __typename?: any } | null): obj is CnameCheck => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCnameCheck"')
      return CnameCheck_possibleTypes.includes(obj.__typename)
    }
    


    const Container_possibleTypes: string[] = ['Container']
    export const isContainer = (obj?: { __typename?: any } | null): obj is Container => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContainer"')
      return Container_possibleTypes.includes(obj.__typename)
    }
    


    const Credit_possibleTypes: string[] = ['Credit']
    export const isCredit = (obj?: { __typename?: any } | null): obj is Credit => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCredit"')
      return Credit_possibleTypes.includes(obj.__typename)
    }
    


    const CreditTransferMetrics_possibleTypes: string[] = ['CreditTransferMetrics']
    export const isCreditTransferMetrics = (obj?: { __typename?: any } | null): obj is CreditTransferMetrics => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreditTransferMetrics"')
      return CreditTransferMetrics_possibleTypes.includes(obj.__typename)
    }
    


    const CustomDomain_possibleTypes: string[] = ['CustomDomain']
    export const isCustomDomain = (obj?: { __typename?: any } | null): obj is CustomDomain => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomDomain"')
      return CustomDomain_possibleTypes.includes(obj.__typename)
    }
    


    const CustomDomainStatus_possibleTypes: string[] = ['CustomDomainStatus']
    export const isCustomDomainStatus = (obj?: { __typename?: any } | null): obj is CustomDomainStatus => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomDomainStatus"')
      return CustomDomainStatus_possibleTypes.includes(obj.__typename)
    }
    


    const Customer_possibleTypes: string[] = ['Customer']
    export const isCustomer = (obj?: { __typename?: any } | null): obj is Customer => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomer"')
      return Customer_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerCreditsConnection_possibleTypes: string[] = ['CustomerCreditsConnection']
    export const isCustomerCreditsConnection = (obj?: { __typename?: any } | null): obj is CustomerCreditsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerCreditsConnection"')
      return CustomerCreditsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerCreditsConnectionEdge_possibleTypes: string[] = ['CustomerCreditsConnectionEdge']
    export const isCustomerCreditsConnectionEdge = (obj?: { __typename?: any } | null): obj is CustomerCreditsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerCreditsConnectionEdge"')
      return CustomerCreditsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerInvoice_possibleTypes: string[] = ['CustomerInvoice']
    export const isCustomerInvoice = (obj?: { __typename?: any } | null): obj is CustomerInvoice => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerInvoice"')
      return CustomerInvoice_possibleTypes.includes(obj.__typename)
    }
    


    const CustomerSubscription_possibleTypes: string[] = ['CustomerSubscription']
    export const isCustomerSubscription = (obj?: { __typename?: any } | null): obj is CustomerSubscription => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerSubscription"')
      return CustomerSubscription_possibleTypes.includes(obj.__typename)
    }
    


    const DNSRecords_possibleTypes: string[] = ['DNSRecords']
    export const isDNSRecords = (obj?: { __typename?: any } | null): obj is DNSRecords => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDNSRecords"')
      return DNSRecords_possibleTypes.includes(obj.__typename)
    }
    


    const Deployment_possibleTypes: string[] = ['Deployment']
    export const isDeployment = (obj?: { __typename?: any } | null): obj is Deployment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeployment"')
      return Deployment_possibleTypes.includes(obj.__typename)
    }
    


    const DeploymentSnapshot_possibleTypes: string[] = ['DeploymentSnapshot']
    export const isDeploymentSnapshot = (obj?: { __typename?: any } | null): obj is DeploymentSnapshot => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeploymentSnapshot"')
      return DeploymentSnapshot_possibleTypes.includes(obj.__typename)
    }
    


    const DeploymentTrigger_possibleTypes: string[] = ['DeploymentTrigger']
    export const isDeploymentTrigger = (obj?: { __typename?: any } | null): obj is DeploymentTrigger => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeploymentTrigger"')
      return DeploymentTrigger_possibleTypes.includes(obj.__typename)
    }
    


    const Domain_possibleTypes: string[] = ['CustomDomain','ServiceDomain']
    export const isDomain = (obj?: { __typename?: any } | null): obj is Domain => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDomain"')
      return Domain_possibleTypes.includes(obj.__typename)
    }
    


    const DomainAvailable_possibleTypes: string[] = ['DomainAvailable']
    export const isDomainAvailable = (obj?: { __typename?: any } | null): obj is DomainAvailable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDomainAvailable"')
      return DomainAvailable_possibleTypes.includes(obj.__typename)
    }
    


    const DomainWithStatus_possibleTypes: string[] = ['DomainWithStatus']
    export const isDomainWithStatus = (obj?: { __typename?: any } | null): obj is DomainWithStatus => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDomainWithStatus"')
      return DomainWithStatus_possibleTypes.includes(obj.__typename)
    }
    


    const EgressGateway_possibleTypes: string[] = ['EgressGateway']
    export const isEgressGateway = (obj?: { __typename?: any } | null): obj is EgressGateway => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEgressGateway"')
      return EgressGateway_possibleTypes.includes(obj.__typename)
    }
    


    const Environment_possibleTypes: string[] = ['Environment']
    export const isEnvironment = (obj?: { __typename?: any } | null): obj is Environment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnvironment"')
      return Environment_possibleTypes.includes(obj.__typename)
    }
    


    const EnvironmentDeploymentTriggersConnection_possibleTypes: string[] = ['EnvironmentDeploymentTriggersConnection']
    export const isEnvironmentDeploymentTriggersConnection = (obj?: { __typename?: any } | null): obj is EnvironmentDeploymentTriggersConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnvironmentDeploymentTriggersConnection"')
      return EnvironmentDeploymentTriggersConnection_possibleTypes.includes(obj.__typename)
    }
    


    const EnvironmentDeploymentTriggersConnectionEdge_possibleTypes: string[] = ['EnvironmentDeploymentTriggersConnectionEdge']
    export const isEnvironmentDeploymentTriggersConnectionEdge = (obj?: { __typename?: any } | null): obj is EnvironmentDeploymentTriggersConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnvironmentDeploymentTriggersConnectionEdge"')
      return EnvironmentDeploymentTriggersConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const EnvironmentDeploymentsConnection_possibleTypes: string[] = ['EnvironmentDeploymentsConnection']
    export const isEnvironmentDeploymentsConnection = (obj?: { __typename?: any } | null): obj is EnvironmentDeploymentsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnvironmentDeploymentsConnection"')
      return EnvironmentDeploymentsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const EnvironmentDeploymentsConnectionEdge_possibleTypes: string[] = ['EnvironmentDeploymentsConnectionEdge']
    export const isEnvironmentDeploymentsConnectionEdge = (obj?: { __typename?: any } | null): obj is EnvironmentDeploymentsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnvironmentDeploymentsConnectionEdge"')
      return EnvironmentDeploymentsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const EnvironmentMeta_possibleTypes: string[] = ['EnvironmentMeta']
    export const isEnvironmentMeta = (obj?: { __typename?: any } | null): obj is EnvironmentMeta => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnvironmentMeta"')
      return EnvironmentMeta_possibleTypes.includes(obj.__typename)
    }
    


    const EnvironmentServiceInstancesConnection_possibleTypes: string[] = ['EnvironmentServiceInstancesConnection']
    export const isEnvironmentServiceInstancesConnection = (obj?: { __typename?: any } | null): obj is EnvironmentServiceInstancesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnvironmentServiceInstancesConnection"')
      return EnvironmentServiceInstancesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const EnvironmentServiceInstancesConnectionEdge_possibleTypes: string[] = ['EnvironmentServiceInstancesConnectionEdge']
    export const isEnvironmentServiceInstancesConnectionEdge = (obj?: { __typename?: any } | null): obj is EnvironmentServiceInstancesConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnvironmentServiceInstancesConnectionEdge"')
      return EnvironmentServiceInstancesConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const EnvironmentVariablesConnection_possibleTypes: string[] = ['EnvironmentVariablesConnection']
    export const isEnvironmentVariablesConnection = (obj?: { __typename?: any } | null): obj is EnvironmentVariablesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnvironmentVariablesConnection"')
      return EnvironmentVariablesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const EnvironmentVariablesConnectionEdge_possibleTypes: string[] = ['EnvironmentVariablesConnectionEdge']
    export const isEnvironmentVariablesConnectionEdge = (obj?: { __typename?: any } | null): obj is EnvironmentVariablesConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnvironmentVariablesConnectionEdge"')
      return EnvironmentVariablesConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const EnvironmentVolumeInstancesConnection_possibleTypes: string[] = ['EnvironmentVolumeInstancesConnection']
    export const isEnvironmentVolumeInstancesConnection = (obj?: { __typename?: any } | null): obj is EnvironmentVolumeInstancesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnvironmentVolumeInstancesConnection"')
      return EnvironmentVolumeInstancesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const EnvironmentVolumeInstancesConnectionEdge_possibleTypes: string[] = ['EnvironmentVolumeInstancesConnectionEdge']
    export const isEnvironmentVolumeInstancesConnectionEdge = (obj?: { __typename?: any } | null): obj is EnvironmentVolumeInstancesConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnvironmentVolumeInstancesConnectionEdge"')
      return EnvironmentVolumeInstancesConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const EstimatedUsage_possibleTypes: string[] = ['EstimatedUsage']
    export const isEstimatedUsage = (obj?: { __typename?: any } | null): obj is EstimatedUsage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEstimatedUsage"')
      return EstimatedUsage_possibleTypes.includes(obj.__typename)
    }
    


    const Event_possibleTypes: string[] = ['Event']
    export const isEvent = (obj?: { __typename?: any } | null): obj is Event => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEvent"')
      return Event_possibleTypes.includes(obj.__typename)
    }
    


    const GitHubBranch_possibleTypes: string[] = ['GitHubBranch']
    export const isGitHubBranch = (obj?: { __typename?: any } | null): obj is GitHubBranch => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGitHubBranch"')
      return GitHubBranch_possibleTypes.includes(obj.__typename)
    }
    


    const GitHubRepo_possibleTypes: string[] = ['GitHubRepo']
    export const isGitHubRepo = (obj?: { __typename?: any } | null): obj is GitHubRepo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGitHubRepo"')
      return GitHubRepo_possibleTypes.includes(obj.__typename)
    }
    


    const HerokuApp_possibleTypes: string[] = ['HerokuApp']
    export const isHerokuApp = (obj?: { __typename?: any } | null): obj is HerokuApp => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHerokuApp"')
      return HerokuApp_possibleTypes.includes(obj.__typename)
    }
    


    const Incident_possibleTypes: string[] = ['Incident']
    export const isIncident = (obj?: { __typename?: any } | null): obj is Incident => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIncident"')
      return Incident_possibleTypes.includes(obj.__typename)
    }
    


    const Integration_possibleTypes: string[] = ['Integration']
    export const isIntegration = (obj?: { __typename?: any } | null): obj is Integration => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIntegration"')
      return Integration_possibleTypes.includes(obj.__typename)
    }
    


    const IntegrationAuth_possibleTypes: string[] = ['IntegrationAuth']
    export const isIntegrationAuth = (obj?: { __typename?: any } | null): obj is IntegrationAuth => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIntegrationAuth"')
      return IntegrationAuth_possibleTypes.includes(obj.__typename)
    }
    


    const IntegrationAuthIntegrationsConnection_possibleTypes: string[] = ['IntegrationAuthIntegrationsConnection']
    export const isIntegrationAuthIntegrationsConnection = (obj?: { __typename?: any } | null): obj is IntegrationAuthIntegrationsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIntegrationAuthIntegrationsConnection"')
      return IntegrationAuthIntegrationsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const IntegrationAuthIntegrationsConnectionEdge_possibleTypes: string[] = ['IntegrationAuthIntegrationsConnectionEdge']
    export const isIntegrationAuthIntegrationsConnectionEdge = (obj?: { __typename?: any } | null): obj is IntegrationAuthIntegrationsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isIntegrationAuthIntegrationsConnectionEdge"')
      return IntegrationAuthIntegrationsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const InviteCode_possibleTypes: string[] = ['InviteCode']
    export const isInviteCode = (obj?: { __typename?: any } | null): obj is InviteCode => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isInviteCode"')
      return InviteCode_possibleTypes.includes(obj.__typename)
    }
    


    const Log_possibleTypes: string[] = ['Log']
    export const isLog = (obj?: { __typename?: any } | null): obj is Log => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLog"')
      return Log_possibleTypes.includes(obj.__typename)
    }
    


    const LogAttribute_possibleTypes: string[] = ['LogAttribute']
    export const isLogAttribute = (obj?: { __typename?: any } | null): obj is LogAttribute => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLogAttribute"')
      return LogAttribute_possibleTypes.includes(obj.__typename)
    }
    


    const LogTags_possibleTypes: string[] = ['LogTags']
    export const isLogTags = (obj?: { __typename?: any } | null): obj is LogTags => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLogTags"')
      return LogTags_possibleTypes.includes(obj.__typename)
    }
    


    const Maintenance_possibleTypes: string[] = ['Maintenance']
    export const isMaintenance = (obj?: { __typename?: any } | null): obj is Maintenance => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMaintenance"')
      return Maintenance_possibleTypes.includes(obj.__typename)
    }
    


    const Metric_possibleTypes: string[] = ['Metric']
    export const isMetric = (obj?: { __typename?: any } | null): obj is Metric => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetric"')
      return Metric_possibleTypes.includes(obj.__typename)
    }
    


    const MetricTags_possibleTypes: string[] = ['MetricTags']
    export const isMetricTags = (obj?: { __typename?: any } | null): obj is MetricTags => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetricTags"')
      return MetricTags_possibleTypes.includes(obj.__typename)
    }
    


    const MetricsResult_possibleTypes: string[] = ['MetricsResult']
    export const isMetricsResult = (obj?: { __typename?: any } | null): obj is MetricsResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMetricsResult"')
      return MetricsResult_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Node_possibleTypes: string[] = ['AdoptionInfo','ApiToken','BanReasonHistory','Container','Credit','Customer','Deployment','DeploymentSnapshot','DeploymentTrigger','Environment','Event','Integration','IntegrationAuth','InviteCode','PlanLimitOverride','Plugin','Preferences','Project','ProjectPermission','ProjectToken','ProjectWebhook','ProviderAuth','ReferralInfo','Service','ServiceInstance','Session','Team','TeamPermission','Template','TemplateService','UsageAnomaly','UsageLimit','User','Variable','Volume','VolumeInstance']
    export const isNode = (obj?: { __typename?: any } | null): obj is Node => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNode"')
      return Node_possibleTypes.includes(obj.__typename)
    }
    


    const PageInfo_possibleTypes: string[] = ['PageInfo']
    export const isPageInfo = (obj?: { __typename?: any } | null): obj is PageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageInfo"')
      return PageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const PaymentMethod_possibleTypes: string[] = ['PaymentMethod']
    export const isPaymentMethod = (obj?: { __typename?: any } | null): obj is PaymentMethod => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaymentMethod"')
      return PaymentMethod_possibleTypes.includes(obj.__typename)
    }
    


    const PaymentMethodCard_possibleTypes: string[] = ['PaymentMethodCard']
    export const isPaymentMethodCard = (obj?: { __typename?: any } | null): obj is PaymentMethodCard => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPaymentMethodCard"')
      return PaymentMethodCard_possibleTypes.includes(obj.__typename)
    }
    


    const PlanLimitOverride_possibleTypes: string[] = ['PlanLimitOverride']
    export const isPlanLimitOverride = (obj?: { __typename?: any } | null): obj is PlanLimitOverride => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlanLimitOverride"')
      return PlanLimitOverride_possibleTypes.includes(obj.__typename)
    }
    


    const PlatformStatus_possibleTypes: string[] = ['PlatformStatus']
    export const isPlatformStatus = (obj?: { __typename?: any } | null): obj is PlatformStatus => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlatformStatus"')
      return PlatformStatus_possibleTypes.includes(obj.__typename)
    }
    


    const Plugin_possibleTypes: string[] = ['Plugin']
    export const isPlugin = (obj?: { __typename?: any } | null): obj is Plugin => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlugin"')
      return Plugin_possibleTypes.includes(obj.__typename)
    }
    


    const PluginContainersConnection_possibleTypes: string[] = ['PluginContainersConnection']
    export const isPluginContainersConnection = (obj?: { __typename?: any } | null): obj is PluginContainersConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPluginContainersConnection"')
      return PluginContainersConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PluginContainersConnectionEdge_possibleTypes: string[] = ['PluginContainersConnectionEdge']
    export const isPluginContainersConnectionEdge = (obj?: { __typename?: any } | null): obj is PluginContainersConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPluginContainersConnectionEdge"')
      return PluginContainersConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PluginVariablesConnection_possibleTypes: string[] = ['PluginVariablesConnection']
    export const isPluginVariablesConnection = (obj?: { __typename?: any } | null): obj is PluginVariablesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPluginVariablesConnection"')
      return PluginVariablesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PluginVariablesConnectionEdge_possibleTypes: string[] = ['PluginVariablesConnectionEdge']
    export const isPluginVariablesConnectionEdge = (obj?: { __typename?: any } | null): obj is PluginVariablesConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPluginVariablesConnectionEdge"')
      return PluginVariablesConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Preferences_possibleTypes: string[] = ['Preferences']
    export const isPreferences = (obj?: { __typename?: any } | null): obj is Preferences => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPreferences"')
      return Preferences_possibleTypes.includes(obj.__typename)
    }
    


    const PrivateNetwork_possibleTypes: string[] = ['PrivateNetwork']
    export const isPrivateNetwork = (obj?: { __typename?: any } | null): obj is PrivateNetwork => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPrivateNetwork"')
      return PrivateNetwork_possibleTypes.includes(obj.__typename)
    }
    


    const PrivateNetworkEndpoint_possibleTypes: string[] = ['PrivateNetworkEndpoint']
    export const isPrivateNetworkEndpoint = (obj?: { __typename?: any } | null): obj is PrivateNetworkEndpoint => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPrivateNetworkEndpoint"')
      return PrivateNetworkEndpoint_possibleTypes.includes(obj.__typename)
    }
    


    const Project_possibleTypes: string[] = ['Project']
    export const isProject = (obj?: { __typename?: any } | null): obj is Project => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProject"')
      return Project_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectDeploymentTriggersConnection_possibleTypes: string[] = ['ProjectDeploymentTriggersConnection']
    export const isProjectDeploymentTriggersConnection = (obj?: { __typename?: any } | null): obj is ProjectDeploymentTriggersConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectDeploymentTriggersConnection"')
      return ProjectDeploymentTriggersConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectDeploymentTriggersConnectionEdge_possibleTypes: string[] = ['ProjectDeploymentTriggersConnectionEdge']
    export const isProjectDeploymentTriggersConnectionEdge = (obj?: { __typename?: any } | null): obj is ProjectDeploymentTriggersConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectDeploymentTriggersConnectionEdge"')
      return ProjectDeploymentTriggersConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectDeploymentsConnection_possibleTypes: string[] = ['ProjectDeploymentsConnection']
    export const isProjectDeploymentsConnection = (obj?: { __typename?: any } | null): obj is ProjectDeploymentsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectDeploymentsConnection"')
      return ProjectDeploymentsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectDeploymentsConnectionEdge_possibleTypes: string[] = ['ProjectDeploymentsConnectionEdge']
    export const isProjectDeploymentsConnectionEdge = (obj?: { __typename?: any } | null): obj is ProjectDeploymentsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectDeploymentsConnectionEdge"')
      return ProjectDeploymentsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectEnvironmentsConnection_possibleTypes: string[] = ['ProjectEnvironmentsConnection']
    export const isProjectEnvironmentsConnection = (obj?: { __typename?: any } | null): obj is ProjectEnvironmentsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectEnvironmentsConnection"')
      return ProjectEnvironmentsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectEnvironmentsConnectionEdge_possibleTypes: string[] = ['ProjectEnvironmentsConnectionEdge']
    export const isProjectEnvironmentsConnectionEdge = (obj?: { __typename?: any } | null): obj is ProjectEnvironmentsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectEnvironmentsConnectionEdge"')
      return ProjectEnvironmentsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectGroupsConnection_possibleTypes: string[] = ['ProjectGroupsConnection']
    export const isProjectGroupsConnection = (obj?: { __typename?: any } | null): obj is ProjectGroupsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectGroupsConnection"')
      return ProjectGroupsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectGroupsConnectionEdge_possibleTypes: string[] = ['ProjectGroupsConnectionEdge']
    export const isProjectGroupsConnectionEdge = (obj?: { __typename?: any } | null): obj is ProjectGroupsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectGroupsConnectionEdge"')
      return ProjectGroupsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectInvitation_possibleTypes: string[] = ['ProjectInvitation']
    export const isProjectInvitation = (obj?: { __typename?: any } | null): obj is ProjectInvitation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectInvitation"')
      return ProjectInvitation_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectInvitationInviter_possibleTypes: string[] = ['ProjectInvitationInviter']
    export const isProjectInvitationInviter = (obj?: { __typename?: any } | null): obj is ProjectInvitationInviter => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectInvitationInviter"')
      return ProjectInvitationInviter_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectMember_possibleTypes: string[] = ['ProjectMember']
    export const isProjectMember = (obj?: { __typename?: any } | null): obj is ProjectMember => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectMember"')
      return ProjectMember_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectPermission_possibleTypes: string[] = ['ProjectPermission']
    export const isProjectPermission = (obj?: { __typename?: any } | null): obj is ProjectPermission => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectPermission"')
      return ProjectPermission_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectPluginsConnection_possibleTypes: string[] = ['ProjectPluginsConnection']
    export const isProjectPluginsConnection = (obj?: { __typename?: any } | null): obj is ProjectPluginsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectPluginsConnection"')
      return ProjectPluginsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectPluginsConnectionEdge_possibleTypes: string[] = ['ProjectPluginsConnectionEdge']
    export const isProjectPluginsConnectionEdge = (obj?: { __typename?: any } | null): obj is ProjectPluginsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectPluginsConnectionEdge"')
      return ProjectPluginsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectProjectPermissionsConnection_possibleTypes: string[] = ['ProjectProjectPermissionsConnection']
    export const isProjectProjectPermissionsConnection = (obj?: { __typename?: any } | null): obj is ProjectProjectPermissionsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectProjectPermissionsConnection"')
      return ProjectProjectPermissionsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectProjectPermissionsConnectionEdge_possibleTypes: string[] = ['ProjectProjectPermissionsConnectionEdge']
    export const isProjectProjectPermissionsConnectionEdge = (obj?: { __typename?: any } | null): obj is ProjectProjectPermissionsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectProjectPermissionsConnectionEdge"')
      return ProjectProjectPermissionsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectResourceAccess_possibleTypes: string[] = ['ProjectResourceAccess']
    export const isProjectResourceAccess = (obj?: { __typename?: any } | null): obj is ProjectResourceAccess => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectResourceAccess"')
      return ProjectResourceAccess_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectServicesConnection_possibleTypes: string[] = ['ProjectServicesConnection']
    export const isProjectServicesConnection = (obj?: { __typename?: any } | null): obj is ProjectServicesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectServicesConnection"')
      return ProjectServicesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectServicesConnectionEdge_possibleTypes: string[] = ['ProjectServicesConnectionEdge']
    export const isProjectServicesConnectionEdge = (obj?: { __typename?: any } | null): obj is ProjectServicesConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectServicesConnectionEdge"')
      return ProjectServicesConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectToken_possibleTypes: string[] = ['ProjectToken']
    export const isProjectToken = (obj?: { __typename?: any } | null): obj is ProjectToken => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectToken"')
      return ProjectToken_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectVolumesConnection_possibleTypes: string[] = ['ProjectVolumesConnection']
    export const isProjectVolumesConnection = (obj?: { __typename?: any } | null): obj is ProjectVolumesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectVolumesConnection"')
      return ProjectVolumesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectVolumesConnectionEdge_possibleTypes: string[] = ['ProjectVolumesConnectionEdge']
    export const isProjectVolumesConnectionEdge = (obj?: { __typename?: any } | null): obj is ProjectVolumesConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectVolumesConnectionEdge"')
      return ProjectVolumesConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectWebhook_possibleTypes: string[] = ['ProjectWebhook']
    export const isProjectWebhook = (obj?: { __typename?: any } | null): obj is ProjectWebhook => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectWebhook"')
      return ProjectWebhook_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectWebhooksConnection_possibleTypes: string[] = ['ProjectWebhooksConnection']
    export const isProjectWebhooksConnection = (obj?: { __typename?: any } | null): obj is ProjectWebhooksConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectWebhooksConnection"')
      return ProjectWebhooksConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ProjectWebhooksConnectionEdge_possibleTypes: string[] = ['ProjectWebhooksConnectionEdge']
    export const isProjectWebhooksConnectionEdge = (obj?: { __typename?: any } | null): obj is ProjectWebhooksConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProjectWebhooksConnectionEdge"')
      return ProjectWebhooksConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ProviderAuth_possibleTypes: string[] = ['ProviderAuth']
    export const isProviderAuth = (obj?: { __typename?: any } | null): obj is ProviderAuth => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isProviderAuth"')
      return ProviderAuth_possibleTypes.includes(obj.__typename)
    }
    


    const PublicProjectInformation_possibleTypes: string[] = ['PublicProjectInformation']
    export const isPublicProjectInformation = (obj?: { __typename?: any } | null): obj is PublicProjectInformation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPublicProjectInformation"')
      return PublicProjectInformation_possibleTypes.includes(obj.__typename)
    }
    


    const PublicProjectInvitation_possibleTypes: string[] = ['InviteCode','ProjectInvitation']
    export const isPublicProjectInvitation = (obj?: { __typename?: any } | null): obj is PublicProjectInvitation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPublicProjectInvitation"')
      return PublicProjectInvitation_possibleTypes.includes(obj.__typename)
    }
    


    const PublicStats_possibleTypes: string[] = ['PublicStats']
    export const isPublicStats = (obj?: { __typename?: any } | null): obj is PublicStats => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPublicStats"')
      return PublicStats_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const QueryApiTokensConnection_possibleTypes: string[] = ['QueryApiTokensConnection']
    export const isQueryApiTokensConnection = (obj?: { __typename?: any } | null): obj is QueryApiTokensConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryApiTokensConnection"')
      return QueryApiTokensConnection_possibleTypes.includes(obj.__typename)
    }
    


    const QueryApiTokensConnectionEdge_possibleTypes: string[] = ['QueryApiTokensConnectionEdge']
    export const isQueryApiTokensConnectionEdge = (obj?: { __typename?: any } | null): obj is QueryApiTokensConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryApiTokensConnectionEdge"')
      return QueryApiTokensConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const QueryDeploymentTriggersConnection_possibleTypes: string[] = ['QueryDeploymentTriggersConnection']
    export const isQueryDeploymentTriggersConnection = (obj?: { __typename?: any } | null): obj is QueryDeploymentTriggersConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryDeploymentTriggersConnection"')
      return QueryDeploymentTriggersConnection_possibleTypes.includes(obj.__typename)
    }
    


    const QueryDeploymentTriggersConnectionEdge_possibleTypes: string[] = ['QueryDeploymentTriggersConnectionEdge']
    export const isQueryDeploymentTriggersConnectionEdge = (obj?: { __typename?: any } | null): obj is QueryDeploymentTriggersConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryDeploymentTriggersConnectionEdge"')
      return QueryDeploymentTriggersConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const QueryDeploymentsConnection_possibleTypes: string[] = ['QueryDeploymentsConnection']
    export const isQueryDeploymentsConnection = (obj?: { __typename?: any } | null): obj is QueryDeploymentsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryDeploymentsConnection"')
      return QueryDeploymentsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const QueryDeploymentsConnectionEdge_possibleTypes: string[] = ['QueryDeploymentsConnectionEdge']
    export const isQueryDeploymentsConnectionEdge = (obj?: { __typename?: any } | null): obj is QueryDeploymentsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryDeploymentsConnectionEdge"')
      return QueryDeploymentsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const QueryEnvironmentPatchesConnection_possibleTypes: string[] = ['QueryEnvironmentPatchesConnection']
    export const isQueryEnvironmentPatchesConnection = (obj?: { __typename?: any } | null): obj is QueryEnvironmentPatchesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryEnvironmentPatchesConnection"')
      return QueryEnvironmentPatchesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const QueryEnvironmentPatchesConnectionEdge_possibleTypes: string[] = ['QueryEnvironmentPatchesConnectionEdge']
    export const isQueryEnvironmentPatchesConnectionEdge = (obj?: { __typename?: any } | null): obj is QueryEnvironmentPatchesConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryEnvironmentPatchesConnectionEdge"')
      return QueryEnvironmentPatchesConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const QueryEnvironmentsConnection_possibleTypes: string[] = ['QueryEnvironmentsConnection']
    export const isQueryEnvironmentsConnection = (obj?: { __typename?: any } | null): obj is QueryEnvironmentsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryEnvironmentsConnection"')
      return QueryEnvironmentsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const QueryEnvironmentsConnectionEdge_possibleTypes: string[] = ['QueryEnvironmentsConnectionEdge']
    export const isQueryEnvironmentsConnectionEdge = (obj?: { __typename?: any } | null): obj is QueryEnvironmentsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryEnvironmentsConnectionEdge"')
      return QueryEnvironmentsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const QueryEventsConnection_possibleTypes: string[] = ['QueryEventsConnection']
    export const isQueryEventsConnection = (obj?: { __typename?: any } | null): obj is QueryEventsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryEventsConnection"')
      return QueryEventsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const QueryEventsConnectionEdge_possibleTypes: string[] = ['QueryEventsConnectionEdge']
    export const isQueryEventsConnectionEdge = (obj?: { __typename?: any } | null): obj is QueryEventsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryEventsConnectionEdge"')
      return QueryEventsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const QueryIntegrationAuthsConnection_possibleTypes: string[] = ['QueryIntegrationAuthsConnection']
    export const isQueryIntegrationAuthsConnection = (obj?: { __typename?: any } | null): obj is QueryIntegrationAuthsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryIntegrationAuthsConnection"')
      return QueryIntegrationAuthsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const QueryIntegrationAuthsConnectionEdge_possibleTypes: string[] = ['QueryIntegrationAuthsConnectionEdge']
    export const isQueryIntegrationAuthsConnectionEdge = (obj?: { __typename?: any } | null): obj is QueryIntegrationAuthsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryIntegrationAuthsConnectionEdge"')
      return QueryIntegrationAuthsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const QueryIntegrationsConnection_possibleTypes: string[] = ['QueryIntegrationsConnection']
    export const isQueryIntegrationsConnection = (obj?: { __typename?: any } | null): obj is QueryIntegrationsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryIntegrationsConnection"')
      return QueryIntegrationsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const QueryIntegrationsConnectionEdge_possibleTypes: string[] = ['QueryIntegrationsConnectionEdge']
    export const isQueryIntegrationsConnectionEdge = (obj?: { __typename?: any } | null): obj is QueryIntegrationsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryIntegrationsConnectionEdge"')
      return QueryIntegrationsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const QueryProjectTokensConnection_possibleTypes: string[] = ['QueryProjectTokensConnection']
    export const isQueryProjectTokensConnection = (obj?: { __typename?: any } | null): obj is QueryProjectTokensConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryProjectTokensConnection"')
      return QueryProjectTokensConnection_possibleTypes.includes(obj.__typename)
    }
    


    const QueryProjectTokensConnectionEdge_possibleTypes: string[] = ['QueryProjectTokensConnectionEdge']
    export const isQueryProjectTokensConnectionEdge = (obj?: { __typename?: any } | null): obj is QueryProjectTokensConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryProjectTokensConnectionEdge"')
      return QueryProjectTokensConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const QueryProjectsConnection_possibleTypes: string[] = ['QueryProjectsConnection']
    export const isQueryProjectsConnection = (obj?: { __typename?: any } | null): obj is QueryProjectsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryProjectsConnection"')
      return QueryProjectsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const QueryProjectsConnectionEdge_possibleTypes: string[] = ['QueryProjectsConnectionEdge']
    export const isQueryProjectsConnectionEdge = (obj?: { __typename?: any } | null): obj is QueryProjectsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryProjectsConnectionEdge"')
      return QueryProjectsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const QuerySessionsConnection_possibleTypes: string[] = ['QuerySessionsConnection']
    export const isQuerySessionsConnection = (obj?: { __typename?: any } | null): obj is QuerySessionsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuerySessionsConnection"')
      return QuerySessionsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const QuerySessionsConnectionEdge_possibleTypes: string[] = ['QuerySessionsConnectionEdge']
    export const isQuerySessionsConnectionEdge = (obj?: { __typename?: any } | null): obj is QuerySessionsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuerySessionsConnectionEdge"')
      return QuerySessionsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const QueryTeamTemplatesConnection_possibleTypes: string[] = ['QueryTeamTemplatesConnection']
    export const isQueryTeamTemplatesConnection = (obj?: { __typename?: any } | null): obj is QueryTeamTemplatesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryTeamTemplatesConnection"')
      return QueryTeamTemplatesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const QueryTeamTemplatesConnectionEdge_possibleTypes: string[] = ['QueryTeamTemplatesConnectionEdge']
    export const isQueryTeamTemplatesConnectionEdge = (obj?: { __typename?: any } | null): obj is QueryTeamTemplatesConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryTeamTemplatesConnectionEdge"')
      return QueryTeamTemplatesConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const QueryTemplatesConnection_possibleTypes: string[] = ['QueryTemplatesConnection']
    export const isQueryTemplatesConnection = (obj?: { __typename?: any } | null): obj is QueryTemplatesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryTemplatesConnection"')
      return QueryTemplatesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const QueryTemplatesConnectionEdge_possibleTypes: string[] = ['QueryTemplatesConnectionEdge']
    export const isQueryTemplatesConnectionEdge = (obj?: { __typename?: any } | null): obj is QueryTemplatesConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryTemplatesConnectionEdge"')
      return QueryTemplatesConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const QueryUserTemplatesConnection_possibleTypes: string[] = ['QueryUserTemplatesConnection']
    export const isQueryUserTemplatesConnection = (obj?: { __typename?: any } | null): obj is QueryUserTemplatesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryUserTemplatesConnection"')
      return QueryUserTemplatesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const QueryUserTemplatesConnectionEdge_possibleTypes: string[] = ['QueryUserTemplatesConnectionEdge']
    export const isQueryUserTemplatesConnectionEdge = (obj?: { __typename?: any } | null): obj is QueryUserTemplatesConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryUserTemplatesConnectionEdge"')
      return QueryUserTemplatesConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const QueryWebhooksConnection_possibleTypes: string[] = ['QueryWebhooksConnection']
    export const isQueryWebhooksConnection = (obj?: { __typename?: any } | null): obj is QueryWebhooksConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryWebhooksConnection"')
      return QueryWebhooksConnection_possibleTypes.includes(obj.__typename)
    }
    


    const QueryWebhooksConnectionEdge_possibleTypes: string[] = ['QueryWebhooksConnectionEdge']
    export const isQueryWebhooksConnectionEdge = (obj?: { __typename?: any } | null): obj is QueryWebhooksConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQueryWebhooksConnectionEdge"')
      return QueryWebhooksConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RecoveryCodes_possibleTypes: string[] = ['RecoveryCodes']
    export const isRecoveryCodes = (obj?: { __typename?: any } | null): obj is RecoveryCodes => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRecoveryCodes"')
      return RecoveryCodes_possibleTypes.includes(obj.__typename)
    }
    


    const ReferralInfo_possibleTypes: string[] = ['ReferralInfo']
    export const isReferralInfo = (obj?: { __typename?: any } | null): obj is ReferralInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isReferralInfo"')
      return ReferralInfo_possibleTypes.includes(obj.__typename)
    }
    


    const ReferralStats_possibleTypes: string[] = ['ReferralStats']
    export const isReferralStats = (obj?: { __typename?: any } | null): obj is ReferralStats => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isReferralStats"')
      return ReferralStats_possibleTypes.includes(obj.__typename)
    }
    


    const ReferralUser_possibleTypes: string[] = ['ReferralUser']
    export const isReferralUser = (obj?: { __typename?: any } | null): obj is ReferralUser => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isReferralUser"')
      return ReferralUser_possibleTypes.includes(obj.__typename)
    }
    


    const Region_possibleTypes: string[] = ['Region']
    export const isRegion = (obj?: { __typename?: any } | null): obj is Region => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRegion"')
      return Region_possibleTypes.includes(obj.__typename)
    }
    


    const ResourceAccess_possibleTypes: string[] = ['ResourceAccess']
    export const isResourceAccess = (obj?: { __typename?: any } | null): obj is ResourceAccess => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isResourceAccess"')
      return ResourceAccess_possibleTypes.includes(obj.__typename)
    }
    


    const Service_possibleTypes: string[] = ['Service']
    export const isService = (obj?: { __typename?: any } | null): obj is Service => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isService"')
      return Service_possibleTypes.includes(obj.__typename)
    }
    


    const ServiceDeploymentsConnection_possibleTypes: string[] = ['ServiceDeploymentsConnection']
    export const isServiceDeploymentsConnection = (obj?: { __typename?: any } | null): obj is ServiceDeploymentsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isServiceDeploymentsConnection"')
      return ServiceDeploymentsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ServiceDeploymentsConnectionEdge_possibleTypes: string[] = ['ServiceDeploymentsConnectionEdge']
    export const isServiceDeploymentsConnectionEdge = (obj?: { __typename?: any } | null): obj is ServiceDeploymentsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isServiceDeploymentsConnectionEdge"')
      return ServiceDeploymentsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ServiceDomain_possibleTypes: string[] = ['ServiceDomain']
    export const isServiceDomain = (obj?: { __typename?: any } | null): obj is ServiceDomain => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isServiceDomain"')
      return ServiceDomain_possibleTypes.includes(obj.__typename)
    }
    


    const ServiceInstance_possibleTypes: string[] = ['ServiceInstance']
    export const isServiceInstance = (obj?: { __typename?: any } | null): obj is ServiceInstance => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isServiceInstance"')
      return ServiceInstance_possibleTypes.includes(obj.__typename)
    }
    


    const ServiceRepoTriggersConnection_possibleTypes: string[] = ['ServiceRepoTriggersConnection']
    export const isServiceRepoTriggersConnection = (obj?: { __typename?: any } | null): obj is ServiceRepoTriggersConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isServiceRepoTriggersConnection"')
      return ServiceRepoTriggersConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ServiceRepoTriggersConnectionEdge_possibleTypes: string[] = ['ServiceRepoTriggersConnectionEdge']
    export const isServiceRepoTriggersConnectionEdge = (obj?: { __typename?: any } | null): obj is ServiceRepoTriggersConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isServiceRepoTriggersConnectionEdge"')
      return ServiceRepoTriggersConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ServiceServiceInstancesConnection_possibleTypes: string[] = ['ServiceServiceInstancesConnection']
    export const isServiceServiceInstancesConnection = (obj?: { __typename?: any } | null): obj is ServiceServiceInstancesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isServiceServiceInstancesConnection"')
      return ServiceServiceInstancesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ServiceServiceInstancesConnectionEdge_possibleTypes: string[] = ['ServiceServiceInstancesConnectionEdge']
    export const isServiceServiceInstancesConnectionEdge = (obj?: { __typename?: any } | null): obj is ServiceServiceInstancesConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isServiceServiceInstancesConnectionEdge"')
      return ServiceServiceInstancesConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ServiceSource_possibleTypes: string[] = ['ServiceSource']
    export const isServiceSource = (obj?: { __typename?: any } | null): obj is ServiceSource => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isServiceSource"')
      return ServiceSource_possibleTypes.includes(obj.__typename)
    }
    


    const Session_possibleTypes: string[] = ['Session']
    export const isSession = (obj?: { __typename?: any } | null): obj is Session => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSession"')
      return Session_possibleTypes.includes(obj.__typename)
    }
    


    const SimilarTemplate_possibleTypes: string[] = ['SimilarTemplate']
    export const isSimilarTemplate = (obj?: { __typename?: any } | null): obj is SimilarTemplate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSimilarTemplate"')
      return SimilarTemplate_possibleTypes.includes(obj.__typename)
    }
    


    const Subscription_possibleTypes: string[] = ['Subscription']
    export const isSubscription = (obj?: { __typename?: any } | null): obj is Subscription => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubscription"')
      return Subscription_possibleTypes.includes(obj.__typename)
    }
    


    const SubscriptionDiscount_possibleTypes: string[] = ['SubscriptionDiscount']
    export const isSubscriptionDiscount = (obj?: { __typename?: any } | null): obj is SubscriptionDiscount => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubscriptionDiscount"')
      return SubscriptionDiscount_possibleTypes.includes(obj.__typename)
    }
    


    const SubscriptionItem_possibleTypes: string[] = ['SubscriptionItem']
    export const isSubscriptionItem = (obj?: { __typename?: any } | null): obj is SubscriptionItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSubscriptionItem"')
      return SubscriptionItem_possibleTypes.includes(obj.__typename)
    }
    


    const TCPProxy_possibleTypes: string[] = ['TCPProxy']
    export const isTCPProxy = (obj?: { __typename?: any } | null): obj is TCPProxy => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTCPProxy"')
      return TCPProxy_possibleTypes.includes(obj.__typename)
    }
    


    const Team_possibleTypes: string[] = ['Team']
    export const isTeam = (obj?: { __typename?: any } | null): obj is Team => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTeam"')
      return Team_possibleTypes.includes(obj.__typename)
    }
    


    const TeamCreateAndSubscribeResponse_possibleTypes: string[] = ['TeamCreateAndSubscribeResponse']
    export const isTeamCreateAndSubscribeResponse = (obj?: { __typename?: any } | null): obj is TeamCreateAndSubscribeResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTeamCreateAndSubscribeResponse"')
      return TeamCreateAndSubscribeResponse_possibleTypes.includes(obj.__typename)
    }
    


    const TeamDirectSupportDiscordInfo_possibleTypes: string[] = ['TeamDirectSupportDiscordInfo']
    export const isTeamDirectSupportDiscordInfo = (obj?: { __typename?: any } | null): obj is TeamDirectSupportDiscordInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTeamDirectSupportDiscordInfo"')
      return TeamDirectSupportDiscordInfo_possibleTypes.includes(obj.__typename)
    }
    


    const TeamMember_possibleTypes: string[] = ['TeamMember']
    export const isTeamMember = (obj?: { __typename?: any } | null): obj is TeamMember => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTeamMember"')
      return TeamMember_possibleTypes.includes(obj.__typename)
    }
    


    const TeamPermission_possibleTypes: string[] = ['TeamPermission']
    export const isTeamPermission = (obj?: { __typename?: any } | null): obj is TeamPermission => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTeamPermission"')
      return TeamPermission_possibleTypes.includes(obj.__typename)
    }
    


    const TeamProjectsConnection_possibleTypes: string[] = ['TeamProjectsConnection']
    export const isTeamProjectsConnection = (obj?: { __typename?: any } | null): obj is TeamProjectsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTeamProjectsConnection"')
      return TeamProjectsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const TeamProjectsConnectionEdge_possibleTypes: string[] = ['TeamProjectsConnectionEdge']
    export const isTeamProjectsConnectionEdge = (obj?: { __typename?: any } | null): obj is TeamProjectsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTeamProjectsConnectionEdge"')
      return TeamProjectsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Template_possibleTypes: string[] = ['Template']
    export const isTemplate = (obj?: { __typename?: any } | null): obj is Template => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTemplate"')
      return Template_possibleTypes.includes(obj.__typename)
    }
    


    const TemplateCreator_possibleTypes: string[] = ['TemplateCreator']
    export const isTemplateCreator = (obj?: { __typename?: any } | null): obj is TemplateCreator => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTemplateCreator"')
      return TemplateCreator_possibleTypes.includes(obj.__typename)
    }
    


    const TemplateDeployPayload_possibleTypes: string[] = ['TemplateDeployPayload']
    export const isTemplateDeployPayload = (obj?: { __typename?: any } | null): obj is TemplateDeployPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTemplateDeployPayload"')
      return TemplateDeployPayload_possibleTypes.includes(obj.__typename)
    }
    


    const TemplateKickbacksLeaderboard_possibleTypes: string[] = ['TemplateKickbacksLeaderboard']
    export const isTemplateKickbacksLeaderboard = (obj?: { __typename?: any } | null): obj is TemplateKickbacksLeaderboard => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTemplateKickbacksLeaderboard"')
      return TemplateKickbacksLeaderboard_possibleTypes.includes(obj.__typename)
    }
    


    const TemplateService_possibleTypes: string[] = ['TemplateService']
    export const isTemplateService = (obj?: { __typename?: any } | null): obj is TemplateService => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTemplateService"')
      return TemplateService_possibleTypes.includes(obj.__typename)
    }
    


    const TemplateServicesConnection_possibleTypes: string[] = ['TemplateServicesConnection']
    export const isTemplateServicesConnection = (obj?: { __typename?: any } | null): obj is TemplateServicesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTemplateServicesConnection"')
      return TemplateServicesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const TemplateServicesConnectionEdge_possibleTypes: string[] = ['TemplateServicesConnectionEdge']
    export const isTemplateServicesConnectionEdge = (obj?: { __typename?: any } | null): obj is TemplateServicesConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTemplateServicesConnectionEdge"')
      return TemplateServicesConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const TwoFactorInfo_possibleTypes: string[] = ['TwoFactorInfo']
    export const isTwoFactorInfo = (obj?: { __typename?: any } | null): obj is TwoFactorInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTwoFactorInfo"')
      return TwoFactorInfo_possibleTypes.includes(obj.__typename)
    }
    


    const TwoFactorInfoSecret_possibleTypes: string[] = ['TwoFactorInfoSecret']
    export const isTwoFactorInfoSecret = (obj?: { __typename?: any } | null): obj is TwoFactorInfoSecret => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTwoFactorInfoSecret"')
      return TwoFactorInfoSecret_possibleTypes.includes(obj.__typename)
    }
    


    const UsageAnomaly_possibleTypes: string[] = ['UsageAnomaly']
    export const isUsageAnomaly = (obj?: { __typename?: any } | null): obj is UsageAnomaly => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsageAnomaly"')
      return UsageAnomaly_possibleTypes.includes(obj.__typename)
    }
    


    const UsageLimit_possibleTypes: string[] = ['UsageLimit']
    export const isUsageLimit = (obj?: { __typename?: any } | null): obj is UsageLimit => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUsageLimit"')
      return UsageLimit_possibleTypes.includes(obj.__typename)
    }
    


    const User_possibleTypes: string[] = ['User']
    export const isUser = (obj?: { __typename?: any } | null): obj is User => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
      return User_possibleTypes.includes(obj.__typename)
    }
    


    const UserCost_possibleTypes: string[] = ['UserCost']
    export const isUserCost = (obj?: { __typename?: any } | null): obj is UserCost => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserCost"')
      return UserCost_possibleTypes.includes(obj.__typename)
    }
    


    const UserKickbackEarnings_possibleTypes: string[] = ['UserKickbackEarnings']
    export const isUserKickbackEarnings = (obj?: { __typename?: any } | null): obj is UserKickbackEarnings => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserKickbackEarnings"')
      return UserKickbackEarnings_possibleTypes.includes(obj.__typename)
    }
    


    const UserProfile_possibleTypes: string[] = ['UserProfile']
    export const isUserProfile = (obj?: { __typename?: any } | null): obj is UserProfile => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserProfile"')
      return UserProfile_possibleTypes.includes(obj.__typename)
    }
    


    const UserProfileResponse_possibleTypes: string[] = ['UserProfileResponse']
    export const isUserProfileResponse = (obj?: { __typename?: any } | null): obj is UserProfileResponse => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserProfileResponse"')
      return UserProfileResponse_possibleTypes.includes(obj.__typename)
    }
    


    const UserProjectsConnection_possibleTypes: string[] = ['UserProjectsConnection']
    export const isUserProjectsConnection = (obj?: { __typename?: any } | null): obj is UserProjectsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserProjectsConnection"')
      return UserProjectsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const UserProjectsConnectionEdge_possibleTypes: string[] = ['UserProjectsConnectionEdge']
    export const isUserProjectsConnectionEdge = (obj?: { __typename?: any } | null): obj is UserProjectsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserProjectsConnectionEdge"')
      return UserProjectsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserProviderAuthsConnection_possibleTypes: string[] = ['UserProviderAuthsConnection']
    export const isUserProviderAuthsConnection = (obj?: { __typename?: any } | null): obj is UserProviderAuthsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserProviderAuthsConnection"')
      return UserProviderAuthsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const UserProviderAuthsConnectionEdge_possibleTypes: string[] = ['UserProviderAuthsConnectionEdge']
    export const isUserProviderAuthsConnectionEdge = (obj?: { __typename?: any } | null): obj is UserProviderAuthsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserProviderAuthsConnectionEdge"')
      return UserProviderAuthsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserTeamsConnection_possibleTypes: string[] = ['UserTeamsConnection']
    export const isUserTeamsConnection = (obj?: { __typename?: any } | null): obj is UserTeamsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserTeamsConnection"')
      return UserTeamsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const UserTeamsConnectionEdge_possibleTypes: string[] = ['UserTeamsConnectionEdge']
    export const isUserTeamsConnectionEdge = (obj?: { __typename?: any } | null): obj is UserTeamsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserTeamsConnectionEdge"')
      return UserTeamsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Variable_possibleTypes: string[] = ['Variable']
    export const isVariable = (obj?: { __typename?: any } | null): obj is Variable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVariable"')
      return Variable_possibleTypes.includes(obj.__typename)
    }
    


    const VercelAccount_possibleTypes: string[] = ['VercelAccount']
    export const isVercelAccount = (obj?: { __typename?: any } | null): obj is VercelAccount => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVercelAccount"')
      return VercelAccount_possibleTypes.includes(obj.__typename)
    }
    


    const VercelInfo_possibleTypes: string[] = ['VercelInfo']
    export const isVercelInfo = (obj?: { __typename?: any } | null): obj is VercelInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVercelInfo"')
      return VercelInfo_possibleTypes.includes(obj.__typename)
    }
    


    const VercelProject_possibleTypes: string[] = ['VercelProject']
    export const isVercelProject = (obj?: { __typename?: any } | null): obj is VercelProject => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVercelProject"')
      return VercelProject_possibleTypes.includes(obj.__typename)
    }
    


    const Volume_possibleTypes: string[] = ['Volume']
    export const isVolume = (obj?: { __typename?: any } | null): obj is Volume => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVolume"')
      return Volume_possibleTypes.includes(obj.__typename)
    }
    


    const VolumeInstance_possibleTypes: string[] = ['VolumeInstance']
    export const isVolumeInstance = (obj?: { __typename?: any } | null): obj is VolumeInstance => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVolumeInstance"')
      return VolumeInstance_possibleTypes.includes(obj.__typename)
    }
    


    const VolumeVolumeInstancesConnection_possibleTypes: string[] = ['VolumeVolumeInstancesConnection']
    export const isVolumeVolumeInstancesConnection = (obj?: { __typename?: any } | null): obj is VolumeVolumeInstancesConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVolumeVolumeInstancesConnection"')
      return VolumeVolumeInstancesConnection_possibleTypes.includes(obj.__typename)
    }
    


    const VolumeVolumeInstancesConnectionEdge_possibleTypes: string[] = ['VolumeVolumeInstancesConnectionEdge']
    export const isVolumeVolumeInstancesConnectionEdge = (obj?: { __typename?: any } | null): obj is VolumeVolumeInstancesConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVolumeVolumeInstancesConnectionEdge"')
      return VolumeVolumeInstancesConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const WorkflowResult_possibleTypes: string[] = ['WorkflowResult']
    export const isWorkflowResult = (obj?: { __typename?: any } | null): obj is WorkflowResult => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorkflowResult"')
      return WorkflowResult_possibleTypes.includes(obj.__typename)
    }
    

export const enumActiveFeatureFlag = {
   OBSERVABILITY_V2: 'OBSERVABILITY_V2' as const,
   SERVICE_GROUPS: 'SERVICE_GROUPS' as const,
   STACKER_WORKFLOWS: 'STACKER_WORKFLOWS' as const,
   TEMPLATE_CONFIG_PANE: 'TEMPLATE_CONFIG_PANE' as const,
   TEMPLATE_SERVICE_EJECT: 'TEMPLATE_SERVICE_EJECT' as const
}

export const enumBuilder = {
   HEROKU: 'HEROKU' as const,
   NIXPACKS: 'NIXPACKS' as const,
   PAKETO: 'PAKETO' as const
}

export const enumCdnProvider = {
   DETECTED_CDN_PROVIDER_CLOUDFLARE: 'DETECTED_CDN_PROVIDER_CLOUDFLARE' as const,
   DETECTED_CDN_PROVIDER_UNSPECIFIED: 'DETECTED_CDN_PROVIDER_UNSPECIFIED' as const,
   UNRECOGNIZED: 'UNRECOGNIZED' as const
}

export const enumCertificateStatus = {
   CERTIFICATE_STATUS_TYPE_ISSUE_FAILED: 'CERTIFICATE_STATUS_TYPE_ISSUE_FAILED' as const,
   CERTIFICATE_STATUS_TYPE_ISSUING: 'CERTIFICATE_STATUS_TYPE_ISSUING' as const,
   CERTIFICATE_STATUS_TYPE_UNSPECIFIED: 'CERTIFICATE_STATUS_TYPE_UNSPECIFIED' as const,
   CERTIFICATE_STATUS_TYPE_VALID: 'CERTIFICATE_STATUS_TYPE_VALID' as const,
   UNRECOGNIZED: 'UNRECOGNIZED' as const
}

export const enumCnameCheckStatus = {
   ERROR: 'ERROR' as const,
   INFO: 'INFO' as const,
   INVALID: 'INVALID' as const,
   VALID: 'VALID' as const,
   WAITING: 'WAITING' as const
}

export const enumCreditType = {
   APPLIED: 'APPLIED' as const,
   CREDIT: 'CREDIT' as const,
   DEBIT: 'DEBIT' as const,
   STRIPE: 'STRIPE' as const,
   TRANSFER: 'TRANSFER' as const,
   WAIVED: 'WAIVED' as const
}

export const enumDnsRecordPurpose = {
   DNS_RECORD_PURPOSE_ACME_DNS01_CHALLENGE: 'DNS_RECORD_PURPOSE_ACME_DNS01_CHALLENGE' as const,
   DNS_RECORD_PURPOSE_TRAFFIC_ROUTE: 'DNS_RECORD_PURPOSE_TRAFFIC_ROUTE' as const,
   DNS_RECORD_PURPOSE_UNSPECIFIED: 'DNS_RECORD_PURPOSE_UNSPECIFIED' as const,
   UNRECOGNIZED: 'UNRECOGNIZED' as const
}

export const enumDnsRecordStatus = {
   DNS_RECORD_STATUS_PROPAGATED: 'DNS_RECORD_STATUS_PROPAGATED' as const,
   DNS_RECORD_STATUS_REQUIRES_UPDATE: 'DNS_RECORD_STATUS_REQUIRES_UPDATE' as const,
   DNS_RECORD_STATUS_UNSPECIFIED: 'DNS_RECORD_STATUS_UNSPECIFIED' as const,
   UNRECOGNIZED: 'UNRECOGNIZED' as const
}

export const enumDnsRecordType = {
   DNS_RECORD_TYPE_A: 'DNS_RECORD_TYPE_A' as const,
   DNS_RECORD_TYPE_CNAME: 'DNS_RECORD_TYPE_CNAME' as const,
   DNS_RECORD_TYPE_NS: 'DNS_RECORD_TYPE_NS' as const,
   DNS_RECORD_TYPE_UNSPECIFIED: 'DNS_RECORD_TYPE_UNSPECIFIED' as const,
   UNRECOGNIZED: 'UNRECOGNIZED' as const
}

export const enumDeploymentStatus = {
   BUILDING: 'BUILDING' as const,
   CRASHED: 'CRASHED' as const,
   DEPLOYING: 'DEPLOYING' as const,
   FAILED: 'FAILED' as const,
   INITIALIZING: 'INITIALIZING' as const,
   QUEUED: 'QUEUED' as const,
   REMOVED: 'REMOVED' as const,
   REMOVING: 'REMOVING' as const,
   SKIPPED: 'SKIPPED' as const,
   SLEEPING: 'SLEEPING' as const,
   SUCCESS: 'SUCCESS' as const,
   WAITING: 'WAITING' as const
}

export const enumIncidentStatus = {
   IDENTIFIED: 'IDENTIFIED' as const,
   INVESTIGATING: 'INVESTIGATING' as const,
   MONITORING: 'MONITORING' as const,
   RESOLVED: 'RESOLVED' as const
}

export const enumKeyType = {
   KEY_TYPE_ECDSA: 'KEY_TYPE_ECDSA' as const,
   KEY_TYPE_RSA_2048: 'KEY_TYPE_RSA_2048' as const,
   KEY_TYPE_RSA_4096: 'KEY_TYPE_RSA_4096' as const,
   KEY_TYPE_UNSPECIFIED: 'KEY_TYPE_UNSPECIFIED' as const,
   UNRECOGNIZED: 'UNRECOGNIZED' as const
}

export const enumMaintenanceStatus = {
   COMPLETED: 'COMPLETED' as const,
   INPROGRESS: 'INPROGRESS' as const,
   NOTSTARTEDYET: 'NOTSTARTEDYET' as const
}

export const enumMetricMeasurement = {
   CPU_LIMIT: 'CPU_LIMIT' as const,
   CPU_USAGE: 'CPU_USAGE' as const,
   DISK_USAGE_GB: 'DISK_USAGE_GB' as const,
   EPHEMERAL_DISK_USAGE_GB: 'EPHEMERAL_DISK_USAGE_GB' as const,
   MEASUREMENT_UNSPECIFIED: 'MEASUREMENT_UNSPECIFIED' as const,
   MEMORY_LIMIT_GB: 'MEMORY_LIMIT_GB' as const,
   MEMORY_USAGE_GB: 'MEMORY_USAGE_GB' as const,
   NETWORK_RX_GB: 'NETWORK_RX_GB' as const,
   NETWORK_TX_GB: 'NETWORK_TX_GB' as const,
   UNRECOGNIZED: 'UNRECOGNIZED' as const
}

export const enumMetricTag = {
   DEPLOYMENT_ID: 'DEPLOYMENT_ID' as const,
   DEPLOYMENT_INSTANCE_ID: 'DEPLOYMENT_INSTANCE_ID' as const,
   ENVIRONMENT_ID: 'ENVIRONMENT_ID' as const,
   KEY_UNSPECIFIED: 'KEY_UNSPECIFIED' as const,
   PLUGIN_ID: 'PLUGIN_ID' as const,
   PROJECT_ID: 'PROJECT_ID' as const,
   SERVICE_ID: 'SERVICE_ID' as const,
   UNRECOGNIZED: 'UNRECOGNIZED' as const,
   VOLUME_ID: 'VOLUME_ID' as const
}

export const enumPluginStatus = {
   DEPRECATED: 'DEPRECATED' as const,
   LOCKED: 'LOCKED' as const,
   REMOVED: 'REMOVED' as const,
   RUNNING: 'RUNNING' as const,
   STOPPED: 'STOPPED' as const
}

export const enumPluginType = {
   mongodb: 'mongodb' as const,
   mysql: 'mysql' as const,
   postgresql: 'postgresql' as const,
   redis: 'redis' as const
}

export const enumProjectRole = {
   ADMIN: 'ADMIN' as const,
   MEMBER: 'MEMBER' as const,
   VIEWER: 'VIEWER' as const
}

export const enumReferralStatus = {
   REFEREE_CREDITED: 'REFEREE_CREDITED' as const,
   REFERRER_CREDITED: 'REFERRER_CREDITED' as const,
   REGISTERED: 'REGISTERED' as const
}

export const enumRegistrationStatus = {
   ONBOARDED: 'ONBOARDED' as const,
   REGISTERED: 'REGISTERED' as const,
   WAITLISTED: 'WAITLISTED' as const
}

export const enumResourceOwnerType = {
   TEAM: 'TEAM' as const,
   USER: 'USER' as const
}

export const enumRestartPolicyType = {
   ALWAYS: 'ALWAYS' as const,
   NEVER: 'NEVER' as const,
   ON_FAILURE: 'ON_FAILURE' as const
}

export const enumSessionType = {
   BROWSER: 'BROWSER' as const,
   CLI: 'CLI' as const,
   FORUMS: 'FORUMS' as const
}

export const enumSubscriptionPlanType = {
   hobby: 'hobby' as const,
   pro: 'pro' as const,
   trial: 'trial' as const
}

export const enumSubscriptionState = {
   ACTIVE: 'ACTIVE' as const,
   CANCELLED: 'CANCELLED' as const,
   INACTIVE: 'INACTIVE' as const,
   PAST_DUE: 'PAST_DUE' as const,
   UNPAID: 'UNPAID' as const
}

export const enumTeamRole = {
   ADMIN: 'ADMIN' as const,
   MEMBER: 'MEMBER' as const
}

export const enumTemplateStatus = {
   HIDDEN: 'HIDDEN' as const,
   PUBLISHED: 'PUBLISHED' as const,
   UNPUBLISHED: 'UNPUBLISHED' as const
}

export const enumUsageAnomalyAction = {
   ALLOWED: 'ALLOWED' as const,
   AUTOBANNED: 'AUTOBANNED' as const,
   BANNED: 'BANNED' as const
}

export const enumUsageAnomalyFlagReason = {
   HIGH_CPU_USAGE: 'HIGH_CPU_USAGE' as const,
   HIGH_DISK_USAGE: 'HIGH_DISK_USAGE' as const,
   HIGH_NETWORK_USAGE: 'HIGH_NETWORK_USAGE' as const
}

export const enumUserFlag = {
   BETA: 'BETA' as const
}

export const enumVolumeState = {
   DELETED: 'DELETED' as const,
   DELETING: 'DELETING' as const,
   ERROR: 'ERROR' as const,
   MIGRATING: 'MIGRATING' as const,
   MIGRATION_PENDING: 'MIGRATION_PENDING' as const,
   READY: 'READY' as const,
   UPDATING: 'UPDATING' as const
}

export const enumWorkflowStatus = {
   Complete: 'Complete' as const,
   Error: 'Error' as const,
   NotFound: 'NotFound' as const,
   Running: 'Running' as const
}
