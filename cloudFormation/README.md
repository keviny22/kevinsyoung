# SET ECS with FarGate
###### REF: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-cli-tutorial-fargate.html
`aws iam --region us-west-2 create-role --role-name ecsTaskExecutionRole --assume-role-policy-document file://task-execution-assume-role.json`

`aws iam --region us-west-2 attach-role-policy --role-name ecsTaskExecutionRole --policy-arn arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy`

`ecs-cli configure profile --profile-name kevinsyoung --access-key $AWS_ACCESS_KEY_ID --secret-key $AWS_SECRET_ACCESS_KEY`

##configure cluster
`ecs-cli configure --cluster kevinsyoung -default-launch-type FARGATE --config-name kevinsyoung --region us-west-2`

####create cluster
`ecs-cli up --cluster-config kevinsyoung --ecs-profile kevinsyoung`

## add security group

`aws ec2 authorize-security-group-ingress --group-id sg-0b3d8686df2f10ea4 --protocol tcp --port 80 --cidr 0.0.0.0/0 --region us-west-2`

#A record of ELB
kevinsyoung-1946451677.us-west-2.elb.amazonaws.com