---
title: Topological Object Search
type: bachelor thesis, master thesis
visible: true
image: /projects/stretch-mm.jpg
---
Object search is the problem of letting a robot find an object of interest. For this, the robot has to explore the environment it is placed into until the object is found. To explore an environment, current robotic methods use geometrical sensing, i.e. stereo cameras, LiDAR sensors or similar, such that they can create a 3D reconstruction of the environment which also has a clear distinction of 'known & occupied', 'known & unoccupied' and 'unknown' regions of space.

In this project, we want to break with the requirement of geometric sensing. We want to use only a camera. This has the advantage that it can work indoors and outdoors, has no problem with reflective surfaces etc. To explore and search without geometric sensing, we want to base the algorithm on 'directions of interest'. Wherever the robot goes and sees something interesting (e.g. an open door), it can remember the direction from the current location. By tracking how the robot moves, it can later come back to the same location and explore into the remembered direction. As part of this project, the proposed algorithm is implemented and evaluated against geometric algorithms.

# Requirements

experience with python, ideally with open3d

# Contact

please send your CV and transcript to [blumh@uni-bonn.de](mailto:blumh@uni-bonn.de)