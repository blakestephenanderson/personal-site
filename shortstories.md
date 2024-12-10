---
layout: default
title: "Short Stories"
permalink: /short-stories/
---

<main>
  <div class="blog-grid">
    {% for story in site.stories %}
    <article class="blog-card" data-categories="{{ story.categories | join: ',' }}" data-tags="{{ story.tags | join: ',' }}">
      {% if story.header.image %}
      <img src="{{ story.header.image | relative_url }}" alt="{{ story.title }}">
      {% endif %}
      <h2><a href="{{ story.url }}">{{ story.title }}</a></h2>
      <p class="meta">
        {{ story.date | date: "%B %d, %Y" }} | Categories: {{ story.categories | join: ", " }} | Tags: {{ story.tags | join: ", " }}
      </p>
      <p>
        {% if story.language == "ja" or story.language == "zh" %}
          {{ story.content | strip_html | truncate: 200 }}
        {% else %}
          {{ story.content | strip_html | truncatewords: 30 }}
        {% endif %}
      </p>
    </article>
    {% endfor %}
  </div>
</main>
