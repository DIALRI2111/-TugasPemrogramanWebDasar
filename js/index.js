// Process popup data
const processDetails = {
  1: {
    title: "Pengumpulan",
    image: "img/biodiesel.png",
    description: `
            <h4>Tahap Pengumpulan Minyak Jelantah</h4>
            <p>Pada tahap pertama ini, kami melakukan pengumpulan minyak jelantah dari berbagai sumber seperti rumah tangga, restoran, hotel, dan industri makanan. Tim kami yang terlatih akan menjemput minyak jelantah sesuai jadwal yang telah disepakati.</p>
            <h5>Prosedur Pengumpulan:</h5>
            <ul>
              <li>Penerimaan permintaan penjemputan melalui aplikasi atau telepon</li>
              <li>Penjadwalan pengambilan yang fleksibel sesuai kebutuhan klien</li>
              <li>Pemeriksaan awal kualitas minyak jelantah</li>
              <li>Pengemasan menggunakan wadah standar yang aman dan ramah lingkungan</li>
              <li>Pencatatan data untuk setiap batch yang dikumpulkan</li>
            </ul>
            <p>Kami memastikan proses pengumpulan dilakukan dengan standar kebersihan yang ketat untuk menjaga kualitas minyak jelantah yang akan diolah selanjutnya.</p>
          `,
  },
  2: {
    title: "Pemurnian",
    image: "img/manfaat.jpg",
    description: `
            <h4>Tahap Pemurnian Minyak Jelantah</h4>
            <p>Setelah dikumpulkan, minyak jelantah melalui proses pemurnian untuk menghilangkan kotoran, partikel makanan, dan air yang tercampur. Proses ini sangat penting untuk memastikan kualitas minyak sebelum masuk ke tahap konversi.</p>
            <h5>Proses Pemurnian:</h5>
            <ul>
              <li>Saringan kasar untuk menghilangkan partikel makanan besar</li>
              <li>Pemisahan untuk memisahkan air dari minyak</li>
              <li>Filtrasi bertingkat menggunakan berbagai ukuran filter</li>
              <li>Pengujian kualitas untuk memastikan tingkat kemurnian optimal</li>
              <li>Penyimpanan sementara di tangki khusus sebelum proses konversi</li>
            </ul>
            <p>Teknologi pemurnian kami menggunakan metode yang ramah lingkungan dan meminimalkan limbah yang dihasilkan dari proses ini.</p>
          `,
  },
  3: {
    title: "Konversi",
    image: "img/penghargaan.jpg",
    description: `
            <h4>Tahap Konversi Minyak Jelantah</h4>
            <p>Minyak jelantah yang telah melalui tahap pemurnian selanjutnya dikonversi menjadi produk bernilai tinggi seperti biodiesel, sabun, dan produk ramah lingkungan lainnya.</p>
            <h5>Proses Konversi ke Biodiesel:</h5>
            <ul>
              <li>Proses transesterifikasi dengan menambahkan metanol dan katalis</li>
              <li>Pemisahan glycerol dari biodiesel</li>
              <li>Pencucian biodiesel untuk menghilangkan sisa katalis</li>
              <li>Pengeringan untuk menghilangkan sisa air</li>
              <li>Pengujian kualitas sesuai standar biodiesel nasional</li>
            </ul>
            <h5>Proses Konversi ke Produk Lain:</h5>
            <ul>
              <li>Pembuatan sabun melalui proses saponifikasi</li>
              <li>Pengolahan menjadi lilin ramah lingkungan</li>
              <li>Pembuatan pelumas industri ringan</li>
            </ul>
            <p>Semua proses konversi dilakukan dengan teknologi modern yang meminimalkan emisi dan limbah.</p>
          `,
  },
  4: {
    title: "Distribusi",
    image: "img/sabun.jpg",
    description: `
            <h4>Tahap Distribusi Produk</h4>
            <p>Produk akhir hasil konversi minyak jelantah didistribusikan ke berbagai pasar dan pengguna akhir. Kami memastikan produk yang dihasilkan memenuhi standar kualitas yang tinggi dan aman untuk digunakan.</p>
            <h5>Saluran Distribusi:</h5>
            <ul>
              <li>Biodiesel: dipasok ke stasiun pengisian bahan bakar dan industri transportasi</li>
              <li>Sabun: didistribusikan ke toko ritel dan pasar tradisional</li>
              <li>Lilin: dipasok ke distributor peralatan rumah tangga</li>
              <li>Pelumas: dijual ke industri kecil dan menengah</li>
            </ul>
            <h5>Komitmen Kualitas:</h5>
            <ul>
              <li>Pengemasan yang ramah lingkungan dan informatif</li>
              <li>Sertifikasi produk sesuai standar nasional</li>
              <li>Program edukasi untuk pengguna akhir</li>
              <li>Sistem logistik yang efisien untuk mengurangi jejak karbon</li>
            </ul>
            <p>Kami juga memberikan informasi transparan tentang kandungan dan cara penggunaan produk yang aman bagi konsumen dan lingkungan.</p>
          `,
  },
};

