import { Star } from "lucide-react"

const opinions = [
    {
        stars: [<Star width={23} height={23} />, <Star width={23} height={23} />, <Star width={23} height={23} />, <Star width={23} height={23} />, <Star width={23} height={23} />],
        description: '"Una experiencia absolutamente transformadora. El ambiente es perfecto y los terapeutas son excepcionales."',
        name: 'María González'
    },
    {
        stars: [<Star width={23} height={23} />, <Star width={23} height={23} />, <Star width={23} height={23} />, <Star width={23} height={23} />, <Star width={23} height={23} />],
        description: '"Armonía Zen se ha convertido en mi refugio mensual. Cada visita es un regalo para mi bienestar."',
        name: 'Carlos Ruiz'
    },
    {
        stars: [<Star width={23} height={23} />, <Star width={23} height={23} />, <Star width={23} height={23} />, <Star width={23} height={23} />],
        description: '"El masaje prenatal fue exactamente lo que necesitaba. Me sentí cuidada y completamente relajada."',
        name: 'Ana Martínez'
    }
]

export const OpinionsSection = () => {
    return (
        <section id="services" className="bg-[#f5f5f4] section">
            <div className="flex items-center justify-center flex-col gap-5 w-6xl text-center">
                <h2 className="sectionh2 mb-9"> Lo que Dicen Nuestros Clientes </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
                    {
                        opinions.map((opinions, key) => (
                            <div className="text-left bg-white px-5 py-6 rounded-lg shadow-lg flex flex-col items-start justify-center gap-4" key={key}>
                                <div className="flex">
                                    {
                                        opinions.stars.map((star, key) => (
                                            <span key={key}>
                                                {star}
                                            </span>
                                        ))
                                    }
                                </div>
                                <p className="italic">{opinions.description}</p>
                                <p className="font-semibold">- {opinions.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}