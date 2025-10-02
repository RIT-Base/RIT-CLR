---
layout: "layouts/base.njk"
title: "Materi Tersedia"
permalink: /topik/
---

<div class="container page-header">
    <h1>Materi Tersedia</h1>
    <p>Temukan sumber belajar yang kamu butuhkan.</p>
</div>
<div class="container">
    <h3>Jelajahi Kategori :</h3>
    <div class="category-list">
        {% for category in collections.categoryList %}
            <a href="/kategori/{{ category | slugify }}/" class="category-tag">{{ category }}</a>
        {% endfor %}
    </div>
</div>
<div class="container">
    <div class="filter-controls">
        <input type="search" id="search-box" placeholder="Cari berdasarkan judul atau tag...">
        <div class="filter-buttons">
            <button class="filter-btn active" data-filter="all">Semua</button>
            <button class="filter-btn" data-filter="Video">Video</button>
            <button class="filter-btn" data-filter="Artikel">Artikel</button>
            <button class="filter-btn" data-filter="Kursus">Kursus</button>
        </div>
    </div>
    <div class="resource-grid" id="resource-grid">
        {%- for item in collections.all | reverse -%}
            {%- if item.data.external_url -%}
                <div class="resource-card-wrapper" data-type="{{ item.data.type }}" data-title="{{ item.data.title }}" data-tags="{{ item.data.tags | join(',') }}">
                    {% include "macros/card.njk" %}
                </div>
            {%- endif -%}
        {%- endfor -%}
    </div>
    <p id="no-results-message" style="display: none; text-align: center;">Tidak ada hasil yang cocok dengan pencarian Anda.</p>
</div>

<script src="/js/filter.js"></script>