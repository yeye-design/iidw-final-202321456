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
      }
    });
  },
  {
    threshold: 0.2, // 20% 보이면 실행
  }
);

reveals.forEach((el) => observer.observe(el));
