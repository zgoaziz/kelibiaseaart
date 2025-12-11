"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface WavyBackgroundProps {
  colors?: string[]
  backgroundFill?: string
  waveOpacity?: number
  blur?: number
  waveWidth?: number
  containerClassName?: string
  className?: string
  children?: React.ReactNode
}

export const WavyBackground = ({
  colors = ["#1a7a8a", "#0d9488", "#14b8a6", "#2dd4bf", "#06b6d4"],
  backgroundFill = "rgba(255, 255, 255, 0.8)",
  waveOpacity = 0.3,
  blur = 8,
  waveWidth = 40,
  containerClassName,
  className,
  children,
}: WavyBackgroundProps) => {
  return (
    <div className={cn("relative w-full overflow-hidden", containerClassName)}>
      {/* Wave SVG Background */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: `blur(${blur}px)`,
        }}
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            {colors.map((color, i) => (
              <stop key={i} offset={`${(i / (colors.length - 1)) * 100}%`} stopColor={color} />
            ))}
          </linearGradient>
          <style>{`
            @keyframes wave {
              0% { d: path('M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z'); }
              50% { d: path('M0,40 Q300,10 600,40 T1200,40 L1200,120 L0,120 Z'); }
              100% { d: path('M0,60 Q300,20 600,60 T1200,60 L1200,120 L0,120 Z'); }
            }
            .wave-path {
              animation: wave 4s ease-in-out infinite;
            }
          `}</style>
        </defs>

        {/* Primary wave */}
        <path className="wave-path" fill="url(#gradient)" opacity={waveOpacity} />

        {/* Secondary wave with offset */}
        <path
          d="M0,80 Q300,40 600,80 T1200,80 L1200,120 L0,120 Z"
          fill="url(#gradient)"
          opacity={waveOpacity * 0.5}
          style={{
            animation: "wave 5s ease-in-out infinite 0.5s",
          }}
        />
      </svg>

      {/* Background fill */}
      <div className="absolute inset-0" style={{ backgroundColor: backgroundFill }} />

      {/* Content */}
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}