// Loading Screen
window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loadingScreen").classList.add("hidden");
  }, 1000);
});

// Cookie Consent
document.addEventListener("DOMContentLoaded", function () {
  const cookieConsent = document.getElementById("cookieConsent");
  const acceptCookies = document.getElementById("acceptCookies");
  const rejectCookies = document.getElementById("rejectCookies");

  // Check if user has already made a choice
  if (!localStorage.getItem("cookieConsent")) {
    setTimeout(function () {
      cookieConsent.classList.add("show");
    }, 2000);
  }

  acceptCookies.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "accepted");
    cookieConsent.classList.remove("show");
    // Here you would initialize analytics or other cookies
  });

  rejectCookies.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "rejected");
    cookieConsent.classList.remove("show");
  });
});

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light
const currentTheme = localStorage.getItem("theme") || "light";
htmlElement.setAttribute("data-theme", currentTheme);

if (currentTheme === "dark") {
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", function () {
  const theme = htmlElement.getAttribute("data-theme");
  const newTheme = theme === "light" ? "dark" : "light";

  htmlElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  if (newTheme === "dark") {
    themeIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
  }
});

// Reading Progress Bar
window.addEventListener("scroll", function () {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("readingProgress").style.width = scrolled + "%";
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu after clicking
      const navbarToggler = document.querySelector(".navbar-toggler");
      const navbarCollapse = document.querySelector(".navbar-collapse");
      if (navbarCollapse.classList.contains("show")) {
        navbarToggler.click();
      }
    }
  });
});

// Navbar behavior on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  const scrolled = window.scrollY;

  if (scrolled > 50) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }

  // Back to top button visibility
  const backToTopButton = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

// Animated counter for statistics
function animateCounter() {
  const counters = document.querySelectorAll(".stats-counter");
  const speed = 200;

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-count");
    const count = +counter.innerText.replace(/,/g, "");
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment).toLocaleString();
      setTimeout(animateCounter, 1);
    } else {
      counter.innerText = target.toLocaleString();
    }
  });
}

// Scroll animations with Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");

      // Special handling for stats counter
      if (entry.target.classList.contains("stats-item")) {
        const counter = entry.target.querySelector(".stats-counter");
        if (counter && counter.innerText === "0") {
          animateCounter();
        }
      }
    }
  });
}, observerOptions);

// Observe all elements with animation classes
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".fade-in, .fade-in-left, .fade-in-right, .fade-in-up, .fade-in-scale, " +
      ".service-card, .blog-card, .testimonial-card, .gallery-card, .video-card, " +
      ".process-step, .stats-item, .partner-logo, .team-card"
  );

  animatedElements.forEach((el) => {
    observer.observe(el);
  });
});

// Form submission handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const submitBtn = document.getElementById("submitBtn");
  const submitText = document.getElementById("submitText");
  const submitLoading = document.getElementById("submitLoading");

  // Show loading state
  submitText.classList.add("d-none");
  submitLoading.classList.remove("d-none");
  submitBtn.disabled = true;

  // Simulate form submission
  setTimeout(function () {
    // Reset form
    document.getElementById("contactForm").reset();

    // Show success message (you can replace this with actual form submission)
    const successMessage = document.createElement("div");
    successMessage.className = "alert alert-success mt-3";
    successMessage.textContent =
      "Pesan Anda telah berhasil dikirim! Kami akan menghubungi Anda segera.";
    document.getElementById("contactForm").appendChild(successMessage);

    // Reset button state
    submitText.classList.remove("d-none");
    submitLoading.classList.add("d-none");
    submitBtn.disabled = false;

    // Remove success message after 5 seconds
    setTimeout(function () {
      successMessage.remove();
    }, 5000);
  }, 2000);
});

// Lightbox Gallery
document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".img-lightbox");
  const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));

  galleryImages.forEach((img) => {
    img.addEventListener("click", function () {
      document.getElementById("modalImage").src = this.querySelector("img").src;
      imageModal.show();
    });
  });
});

// Social Share Functionality
function shareOnSocial(platform, url, title) {
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
    email: `mailto:?subject=${encodeURIComponent(
      title
    )}&body=${encodeURIComponent(url)}`,
  };

  if (platform === "email") {
    window.location.href = shareUrls[platform];
  } else {
    window.open(shareUrls[platform], "_blank", "width=600,height=400");
  }
}

