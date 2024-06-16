// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates volume.
 */
function calculateVolumeOfSphere() {
  // input
  const radius = parseFloat(document.getElementById('radius').value)


  // process
  const volumeOfPyramid = 4 / 3 * Math.PI * radius ** 3

  // output
  document.getElementById("volume").innerHTML = 'Volume is: ' + volumeOfPyramid.toFixed(2) + ' mm<sup>3'
}
