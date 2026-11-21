import './cursor.css';

const pointerQuery = window.matchMedia(
  '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
);

if (pointerQuery.matches) {
  const tracker = document.createElement('span');
  const cursor = document.createElement('span');
  tracker.className = 'cursor-tracker';
  tracker.setAttribute('aria-hidden', 'true');
  cursor.className = 'cursor-orbit';
  tracker.append(cursor);
  document.body.append(tracker);
  document.body.classList.add('has-cursor-orbit');

  let x = 0;
  let y = 0;
  let targetX = 0;
  let targetY = 0;
  let velocityX = 0;
  let velocityY = 0;
  let previousTime = 0;
  let frameId = null;
  let initialized = false;
  const interactiveSelector =
    'a[href], button, input:not([type="hidden"]), select, textarea, summary, [role="button"], .githubSvg, [tabindex]:not([tabindex="-1"])';

  function render() {
    tracker.style.transform = `translate3d(${x - 11}px, ${y - 11}px, 0)`;
  }

  function animate(timestamp) {
    frameId = null;
    const delta = previousTime
      ? Math.min((timestamp - previousTime) / 1000, 1 / 30)
      : 1 / 60;
    previousTime = timestamp;

    const stiffness = 220;
    const damping = 24;
    velocityX += ((targetX - x) * stiffness - velocityX * damping) * delta;
    velocityY += ((targetY - y) * stiffness - velocityY * damping) * delta;
    x += velocityX * delta;
    y += velocityY * delta;
    render();

    const distance = Math.hypot(targetX - x, targetY - y);
    const speed = Math.hypot(velocityX, velocityY);
    if (distance < 0.1 && speed < 1) {
      x = targetX;
      y = targetY;
      velocityX = 0;
      velocityY = 0;
      render();
      previousTime = 0;
      return;
    }

    frameId = window.requestAnimationFrame(animate);
  }

  function scheduleAnimation() {
    if (frameId === null) {
      frameId = window.requestAnimationFrame(animate);
    }
  }

  function handlePointerMove(event) {
    if (event.pointerType !== 'mouse') {
      return;
    }

    const isInteractive = event.composedPath().some(
      (target) =>
        target instanceof Element && target.matches(interactiveSelector),
    );
    tracker.classList.toggle('is-interactive', isInteractive);
    targetX = event.clientX;
    targetY = event.clientY;

    if (!initialized) {
      x = targetX;
      y = targetY;
      initialized = true;
      render();
      tracker.classList.add('is-visible');
    }

    scheduleAnimation();
  }

  function hideCursor() {
    tracker.classList.remove('is-visible', 'is-interactive');
    cursor.classList.remove('is-pressed');
    initialized = false;
    velocityX = 0;
    velocityY = 0;
    previousTime = 0;

    if (frameId !== null) {
      window.cancelAnimationFrame(frameId);
      frameId = null;
    }
  }

  document.addEventListener('pointermove', handlePointerMove, {
    passive: true,
  });
  document.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'mouse') {
      cursor.classList.add('is-pressed');
    }
  });
  document.addEventListener('pointerup', () => {
    cursor.classList.remove('is-pressed');
  });
  document.addEventListener('pointerout', (event) => {
    if (event.relatedTarget === null) {
      hideCursor();
    }
  });
  window.addEventListener('blur', hideCursor);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      hideCursor();
    }
  });
}
