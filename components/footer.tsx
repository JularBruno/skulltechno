import { Card } from "@/components/ui/card"

export function Footer() {
  return (
    <footer className="bg-secondary/20 py-12 mt-16">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 bg-card/50 border-border">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-4">
              About <span className="text-primary">SKULL TECHNO</span>
            </h2>
          </div>

          <div className="prose prose-invert max-w-none text-center">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Apasionado por la música electrónica desde que tengo memoria, cuando mi primer MP3 me abrió los oídos a
              sonidos que marcaron mis gustos para siempre. Desde entonces, el techno y sus variantes se convirtieron en
              una especie de motor y mi manera de conectar con algo más profundo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              De forma autodidacta y con actitud, estoy aprendiendo a mezclar este maravilloso universo sonoro. Cada
              sesión que comparto acá es parte de ese camino: imperfecto, real, y lleno de energía.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Soy alguien que tiene muy presente a la muerte. Y por eso, más que nunca, creo que estamos acá para hacer
              lo que nos gusta, sin esperar a que sea demasiado tarde.
            </p>
            <p className="text-foreground font-medium">
              Gracias por estar acá. ¡Les mando un gran abrazo! — Marcos 🖤 SKULL
            </p>
          </div>
        </Card>

        <div className="text-center mt-8 text-muted-foreground text-sm">
          <p>&copy; 2024 SKULL TECHNO. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
