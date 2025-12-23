const cursor = document.getElementById('cursor');

window.addEventListener('mousemove', (e) => {
  const circle = document.createElement('div');
  circle.classList.add('trail-circle');

  circle.style.left = e.clientX + 'px';
  circle.style.top = e.clientY + 'px';

  document.body.appendChild(circle);

  // 일정 시간 후 사라짐
  setTimeout(() => {
    circle.remove();
  }, 500); // 0.5초 후 삭제 (원하면 조절)
});

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active');
      }
    });
  },
  {
    threshold: 0.2,
  }
);

reveals.forEach((el) => observer.observe(el));
// 틸트

const wrap = document.querySelector('.tilt-wrap');
const img = document.querySelector('.tilt-img');

wrap.addEventListener('mousemove', (e) => {
  const rect = wrap.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = -(y - centerY) / 50;
  const rotateY = (x - centerX) / 50;

  img.style.transform = `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
  `;
});

wrap.addEventListener('mouseleave', () => {
  img.style.transform = 'rotateX(0deg) rotateY(0deg)';
});
