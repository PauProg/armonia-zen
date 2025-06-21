

export const BookingSection = () => {
    return (
        <section id="booking" className="bg-[#f6f7f6] section">
            <div className="flex items-center justify-center flex-col gap-5 w-6xl text-center">
                <h2 className="sectionh2 mb-9"> Reserva tu Cita </h2>
                <form action='' className="bg-white p-8 flex flex-col gap-5 w-auto md:w-xl justify-center items-center rounded-lg shadow-lg">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 w-full">
                        <label className="label w-full md:w-1/2">
                            Nombre completo
                            <input type="text" placeholder="Tu nombre" className="input" required />
                        </label>
                        <label className="label w-full md:w-1/2">
                            Email
                            <input type="email" placeholder="Tu correo" className="input" required />
                        </label>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start gap-4 w-full">
                        <label className="label w-full md:w-1/2">
                            Servicio
                            <select className="input" required>
                                <option value=""> Selecciona un servicio </option>
                                <option value="masaje-relajante"> Masaje relajante </option>
                                <option value="aromaterapia"> Aromaterapia </option>
                                <option value="masaje-piedras-calientes"> Masaje con Piedras Calientes </option>
                                <option value="reflexologia"> Reflexología </option>
                                <option value="masaje-prenatal"> Masaje Prenatal </option>
                                <option value="terapia-pareja"> Terapia de Pareja </option>
                            </select>
                        </label>
                        <label className="label w-full md:w-1/2">
                            Fecha preferida
                            <input type="date" className="input" required />
                        </label>
                    </div>

                    <label className="label w-full">
                        Mensaje adicional
                        <textarea 
                            rows="4" 
                            placeholder="Cuéntanos sobre tus necesidades específicas o preferencias..." 
                            className="input" 
                            style={{resize: 'vertical'}} 
                            required 
                        />
                    </label>

                    <button type="submit" className="bg-[#4a6149] hover:bg-[#3d4f3c] text-white rounded-full w-full px-5 py-2 transition-all duration-300 text-lg"> Enviar Reserva </button>
                </form>
            </div>
        </section>
    )
}