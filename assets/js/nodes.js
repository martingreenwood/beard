var Nodes = {

  // Settings
  density: 16,
  
  drawDistance: 20,
  baseRadius: 4,
  maxLineThickness: 0.8,
  reactionSensitivity: 1,
  lineThickness: 1,

  points: [],
  mouse: { x: -1000, y: -1000, down: false },

  animation: null,

  canvas: null,
  context: null,

  imageInput: null,
  bgImage: null,
  bgCanvas: null,
  bgContext: null,
  bgContextPixelData: null,

  init: function() {
    // Set up the visual canvas 
    this.canvas = document.getElementById( 'canvas' );
    this.context = canvas.getContext( '2d' );
    this.context.globalCompositeOperation = "lighter";
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.canvas.style.display = 'block'

    this.imageInput = document.createElement( 'input' );
    this.imageInput.setAttribute( 'type', 'file' );
    this.imageInput.style.visibility = 'hidden';
    this.imageInput.addEventListener('change', this.upload, false);
    document.body.appendChild( this.imageInput );

    this.canvas.addEventListener('mousemove', this.mouseMove, false);
    this.canvas.addEventListener('mousedown', this.mouseDown, false);
    this.canvas.addEventListener('mouseup',   this.mouseUp,   false);
    this.canvas.addEventListener('mouseout',  this.mouseOut,  false);

    window.onresize = function(event) {
      Nodes.canvas.width = window.innerWidth;
      Nodes.canvas.height = window.innerHeight;
      Nodes.onWindowResize();    
    }

    // Load initial input image (the chrome logo!)
    this.loadData( 'data:image/png;base64,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');
  },

  preparePoints: function() {

    // Clear the current points
    this.points = [];
    
    var width, height, i, j;

    var colors = this.bgContextPixelData.data;

    for( i = 0; i < this.canvas.height; i += this.density ) {

      for ( j = 0; j < this.canvas.width; j += this.density ) {

        var pixelPosition = ( j + i * this.bgContextPixelData.width ) * 4;

        // Dont use whiteish pixels
        if ( colors[pixelPosition] > 200 && (colors[pixelPosition + 1]) > 200 && (colors[pixelPosition + 2]) > 200 || colors[pixelPosition + 3] === 0 ) {
          continue;
        }
        
        var color = 'rgba(' + colors[pixelPosition] + ',' + colors[pixelPosition + 1] + ',' + colors[pixelPosition + 2] + ',' + '1)';
        this.points.push( { x: j, y: i, originalX: j, originalY: i, color: color } );

      }
    }
  },

  updatePoints: function() {

    var i, currentPoint, theta, distance;
    
    for (i = 0; i < this.points.length; i++ ){

      currentPoint = this.points[i];

      theta = Math.atan2( currentPoint.y - this.mouse.y, currentPoint.x - this.mouse.x);

      if ( this.mouse.down ) {
        distance = this.reactionSensitivity * 200 / Math.sqrt((this.mouse.x - currentPoint.x) * (this.mouse.x - currentPoint.x) +
         (this.mouse.y - currentPoint.y) * (this.mouse.y - currentPoint.y));
      } else {
        distance = this.reactionSensitivity * 100 / Math.sqrt((this.mouse.x - currentPoint.x) * (this.mouse.x - currentPoint.x) +
         (this.mouse.y - currentPoint.y) * (this.mouse.y - currentPoint.y));  
      }
      

      currentPoint.x += Math.cos(theta) * distance + (currentPoint.originalX - currentPoint.x) * 0.05;
      currentPoint.y += Math.sin(theta) * distance + (currentPoint.originalY - currentPoint.y) * 0.05;

    }
  },

  drawLines: function() {
    
    var i, j, currentPoint, otherPoint, distance, lineThickness;

    for ( i = 0; i < this.points.length; i++ ) {

      currentPoint = this.points[i];

      // Draw the dot.
      this.context.fillStyle = currentPoint.color;
      this.context.strokeStyle = currentPoint.color;

      for ( j = 0; j < this.points.length; j++ ){

        // Distaqnce between two points.
        otherPoint = this.points[j];

        if ( otherPoint == currentPoint ) {
          continue;
        }

        distance = Math.sqrt((otherPoint.x - currentPoint.x) * (otherPoint.x - currentPoint.x) +
         (otherPoint.y - currentPoint.y) * (otherPoint.y - currentPoint.y));

        if (distance <= this.drawDistance) {

          this.context.lineWidth = (1 - (distance / this.drawDistance)) * this.maxLineThickness * this.lineThickness;
          this.context.beginPath();
          this.context.moveTo(currentPoint.x, currentPoint.y);
          this.context.lineTo(otherPoint.x, otherPoint.y);
          this.context.stroke();
        }
      }
    }
  },

  drawPoints: function() {

    var i, currentPoint;

    for ( i = 0; i < this.points.length; i++ ) {

      currentPoint = this.points[i];

      // Draw the dot.
      this.context.fillStyle = currentPoint.color;
      this.context.strokeStyle = currentPoint.color;

      this.context.beginPath();
      this.context.arc(currentPoint.x, currentPoint.y, this.baseRadius ,0 , Math.PI*2, true);
      this.context.closePath();
      this.context.fill();

    }
  },

  draw: function() {
    this.animation = requestAnimationFrame( function(){ Nodes.draw() } );

    this.clear();
    this.updatePoints();
    this.drawLines();
    this.drawPoints();

  },

  clear: function() {
    this.canvas.width = this.canvas.width;
  },

  // The filereader has loaded the image... add it to image object to be drawn
  loadData: function( data ) {
    
    this.bgImage = new Image;
    this.bgImage.src = data;

    this.bgImage.onload = function() {

      //this
      Nodes.drawImageToBackground();
    }
  },

  // Image is loaded... draw to bg canvas
  drawImageToBackground: function () {

    this.bgCanvas = document.createElement( 'canvas' );
    this.bgCanvas.width = this.canvas.width;
    this.bgCanvas.height = this.canvas.height;

    var newWidth, newHeight;

    // If the image is too big for the screen... scale it down.
    if ( this.bgImage.width > this.bgCanvas.width - 100 || this.bgImage.height > this.bgCanvas.height - 100) {

      var maxRatio = Math.max( this.bgImage.width / (this.bgCanvas.width - 100) , this.bgImage.height / (this.bgCanvas.height - 100) );
      newWidth = this.bgImage.width / maxRatio;
      newHeight = this.bgImage.height / maxRatio;

    } else {
      newWidth = this.bgImage.width;
      newHeight = this.bgImage.height;
    }

    // Draw to background canvas
    this.bgContext = this.bgCanvas.getContext( '2d' );
    this.bgContext.drawImage( this.bgImage, (this.canvas.width - newWidth) / 2, (this.canvas.height - newHeight) / 2, newWidth, newHeight);
    this.bgContextPixelData = this.bgContext.getImageData( 0, 0, this.bgCanvas.width, this.bgCanvas.height );

    this.preparePoints();
    this.draw();
  },

  mouseDown: function( event ){
    Nodes.mouse.down = true;
  },

  mouseUp: function( event ){
    Nodes.mouse.down = false;
  },
  
  mouseMove: function(event){
    Nodes.mouse.x = event.offsetX || (event.layerX - Nodes.canvas.offsetLeft);
    Nodes.mouse.y = event.offsetY || (event.layerY - Nodes.canvas.offsetTop);
  },
  
  mouseOut: function(event){
    Nodes.mouse.x = -1000;
    Nodes.mouse.y = -1000;
    Nodes.mouse.down = false;
  },

  // Resize and redraw the canvas.
  onWindowResize: function() {
    cancelAnimationFrame( this.animation );
    this.drawImageToBackground();
  }

}