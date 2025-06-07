import Input from './ui/Input'
import Label from './ui/Label'
import Button from './ui/Button'

function Formulario() {
  return (
    <>
    <div className='p-20 bg-indigo-100 rounded-lg shadow-lg w-full h-fit'>
        <h1 className='text-3xl font-bold text-start text-gray-700'>Formulario de Registro</h1>
        <form action="" method="post"
        className='p-4 '
        >
            <div className="mt-6 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3 text-left">
                <Label>
                    Nombre
                </Label>
                <Input placeholder='Julián Peña'/>
                </div>
            </div>
            <div className="mt-5 mb-7 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3 text-left">
                <Label>
                    Correo Electrónico
                </Label>
                <Input placeholder='julianpa56@gmail.com'/>
                </div>
            </div>
            <Button>
                Registrar
            </Button>

        </form>
            </div> 
    </>
  )
}

export default Formulario