    const box2 = document.getElementById('box2');
    const box1 = document.getElementById('box1');
    const step = 50;

    function move(direction) {
      const box1Rect = box2.getBoundingClientRect();
      const box2Rect = box1.getBoundingClientRect();

      let top = parseInt(box2.style.top) || 0;
      let left = parseInt(box2.style.left) || 0;

      if (direction === 'up' && top - step >= 0) {
        top -= step;
      } else if (direction === 'down' && top + step + box2.offsetHeight <= box1.clientHeight) {
        top += step;
      } else if (direction === 'left' && left - step >= 0) {
        left -= step;
      } else if (direction === 'right' && left + step + box2.offsetWidth <= box1.clientWidth) {
        left += step;
      }

      box2.style.top = top + 'px';
      box2.style.left = left + 'px';
    }