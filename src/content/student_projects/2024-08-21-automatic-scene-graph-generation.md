---
title: Scene Understanding through Dynamic 3D Scene Graphs
type: master thesis
visible: true
image: //projects/scenegraph.jpg
---
Scene graphs allow to easily model dynamic environments for robots: Every object is a node in a graph and can be moved around, with edges combining nodes based on geometric or semantic proximity, and connections to higher levels grouping nodes per room, floor, and building.

In this thesis, we want to create a tool that easily and automatically creates such scene graphs from a single iPad scan of the room, such that a robot can be deployed to the environment. We base this on [LabelMaker](https://labelmaker.org/), where we add instance segmentation, and separation of rooms and floors.

Our goal is to create an easy tool that anybody can use, but to also be able to process large datasets such as [Taskonomy](http://taskonomy.stanford.edu/#data), to create the first large, multi-room scene-graph dataset for the research community.

In a second step, we want to integrate work such as [Lost and Found](https://arxiv.org/abs/2411.19162) to make it possible to track different objects as they move through the environment.

# Requirements

experience with a python, ideally with open3d; docker is a plus

# Contact

please send your CV and transcript to [blumh@uni-bonn.de](mailto:blumh@uni-bonn.de)