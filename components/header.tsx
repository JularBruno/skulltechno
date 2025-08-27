import { Skull } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              {/* <Skull className="h-8 w-8 text-primary" /> */}
              {/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" /> */}
              <img src="/logo.png" // replace with your image path
                alt="icon"
                width={80}
                height={80} 
                // className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full" 
                />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">SKULL TECHNO</h1>
              <p className="text-sm text-muted-foreground">Underground Radio</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#radio" className="text-foreground hover:text-primary transition-colors">
              Radio
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              Info
            </a>
            <a href="#sessions" className="text-foreground hover:text-primary transition-colors">
              Sessions
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
