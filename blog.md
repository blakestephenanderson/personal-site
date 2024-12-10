---
layout: default
title: "Blog"
permalink: /blog/
---

<main>
  <div class="blog-grid">
    {% for post in site.posts %}
    <article class="blog-card" data-categories="{{ post.categories | join: ',' }}" data-tags="{{ post.tags | join: ',' }}">
      {% if post.header.image %}
      <img src="{{ post.header.image | relative_url }}" alt="{{ post.title }}">
      {% endif %}
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <p class="meta">
        {{ post.date | date: "%B %d, %Y" }} | Categories: {{ post.categories | join: ", " }} | Tags: {{ post.tags | join: ", " }}
      </p>
      <p>
        {% if post.language == "ja" or post.language == "zh" %}
          {{ post.content | strip_html | truncate: 200 }}
        {% else %}
          {{ post.content | strip_html | truncatewords: 30 }}
        {% endif %}
      </p>
    </article>
    {% endfor %}
  </div>
</main>
