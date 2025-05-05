// src/components/Hero.jsx
"use client";
import React, { useEffect, useRef } from "react";
import "./Hero.css";
import { gsap } from "gsap";
import Navbar from './Navbar';

const Hero = () => {
  const canvasRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const largeHeader = headerRef.current;
    if (!canvas || !largeHeader) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    let points = [];
    let target = { x: width / 2, y: height / 2 };
    let animateHeader = true;

    function init() {
      for (let x = 0; x < width; x += width / 20) {
        for (let y = 0; y < height; y += height / 20) {
          let px = x + Math.random() * width / 20;
          let py = y + Math.random() * height / 20;
          let p = { x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      for (const element of points) {
        let closest = [];
        let p1 = element;
        for (const element of points) {
          let p2 = element;
          if (p1 !== p2) {
            let placed = false;
            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (closest[k] === undefined) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }

            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
        p1.circle = new Circle(p1, 2 + Math.random() * 2, "rgba(255,255,255,0.3)");
      }

      for (const element of points) {
        shiftPoint(element);
      }

      animate();
    }

    function shiftPoint(p) {
      gsap.to(p, {
        duration: 1 + Math.random(),
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: "circ.inOut",
        onComplete: () => shiftPoint(p)
      });
    }

    function drawLines(p) {
      if (!p.active) return;
      for (let i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = "rgba(156,217,249," + p.active + ")";
        ctx.stroke();
      }
    }

    function Circle(pos, rad, color) {
      this.pos = pos;
      this.radius = rad;
      this.color = color;
      this.draw = () => {
        if (!this.active) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = "rgba(156,217,249," + this.active + ")";
        ctx.fill();
      };
    }

    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for (let i in points) {
          if (Math.abs(getDistance(target, points[i])) < 4000) {
            points[i].active = 0.3;
            points[i].circle.active = 0.6;
          } else if (Math.abs(getDistance(target, points[i])) < 20000) {
            points[i].active = 0.1;
            points[i].circle.active = 0.3;
          } else if (Math.abs(getDistance(target, points[i])) < 40000) {
            points[i].active = 0.02;
            points[i].circle.active = 0.1;
          } else {
            points[i].active = 0;
            points[i].circle.active = 0;
          }

          drawLines(points[i]);
          points[i].circle.draw();
        }
      }
      requestAnimationFrame(animate);
    }

    function getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    function onMouseMove(e) {
      target.x = e.clientX;
      target.y = e.clientY;
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      largeHeader.style.height = height + "px";
    }

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", resize);
    largeHeader.style.height = height + "px";

    init();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div ref={headerRef} id="large-header" className="large-header relative">
    <canvas ref={canvasRef} id="demo-canvas"></canvas>
  
    {/* Navbar */}
    <div className="absolute top-0 left-0 w-full z-20 flex justify-between items-center p-4 bg-transparent">
    <div style={{ visibility: "hidden", fontFamily: "monospace" }} className="text-white text-xl font-bold">Backbone</div>
    <nav className="space-x-8">
      <a href="/" className="text-white hover:text-yellow-300 transition">Ana Səhifə</a>
      <a href="#paketler" className="text-white hover:text-yellow-300 transition">Xidmətlər</a>
      <a href="tel:+994123100008"  className="text-white hover:text-yellow-300 transition">Əlaqə</a>
    </nav>
    </div>
  
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-6 flex items-center gap-4 z-10">
      <img
        id="logo"
        src="erasebg-transformed.png"
        alt="Logo"
        style={{ width: "30%" }}
      />
      <div className="text-white flex-1">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Sürətli və Etibarlı <br /> <span className="text-yellow-300">İnternet Xidməti</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-200">
          Backbone Technology ilə evinizə və iş yerinizə limitsiz fiber-optik bağlantı.
          Həm sürətli, həm sərfəli!
        </p>
        <a
          href="/paketler"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-800 font-semibold px-6 py-3 rounded-md transition duration-200"
        >
          Ödəniş et
        </a>
      </div>
    </div>
  </div>
  
  );
};

export default Hero;
