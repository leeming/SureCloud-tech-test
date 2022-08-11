#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {SurecloudCdkScenarioPrerequisiteStack} from '../lib/surecloud-cdk-scenario-prerequisite-stack';

const app = new cdk.App();
new SurecloudCdkScenarioPrerequisiteStack(app, 'surecloud-cdk-scenario-prerequisite-stack');
