---
layout: "layouts/base.njk"
title: "Panduan Kontribusi"
---

<div class="container page-content">
    <h1>Cara Berkontribusi</h1>
    <p>Website ini dikelola oleh kita semua. Jika kamu menemukan artikel, video, atau kursus yang bermanfaat, jangan ragu untuk menambahkannya agar bisa dipelajari oleh anggota lain. Ikuti langkah-langkah mudah di bawah ini.</p>

    <h2>Langkah-langkah Menambah Resource</h2>

    <ol>
        <li>
            <strong>Salin Template di Bawah Ini:</strong>
            <p>Klik tombol "Salin" atau pilih semua teks di dalam kotak di bawah ini dan salin (Ctrl+C).</p>
            <pre><code>---
layout: "layouts/post.njk"
title: "TULIS JUDUL RESOURCE DI SINI"
description: "Tulis deskripsi singkat (1-2 kalimat) tentang resource ini."
external_url: "PASTE LINK LENGKAP KE RESOURCE DI SINI"
type: "Video"
level: "Pemula"
contributor: "Nama Anda"
tags: 
  - resources
  - GantiDenganTagLain (misal: JavaScript, Unity, IoT)
---

Tulis penjelasan yang lebih detail di sini. Jelaskan mengapa resource ini bagus, apa saja yang dibahas, dan untuk siapa resource ini paling cocok.
</code></pre>
        </li>
        <li>
            <strong>Buka Link GitHub:</strong>
            <p>Klik tombol di bawah ini. Tombol ini akan langsung membuka halaman untuk membuat file baru di repository website RIT.</p>
            <a 
              href="https://github.com/[NAMA_PENGGUNA_ANDA]/[NAMA_REPO_ANDA]/new/main/content/resources/" 
              class="button-primary" 
              target="_blank" 
              rel="noopener noreferrer">
              Tambah Resource Baru di GitHub
            </a>
        </li>
        <li>
            <strong>Isi Detailnya:</strong>
            <ul>
                <li>Di halaman GitHub, beri nama file di bagian atas. Nama file harus singkat, menggunakan huruf kecil, dan diakhiri dengan <code>.md</code>. Contoh: <code>belajar-dasar-git.md</code>.</li>
                <li><em>Paste</em> (Ctrl+V) template yang sudah Anda salin ke dalam area teks utama.</li>
                <li><strong>Edit semua bagian</strong> yang perlu diubah (judul, deskripsi, link, tipe, level, nama Anda, dan tag). Untuk <code>type</code>, pilihannya adalah: <code>Video</code>, <code>Artikel</code>, atau <code>Kursus</code>.</li>
            </ul>
        </li>
        <li>
            <strong>Simpan Perubahan:</strong>
            <p>Scroll ke bagian bawah halaman GitHub, lalu klik tombol hijau "Commit new file". Selesai! Resource Anda akan segera ditinjau dan ditambahkan ke website.</p>
        </li>
    </ol>

</div>