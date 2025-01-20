---
layout: default
title: "Home"
---

<section class="bg-white py-8">
  <!-- Tabs -->
  <div class="container mx-auto mt-8">
    <div class="flex justify-center space-x-4">
      <button class="tab-btn bg-blue-500 text-white px-4 py-2 rounded" data-category="all">Alle Artikelen</button>
      {% assign categories = site.posts | map: "categories" | uniq | sort %}
      {% for category in categories %}
      <button class="tab-btn bg-gray-200 px-4 py-2 rounded" data-category="{{ category }}">{{ category | capitalize }}</button>
      {% endfor %}
    </div>
  </div>

  <!-- Artikelen -->
  <div class="container mx-auto mt-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {% for article in site.posts %}
      <article class="article-item bg-white rounded shadow p-4 border border-gray-200" data-category="{{ article.categories | join: ',' }}">
        <h3 class="text-xl font-bold"><a href="{{ article.url }}">{{ article.title }}</a></h3>
        <p class="mt-2 text-sm text-gray-600">{{ article.excerpt | truncatewords: 20 }}</p>
        <a href="{{ article.url }}" class="text-blue-500 hover:underline mt-4 inline-block">Lees meer</a>
      </article>
      {% endfor %}
    </div>
  </div>
</section>

<!-- Script voor Tabs -->
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-btn');
    const articles = document.querySelectorAll('.article-item');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');

        // Update active button styling
        buttons.forEach(btn => btn.classList.remove('bg-blue-500', 'text-white'));
        button.classList.add('bg-blue-500', 'text-white');

        // Filter articles
      articles.forEach(article => {
  const articleCategory = article.getAttribute('data-category');
  if (category === 'all' || articleCategory.split(',').includes(category)) {
    article.style.display = 'block';
  } else {
    article.style.display = 'none';
  }
});

      });
    });
  });
</script>
