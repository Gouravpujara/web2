

function moveImageWithMouse(event, hoverImage) {
    hoverImage.style.left = event.clientX + "px";
    hoverImage.style.top = event.clientY + "px";
  }

  function setupImageContainer(divId, imageUrl) {
    var div = document.getElementById(divId);
    var hoverImage = div.querySelector(".hoverImage");

    div.addEventListener("mouseover", function(event) {
      hoverImage.style.display = "inline";
      moveImageWithMouse(event, hoverImage);
    });

    div.addEventListener("mousemove", function(event) {
      moveImageWithMouse(event, hoverImage);
    });

    div.addEventListener("mouseout", function() {
      hoverImage.style.display = "none";
    });

    // Set initial image source
    hoverImage.src = imageUrl;
  }

  // Set up each image container
  setupImageContainer("div1", "l.jpg");
  setupImageContainer("div2", "z.jpg");
  setupImageContainer("div3", "images.jpg");