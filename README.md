# Node.js Application on AWS EC2

This is a guide for deploying a Node.js application on an Amazon EC2 instance.

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Create an EC2 Instance](#create-an-ec2-instance)
- [Connect to Your EC2 Instance](#connect-to-your-ec2-instance)
- [Upload Your Node.js Application](#upload-your-nodejs-application)
- [Install Node.js and Dependencies](#install-nodejs-and-dependencies)
- [Run Your Node.js Application](#run-your-nodejs-application)
- [Access Your Application](#access-your-application)
- [Stopping and Terminating Your EC2 Instance](#stopping-and-terminating-your-ec2-instance)
- [Conclusion](#conclusion)

## Introduction

This guide will walk you through the steps to deploy a Node.js application on an Amazon EC2 (Elastic Compute Cloud) instance. EC2 instances provide scalable and flexible computing power in the AWS cloud.

## Prerequisites

Before you begin, make sure you have the following:
- An AWS account
- The AWS CLI (Command Line Interface) installed and configured
- A Node.js application that you want to deploy

## Create an EC2 Instance

1. Log in to your AWS Management Console.
2. Navigate to the EC2 Dashboard.
3. Click on "Launch Instance" to create a new EC2 instance.
4. Follow the wizard to select an Amazon Machine Image (AMI), choose an instance type, configure instance details, add storage, configure security groups, and review your settings.
5. Launch the instance, and choose an existing key pair or create a new one. You will need this key pair to connect to your instance.

## Connect to Your EC2 Instance

1. Use SSH to connect to your EC2 instance using the key pair you selected during instance creation.


## Upload Your Node.js Application

1. Use SCP or SFTP to upload your Node.js application files to your EC2 instance.


## Install Node.js and Dependencies

1. Once connected to your EC2 instance, update the package manager and install Node.js and npm.


## Run Your Node.js Application

1. Start your Node.js application as a background process using a tool like `pm2`.


2. Your Node.js application should now be running in the background.

## Access Your Application

You can access your Node.js application by entering your instance's public IP address or domain name in a web browser.

## Stopping and Terminating Your EC2 Instance

Remember to stop or terminate your EC2 instance when you're done to avoid unnecessary charges.

- To stop the instance: `aws ec2 stop-instances --instance-ids your-instance-id`
- To terminate the instance: `aws ec2 terminate-instances --instance-ids your-instance-id`

## Conclusion

You have successfully deployed a Node.js application on an AWS EC2 instance. Make sure to secure your application and keep your EC2 instance up to date with security patches.
