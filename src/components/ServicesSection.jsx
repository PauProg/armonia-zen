import { Leaf } from "lucide-react"
import { Sparkle } from "lucide-react"
import { Heart } from "lucide-react"

const services = [
    {
        icon: <Heart width={45} height={45} className="text-[#4a6149]" />,
        title: 'Masaje Relajante',
        description: 'Libera tensiones y encuentra la paz interior con nuestro masaje signature de relajación profunda.'
    },
    {
        icon: <Sparkle width={45} height={45} className="text-[#4a6149]" />,
        title: 'Aromaterapia',
        description: 'Experimenta el poder curativo de los aceites esenciales en una sesión que despierta tus sentidos.'
    },
    {
        icon: <Leaf width={45} height={45} className="text-[#4a6149]" />,
        title: 'Masaje con Piedras Calientes',
        description: 'Disfruta del calor terapéutico de las piedras volcánicas que alivian la tensión muscular profunda.'
    },
    {
        icon: <Heart width={45} height={45} className="text-[#4a6149]" />,
        title: 'Reflexología',
        description: 'Equilibra tu energía vital a través de la estimulación de puntos específicos en pies y manos.'
    },
    {
        icon: <Sparkle width={45} height={45} className="text-[#4a6149]" />,
        title: 'Masaje Prenatal',
        description: 'Cuidado especializado para futuras madres, aliviando molestias y promoviendo el bienestar.'
    },
    {
        icon: <Leaf width={45} height={45} className="text-[#4a6149]" />,
        title: 'Terapia de Pareja',
        description: 'Compartan juntos una experiencia única de relajación y conexión en nuestras salas especiales.'
    }
]

export const ServicesSection = () => {
    return (
        <section id="services" className="bg-[#f6f7f6] section">
            <div className="flex items-center justify-center flex-col gap-5 w-6xl text-center">
                <h2 className="sectionh2 mb-9"> Nuestros Servicios </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
                    {
                        services.map((service, key) => (
                            <div key={key} className="flex flex-col gap-3 items-center justify-start px-5 py-6 w-xs md:w-[360px] bg-white rounded-md shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                {service.icon}
                                <h3 className="text-lg mt-2 font-semibold">{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}