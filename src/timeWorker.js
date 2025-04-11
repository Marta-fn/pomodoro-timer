let timer;

self.onmessage = function (e) {
  if (e.data.command === "start") {
    const startTime = Date.now();

    timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      self.postMessage({ timeLeft: Math.max(e.data.time - elapsed, 0) });

      if (elapsed >= e.data.time) {
        clearInterval(timer);
      }
    }, 1000);
  } else if (e.data.command === "pause") {
    clearInterval(timer);
  }
};
