import { Mail } from "lucide-react"
import { Clock } from "lucide-react"
import { Phone } from "lucide-react"
import { MapPin } from "lucide-react"

const contactInfo = [
    {
        icon: <MapPin className="mt-1 text-[#4a6149]" />,
        title: 'Dirección',
        details: [
            'Calle de la Tranquilidad 123',
            '28001 Madrid, España'
        ]
    },
    {
        icon: <Phone className="mt-1 text-[#4a6149]" />,
        title: 'Teléfono',
        details: [
            '+34 91 123 45 67'
        ]
    },
    {
        icon: <Mail className="mt-1 text-[#4a6149]" />,
        title: 'Email',
        details: [
            'info@armoniazenspa.com'
        ]
    },
    {
        icon: <Clock className="mt-1 text-[#4a6149]" />,
        title: 'Horarios',
        details: [
            'Lunes - Viernes: 9:00 - 21:00',
            'Sábados: 10:00 - 20:00',
            'Domingos: 10:00 - 18:00'
        ]
    }
]

export const ContactSection = () => {
    return (
        <section id="contact" className="bg-[#fafaf9] section">
            <div className="flex items-center justify-center flex-col gap-5 w-6xl text-center">
                <h2 className="sectionh2 mb-9"> Nuestro Espacio </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-9 max-w-6xl">
                    <div className="w-full bg-white p-8 rounded-lg flex flex-col items-start justify-center gap-6 shadow-lg text-left">
                        <h3 className="text-xl font-semibold">Información de Contacto</h3>
                        <div className="flex flex-col gap-4">
                            {
                                contactInfo.map((info, key) => (
                                    <div key={key} className="flex justify-start items-start gap-5">
                                        {info.icon}
                                        <div>
                                            <h4 className="font-semibold">{info.title}</h4>
                                            <ul>
                                                {
                                                    info.details.map((detail, key) => (
                                                        <li key={key}>{detail}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-full">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23887.17723648917!2d2.1528576!3d41.549824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ses!4v1750509989552!5m2!1sen!2ses" 
                            width="600" 
                            height="450" 
                            style={{border: '0', borderRadius: '8px'}} 
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}