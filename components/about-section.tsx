import { Card } from "@/components/ui/card"
import { Skull, Heart, Music } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">
          About <span className="text-primary">Marcos</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <Card className="p-8 bg-card border-border">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Music className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Mi Historia</h3>
            </div>

            <p className="text-card-foreground leading-relaxed">
              Apasionado por la música electrónica desde que tengo memoria, cuando mi primer MP3 me abrió los oídos a
              sonidos que marcaron mis gustos para siempre. Desde entonces, el techno y sus variantes se convirtieron en
              una especie de motor y mi manera de conectar con algo más profundo.
            </p>

            <p className="text-card-foreground leading-relaxed">
              De forma autodidacta y con actitud, estoy aprendiendo a mezclar este maravilloso universo sonoro. Cada
              sesión que comparto acá es parte de ese camino: imperfecto, real, y lleno de energía.
            </p>
          </div>
        </Card>

        <Card className="p-8 bg-card border-border">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Skull className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Filosofía</h3>
            </div>

            <p className="text-card-foreground leading-relaxed">
              Soy alguien que tiene muy presente a la muerte. Y por eso, más que nunca, creo que estamos acá para hacer
              lo que nos gusta, sin esperar a que sea demasiado tarde.
            </p>

            <div className="flex items-center space-x-2 pt-4">
              <Heart className="h-5 w-5 text-primary" />
              <p className="text-card-foreground">
                Gracias por estar acá. ¡Les mando un gran abrazo! — <strong>Marcos</strong> 🖤
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
