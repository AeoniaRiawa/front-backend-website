document.addEventListener("mousemove", function(e) {
    document.querySelectorAll(".title, .title-outline").forEach(layer => {
      const speed = layer.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * speed) / 50;
      const y = (window.innerHeight - e.pageY * speed) / 50;
      layer.style.transform = `translate(-50%, -50%) translateX(${x}px) translateY(${y}px)`;
    });

    document.querySelectorAll(".portrait").forEach(layer => {
      const speed = layer.getAttribute("data-speed");
      const x = (window.innerWidth - e.pageX * speed) / 100;
      const y = (window.innerHeight - e.pageY * speed) / 50;
      layer.style.transform = `translate(-50%, -50%) translateX(${x}px) translateY(${y}px)`;
    });
});

