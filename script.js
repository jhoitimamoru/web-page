// ===== Particles Canvas =====
(() => {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let w, h;

    const resize = () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const COUNT = window.innerWidth < 768 ? 35 : 70;
    const LINK_DIST = 130;

    for (let i = 0; i < COUNT; i++) {
        particles.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            r: Math.random() * 1.8 + 0.6
        });
    }

    const draw = () => {
        ctx.clearRect(0, 0, w, h);

        for (const p of particles) {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(129, 140, 248, 0.55)';
            ctx.fill();
        }

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.hypot(dx, dy);
                if (dist < LINK_DIST) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(99, 102, 241, ${0.14 * (1 - dist / LINK_DIST)})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(draw);
    };

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        draw();
    }
})();

// ===== Typing Effect =====
(() => {
    const el = document.getElementById('typingText');
    const phrases = [
        'Flutter Developer',
        'Cloud FinOps Engineer',
        'Criador de apps 4.8★',
        'Android · iOS · Cloud',
        'DevOps & Automation'
    ];
    let pi = 0, ci = 0, deleting = false;

    const tick = () => {
        const phrase = phrases[pi];
        el.textContent = phrase.slice(0, ci);

        let delay = deleting ? 40 : 85;
        if (!deleting && ci === phrase.length) {
            delay = 2000;
            deleting = true;
        } else if (deleting && ci === 0) {
            deleting = false;
            pi = (pi + 1) % phrases.length;
            delay = 400;
        } else {
            ci += deleting ? -1 : 1;
        }
        setTimeout(tick, delay);
    };
    tick();
})();

// ===== Navbar scroll + progress bar =====
const navbar = document.getElementById('navbar');
const progress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${(window.scrollY / max) * 100}%`;
}, { passive: true });

// ===== Mobile menu =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== Reveal on scroll =====
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), (i % 4) * 90);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ===== Animated counters =====
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const decimals = parseInt(el.dataset.decimal || '0', 10);
        const duration = 1800;
        const start = performance.now();

        const step = (now) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const value = target * eased;
            el.textContent = decimals
                ? value.toFixed(decimals).replace('.', ',')
                : Math.floor(value).toLocaleString('pt-BR');
            if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        counterObserver.unobserve(el);
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(el => counterObserver.observe(el));

// ===== Cursor glow =====
const glow = document.getElementById('cursorGlow');
if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
    }, { passive: true });
} else {
    glow.style.display = 'none';
}

// ===== 3D tilt + spotlight on skill cards =====
document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rx = ((y / rect.height) - 0.5) * -10;
        const ry = ((x / rect.width) - 0.5) * 10;
        card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
        card.style.setProperty('--mx', `${x}px`);
        card.style.setProperty('--my', `${y}px`);
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ===== Duplicate review cards for seamless infinite loop =====
(() => {
    const track = document.querySelector('.reviews-track');
    if (track) track.innerHTML += track.innerHTML;
})();

// ===== Active nav link highlight =====
const sections = document.querySelectorAll('section[id]');
const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.nav-link').forEach(l => {
                l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`);
            });
        }
    });
}, { threshold: 0.4 });

sections.forEach(s => navObserver.observe(s));
