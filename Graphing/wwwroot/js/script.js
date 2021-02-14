function createStage() {
  window.stage = new Konva.Stage({
    container: 'container',
    width: 480,
    height: 480,
  });

  window.layer = new Konva.Layer();

  window.stage.add(window.layer);
}

function addCircle() {
  window.circle = new Konva.Circle({
    x: window.stage.width() / 2,
    y: window.stage.height() / 2,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4
  });

  window.layer.add(window.circle);

  window.layer.draw();
}
