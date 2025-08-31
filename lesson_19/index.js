   const clock = document.getElementById('clock');
    const hourHand = document.getElementById('hourHand');
    const minuteHand = document.getElementById('minuteHand');

 
    const numbers = [...Array(12).keys()].map(n => n + 1);
    const scrambled = [...numbers].sort(() => Math.random() - 0.5);

    scrambled.forEach((num, i) => {
      const angle = (i * 30 - 60) * (Math.PI / 180); 
      const radius = 120;
      const x = 150 + radius * Math.cos(angle);
      const y = 150 + radius * Math.sin(angle);

      const el = document.createElement('div');
      el.className = 'number';
      el.textContent = num;
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      clock.appendChild(el);
    });

    function updateClock() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      const hourAngle = ((hours % 12) + minutes / 60) * 30; 
      const minuteAngle = (minutes + seconds / 60) * 6;    
      hourHand.style.transform = `rotate(${hourAngle}deg)`;
      minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    }

    setInterval(updateClock, 1000);
    updateClock();