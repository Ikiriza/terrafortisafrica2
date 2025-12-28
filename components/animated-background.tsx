"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedY: number
  speedX: number
  opacity: number
  pulseSpeed: number
  pulseOffset: number
}

interface FlowingLine {
  startX: number
  startY: number
  points: { x: number; y: number; offset: number }[]
  speed: number
  opacity: number
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme, systemTheme } = useTheme()
  const animationFrameRef = useRef<number | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const flowingLinesRef = useRef<FlowingLine[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
      initParticles()
      initFlowingLines()
    }

    // Initialize particles (representing farmers, communities, enterprises)
    const initParticles = () => {
      const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 15000), 50)
      particlesRef.current = []
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speedY: -(Math.random() * 0.3 + 0.1), // Slow upward movement
          speedX: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.3 + 0.2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseOffset: Math.random() * Math.PI * 2,
        })
      }
    }

    // Initialize flowing lines (representing market systems & partnerships)
    const initFlowingLines = () => {
      const lineCount = Math.min(Math.floor(window.innerWidth / 400), 8)
      flowingLinesRef.current = []
      for (let i = 0; i < lineCount; i++) {
        const points: { x: number; y: number; offset: number }[] = []
        const segments = Math.floor(Math.random() * 3) + 4
        const startX = (window.innerWidth / lineCount) * i + Math.random() * 100
        const startY = Math.random() * window.innerHeight

        for (let j = 0; j < segments; j++) {
          points.push({
            x: startX + (j * window.innerWidth) / segments + (Math.random() - 0.5) * 100,
            y: startY + (Math.random() - 0.5) * 200,
            offset: Math.random() * Math.PI * 2,
          })
        }

        flowingLinesRef.current.push({
          startX,
          startY,
          points,
          speed: Math.random() * 0.3 + 0.2,
          opacity: Math.random() * 0.15 + 0.05,
        })
      }
    }

    // Mouse move handler for subtle interaction
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    // Get theme colors
    const getColors = () => {
      const currentTheme = theme === "system" ? systemTheme : theme
      const isDark = currentTheme === "dark"

      return {
        particle: isDark ? "rgba(31, 122, 92, 0.6)" : "rgba(15, 61, 46, 0.5)",
        particleGlow: isDark ? "rgba(212, 175, 55, 0.3)" : "rgba(31, 122, 92, 0.3)",
        line: isDark ? "rgba(31, 122, 92, 0.3)" : "rgba(15, 61, 46, 0.2)",
        wave: isDark ? "rgba(212, 175, 55, 0.1)" : "rgba(31, 122, 92, 0.08)",
      }
    }

    // Animation loop
    const animate = () => {
      const colors = getColors()
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      timeRef.current += 0.01

      // Draw ambient wave motion (climate systems & adaptation)
      ctx.save()
      for (let i = 0; i < 3; i++) {
        const waveY = window.innerHeight * (0.3 + i * 0.2)
        const amplitude = 30 + i * 10
        const frequency = 0.003 - i * 0.0005

        ctx.beginPath()
        ctx.moveTo(0, waveY)

        for (let x = 0; x <= window.innerWidth; x += 5) {
          const y = waveY + Math.sin(x * frequency + timeRef.current + i) * amplitude
          ctx.lineTo(x, y)
        }

        ctx.strokeStyle = colors.wave
        ctx.lineWidth = 2
        ctx.stroke()
      }
      ctx.restore()

      // Draw flowing lines (market systems & partnerships)
      flowingLinesRef.current.forEach((line) => {
        ctx.save()
        ctx.globalAlpha = line.opacity
        ctx.strokeStyle = colors.line
        ctx.lineWidth = 1.5
        ctx.beginPath()

        // Create smooth curves through points
        for (let i = 0; i < line.points.length; i++) {
          const point = line.points[i]
          const animatedY = point.y + Math.sin(timeRef.current * line.speed + point.offset) * 15

          if (i === 0) {
            ctx.moveTo(point.x, animatedY)
          } else {
            const prevPoint = line.points[i - 1]
            const prevY = prevPoint.y + Math.sin(timeRef.current * line.speed + prevPoint.offset) * 15
            const cpX = (prevPoint.x + point.x) / 2
            const cpY = (prevY + animatedY) / 2
            ctx.quadraticCurveTo(prevPoint.x, prevY, cpX, cpY)
          }
        }

        ctx.stroke()
        ctx.restore()

        // Branch effect - lines occasionally split like roots
        if (Math.random() > 0.995 && line.points.length < 8) {
          const lastPoint = line.points[line.points.length - 1]
          line.points.push({
            x: lastPoint.x + (Math.random() - 0.5) * 80,
            y: lastPoint.y + (Math.random() - 0.5) * 80,
            offset: Math.random() * Math.PI * 2,
          })
        }
      })

      // Draw and update particles (farmers, communities, enterprises)
      particlesRef.current.forEach((particle) => {
        // Pulsing effect
        const pulse = Math.sin(timeRef.current + particle.pulseOffset) * 0.5 + 0.5
        const currentSize = particle.size * (0.7 + pulse * 0.3)
        const currentOpacity = particle.opacity * (0.8 + pulse * 0.2)

        // Mouse interaction - subtle repulsion
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 150) {
          const force = (150 - distance) / 150
          particle.x -= (dx / distance) * force * 2
          particle.y -= (dy / distance) * force * 2
        }

        // Draw particle with glow
        ctx.save()
        ctx.globalAlpha = currentOpacity

        // Glow effect
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, currentSize * 3)
        gradient.addColorStop(0, colors.particleGlow)
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)")
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, currentSize * 3, 0, Math.PI * 2)
        ctx.fill()

        // Core particle
        ctx.fillStyle = colors.particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, currentSize, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()

        // Update particle position (slow upward growth)
        particle.y += particle.speedY
        particle.x += particle.speedX

        // Wrap around screen
        if (particle.y < -10) particle.y = window.innerHeight + 10
        if (particle.y > window.innerHeight + 10) particle.y = -10
        if (particle.x < -10) particle.x = window.innerWidth + 10
        if (particle.x > window.innerWidth + 10) particle.x = -10

        // Connect nearby particles (community connections)
        particlesRef.current.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120 && distance > 0) {
            ctx.save()
            ctx.globalAlpha = (1 - distance / 120) * 0.15 * particle.opacity
            ctx.strokeStyle = colors.line
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [theme, systemTheme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10"
      style={{ opacity: 0.6 }}
      aria-hidden="true"
    />
  )
}
