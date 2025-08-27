"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play } from "lucide-react"
import { useState, useEffect } from "react"

interface Video {
  id: number
  title: string
  youtubeId: string
  thumbnail: string
}

export function VideoSection() {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const response = await fetch("/data/videos.json")
        const data = await response.json()
        setVideos(data.videos)
      } catch (error) {
        console.error("Failed to load videos:", error)
      } finally {
        setLoading(false)
      }
    }

    loadVideos()
  }, [])

  if (loading) {
    return (
      <section id="sessions" className="py-12">
        <div className="text-center">
          <div className="animate-pulse">Loading sessions...</div>
        </div>
      </section>
    )
  }

  return (
    <section id="sessions" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          DJ <span className="text-primary">Sessions</span>
        </h2>
        <p className="text-muted-foreground text-lg">MIRÁ MIS ÚLTIMOS MIXES</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video) => (
          <Card
            key={video.id}
            className="overflow-hidden bg-card border-border group hover:border-primary/50 transition-all cursor-pointer aspect-square"
            onClick={() => window.open(`https://youtube.com/watch?v=${video.youtubeId}`, "_blank")}
          >
            <div className="relative h-full">
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to placeholder if YouTube thumbnail fails
                  e.currentTarget.src = "/techno-dj-session.png"
                }}
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="h-8 w-8 text-white mb-2" />
                <span className="text-white text-xs text-center px-2 font-medium">{video.title}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-6">
        <Button variant="outline" onClick={() => window.open("https://youtube.com/@your-channel", "_blank")}>
          <ExternalLink className="h-4 w-4 mr-2" />
          View All Sessions
        </Button>
      </div>
    </section>
  )
}
