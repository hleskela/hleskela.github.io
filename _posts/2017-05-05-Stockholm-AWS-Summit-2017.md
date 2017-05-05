---
layout: post
title: Stockholm AWS Summit 2017
tags: [tech, conference]
---

Two days ago I was fortunate enough to be let out of the [Meltwater](https://www.meltwater.com/) office in Stockholm, where I mainly read papers about relation extraction and distant supervision, code convolutional neural networks and play foosball with team Storm. They were kind enough to send me to the AWS summit here in Stockholm, where I mainly mingled with AWS engineers, but also attended some interesting breakout sessions. This post is intended to highlight at least three of these sessions.

For all of the slides from the summit, click [here](https://www.slideshare.net/AmazonWebServices/tag/awssummitstockholm2017)

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