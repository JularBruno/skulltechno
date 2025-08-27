"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"

export function RadioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState([70])
  const [currentTrack, setCurrentTrack] = useState("Live Mix - Dark Techno Session")
  const audioRef = useRef<HTMLAudioElement>(null)

  // Simulate random track changes
  useEffect(() => {
    const tracks = [
      "Live Mix - Dark Techno Session",
      "Underground Beats - Marcos Mix",
      "Skull Radio - Deep House",
      "Techno Vibes - Late Night Set",
      "Electronic Dreams - DJ Session",
    ]

    const interval = setInterval(() => {
      const randomTrack = tracks[Math.floor(Math.random() * tracks.length)]
      setCurrentTrack(randomTrack)
    }, 30000) // Change every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        // In a real implementation, you'd load your audio stream here
        audioRef.current.play()
      }
    }
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
    }
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (value: number[]) => {
    setVolume(value)
    if (audioRef.current) {
      audioRef.current.volume = value[0] / 100
    }
  }

  return (
    <section id="radio" className="text-center">
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-4 text-balance">
          SKULL TECHNO <span className="text-primary">RADIO</span>
        </h2>
        <p className="text-muted-foreground text-lg">24/7 Underground Techno Stream</p>
      </div>

      <Card className="max-w-2xl mx-auto p-8 bg-card border-border">
        <div className="space-y-6">
          {/* Visualizer placeholder */}
          <div className="h-32 bg-secondary rounded-lg flex items-center justify-center relative overflow-hidden">
            {/* <div className={`transition-all duration-500 ${isPlaying ? "animate-pulse scale-110" : "scale-100"}`}>
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-primary"
              >
                <path d="M12 2C8.5 2 6 4.5 6 8c0 2 1 3.5 2 4.5L7 18h10l-1-5.5c1-1 2-2.5 2-4.5 0-3.5-2.5-6-6-6z" />
                <circle cx="9" cy="8" r="1" />
                <circle cx="15" cy="8" r="1" />
                <path d="M12 12v2" />
                <path d="M10 20h4" />
                <path d="M11 22h2" />
              </svg>
            </div> */}
            <div
              className={`transition-all duration-500 ${
                isPlaying ? "animate-pulse scale-110" : "scale-100"
              }`}
            >
              <img
                src="/logo.png" // replace with your image path
                alt="icon"
                width={80}
                height={80}
                className="text-primary"
              />
            </div>
            {isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 border-2 border-primary/30 rounded-full animate-ping"></div>
              </div>
            )}
          </div>

          {/* Track info */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">{currentTrack}</h3>
            <p className="text-muted-foreground">Mixed by Marcos</p>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-4">
            <Button onClick={togglePlay} size="lg" className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90">
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
            </Button>
          </div>

          {/* Volume control */}
          <div className="flex items-center space-x-4 max-w-xs mx-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMute}
              className="text-muted-foreground hover:text-foreground"
            >
              {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
            </Button>
            <Slider value={volume} onValueChange={handleVolumeChange} max={100} step={1} className="flex-1" />
            <span className="text-sm text-muted-foreground w-8">{volume[0]}</span>
          </div>
        </div>

        {/* Hidden audio element - in production, replace with your stream URL */}
        <audio ref={audioRef} loop preload="none">
          {/* Add your audio stream source here */}
          <source src="/placeholder-audio.mp3" type="audio/mpeg" />
        </audio>
      </Card>
    </section>
  )
}
