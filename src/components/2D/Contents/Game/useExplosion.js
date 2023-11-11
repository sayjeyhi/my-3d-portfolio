import { useCallback } from 'react'

export const useExplosion = ({ duration, id }) => {
  return useCallback(ref => {
    const explosion = new ExplodeElement(ref)
    explosion.explode(duration, id)
  }, [])
}

/**
 * Explosive between fires
 * credit: https://codepen.io/jkantner/pen/oNjjEaJ?editors=0010
 */
class ExplodeElement {
  constructor(el) {
    this.element = el
    this.width = 0
    this.height = 0
    this.centerX = 0
    this.centerY = 0
    this.duration = 1000

    this.updateDimensions()
  }
  updateDimensions() {
    this.width = pxToEm(this.element.offsetWidth)
    this.height = pxToEm(this.element.offsetHeight)
    this.centerX = this.width / 2
    this.centerY = this.height / 2
  }
  explode(duration, id) {
    let explodingState = 'exploding'

    if (!this.element.classList.contains(explodingState)) {
      this.element.classList.add(explodingState)

      this.createParticles('fire', 25, duration)
    }
  }
  createParticles(kind, count, duration, id) {
    for (let c = 0; c < count; ++c) {
      let r = randomFloat(0.25, 0.5),
        diam = r * 2,
        xBound = this.centerX - r,
        yBound = this.centerY - r,
        easing = 'cubic-bezier(0.15,0.5,0.5,0.85)'

      let x = this.centerX + randomFloat(-xBound, xBound),
        y = this.centerY + randomFloat(-yBound, yBound),
        a = calcAngle(this.centerX, this.centerY, x, y),
        dist = randomFloat(1, 5)

      new FireParticle(this.element, x, y, diam, diam, a, dist, duration, easing, id)
    }
  }
}
class Particle {
  constructor(parent, x, y, w, h, angle, distance = 1, className2 = '', id = '') {
    let width = `${w}em`,
      height = `${h}em`,
      adjustedAngle = angle + Math.PI / 2

    this.id = id
    this.div = document.createElement('div')
    this.div.className = 'particle' + id

    if (className2) this.div.classList.add(className2 + id)

    this.div.style.width = width
    this.div.style.height = height

    parent.appendChild(this.div)

    this.s = {
      x: x - w / 2,
      y: y - h / 2
    }
    this.d = {
      x: this.s.x + Math.sin(adjustedAngle) * distance,
      y: this.s.y - Math.cos(adjustedAngle) * distance
    }
  }
  runSequence(el, keyframesArray, duration = 1e3, easing = 'linear', delay = 0) {
    let animation = el.animate(keyframesArray, {
      duration: duration,
      easing: easing,
      delay: delay
    })
    animation.onfinish = () => {
      let parentCL = el.parentElement.classList

      el.remove()

      if (!document.querySelector('.particle' + this.id)) parentCL.remove(...parentCL)
    }
  }
}
class FireParticle extends Particle {
  constructor(parent, x, y, w, h, angle, distance, duration, easing, id) {
    super(parent, x, y, w, h, angle, distance, 'particle--fire', id)

    let sx = this.s.x,
      sy = this.s.y,
      dx = this.d.x,
      dy = this.d.y

    this.runSequence(
      this.div,
      [
        {
          background: 'hsl(60,100%,100%)',
          transform: `translate(${sx}em,${sy}em) scale(1)`
        },
        {
          background: 'hsl(60,100%,80%)',
          transform: `translate(${sx + (dx - sx) * 0.25}em,${sy + (dy - sy) * 0.25}em) scale(4)`
        },
        {
          background: 'hsl(40,100%,60%)',
          transform: `translate(${sx + (dx - sx) * 0.5}em,${sy + (dy - sy) * 0.5}em) scale(7)`
        },
        {
          background: 'hsl(20,100%,40%)'
        },
        {
          background: 'hsl(0,0%,20%)',
          transform: `translate(${dx}em,${dy}em) scale(0)`
        }
      ],
      randomInt(duration / 2, duration),
      easing
    )
  }
}
function calcAngle(x1, y1, x2, y2) {
  let opposite = y2 - y1,
    adjacent = x2 - x1,
    angle = Math.atan(opposite / adjacent)

  if (adjacent < 0) angle += Math.PI

  if (isNaN(angle)) angle = 0

  return angle
}
function propertyUnitsStripped(el, property, unit) {
  let cs = window.getComputedStyle(el),
    valueRaw = cs.getPropertyValue(property),
    value = +valueRaw.substr(0, valueRaw.indexOf(unit))

  return value
}
function pxToEm(px) {
  let el = document.querySelector(':root')
  return px / propertyUnitsStripped(el, 'font-size', 'px')
}
function randomFloat(min, max) {
  return Math.random() * (max - min) + min
}
function randomInt(min, max) {
  return Math.round(Math.random() * (max - min)) + min
}
