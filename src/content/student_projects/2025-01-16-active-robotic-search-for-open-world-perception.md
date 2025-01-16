---
title: Active Robotic Search for Open-World Perception
type: master thesis
visible: true
image: /projects/lion.jpg
---
In the active perception task we investigate how a robot can improve its understanding of the environment it operates in by actively deciding where and how to look at the things that it finds in its surroundings. For example, if the robot has high uncertainty (low information) about an object in the environment, we can apply active perception algorithms to guide it to gather more sensory data in this area. Representative methods using drone platforms include citation [1] for autonomous exploration of cluttered environments and [2] for top-down terrain monitoring using computer vision.

In this project we want to develop an active perception approach to find open-set objects in an environment. “Open-set” refers to any object that is unexpected and does not belong to the things that the robot knows, i.e. the prior data it was trained on. Examples of this are, in an increasing level of difficulty, obstacles on a road (see segmentmeifyoucan.com), litter in a public park, or invasive plant species in a forest. Our goal is to develop a robot that can explore a new environment, identify and inspect any objects of interest that could be open-set instances, and report back its findings. We will validate the approach using a legged platform searching for unknown objects in a cluttered scene, e.g. collecting a database of litter.

### Key tasks/milestones:

Investigate and refine an open-set detector based on literature research and benchmarks such as fishyscapes.com and segmentmeifyoucan.com
Develop a baseline approach that combines exploration and open-set detection
Refine different information gain metrics that steer the robot towards open-set detections
Evaluate the final system on a real-world spot robot

### Relevant reading:
[1] Receding Horizon “Next-Best-View” Planner for 3D Exploration - Receding Horizon "Next-Best-View" Planner for 3D Exploration | IEEE Conference Publication | IEEE Xplore
[2] Active Learning of Robot Vision Using Adaptive Path Planning - 2410.10684
[3] 

## Requirements
Experience with pytorch, some experience with deep learning for computer vision

## Contact
Please send your CV and transcript to blumh@uni-bonn.de and M.Popovic@tudelft.nl