// Add click handlers to social share buttons
document.querySelectorAll(".social-share a").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const platform = this.querySelector("i").classList.contains("fa-facebook-f")
      ? "facebook"
      : this.querySelector("i").classList.contains("fa-twitter")
      ? "twitter"
      : this.querySelector("i").classList.contains("fa-whatsapp")
      ? "whatsapp"
      : "email";

    shareOnSocial(platform, window.location.href, document.title);
  });
});

// Fixed parallax effect to prevent overlap
window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const parallax = document.querySelector(".hero");
  if (parallax) {
    // Limit the parallax effect to prevent overlap
    const maxTranslate = 200;
    const translateAmount = Math.min(scrolled * 0.5, maxTranslate);
    parallax.style.transform = `translateY(${translateAmount}px)`;
  }
});

// Improve mobile touch experience
document.addEventListener("touchstart", function () {}, {
  passive: true,
});

// Team Slider Functionality - Manual Control
document.addEventListener("DOMContentLoaded", function () {
  const teamSlider = document.getElementById("teamSlider");
  const indicators = document.querySelectorAll(".indicator");
  const teamCards = document.querySelectorAll(".team-card");
  const prevBtn = document.getElementById("prevSlide");
  const nextBtn = document.getElementById("nextSlide");

  let currentSlide = 0;
  const cardWidth = 310; // card width + margin
  const visibleCards = window.innerWidth >= 768 ? 3 : 1;
  const maxSlide = Math.max(0, teamCards.length - visibleCards);

  // Update slider position
  function updateSlider() {
    teamSlider.style.transform = `translateX(-${currentSlide * cardWidth}px)`;

    // Update indicators
    indicators.forEach((indicator, index) => {
      if (index === currentSlide) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  // Next slide
  function nextSlide() {
    currentSlide = Math.min(currentSlide + 1, maxSlide);
    updateSlider();
  }

  // Previous slide
  function prevSlide() {
    currentSlide = Math.max(currentSlide - 1, 0);
    updateSlider();
  }

  // Set initial position
  updateSlider();

  // Add click event to next button
  nextBtn.addEventListener("click", nextSlide);

  // Add click event to previous button
  prevBtn.addEventListener("click", prevSlide);

  // Handle indicator clicks
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentSlide = index;
      updateSlider();
    });
  });

  // Handle window resize
  window.addEventListener("resize", () => {
    const newVisibleCards = window.innerWidth >= 768 ? 3 : 1;
    const newMaxSlide = Math.max(0, teamCards.length - newVisibleCards);

    if (currentSlide > newMaxSlide) {
      currentSlide = newMaxSlide;
      updateSlider();
    }
  });

  // Add touch support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  teamSlider.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  teamSlider.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      // Swipe left - next slide
      nextSlide();
    }
    if (touchEndX > touchStartX + 50) {
      // Swipe right - previous slide
      prevSlide();
    }
  }
});

// Process Popup Functionality
document.addEventListener("DOMContentLoaded", function () {
  const processSteps = document.querySelectorAll(".process-step");
  const processPopup = document.getElementById("processPopup");
  const popupClose = document.getElementById("popupClose");
  const popupStepNumber = document.getElementById("popupStepNumber");
  const popupTitle = document.getElementById("popupTitle");
  const popupImage = document.getElementById("popupImage");
  const popupDescription = document.getElementById("popupDescription");

  // Add click event to each process step
  processSteps.forEach((step) => {
    step.addEventListener("click", function () {
      const stepNum = this.getAttribute("data-step");
      const stepData = processDetails[stepNum];

      if (stepData) {
        popupStepNumber.textContent = stepNum;
        popupTitle.textContent = stepData.title;
        popupImage.src = stepData.image;
        popupDescription.innerHTML = stepData.description;

        // Show popup
        processPopup.classList.add("show");
        document.body.style.overflow = "hidden"; // Prevent scrolling when popup is open
      }
    });
  });

  // Close popup when clicking close button
  popupClose.addEventListener("click", function () {
    processPopup.classList.remove("show");
    document.body.style.overflow = "auto"; // Enable scrolling again
  });

  // Close popup when clicking outside popup content
  processPopup.addEventListener("click", function (e) {
    if (e.target === processPopup) {
      processPopup.classList.remove("show");
      document.body.style.overflow = "auto"; // Enable scrolling again
    }
  });

  // Close popup when pressing Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && processPopup.classList.contains("show")) {
      processPopup.classList.remove("show");
      document.body.style.overflow = "auto"; // Enable scrolling again
    }
  });
});
