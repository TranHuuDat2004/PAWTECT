function scrollLeft(id) {
    const track = document.querySelector(`#${id} .carousel-track`);
    track.scrollBy({ left: -200, behavior: "smooth" });
  }
  
  function scrollRight(id) {
    const track = document.querySelector(`#${id} .carousel-track`);
    track.scrollBy({ left: 200, behavior: "smooth" });
  }
  