import boto3

client = boto3.client('ec2');

def lambda_handler(event, context):
  response = client.describe_instances();
  
  return [instance['Tags'] for reservations in response['Reservations'] for instance in reservations['Instances']]
