---
layout: default
title: "Hobbies"
permalink: /hobbies/
---

<div class="banner">
  <h1>Hobbies</h1>
</div>

<main>
  <div class="gallery">
    <!-- 3 columns per row: use a responsive CSS grid -->
    {% assign images = "hobbies_travel_taiwan.jpg,hobbies_painting_honeymoon.jpg,hobbies_ceramics.jpg,hobbies_antiquerugs.jpg,hobbies_baking_borange.jpg,hobbies_japanese.jpg,hobbies_tidepools.jpg,hobbies_painting_a.jpg,hobbies_painting_imprsn.jpg,hobbies_hiking.jpg,hobbies_playfulbowl.jpg,hobbies_baking_applecake.jpg" | split: "," %}
    {% for img in images %}
    <div class="gallery-item">
      <img src="/assets/images/{{ img }}" alt="{{ img }}" class="gallery-thumb" data-caption="fill this in later">
    </div>
    {% endfor %}
  </div>
</main>

<!-- Modal for image preview -->
<div id="gallery-modal" class="gallery-modal">
  <span class="close-modal">&times;</span>
  <img class="modal-content-img">
  <div class="modal-caption"></div>
</div>

<script src="/assets/js/gallery.js"></script>
