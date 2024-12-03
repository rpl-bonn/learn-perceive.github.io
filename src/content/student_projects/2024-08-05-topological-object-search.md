---
title: Robot Exploration that Includes Storage Furniture
type: bachelor thesis, master thesis
visible: true
image: /projects/stretch-mm.jpg
---
Object search is the problem of letting a robot find an object of interest. For this, the robot has to explore the environment it is placed into until the object is found. To explore an environment, current robotic methods use geometrical sensing, i.e. stereo cameras, LiDAR sensors or similar, such that they can create a 3D reconstruction of the environment which also has a clear distinction of 'known & occupied', 'known & unoccupied' and 'unknown' regions of space.

The problem of the classic geometric sensing approach is that it has no knowledge of e.g. doors, drawers, or other functional and dynamic elements. These however are easy to detect from images. We therefore want to extend prior object search methods such as \[[https://naoki.io/portfolio/vlfm](https://naoki.io/portfolio/vlfm)\](VLFM) with an algorithm that can also search through drawers and cabinets. The project will require you to train your own detector network to detect possible locations of an object, and then implement a robot planning algorithm that explores all the detected locations.

# Requirements

experience with python, pytorch, ideally with open3d

# Contact

please send your CV and transcript to [blumh@uni-bonn.de](mailto:blumh@uni-bonn.de)