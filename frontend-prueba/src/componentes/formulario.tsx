import { useState } from 'react'
import Input from './ui/Input'
import Label from './ui/Label'
import Button from './ui/Button'
import type { User } from '../interfaces/user_interface'
import toast, { Toaster } from 'react-hot-toast'
import ModalWithTable from './modal'



function Formulario() {
    const [user, setUser] = useState<User>({
        name: '',
        email: ''
    })

    const sendNewUser = (user: User) => {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }
        ).then((res) => {
            if (res.ok) {
                successToast()
            } else {
                errorToast()
            }
        }).catch(() => {
            errorToast()
        })
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }

    const successToast = () => toast.success("Usuario registrado correctamente");
    const errorToast = () => toast.error("Error al registrar el usuario");
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    return (
        <div className="p-10 sm:p-20 bg-indigo-100 rounded-lg shadow-lg w-full h-fit">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-start text-gray-700">Formulario de Registro</h1>
            <form
                className="p-4"
                onSubmit={(e) => {
                    e.preventDefault()
                    sendNewUser(user)
                }}
            >
                <div className="mt-6 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3 text-left">
                        <Label>Nombre</Label>
                        <Input
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            placeholder="Julián Peña"
                        />
                    </div>
                </div>
                <div className="mt-5 mb-7 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3 text-left">
                        <Label>Correo Electrónico</Label>
                        <Input
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            placeholder="julianpa56@gmail.com"
                            type='email'
                        />
                    </div>
                </div>
                <Button>Registrar</Button>
            </form>
            <div><Toaster position="top-right" /></div>
            <hr className="my-2 border-gray-300" />
            <button className='text-indigo-500 hover:text-indigo-700 cursor-pointer' onClick={() => setModalOpen(true)}>
                Mostrar lista de usuarios
            </button>
            <ModalWithTable isOpen={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
    )
}

export default Formulario
