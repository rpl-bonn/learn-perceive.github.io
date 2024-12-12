---
title: "KALLAX Benchmark: Evaluating Robots on Household Tasks"
type: bachelor thesis, master thesis
visible: true
image: /projects/kallax.jpeg
---
Currently there are three options to evaluate a robot for pick-and-place tasks in a home setting: 

* compare different methods in the same simulation setup: great reproducability, but hard to simulate complexities and perception noise of real-world physical interactions
* compare robotic systems in competitions: great to compare overall system approaches, but is a huge effort and cannot be done e.g. every month
* evaluate success in custom lab setups: That is what everybody does, but it leads to overfitting to the lab setup and is not comparable between labs

We want to use IKEA furniture, which is widely available worldwide, to make it possible to create comparable and randomized setups that every researcher can easily build up in their lab. The system would e.g. generate randomized challenges for a 4x4 KALLAX where every setup has different door knobs, drawers are moved to different shelves, and for each setup a task is generated such as "move the cup from the upper right shelf into the black drawer". The randomization makes sure that researchers cannot overfit to a specific setup while they can still run the whole experiment in their own lab and quickly get an evaluation how well their system copes with the tasks compared to existing works.

This project will use the ikea database to create a random generator for robotic pick-and-place tasks that involve furniture interaction. If successful and there is enough time left, the second part of the project involves setting up a challenge website and coming up with strategies to verify uploaded videos for a given task, e.g. by measuring response time and allowing peers to verify success or failure of the robot in the video.

## Requirements
Experience in python and ideally in web development. 
## Contact Details
Please send your CV and transcript to [blumh@uni-bonn.de](mailto:blumh@uni-bonn.de)