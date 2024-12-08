---
layout: default
title: Blog
permalink: /blog/
---

<div class="banner">
  <h1>Blog</h1>
</div>

<!-- Search input with label -->
<label for="search-input">Search Blog Posts:</label>
<input type="text" id="search-input" placeholder="Search blog posts..." />

<!-- Search results -->
<ul id="results-container"></ul>

<!-- Blog Post Cards -->
<div class="blog-grid">
  {% for post in site.posts %}
  <article class="blog-card">
    <img src="{{ post.header.image | relative_url }}" alt="{{ post.title }}">
    <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
    <p class="meta">{{ post.date | date: "%B %d, %Y" }} | Categories: {{ post.categories | join: ", " }} | Tags: {{ post.tags | join: ", " }}</p>
    <p>
      {{ post.content | strip_html | truncatewords: 30 }}
    </p>
  </article>
  {% endfor %}
</div>

<!-- Include the search script -->
<script src="{{ '/assets/js/simple-jekyll-search.min.js' | relative_url }}"></script>

<script>
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '{{ "/search.json" | relative_url }}',
    searchResultTemplate: '<li><a href="{url}">{title}</a><br><small>{date} | Categories: {categories} | Tags: {tags}</small></li>',
    noResultsText: 'No results found',
    limit: 10,
    fuzzy: false,
    exclude: [''],
    searchFields: ['title', 'categories', 'tags']
  });
</script>
