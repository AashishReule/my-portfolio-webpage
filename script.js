              /* ══════════════════════════════════════
     1. DARK MODE TOGGLE
  ══════════════════════════════════════ */
  const toggleBtn = document.getElementById('darkToggle');
  const html = document.documentElement;

  toggleBtn.addEventListener('click', () => {
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    toggleBtn.textContent = isDark ? '🌙 Dark' : '☀️ Light';
  });

  /* ══════════════════════════════════════
     2. D-DAY COUNTER
     Target: March 3, 2026 (arrival at STU)
  ══════════════════════════════════════ */
  function updateDDay() {
    const startDate = new Date('2026-03-03'); // Change this date for the live task!
    const today = new Date();
    const diff = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById('ddayCount').textContent = diff;
  }
  updateDDay();
  setInterval(updateDDay, 1000 * 60); // update every minute

  /* ══════════════════════════════════════
     3. HOBBY GALLERY — JS Array + Next Button
  ══════════════════════════════════════ */
  const hobbies = [
    {
      img: 'C:\\Users\\Acer\\OneDrive\\Documents\\Pictures\\Camera Roll\\ai.jpg',
      title: 'Artificial Intelligence',
      desc: 'Exploring how machines learn, reason, and create. AI is reshaping every field — including how we study the universe.'
    },
    {
      img: 'C:\\Users\\Acer\\OneDrive\\Documents\\Pictures\\Camera Roll\\Andromeda-Galaxy-spiral-galaxy-Earth-distance.webp',
      title: 'Cosmology',
      desc: 'Fascinated by the Big Bang, dark matter, and the structure of spacetime. The universe is the greatest mystery of all.'
    },
    {
      img: 'C:\\Users\\Acer\\OneDrive\\Documents\\Pictures\\Camera Roll\\Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
      title: 'Mountain Hiking',
      desc: 'Growing up near the Himalayas in Nepal taught me to love mountains. Nature resets the mind like nothing else.'
    }
  ];

  let currentIndex = 0;

  function renderGallery(index) {
    const hobby = hobbies[index];
    const imgBox = document.getElementById('galleryImgBox');
    imgBox.innerHTML = '<img src="' + hobby.img + '" alt="' + hobby.title + '" style="width:100%;height:300px;object-fit:cover;display:block;"/>';
    imgBox.style.background = '';
    imgBox.style.fontSize = '';
    document.getElementById('galleryTitle').textContent = hobby.title;
    document.getElementById('galleryDesc').textContent = hobby.desc;
    document.getElementById('galleryIndex').textContent = `${index + 1} / ${hobbies.length}`;

    // Update dots
    hobbies.forEach((_, i) => {
      document.getElementById(`dot${i}`).classList.toggle('active', i === index);
    });
  }

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % hobbies.length;
    renderGallery(currentIndex);
  });

  // Init gallery
  renderGallery(0);

  /* ══════════════════════════════════════
     4. GUESTBOOK FORM
  ══════════════════════════════════════ */
  const entries = [];

  document.getElementById('submitBtn').addEventListener('click', () => {
    const name = document.getElementById('gName').value.trim();
    const message = document.getElementById('gMessage').value.trim();
    const msgEl = document.getElementById('guestMsg');

    if (!name || !message) {
      msgEl.textContent = '⚠ Please fill in your name and message.';
      msgEl.style.color = '#e84855';
      return;
    }

    entries.unshift({ name, message });
    renderEntries();
    document.getElementById('gName').value = '';
    document.getElementById('gEmail').value = '';
    document.getElementById('gMessage').value = '';
    msgEl.textContent = '✅ Message sent! Thank you!';
    msgEl.style.color = '#3d5a99';
    setTimeout(() => { msgEl.textContent = ''; }, 3000);
  });

  function renderEntries() {
    const list = document.getElementById('entriesList');
    list.innerHTML = entries.map(e => `
      <div class="entry">
        <div class="entry-name">${e.name}</div>
        <div class="entry-msg">${e.message}</div>
      </div>
    `).join('');
  }
