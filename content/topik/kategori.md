---
pagination:
  data: collections.categoryList
  size: 1
  alias: category
permalink: "/kategori/{{ category | slugify }}/"
eleventyComputed:
  title: "Kategori : {{ category }}"
layout: "layouts/base.njk"
---

<div class="container page-header">
    <h1>{{ category }}</h1>
    <p>Menampilkan semua resource yang relevan dengan kategori ini.</p>
</div>
<div class="container">
    <div class="filter-controls">
    </div>
    <div class="filter-controls">
        <input type="search" id="search-box" placeholder="Cari berdasarkan judul atau tag...">
        <div class="filter-buttons">
            <button class="filter-btn active" data-filter="all">Semua</button>
            <button class="filter-btn" data-filter="Video">Video</button>
            <button class="filter-btn" data-filter="Artikel">Artikel</button>
            <button class="filter-btn" data-filter="Kursus">Kursus</button>
        </div>
    </div>
</div>
<div class="container">
    <div class="resource-grid">
        {%- for item in collections.all | reverse -%}
            {%- if item.data.type and item.data.category and (category in item.data.category or item.data.category == category) -%}
                {% include "macros/card.njk" %}
            {%- endif -%}
        {%- endfor -%}
    </div>
    <div class="back-to-topics">
        <a href="/topik/">&larr; Kembali ke Semua Topik</a>
    </div>
</div>

<script src="/js/filter.js"></script>