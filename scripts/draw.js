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

document.querySelectorAll('.tilt-wrap').forEach((wrap) => {
  const img = wrap.querySelector('.tilt-img');
  if (!img) return;

  wrap.addEventListener('mousemove', (e) => {
    const rect = wrap.getBoundingClientRect();

    const x = e.offsetX;
    const y = e.offsetY;

    const rotateY = (x / rect.width - 0.5) * 15;
    const rotateX = -(y / rect.height - 0.5) * 15;

    img.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;
  });

  wrap.addEventListener('mouseleave', () => {
    img.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  });
});
