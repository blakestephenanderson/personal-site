---
layout: default
title: Blog
permalink: /blog/
---

<div class="banner">
  <h1>Blog</h1>
</div>

<div class="blog-page-container">
  <aside class="tag-sidebar">
    <h3 class="section-heading section-heading--light-bg">Tags</h3>
    <ul class="tag-list">
      {% assign all_tags = site.tags | sort %}
      {% for tag in all_tags %}
        <li><a href="#" class="tag-filter" data-tag="{{ tag[0] }}">{{ tag[0] }}</a></li>
      {% endfor %}
    </ul>
  </aside>

  <div class="blog-main-content">
    <button class="clear-selection-button" style="display:none;">Clear Selection</button>
    
    <div class="blog-grid">
      {% for post in site.posts limit:12 %}
      <article class="blog-card" data-categories="{{ post.categories | join: ',' }}" data-tags="{{ post.tags | join: ',' }}">
        {% if post.header.image %}
        <img src="{{ post.header.image | relative_url }}" alt="{{ post.title }}">
        {% endif %}
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <p class="meta">
          {{ post.date | date: "%B %d, %Y" }} | Categories: {{ post.categories | join: ", " }} | Tags: {{ post.tags | join: ", " }}
        </p>
        <p>
          {{ post.content | strip_html | truncatewords: 30 }}
        </p>
      </article>
      {% endfor %}
    </div>

    <div class="pagination-controls">
      <button class="newer-button" style="display:none;">Newer</button>
      <button class="older-button">Older</button>
    </div>
  </div>
</div>
