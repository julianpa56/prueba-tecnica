
import Formulario from '../componentes/formulario'

function HomePage() {


    
    return (
        <div className="overflow-hidden py-24 sm:py-32 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 justify-center items-center">
                    <div className="lg:pt-4 lg:pr-8">
                        <div className="lg:max-w-lg justify-items-center">
                            <h2 className="text-base/7 font-semibold text-indigo-600">Prueba técnica</h2>
                            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                                Registro de usuarios
                            </p>
                            <p className="mt-6 text-sm sm:text-lg/8 text-gray-600 text-balance">
                                Sistema de registro de usuarios para una aplicación web. Completa el formulario a continuación para registrarte y mantener tu información segura
                            </p>
                            <img src="https://www.diarioelzondasj.com.ar/content/bucket/9/310109w790h790c.jpg.webp" alt="Logo Municipalidad de Capital"
                                className='size-60 sm:size-100 object-cover '
                            />
                        </div>
                    </div>

                    <Formulario />
                    

                </div>
            </div>
            <footer className='fixed bottom-0 left-0 w-full'>
                <div className="bg-indigo-800 text-white py-4 text-end pe-5">
                    <p className="text-xs font-bold">Desarrollado por Julián Peña</p>
                </div>
            </footer>
        </div>
    )
}

export default HomePage