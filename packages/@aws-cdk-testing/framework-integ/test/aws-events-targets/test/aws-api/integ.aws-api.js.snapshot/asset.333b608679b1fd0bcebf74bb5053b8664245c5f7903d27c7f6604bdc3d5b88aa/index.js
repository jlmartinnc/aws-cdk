"use strict";var w=Object.create;var l=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var E=Object.getPrototypeOf,I=Object.prototype.hasOwnProperty;var s=(e,t)=>()=>(e&&(t=e(e=0)),t);var V=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),p=(e,t)=>{for(var i in t)l(e,i,{get:t[i],enumerable:!0})},k=(e,t,i,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of P(t))!I.call(e,a)&&a!==i&&l(e,a,{get:()=>t[a],enumerable:!(n=b(t,a))||n.enumerable});return e};var T=(e,t,i)=>(i=e!=null?w(E(e)):{},k(t||!e||!e.__esModule?l(i,"default",{value:e,enumerable:!0}):i,e)),d=e=>k(l({},"__esModule",{value:!0}),e);var y,M=s(()=>{"use strict";y=["ACM","ACMPCA","APIGateway","ARCZonalShift","AccessAnalyzer","Account","AlexaForBusiness","Amp","Amplify","AmplifyBackend","AmplifyUIBuilder","ApiGatewayManagementApi","ApiGatewayV2","AppConfig","AppConfigData","AppIntegrations","AppMesh","AppRunner","AppStream","AppSync","Appflow","ApplicationAutoScaling","ApplicationCostProfiler","ApplicationInsights","Athena","AuditManager","AugmentedAIRuntime","AutoScaling","AutoScalingPlans","Backup","BackupGateway","BackupStorage","Batch","Billingconductor","Braket","Budgets","CUR","Chime","ChimeSDKIdentity","ChimeSDKMediaPipelines","ChimeSDKMeetings","ChimeSDKMessaging","ChimeSDKVoice","Cloud9","CloudControl","CloudDirectory","CloudFormation","CloudFront","CloudHSM","CloudHSMV2","CloudSearch","CloudSearchDomain","CloudTrail","CloudWatch","CloudWatchEvents","CloudWatchLogs","CodeArtifact","CodeBuild","CodeCatalyst","CodeCommit","CodeDeploy","CodeGuruProfiler","CodeGuruReviewer","CodePipeline","CodeStar","CodeStarNotifications","CodeStarconnections","CognitoIdentity","CognitoIdentityServiceProvider","CognitoSync","Comprehend","ComprehendMedical","ComputeOptimizer","ConfigService","Connect","ConnectCampaigns","ConnectCases","ConnectContactLens","ConnectParticipant","ControlTower","CostExplorer","CustomerProfiles","DAX","DLM","DMS","DataBrew","DataExchange","DataPipeline","DataSync","Detective","DevOpsGuru","DeviceFarm","DirectConnect","DirectoryService","Discovery","DocDB","DocDBElastic","Drs","DynamoDB","DynamoDBStreams","EBS","EC2","EC2InstanceConnect","ECR","ECRPUBLIC","ECS","EFS","EKS","ELB","ELBv2","EMR","EMRServerless","EMRcontainers","ES","ElastiCache","ElasticBeanstalk","ElasticInference","ElasticTranscoder","EventBridge","Evidently","FMS","FSx","Finspace","Finspacedata","Firehose","Fis","ForecastQueryService","ForecastService","FraudDetector","GameLift","GameSparks","Glacier","GlobalAccelerator","Glue","Grafana","Greengrass","GreengrassV2","GroundStation","GuardDuty","Health","HealthLake","Honeycode","IAM","IVS","IdentityStore","Imagebuilder","Inspector","Inspector2","IoT1ClickDevicesService","IoT1ClickProjects","IoTAnalytics","IoTEvents","IoTEventsData","IoTFleetHub","IoTFleetWise","IoTJobsDataPlane","IoTRoboRunner","IoTSecureTunneling","IoTSiteWise","IoTThingsGraph","IoTTwinMaker","IoTWireless","Iot","IotData","IotDeviceAdvisor","Ivschat","KMS","Kafka","KafkaConnect","Kendra","Keyspaces","Kinesis","KinesisAnalytics","KinesisAnalyticsV2","KinesisVideo","KinesisVideoArchivedMedia","KinesisVideoMedia","KinesisVideoSignalingChannels","KinesisVideoWebRTCStorage","LakeFormation","Lambda","LexModelBuildingService","LexModelsV2","LexRuntime","LexRuntimeV2","LicenseManager","LicenseManagerLinuxSubscriptions","LicenseManagerUserSubscriptions","Lightsail","Location","LookoutEquipment","LookoutMetrics","LookoutVision","M2","MQ","MTurk","MWAA","MachineLearning","Macie","Macie2","ManagedBlockchain","MarketplaceCatalog","MarketplaceCommerceAnalytics","MarketplaceEntitlementService","MarketplaceMetering","MediaConnect","MediaConvert","MediaLive","MediaPackage","MediaPackageVod","MediaStore","MediaStoreData","MediaTailor","MemoryDB","Mgn","MigrationHub","MigrationHubConfig","MigrationHubOrchestrator","MigrationHubRefactorSpaces","MigrationHubStrategy","Mobile","Neptune","NetworkFirewall","NetworkManager","Nimble","OAM","Omics","OpenSearch","OpenSearchServerless","OpsWorks","OpsWorksCM","Organizations","Outposts","PI","Panorama","Personalize","PersonalizeEvents","PersonalizeRuntime","Pinpoint","PinpointEmail","PinpointSMSVoice","PinpointSMSVoiceV2","Pipes","Polly","Pricing","PrivateNetworks","Proton","QLDB","QLDBSession","QuickSight","RAM","RDS","RDSDataService","RUM","Rbin","Redshift","RedshiftData","RedshiftServerless","Rekognition","Resiliencehub","ResourceExplorer2","ResourceGroups","ResourceGroupsTaggingAPI","RoboMaker","RolesAnywhere","Route53","Route53Domains","Route53RecoveryCluster","Route53RecoveryControlConfig","Route53RecoveryReadiness","Route53Resolver","S3","S3Control","S3Outposts","SES","SESV2","SMS","SNS","SQS","SSM","SSMContacts","SSMIncidents","SSO","SSOAdmin","SSOOIDC","STS","SWF","SageMaker","SageMakerFeatureStoreRuntime","SageMakerGeospatial","SageMakerMetrics","SageMakerRuntime","SagemakerEdge","SavingsPlans","Scheduler","Schemas","SecretsManager","SecurityHub","SecurityLake","ServerlessApplicationRepository","ServiceCatalog","ServiceCatalogAppRegistry","ServiceDiscovery","ServiceQuotas","Shield","Signer","SimSpaceWeaver","SnowDeviceManagement","Snowball","SsmSap","StepFunctions","StorageGateway","Support","SupportApp","Synthetics","Textract","TimestreamQuery","TimestreamWrite","TranscribeService","Transfer","Translate","VoiceID","WAF","WAFRegional","WAFV2","WellArchitected","Wisdom","WorkDocs","WorkLink","WorkMail","WorkMailMessageFlow","WorkSpaces","WorkSpacesWeb","XRay"]});var u,v=s(()=>{"use strict";M();u={...y.reduce((e,t)=>({...e,[t]:`client-${t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}`.replace("-chime-sdk","-chime-sdk-").replace("client-amplify-","client-amplify").replace("client-cloud-","client-cloud").replace("client-code-","client-code").replace("client-connect-","client-connect").replace("client-data-","client-data").replace("client-io-t","client-iot-").replace("client-iot-fleet-","client-iotfleet").replace("client-lookout-","client-lookout").replace("client-media-","client-media").replace("client-migration-hub-","client-migrationhub").replace("client-pinpoint-sms","client-pinpoint-sms-").replace("client-route53","client-route53-").replace("client-sage-maker","client-sagemaker").replace("client-security-","client-security").replace("client-work-","client-work")}),{}),AccessAnalyzer:"client-accessanalyzer",ACMPCA:"client-acm-pca",APIGateway:"client-api-gateway",ApiGatewayManagementApi:"client-apigatewaymanagementapi",ApiGatewayV2:"client-apigatewayv2",AppConfig:"client-appconfig",AppConfigData:"client-appconfigdata",AppIntegrations:"client-appintegrations",AppRunner:"client-apprunner",AppStream:"client-appstream",AppSync:"client-appsync",ApplicationCostProfiler:"client-applicationcostprofiler",ARCZonalShift:"client-arc-zonal-shift",AugmentedAIRuntime:"client-sage-maker-a2iruntime",AuditManager:"client-auditmanager",BackupStorage:"client-backupstorage",CUR:"client-cost-and-usage-report-service",CloudHSMV2:"client-cloudhsm-v2",CodeGuruProfiler:"client-codeguruprofiler",CodeStarconnections:"client-codestar-connections",CognitoIdentityServiceProvider:"client-cognito-identity-provider",ComprehendMedical:"client-comprehendmedical",ConnectContactLens:"client-connect-contact-lens",ControlTower:"client-controltower",DMS:"client-database-migration-service",DataPipeline:"client-data-pipeline",Discovery:"client-application-discovery-service",DevOpsGuru:"client-devops-guru",DynamoDB:"client-dynamodb",DynamoDBStreams:"client-dynamodb-streams",DocDB:"client-docdb",DocDBElastic:"client-docdb-elastic",EC2InstanceConnect:"client-ec2-instance-connect",ECRPUBLIC:"client-ecr-public",ELB:"client-elastic-load-balancing",ELBv2:"client-elastic-load-balancing-v2",ElastiCache:"client-elasticache",EMRcontainers:"client-emr-containers",EMRServerless:"client-emr-serverless",ES:"client-elasticsearch-service",EventBridge:"client-eventbridge",Finspacedata:"client-finspace-data",ForecastQueryService:"client-forecastquery",ForecastService:"client-forecast",FraudDetector:"client-frauddetector",GameLift:"client-gamelift",GameSparks:"client-gamesparks",GreengrassV2:"client-greengrassv2",GroundStation:"client-groundstation",GuardDuty:"client-guardduty",HealthLake:"client-healthlake",IdentityStore:"client-identitystore",IoTAnalytics:"client-iotanalytics",IotData:"client-iot-data-plane",IotDeviceAdvisor:"client-iotdeviceadvisor",IoTSecureTunneling:"client-iotsecuretunneling",IoTSiteWise:"client-iotsitewise",IoTThingsGraph:"client-iotthingsgraph",IoTTwinMaker:"client-iottwinmaker",IoTRoboRunner:"client-iot-roborunner",KafkaConnect:"client-kafkaconnect",KinesisVideoSignalingChannels:"client-kinesis-video-signaling",KinesisVideoWebRTCStorage:"client-kinesis-video-webrtc-storage",LakeFormation:"client-lakeformation",LexRuntime:"client-lex-runtime-service",ManagedBlockchain:"client-managedblockchain",MigrationHubConfig:"client-migrationhub-config",MigrationHubRefactorSpaces:"client-migration-hub-refactor-spaces",NetworkManager:"client-networkmanager",OpenSearch:"client-opensearch",OpenSearchServerless:"client-opensearchserverless",OpsWorks:"client-opsworks",OpsWorksCM:"client-opsworkscm",PrivateNetworks:"client-privatenetworks",QLDBSession:"client-qldb-session",QuickSight:"client-quicksight",ResourceExplorer2:"client-resource-explorer-2",RDSDataService:"client-rds-data",RoboMaker:"client-robomaker",RolesAnywhere:"client-rolesanywhere",Route53:"client-route-53",Route53Domains:"client-route-53-domains",Route53Resolver:"client-route53resolver",S3Control:"client-s3-control",SageMakerFeatureStoreRuntime:"client-sagemaker-featurestore-runtime",SavingsPlans:"client-savingsplans",SecurityHub:"client-securityhub",ServerlessApplicationRepository:"client-serverlessapplicationrepository",ServiceCatalogAppRegistry:"client-service-catalog-appregistry",ServiceDiscovery:"client-servicediscovery",SimSpaceWeaver:"client-simspaceweaver",SSMContacts:"client-ssm-contacts",SSMIncidents:"client-ssm-incidents",SSOAdmin:"client-sso-admin",SSOOIDC:"client-sso-oidc",StepFunctions:"client-sfn",TranscribeService:"client-transcribe",WAFRegional:"client-waf-regional",WellArchitected:"client-wellarchitected",WorkMailMessageFlow:"client-workmailmessageflow"}});var f={};p(f,{getV3ClientPackageName:()=>g});var g,S=s(()=>{"use strict";v();g=e=>{if(e in u)return`@aws-sdk/${u[e]}`;throw new Error(`Client '${e}' is either deprecated or newly added. Please consider using the v3 package format (@aws-sdk/client-xxx).`)}});var h={};p(h,{findV3ClientConstructor:()=>m});function m(e){let[t,i]=Object.entries(e).find(([n])=>n.endsWith("Client")&&n!=="__Client");return i}var C=s(()=>{"use strict"});var A={};p(A,{getV3Client:()=>B,getV3Command:()=>W,loadV3ClientPackage:()=>L});function L(e){let t=e.startsWith("@aws-sdk/")?e:g(e);try{let i=require(t),{version:n}=require(t+"/package.json");return{service:t.replace("@aws-sdk/client-",""),pkg:i,packageName:t,packageVersion:n}}catch{throw Error(`Service ${e} client package with name '${t}' does not exist.`)}}function B(e,t={}){try{let i=m(e.pkg);return new i(t)}catch{throw Error(`No client constructor found within package: ${e.packageName}`)}}function W(e,t){let i=t.endsWith("Command")?t:`${t}Command`,n=Object.entries(e.pkg).find(([a])=>a.toLowerCase()===i.toLowerCase())?.[1];if(!n)throw new Error(`Unable to find command named: ${i} for api: ${t} in service package`);return n}var R=s(()=>{"use strict";C();S()});var D=V(r=>{"use strict";var O=r&&r.__createBinding||(Object.create?function(e,t,i,n){n===void 0&&(n=i);var a=Object.getOwnPropertyDescriptor(t,i);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,a)}:function(e,t,i,n){n===void 0&&(n=i),e[n]=t[i]}),G=r&&r.__exportStar||function(e,t){for(var i in e)i!=="default"&&!Object.prototype.hasOwnProperty.call(t,i)&&O(t,e,i)};Object.defineProperty(r,"__esModule",{value:!0});r.findV3ClientConstructor=r.getV3ClientPackageName=void 0;var F=(S(),d(f));Object.defineProperty(r,"getV3ClientPackageName",{enumerable:!0,get:function(){return F.getV3ClientPackageName}});var _=(C(),d(h));Object.defineProperty(r,"findV3ClientConstructor",{enumerable:!0,get:function(){return _.findV3ClientConstructor}});G((R(),d(A)),r)});var x={};p(x,{handler:()=>N});module.exports=d(x);var c=T(D());async function N(e){console.log("Event: %j",{...e,ResponseURL:"..."});let t=(0,c.loadV3ClientPackage)(e.service);console.log(`AWS SDK V3: ${t.packageName}@${t.packageVersion}`);let i=(0,c.getV3Client)(t,{apiVersion:e.apiVersion}),n=(0,c.getV3Command)(t,e.action),a=e.parameters??{};try{let o=await i.send(new n(a));delete o.$metadata,console.log("Response: %j",o)}catch(o){if(console.log(o),!e.catchErrorPattern||!new RegExp(e.catchErrorPattern).test(o.name))throw o}}0&&(module.exports={handler});