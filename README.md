PyBossa Application: Feynman Flowers
====================================
Traditional electronic devices work by moving charge around a circuit. This has produced astounding results over the last half century, but we are now at a point where further reducing the size of circuit elements is difficult because it would create too much heat in too small a space.

Our research group is studying magnetic molecules to understand how they can be used to make the smallest possible “spintronic” devices, in which charge (electronic) and spin (magnetic) properties can be used together. In the future, this would allow us to make devices that can do more and also use less energy.

As a simple example, we may be able to use the magnetic orientation of one molecule (the direction in which its internal compass needle points) to store a single bit (0 or 1) of information: this would potentially increase the storage density on hard drives by 100x.

Using a special kind of microscope called a scanning tunneling microscope, or STM, and operating it close to the absolute zero of temperature (-273 Celsius) we are able to study the magnetic properties of individual molecules.

Many of a molecule’s magnetic properties are determined by how it binds (sticks) to the surface. For example, a group in Japan found that the magnetic stability energy of a molecule could change by 50% just by a 15˚ rotation in its binding angle.

It is therefore crucial for us to measure the distribution of binding angles of a particular molecule on a given surface. This will allow us to compare our results with theoretical predictions to better understand their properties. But getting accurate data on this means measuring thousands of images, which is tremendously time-consuming for our small team. That’s where you come in …

Based on the average of estimates by several volunteers like you, we hope to extract new information about the subtle ways that molecules interact with the surfaces they are stuck to, and how this affects their magnetic properties. Our data will be made openly available after we have analyzed it, and we will gladly acknowledge the volunteers in any publications that result from your efforts. We also hope you will enjoy this chance to explore a beautiful phenomenon from the nanoworld!

![alt screenshot](http://i.imgur.com/nSeFL4J.png)

You can try the application
[here](http://crowdcrafting.org/app/feynmanflowers).

Testing the application
=======================

You need to install the pybossa-client first (use a virtualenv):

```bash
    $ pip install pybossa-client
```
Then, you can follow the next steps:

*  Create an account in PyBossa
*  Copy under your account profile your API-KEY
*  Run python createTasks.py -u http://crowdcrafting.org -k API-KEY
*  Open with your browser the Applications section and choose the Feynman Flowers app. This will open the presenter for this demo application.

Documentation
=============

We recommend that you read the section: [Build with PyBossa](http://docs.pybossa.com/en/latest/build_with_pybossa.html) and follow the [step by step tutorial](http://docs.pybossa.com/en/latest/user/tutorial.html).

**NOTE**: This application uses the [pybossa-client](https://pypi.python.org/pypi/pybossa-client) in order to simplify the development of the application and its usage. Check the [documentation](http://pythonhosted.org/pybossa-client/).


LICENSE
=======

Please, see the COPYING file.


Acknowledgments
===============
The thumbnail has been created using a colored photo from the data set provided
by Cyrus F. Hirjibehedin from [Hirjibehedin Research Group, UCL](http://www.ucl.ac.uk/hirjibehedin/). 


