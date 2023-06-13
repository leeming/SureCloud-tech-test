import {Stack, StackProps} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';

import * as path from 'path';
import { Policy, PolicyStatement } from 'aws-cdk-lib/aws-iam';

export class Ec2TagReader extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);


        const fn = new lambda.Function(this, 'TagReader', {
            runtime: lambda.Runtime.PYTHON_3_9,
            code: lambda.Code.fromAsset(path.join(__dirname, 'lambda')),
            handler: 'ec2-tag-reader.lambda_handler'
          });

        const listEc2Tags = new PolicyStatement({
            actions: [
                "ec2:DescribeInstances",
            ],
            resources: ["*"],
        });

        fn.role?.attachInlinePolicy(
            new Policy(this, 'list-ec2-tag-policy', {
                statements: [listEc2Tags]
            }),
        );
    }
}
