import { TweenLite, Circ } from "gsap";

export const PageAnimation = () => {
  let width,
    height,
    largeHeader,
    canvas,
    ctx,
    points,
    target,
    animateHeader = true;

  // init animation
  initHeader();
  initAnimation();
  addListeners();

  function initHeader() {
    largeHeader = document.getElementsByClassName("content");
    width = window.innerWidth; // canvas container width
    height = largeHeader[0].offsetHeight + 25; // canvas container height
    target = { x: width / 2, y: height / 2 }; // animation "starting position"

    canvas = document.getElementById("canvas");
    canvas.width = width; // canvas width
    canvas.height = height; // canvas height
    ctx = canvas.getContext("2d");

    // create points
    let pointNumber;
    if (window.innerWidth < 500) {
      pointNumber = 10;
    } else pointNumber = 20;
    points = [];
    // total points = pointNumber * pointNumber
    for (let x = 0; x < width; x = x + width / pointNumber) {
      for (let y = 0; y < height; y = y + height / pointNumber) {
        let px = x + (Math.random() * width) / pointNumber; // random starting point X coordinate
        let py = y + (Math.random() * height) / pointNumber; // random starting point Y coordinate
        let p = { x: px, originX: px, y: py, originY: py }; // starting parameteres of point
        points.push(p);
      }
    }

    // for each point find the 5 closest points
    for (let i = 0; i < points.length; i++) {
      // for each point
      let closest = [];
      let p1 = points[i]; // set given point as base
      for (let j = 0; j < points.length; j++) {
        // for each point
        let p2 = points[j]; //assign another point
        if (!(p1 == p2)) {
          // do if point isnt equal to base point
          let placed = false;
          for (let k = 0; k < 6; k++) {
            // insert first 5 elements into closest
            if (!placed) {
              if (closest[k] == undefined) {
                closest[k] = p2;
                placed = true;
              }
            }
          }
          for (let k = 0; k < 6; k++) {
            // compare closest elements with next points to check if they arent closer
            if (!placed) {
              if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                // if they are, replace them
                closest[k] = p2;
                placed = true;
              }
            }
          }
        }
      }
      p1.closest = closest;
    }

    // assign a circle to each point
    for (let i in points) {
      let c = new Circle(
        points[i],
        2 + Math.random() * 2,
        "rgba(18, 184, 207, 0.2)"
      );
      points[i].circle = c;
    }
  }

  // events handling
  function addListeners() {
    if (!"ontouchstart" in window) {
      window.addEventListener("mousemove", mouseMove);
    }
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", resize);
  }

  function mouseMove(e) {
    let posx = 0;
    let posy = 0;
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      // old code -- not used
      posx =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      posy =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }
    target.x = posx; // read mouse position and update target coordinates for animation
    target.y = posy;
  }

  function scrollCheck() {
    if (document.body.scrollTop > height) animateHeader = false;
    else animateHeader = true;
  }

  function resize() {
    width = window.innerWidth;
    height = largeHeader[0].offsetHeight;
    canvas.width = width;
    canvas.height = height;
  }

  let isBeingResized;
  window.onresize = function () {
    clearTimeout(isBeingResized);
    isBeingResized = setTimeout(() => {
      // restart animation after 200ms after resize to prevent constant recalibration during resizing
      initHeader();
      initAnimation();
    }, 200);
  };

  // animation
  function initAnimation() {
    animate();
    for (let i in points) {
      shiftPoint(points[i]);
    }
  }

  function animate() {
    if (animateHeader) {
      ctx.clearRect(0, 0, width, height);
      for (let i in points) {
        // detect points in range
        if (Math.abs(getDistance(target, points[i])) < 4000) {
          // if in given range, set alpha color to lines and circle
          points[i].active = 0.3; // it its close enough to center of mouse, give lines alpha color
          points[i].circle.active = 0.6; // same for circle
        } else if (Math.abs(getDistance(target, points[i])) < 20000) {
          points[i].active = 0.1;
          points[i].circle.active = 0.3;
        } else if (Math.abs(getDistance(target, points[i])) < 40000) {
          points[i].active = 0.02;
          points[i].circle.active = 0.1;
        } else {
          points[i].active = 0; // if its outside of the "mouse range", set alpha to zero, so they wont be visible
          points[i].circle.active = 0;
        }

        drawLines(points[i]); // for drawing lines between points
        points[i].circle.draw(); // for drawing circles
      }
    }
    requestAnimationFrame(animate);
  }

  function shiftPoint(p) {
    TweenLite.to(p, 1 + 1 * Math.random(), {
      x: p.originX - 50 + Math.random() * 100, // shift point X coordinate in random direction in range of original position
      y: p.originY - 50 + Math.random() * 100, // shift point Y coordinate in random direction in range of original position
      ease: Circ.easeInOut, // animation style
      onComplete: function () {
        // on animation complete, start again
        shiftPoint(p);
      },
    });
  }

  // canvas manipulation
  function drawLines(p) {
    if (!p.active) return;
    for (let i in p.closest) {
      // for each "closest point" of given point,
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.closest[i].x, p.closest[i].y); // draw a line from given point to given closest
      ctx.strokeStyle = "rgba(118, 184, 207," + p.active + ")"; // with given color and alpha
      ctx.stroke();
    }
  }

  function Circle(pos, rad, color) {
    let _this = this;

    // constructor
    (function () {
      _this.pos = pos || null; // circle position
      _this.radius = rad || null; // circle radius
      _this.color = color || null; // circle color
    })();

    this.draw = function () {
      // draw circle method
      if (!_this.active) return; // if circle isn't active, dont draw
      ctx.beginPath();
      ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false); // draw arc at given X,Y position, with given radius 2*PI - so its a circle
      ctx.fillStyle = "rgba(118, 184, 207," + _this.active + ")"; // give circle a color with given alpha, so it will be visible or not
      ctx.fill();
    };
  }

  // util
  function getDistance(p1, p2) {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2); // get distance between two points
  }
};
