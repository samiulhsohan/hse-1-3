const handleMouseMove = (e) => {
  const windowWidth = $(window).width();
  const windowHeight = $(window).height();
  const { pageX, pageY } = e;

  $(".page-x").text(pageX);
  $(".page-y").text(pageY);
  $(".window-size").text(`${windowWidth} x ${windowHeight}`);

  const saturation = Math.round((pageX / windowWidth) * 100);
  const lightness = Math.round((pageY / windowHeight) * 100);

  $(".hsl").text(`hsl(235, ${saturation}%, ${lightness}%)`);
  $(".box").css("background-color", `hsl(235, ${saturation}%, ${lightness}%)`);
};

$(document).mousemove(handleMouseMove);
