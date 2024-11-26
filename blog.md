---
layout: default
title: Blog
permalink: /blog/
---

<h1>Blog</h1>

<!-- Search input with label -->
<label for="search-input">Search Blog Posts:</label>
<input type="text" id="search-input" placeholder="Search blog posts..." />

<!-- Search results -->
<ul id="results-container"></ul>

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
    searchFields: ['title', 'categories', 'tags'] // Exclude 'content' since it's not in search.json
  });
</script>
