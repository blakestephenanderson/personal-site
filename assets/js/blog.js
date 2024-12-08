document.addEventListener('DOMContentLoaded', function() {
  const pageSize = 12;
  let currentPage = 1;
  let selectedTag = null;

  const blogCards = Array.from(document.querySelectorAll('.blog-card'));
  const allTags = document.querySelectorAll('.tag-filter');
  const clearBtn = document.querySelector('.clear-selection-button');
  const olderBtn = document.querySelector('.older-button');
  const newerBtn = document.querySelector('.newer-button');

  // Initially hide Newer button (only visible after going Older at least once)
  newerBtn.style.display = 'none';

  // Function to get currently filtered posts
  function getFilteredPosts() {
    if (!selectedTag) {
      return blogCards;
    }
    return blogCards.filter(card => {
      const tags = card.getAttribute('data-tags').split(',');
      return tags.includes(selectedTag);
    });
  }

  function updatePaginationButtons(filteredPosts) {
    // Calculate total pages
    const totalPages = Math.ceil(filteredPosts.length / pageSize);

    // Older button logic
    if (currentPage >= totalPages) {
      // No more older posts
      olderBtn.disabled = true;
      olderBtn.style.opacity = '0.5';
    } else {
      olderBtn.disabled = false;
      olderBtn.style.opacity = '1';
    }

    // Newer button logic
    if (currentPage > 1) {
      newerBtn.style.display = 'inline-block';
    } else {
      newerBtn.style.display = 'none';
    }
  }

  function showPostsForCurrentPage() {
    const filtered = getFilteredPosts();

    // Hide all posts first
    blogCards.forEach(card => card.style.display = 'none');

    // Calculate slice indices
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pagePosts = filtered.slice(startIndex, endIndex);

    // Show only the posts for this page
    pagePosts.forEach(card => card.style.display = 'block');

    // Update pagination buttons
    updatePaginationButtons(filtered);
  }

  function showClearButton() {
    clearBtn.classList.remove('fade-out');
    clearBtn.classList.add('fade-in');
    clearBtn.classList.add('show'); // Trigger fade-in
  }

  function hideClearButton() {
    clearBtn.classList.remove('fade-in');
    clearBtn.classList.add('fade-out');
    clearBtn.classList.remove('show'); // Trigger fade-out
  }

  // Tag filter links
  allTags.forEach(tagLink => {
    tagLink.addEventListener('click', e => {
      e.preventDefault();
      selectedTag = tagLink.getAttribute('data-tag');
      currentPage = 1; // Reset to first page of filtered posts
      showPostsForCurrentPage();
      showClearButton();
    });
  });

  // Clear selection button
  clearBtn.addEventListener('click', () => {
    selectedTag = null;
    currentPage = 1;
    showPostsForCurrentPage();
    hideClearButton();
  });

  // Older button
  olderBtn.addEventListener('click', () => {
    currentPage += 1;
    showPostsForCurrentPage();
  });

  // Newer button
  newerBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage -= 1;
      showPostsForCurrentPage();
    }
  });

  // Initially show the first page of all posts
  showPostsForCurrentPage();
});
