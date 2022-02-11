let hue = 235;

const handleMouseMove = (e) => {
  const windowWidth = $(window).width();
  const windowHeight = $(window).height();
  const { pageX, pageY } = e;

  $(".page-x").text(`x: ${pageX}`);
  $(".page-y").text(`y: ${pageY}`);
  $(".window-size").text(`window: ${windowWidth} x ${windowHeight}`);

  const saturation = Math.round((pageX / windowWidth) * 100);
  const lightness = Math.round((pageY / windowHeight) * 100);

  $(".box").css(
    "background-color",
    `hsl(${hue}, ${saturation}%, ${lightness}%)`
  );

  $(".hue").text(`hue: ${hue}`);
  $(".saturation").text(`saturation: ${saturation}`);
  $(".lightness").text(`lightness: ${lightness}`);
};

$(document).mousemove(handleMouseMove);

document.querySelector(".button").addEventListener("click", () => {
  hue = Math.round(Math.random() * 360);
  $(".hue").text(`hue: ${hue}`);
  $(".box").css("background-color", `hsl(${hue}, 50%, 50%)`);
});
