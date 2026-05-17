const starsContainer = document.getElementById('stars');
const starCount = 80;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.width = (1 + Math.random() * 2) + 'px';
    star.style.height = star.style.width;
    star.style.animationDelay = Math.random() * 4 + 's';
    star.style.animationDuration = (3 + Math.random() * 3) + 's';
    starsContainer.appendChild(star);
}

const particlesContainer = document.getElementById('particles');
const particleCount = 18;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 8 + 's';
    particle.style.animationDuration = (6 + Math.random() * 6) + 's';
    particlesContainer.appendChild(particle);
}

const cursorGlow = document.getElementById('cursor-glow');
if (cursorGlow) {
    let glowX = window.innerWidth / 2;
    let glowY = window.innerHeight / 2;
    let targetX = glowX;
    let targetY = glowY;

    document.addEventListener('mousemove', (e) => {
        targetX = e.clientX;
        targetY = e.clientY;
    });

    function animateGlow() {
        glowX += (targetX - glowX) * 0.12;
        glowY += (targetY - glowY) * 0.12;
        cursorGlow.style.left = glowX + 'px';
        cursorGlow.style.top = glowY + 'px';
        requestAnimationFrame(animateGlow);
    }
    animateGlow();
}

const scrollProgress = document.getElementById('scroll-progress');
if (scrollProgress) {
    window.addEventListener('scroll', () => {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        const pct = total > 0 ? (window.scrollY / total) * 100 : 0;
        scrollProgress.style.width = pct + '%';
    });
}

