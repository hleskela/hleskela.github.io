---
layout: post
title: Stockholm AWS Summit 2017
tags: [tech, conference]
---

Two days ago I was fortunate enough to be let out of the [Meltwater](https://www.meltwater.com/) office in Stockholm, where I mainly read papers about relation extraction and distant supervision, code convolutional neural networks and play foosball with team Storm. They were kind enough to send me to the AWS summit here in Stockholm, where I mainly mingled with AWS engineers, but also attended some interesting breakout sessions. This post is intended to highlight at least three of these sessions.

For all of the slides from the summit, click [here](https://www.slideshare.net/AmazonWebServices/tag/awssummitstockholm2017)

## Breakout session 1: Building your first Big Data Application on AWS
This was an overview of things to consider when building a big data app on AWS. It focused on how to migrate your data into AWS, and then the initial steps of creating a data lake and parse the data. They discussed which service to use if transfering the data through internet wasn't an option (Amazon Snowball), or using Amazon Direct connect if you had no issues with internet transfers but wanted a dedicated line with more reliability than just regular command line transfers. It boiled down to "contact us for the best service for your scenario", or just watch the video on this page: [clickety click](https://aws.amazon.com/cloud-data-migration/)

After migrating the data the topic was storage. Amazon Redshift is their data warehouse service, where the big selling points were that it sped up queries, and that it is scalable from 160 GB to 2 PB. They said that the command line is usually sufficient for importing the data, but Snowball or Direct Connect could also be used if they better suit your needs.

After importing it into Redshift, the speaker suggested visualization of the data using Amazon Quicksight. This would give you an overview of the structured data without spending too much efford doing data analysis. The service was basically an answer to the question "How to (quickly) please your CEO?". 

For data transformation, Amazon Lambda was highlighted. The lambdas are basically functions set up to be triggered by certain events, perhaps an incomming transfer from a mobile service. The lambdas are run standalone, and only costs money when actually run, which might be preferable over a separate AWS instance from a cost perspective. They can run for a maximum of five minutes, so if the processing of the data needed more time than that, Amazon EMR (Elastic MapReduce) is an option. These are run as an instance, so they can be seen as the big brother of Amazon Lambdas.

With above said, they suggested two pipelines depending on the need for a data lake or a data warehouse (S3 Bucket vs Redshift) and depending on how much time you need for data cleaning. If you want a data lake, just stop the process before importing it into Redshift.
```
Import data into S3 Bucket -> Lambda for cleanup -> Output to clean S3 Bucket -> import into RedShift
```
```
Import data into S3 Bucket -> Amazon EMR for cleanup-> Output to clean S3 Bucket -> import into RedShift
```

They alos had a customer talk about their migration, which was surprisingly honest in my opinion. The company, Trustpilot, claimed that the use of Lambdas and S3 event triggers were highly recommended, and that the cost difference between an S3 instance and a Redshift instance was so big that the schema-on-read model was a much better alternative for their big data applications. It also meant that each team produced their own ETL scripts, being able to create schemas in whatever way suited them instead of being stuck with a default schema someone once created.
In order to avoid making a data swamp, they suggested catalouging the data. They didn't expand that much on this, but mentioned using ElasticSearch and Amazon DynamoDB. 

However, this depends on how much data that needs to be quickly accessible for your application. Amazon Glacier > Amazon S3 > Amazon Redshift in terms of access time (Glacier slow, Redshift fast).


## Breakout session 2: Deep Dive on MXNET and Deep Learning Frameworks, by Julien Simon (Tech Evangelist)

### Some links related to the talk
[MXNET](http://mxnet.io/)
[Samples](https://github.com/dmlc/mxnet/tree/master/example)
[Julien's tutorial](https://chatbotslife.com/training-mxnet-part-1-mnist-6f0dc4210c62)
[AWS p2 instances](https://aws.amazon.com/blogs/aws/new-p2-instance-type-for-amazon-ec2-up-to-16-gpus/)

This was a basic demonstration of the MXNET library and its compatability with AWS. The main selling points seem to be that:
* It is not owned by a specific company, like TensorFlow or Microsoft CNTK
* You can use both imperative and symbolic programming
* It supports a wide variety of languages (but not Java as far as I can tell)
* It is compact yet powerful. Around 20 lines of code to import MNIST, delegate resources over different GPU.s and then train and test a cnn.

I liked how it abstracted a lot of the GPU administration to the api rather than the user, and I can see how this library is suitable for productization rather than hard core research. Despite this, they claim that every state of the art model could be implemented using MXNET, so there might be some benefits in terms of speed of development over tensorflow or theano