import { Leaf } from "lucide-react"
import { Separador } from "./Separador"
import { Facebook } from "lucide-react"
import { Instagram } from "lucide-react"
import { Twitter } from "lucide-react"


export const Footer = () => {
    return (
        <footer className="bg-[#292524] flex flex-col py-13 px-5 items-center justify-center text-white w-full">
            <div className="flex flex-col md:flex-row justify-between items-start w-full gap-7 md:gap-0 max-w-6xl">
                <div className="w-full md:w-3/13">
                    <div className="flex items-center gap-2 mb-4 text-[#7a8f7a]">
                        <Leaf />
                        <span className="text-2xl text-white">Armonía Zen</span>
                    </div>
                    <p className="text-stone-400">Tu oasis de tranquilidad y bienestar en el corazón de la ciudad.</p>
                </div>
                <div className="w-full md:w-3/13">
                    <h3 className="text-md font-semibold mb-3">Enlaces Rápidos</h3>
                    <ul className='flex flex-col gap-2'>
                        <li><a href="#hero" className="text-stone-300 hover:text-stone-500 transition-colors">Inicio</a></li>
                        <li><a href="#about" className="text-stone-300 hover:text-stone-500 transition-colors">Sobre Nosotros</a></li>
                        <li><a href="#services" className="text-stone-300 hover:text-stone-500 transition-colors">Servicios</a></li>
                        <li><a href="#booking" className="text-stone-300 hover:text-stone-500 transition-colors">Reservas</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-3/13">
                    <h3 className="text-md font-semibold mb-3">Servicios</h3>
                    <ul className='flex flex-col gap-2'>
                        <li><a href="#" className="text-stone-300 hover:text-stone-500 transition-colors">Masaje Relajante</a></li>
                        <li><a href="#" className="text-stone-300 hover:text-stone-500 transition-colors">Aromaterapia</a></li>
                        <li><a href="#" className="text-stone-300 hover:text-stone-500 transition-colors">Piedras Calientes</a></li>
                        <li><a href="#" className="text-stone-300 hover:text-stone-500 transition-colors">Reflexología</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-3/13">
                    <h3 className="text-md font-semibold mb-3">Síguenos</h3>
                    <div className="flex gap-3">
                        <a href="https://www.facebook.com" target="_blank" className="text-stone-300 hover:text-stone-500 transition-colors"><Facebook /></a>
                        <a href="https://www.instagram.com" target="_blank" className="text-stone-300 hover:text-stone-500 transition-colors"><Instagram /></a>
                        <a href="https://www.twitter.com" target="_blank" className="text-stone-300 hover:text-stone-500 transition-colors"><Twitter /></a>
                    </div>
                </div>
            </div>
            <Separador />
            <p className="text-stone-400 text-center">© 2024 Armonía Zen. Todos los derechos reservados. | <a href="#" className="hover:text-stone-500 transition-colors">Política de Privacidad</a> | <a href="#" className="hover:text-stone-500 transition-colors">Términos de Servicio</a> | Página desarrollada por <a href="https://pauprog.dev" target="_blank" className="hover:text-stone-500 transition-colors">PauProg</a></p>
        </footer>
    )
}