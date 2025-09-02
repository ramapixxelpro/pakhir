/**
* Template Name: HomeSpace
* Template URL: https://bootstrapmade.com/homespace-bootstrap-real-estate-template/
* Updated: Jul 05 2025 with Bootstrap v5.3.7
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToogle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }
  window.addEventListener("load", initSwiper);

  // === Dummy data + render hasil ===
  const properties = [
    // ===== BLITAR =====
    { id: 1, lokasi: "Blitar", tipe: "Rumah", harga: 350000000, kamar: 2, mandi: 1, luas: "90 m²", judul: "Rumah Sederhana Nyaman", alamat: "Jl. Merdeka No. 10, Blitar, Jawa Timur", status: ["Dijual"], gambar: "assets/img/real-estate/rumahsederhananyaman.webp", agen: { nama: "Agus Santoso", kantor: "Blitar Property", telp: "+628123456789", foto: "assets/img/real-estate/agent-1.webp" } },
    { id: 2, lokasi: "Blitar", tipe: "Apartemen", harga: 700000000, kamar: 3, mandi: 2, luas: "120 m²", judul: "Apartemen Modern Blitar", alamat: "Jl. Veteran No. 5, Blitar, Jawa Timur", status: ["Disewa"], gambar: "assets/img/real-estate/Apartemen Modern Blitar.webp", agen: { nama: "Budi Hartono", kantor: "Blitar Urban Realty", telp: "+628987654321", foto: "assets/img/real-estate/Apartemen Modern Blitar.webp" } },
    { id: 3, lokasi: "Blitar", tipe: "Kondominium", harga: 1200000000, kamar: 3, mandi: 2, luas: "150 m²", judul: "Kondominium Eksklusif Blitar", alamat: "Jl. Ahmad Yani No. 8, Blitar, Jawa Timur", status: ["Dijual", "Open House"], gambar: "assets/img/real-estate/Kondominium Eksklusif Blitar.webp", agen: { nama: "Siti Rahma", kantor: "Blitar Luxury Realty", telp: "+6281122334455", foto: "assets/img/real-estate/agent-3.webp" } },
  
    // ===== BALI =====
    { id: 4, lokasi: "Bali", tipe: "Rumah", harga: 450000000, kamar: 2, mandi: 1, luas: "95 m²", judul: "Rumah Cozy di Bali", alamat: "Kuta, Bali", status: ["Disewa"], gambar: "assets/img/real-estate/Rumah Cozy di Bali.webp", agen: { nama: "Made Wijaya", kantor: "Bali Home Realty", telp: "+6281122336677", foto: "assets/img/real-estate/agent-4.webp" } },
    { id: 5, lokasi: "Bali", tipe: "Apartemen", harga: 1500000000, kamar: 3, mandi: 2, luas: "120 m²", judul: "Apartemen Mewah Pemandangan Pantai", alamat: "Legian, Bali", status: ["Disewa", "Open House"], gambar: "assets/img/real-estate/Apartemen Mewah Pemandangan Pantai.webp", agen: { nama: "Ni Luh Putu", kantor: "Bali Luxury Realty", telp: "+6282233445566", foto: "assets/img/real-estate/agent-5.webp" } },
    { id: 6, lokasi: "Bali", tipe: "Kondominium", harga: 2200000000, kamar: 4, mandi: 3, luas: "180 m²", judul: "Kondominium Eksklusif Seminyak", alamat: "Seminyak, Bali", status: ["Dijual"], gambar: "assets/img/real-estate/Kondominium Eksklusif Seminyak.webp", agen: { nama: "Ketut Adi", kantor: "Bali Elite Realty", telp: "+6283344556677", foto: "assets/img/real-estate/agent-6.webp" } },
  
    // ===== PAPUA =====
    { id: 7, lokasi: "Papua", tipe: "Rumah", harga: 550000000, kamar: 3, mandi: 2, luas: "100 m²", judul: "Rumah Modern Jayapura", alamat: "Jayapura, Papua", status: ["Dijual"], gambar: "assets/img/real-estate/Rumah Modern Jayapura.webp", agen: { nama: "Yonas K", kantor: "Papua Realty", telp: "+6284455667788", foto: "assets/img/real-estate/agent-7.webp" } },
    { id: 8, lokasi: "Papua", tipe: "Apartemen", harga: 900000000, kamar: 2, mandi: 1, luas: "110 m²", judul: "Apartemen Minimalis Papua", alamat: "Sentani, Papua", status: ["Disewa"], gambar: "assets/img/real-estate/Apartemen Minimalis Papua.webp", agen: { nama: "Fredi L.", kantor: "Papua Urban Realty", telp: "+6285566778899", foto: "assets/img/real-estate/agent-8.webp" } },
    { id: 9, lokasi: "Papua", tipe: "Kondominium", harga: 1300000000, kamar: 3, mandi: 2, luas: "160 m²", judul: "Kondominium Eksklusif Jayapura", alamat: "Jayapura, Papua", status: ["Dijual", "Open House"], gambar: "assets/img/real-estate/Kondominium Eksklusif Jayapura.webp", agen: { nama: "Yonas P.", kantor: "Papua Elite Realty", telp: "+6286677889900", foto: "assets/img/real-estate/agent-9.webp" } }
  ];  
  
  const searchBtn = document.querySelector(".search-btn");
  const resultContainer = document.querySelector(".results-info");
  const resultList = document.getElementById("results-list");
  
  // mapping id -> link unik
const propertyLinks = {
  1: "rumah-sederhana-nyaman.html",
  2: "apartemen-modern-blitar.html",
  3: "kondominium-eksklusif-blitar.html",
  4: "rumah-cozy-bali.html",
  5: "apartemen-mewah-bali.html",
  6: "kondominium-seminyak.html",
  7: "rumah-modern-jayapura.html",
  8: "apartemen-minimalis-papua.html",
  9: "kondominium-jayapura.html"
};

function renderProperties(list) {
    // Helper untuk format rupiah
function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(angka);
}

resultList.innerHTML = list.map(p => `
  <div class="col-lg-4 col-md-6">
    <a href="${propertyLinks[p.id] || '#'}" class="property-link">
      <div class="property-item">
        
        <!-- Gambar Properti -->
        <div class="property-image-wrapper">
          <img src="${p.gambar}" alt="${p.judul}" class="img-fluid">
        </div>

        <!-- Detail Properti -->
        <div class="property-details mt-2">
          <div class="property-header">
            <div class="property-price">${formatRupiah(p.harga)}</div>
            <div class="property-type">${p.tipe}</div>
          </div>
          <h4 class="property-title">${p.judul}</h4>
          <p class="property-address"><i class="bi bi-geo-alt"></i> ${p.alamat}</p>

          <div class="property-specs">
            <div class="spec-item"><i class="fa-solid fa-bed"></i><span>${p.kamar} Kamar Tidur</span></div>
            <div class="spec-item"><i class="bi bi-droplet"></i><span>${p.mandi} Kamar Mandi</span></div>
            <div class="spec-item"><i class="bi bi-arrows-angle-expand"></i><span>${p.luas}</span></div>
          </div>

          <!-- Info Agen -->
          <div class="property-agent-info">
            <div class="agent-profile">
              <img src="${p.agen.foto}" alt="${p.agen.nama}" class="agent-avatar">
              <div class="agent-details">
                <span class="agent-name">${p.agen.nama}</span>
                <span class="agent-office">${p.agen.kantor}</span>
              </div>
            </div>
            <div class="agent-contact">
              <a href="https://web.whatsapp.com/}" target="_blank" class="contact-btn">
                <i class="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </a>
  </div>
`).join('');


  
}

  // Render semua properti saat halaman dimuat
  renderProperties(properties);
  resultContainer.innerHTML = `
    <h5>${properties.length} Properti Ditemukan</h5>
    <p class="text-muted">Semua properti ditampilkan</p>
  `;
  
  // Event listener untuk pencarian
  searchBtn.addEventListener("click", () => {
    const lokasi = document.querySelector(".lokasi").value.toLowerCase();
    const tipe = document.querySelector(".tipe").value;
    const harga = document.querySelector(".harga").value;
    const kamarBtn = document.querySelector(".bedroom-quick .active");
    const kamar = kamarBtn ? kamarBtn.dataset.beds : "any";
  
    let hasil = properties.filter(p => {
      let cocok = true;
  
      if (lokasi && !p.lokasi.toLowerCase().includes(lokasi)) cocok = false;
      if (tipe !== "Semua Tipe" && p.tipe !== tipe) cocok = false;
  
      if (harga === "Rp0 - Rp500Jt" && p.harga > 500000000) cocok = false;
      if (harga === "Rp500Jt - Rp1M" && (p.harga < 500000000 || p.harga > 1000000000)) cocok = false;
      if (harga === "Rp1M+" && p.harga < 1000000000) cocok = false;
  
      if (kamar !== "any" && p.kamar < parseInt(kamar)) cocok = false;
  
      return cocok;
    });
  
    resultContainer.innerHTML = `
      <h5>${hasil.length} Properti Ditemukan</h5>
      <p class="text-muted">Hasil pencarian Anda</p>
    `;
    renderProperties(hasil);
  });
  
  // Tombol kamar tidur
  document.querySelectorAll(".bed-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".bed-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  

})();