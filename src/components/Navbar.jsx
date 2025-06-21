import { Leaf } from "lucide-react"

const navElements = [
    {
        name: 'Inicio',
        href: '#hero'
    },
    {
        name: 'Sobre Nosotros',
        href: '#about'
    },
    {
        name: 'Servicios',
        href: '#services'
    },
    {
        name: 'Galería',
        href: '#gallery'
    },
    {
        name: 'Reserva',
        href: '#booking'
    },
    {
        name: 'Contacto',
        href: '#contact'
    }
]

export const Navbar = () => {
    return (
        <nav className="w-full bg-[#fafafa]/90 backdrop-blur-md fixed top-0 z-50 py-4 px-4 flex items-center justify-center border-b-1 border-[#c7d0c7]">
            <div className="w-7xl flex items-center justify-between">
                <a href='#' className="flex items-center justify-center gap-1 text-[#4a6149]">
                    <Leaf width={30} height={30} />
                    <span className="text-xl md:text-2xl text-[#454241]">Armonía Zen</span>
                </a>

                <ul className="hidden md:flex items-center justify-center gap-5 text-lg text-stone-600 hover:text-sage-600 transition-colors">
                    {
                        navElements.map((element, key) => (
                            <li key={key}>
                                <a href={element.href}>{element.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}