#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {SurecloudCdkScenarioPrerequisiteStack} from '../lib/surecloud-cdk-scenario-prerequisite-stack';
import {Ec2TagReader} from '../lib/ec2-tag-reader-stack';

const app = new cdk.App();
new SurecloudCdkScenarioPrerequisiteStack(app, 'surecloud-cdk-scenario-prerequisite-stack');

new Ec2TagReader(app, 'tag-reader-stack');