const typedEl = document.getElementById('hero-typed');
if (typedEl) {
    const phrases = [
        ' creative engine ✓',
        ' visual systems ✓',
        ' ai pipelines ✓',
        ' ready_'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeLoop() {
        const current = phrases[phraseIndex];
        if (!deleting) {
            typedEl.textContent = current.slice(0, ++charIndex);
            if (charIndex === current.length) {
                if (phraseIndex === phrases.length - 1) return;
                deleting = true;
                setTimeout(typeLoop, 1400);
                return;
            }
        } else {
            typedEl.textContent = current.slice(0, --charIndex);
            if (charIndex === 0) {
                deleting = false;
                phraseIndex++;
            }
        }
        setTimeout(typeLoop, deleting ? 35 : 70);
    }
    typeLoop();
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) translateX(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-card, .portfolio-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(50px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`;
    observer.observe(item);
});

document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotateY = ((x - cx) / cx) * 6;
        const rotateX = -((y - cy) / cy) * 6;
        card.style.transform = `translateY(-8px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

const bilibiliLinks = {
    '安慕希整颗蓝莓': 'https://player.bilibili.com/player.html?isOutside=true&aid=116589974261592&bvid=BV1ofLJ6tEML&cid=38405014418&p=1&t=0',
    '小琨追光': 'https://player.bilibili.com/player.html?isOutside=true&aid=116589974324640&bvid=BV17fLJ6bEPa&cid=38405015730&p=1&t=0',
    '野生菌宣传': 'https://player.bilibili.com/player.html?isOutside=true&aid=116589974327290&bvid=BV1jfLJ6bEv8&cid=38405017351&p=1&t=0',
    '暗夜': 'https://player.bilibili.com/player.html?isOutside=true&aid=116589991101734&bvid=BV17ZLJ6FESx&cid=38405081118&p=1&t=0',
    '拾古斋': 'https://player.bilibili.com/player.html?isOutside=true&aid=116589991101915&bvid=BV17ZLJ6FE1P&cid=38405144844&p=1&t=0',
    '熊猫的一天': 'https://player.bilibili.com/player.html?isOutside=true&aid=116590846674401&bvid=BV1FdLH6uEfr&cid=38409668943&p=1&t=0',
    '末世求生': 'https://player.bilibili.com/player.html?isOutside=true&aid=116590863453970&bvid=BV1c9LH66E7J&cid=38409669884&p=1&t=0',
    '夜话': 'https://player.bilibili.com/player.html?isOutside=true&aid=116590863452989&bvid=BV1c9LH66Eib&cid=38409670394&p=1&t=0',
    '雨夜独白': 'https://player.bilibili.com/player.html?isOutside=true&aid=116590863517831&bvid=BV1n9LH66EUm&cid=38409732660&p=1&t=0'
};

const pptData = {
    'ppt01': {
        title: 'PPT作品一',
        images: ['Resource/Image/ppt/ppt01/1.jpg', 'Resource/Image/ppt/ppt01/2.jpg', 'Resource/Image/ppt/ppt01/3.jpg', 'Resource/Image/ppt/ppt01/4.jpg', 'Resource/Image/ppt/ppt01/5.jpg', 'Resource/Image/ppt/ppt01/6.jpg', 'Resource/Image/ppt/ppt01/7.jpg', 'Resource/Image/ppt/ppt01/8.jpg', 'Resource/Image/ppt/ppt01/9.jpg', 'Resource/Image/ppt/ppt01/10.jpg', 'Resource/Image/ppt/ppt01/11.jpg']
    },
    'ppt02': {
        title: 'PPT作品二',
        images: ['Resource/Image/ppt/ppt02/1.jpg', 'Resource/Image/ppt/ppt02/2.jpg', 'Resource/Image/ppt/ppt02/3.jpg', 'Resource/Image/ppt/ppt02/4.jpg', 'Resource/Image/ppt/ppt02/5.jpg', 'Resource/Image/ppt/ppt02/6.jpg', 'Resource/Image/ppt/ppt02/7.jpg', 'Resource/Image/ppt/ppt02/8.jpg', 'Resource/Image/ppt/ppt02/9.jpg', 'Resource/Image/ppt/ppt02/10.jpg']
    },
    'ppt03': {
        title: 'PPT作品三',
        images: ['Resource/Image/ppt/ppt03/1.jpg', 'Resource/Image/ppt/ppt03/2.jpg', 'Resource/Image/ppt/ppt03/3.jpg', 'Resource/Image/ppt/ppt03/4.jpg', 'Resource/Image/ppt/ppt03/5.jpg', 'Resource/Image/ppt/ppt03/6.jpg', 'Resource/Image/ppt/ppt03/7.jpg', 'Resource/Image/ppt/ppt03/8.jpg', 'Resource/Image/ppt/ppt03/9.jpg', 'Resource/Image/ppt/ppt03/10.jpg', 'Resource/Image/ppt/ppt03/11.jpg', 'Resource/Image/ppt/ppt03/12.jpg', 'Resource/Image/ppt/ppt03/13.jpg', 'Resource/Image/ppt/ppt03/14.jpg']
    }
};

document.querySelectorAll('.portfolio-item').forEach(item => {
    const title = item.querySelector('h4')?.textContent;
    const videoItem = item.classList.contains('video-item');
    const pptItem = item.classList.contains('ppt-item');

    if (pptItem) {
        item.style.cursor = 'pointer';
        item.addEventListener('click', () => {
            const pptId = item.getAttribute('data-ppt');
            if (pptId && pptData[pptId]) {
                openPptModal(pptId);
            }
        });
    } else if (videoItem && title && bilibiliLinks[title]) {
        item.style.cursor = 'pointer';
        item.addEventListener('click', (e) => {
            if (e.target.closest('.fullscreen-btn')) return;
            openBilibiliModal(title);
        });
    }
});

const modal = document.getElementById('ai-video-modal');
const viewMoreBtn = document.getElementById('view-more-ai');
const closeModalBtn = document.getElementById('close-ai-modal');

viewMoreBtn.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

const fullscreenModal = document.getElementById('video-fullscreen-modal');
const fullscreenIframe = document.getElementById('fullscreen-video-iframe');
const fullscreenTitle = document.getElementById('fullscreen-video-title');
const closeFullscreenBtn = document.getElementById('close-fullscreen-modal');

function openBilibiliModal(title) {
    const iframeSrc = bilibiliLinks[title];
    console.log('Opening Bilibili modal for:', title, 'URL:', iframeSrc);
    if (iframeSrc) {
        fullscreenIframe.src = iframeSrc;
        fullscreenTitle.textContent = `🎬 ${title}`;
        fullscreenModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        console.log('Modal opened');
    }
}

function closeBilibiliModal() {
    fullscreenIframe.src = '';
    fullscreenModal.classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelectorAll('.fullscreen-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const portfolioItem = btn.closest('.portfolio-item');
        const title = portfolioItem.querySelector('h4')?.textContent;
        if (title && bilibiliLinks[title]) {
            openBilibiliModal(title);
        }
    });
});

closeFullscreenBtn.addEventListener('click', closeBilibiliModal);

fullscreenModal.addEventListener('click', (e) => {
    if (e.target === fullscreenModal) {
        closeBilibiliModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && fullscreenModal.classList.contains('active')) {
        closeBilibiliModal();
    }
});

// ========== PPT Modal ==========

const pptModal = document.getElementById('ppt-modal');
const pptImage = document.getElementById('ppt-image');
const pptTitle = document.getElementById('ppt-title');
const pptPageInfo = document.getElementById('ppt-page-info');
const pptPrev = document.getElementById('ppt-prev');
const pptNext = document.getElementById('ppt-next');
const closePptModal = document.getElementById('close-ppt-modal');

let currentPptId = null;
let currentPptPage = 0;

function openPptModal(pptId) {
    currentPptId = pptId;
    currentPptPage = 0;
    const ppt = pptData[pptId];

    if (ppt) {
        pptTitle.textContent = `📑 ${ppt.title}`;
        updatePptImage();
        pptModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function updatePptImage() {
    const ppt = pptData[currentPptId];
    if (ppt && ppt.images[currentPptPage]) {
        pptImage.src = ppt.images[currentPptPage];
        pptPageInfo.textContent = `${currentPptPage + 1} / ${ppt.images.length}`;

        pptPrev.style.opacity = currentPptPage === 0 ? '0.3' : '1';
        pptPrev.style.pointerEvents = currentPptPage === 0 ? 'none' : 'auto';

        pptNext.style.opacity = currentPptPage === ppt.images.length - 1 ? '0.3' : '1';
        pptNext.style.pointerEvents = currentPptPage === ppt.images.length - 1 ? 'none' : 'auto';
    }
}

pptPrev.addEventListener('click', () => {
    if (currentPptPage > 0) {
        currentPptPage--;
        updatePptImage();
    }
});

pptNext.addEventListener('click', () => {
    const ppt = pptData[currentPptId];
    if (ppt && currentPptPage < ppt.images.length - 1) {
        currentPptPage++;
        updatePptImage();
    }
});

closePptModal.addEventListener('click', () => {
    pptModal.classList.remove('active');
    document.body.style.overflow = '';
});

pptModal.addEventListener('click', (e) => {
    if (e.target === pptModal) {
        pptModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

document.addEventListener('keydown', (e) => {
    if (pptModal.classList.contains('active')) {
        if (e.key === 'ArrowLeft' && currentPptPage > 0) {
            currentPptPage--;
            updatePptImage();
        } else if (e.key === 'ArrowRight') {
            const ppt = pptData[currentPptId];
            if (ppt && currentPptPage < ppt.images.length - 1) {
                currentPptPage++;
                updatePptImage();
            }
        } else if (e.key === 'Escape') {
            pptModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
});