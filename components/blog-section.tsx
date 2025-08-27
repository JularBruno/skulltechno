import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Checkeate ésta",
      description:
        "Mirá una radio rusa super cool de techno rave en RadioGarden",
      image: "/rusia.jpeg",
      link: "https://radio.garden/listen/101-ru-rave/BTKHU96p",
    },
    {
      id: 2,
      title: "Mirate mi último videito",
      description: "En mi canal de youtube.",
      image: "/skull-with-headphones-dark-aesthetic.png",
      link: "#",
    },
    {
      id: 3,
      title: "Aca me quedé sin ideas",
      description:
        "The technical and creative process behind creating a 24/7 techno radio stream from my DJ console sessions.",
      image: "/dj-mixing-console-dark-studio-setup.png",
      link: "#",
    },
  ]

  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">
        Latest from the <span className="text-primary">Underground</span>
      </h2>
      <div className="space-y-6 max-w-4xl mx-auto">
        {blogPosts.map((post) => (
          <article key={post.id} className="bg-card border border-border rounded-lg p-4 md:p-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
              <div className="flex-shrink-0 w-full sm:w-auto">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-lg object-cover bg-muted"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">{post.title}</h3>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">{post.description}</p>
                <div className="sm:hidden">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/20 hover:border-primary hover:bg-primary/10 bg-transparent text-white w-full"
                    asChild
                  >
                    <a href={post.link} className="flex items-center justify-center gap-2">
                      Mirá mas
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="hidden sm:block flex-shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/20 hover:border-primary hover:bg-primary/10 bg-transparent text-white"
                  asChild
                >
                  <a href={post.link} className="flex items-center gap-2">
                    Mirá mas
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
