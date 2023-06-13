import * as cdk from 'aws-cdk-lib';
import {Template} from 'aws-cdk-lib/assertions';
import {Ec2TagReader} from "../lib/ec2-tag-reader-stack";

test('Stack should have 1 Lambda', () => {
    const app = new cdk.App();
    const stack = new Ec2TagReader(app, 'test-stack');

    const template = Template.fromStack(stack);

    template.resourceCountIs('AWS::Lambda::Function', 1);
});

test('Stack should have 1 IAM Role', () => {
    const app = new cdk.App();
    const stack = new Ec2TagReader(app, 'test-stack');

    const template = Template.fromStack(stack);

    template.resourceCountIs('AWS::IAM::Role', 1);
});
