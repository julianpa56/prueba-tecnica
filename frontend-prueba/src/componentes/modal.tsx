import React, { useEffect, useState } from "react";
import type { User } from "../interfaces/user_interface";
import toast, { Toaster } from 'react-hot-toast'

interface ModalWithTableProps {
  isOpen: boolean;
  onClose: () => void;
}



const ModalWithTable: React.FC<ModalWithTableProps> = ({ isOpen, onClose }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const successToast = () => toast.success("Usuario eliminado correctamente");
  const errorToast = () => toast.error("Error al eliminar usuario");

  const deleteUser = (user: User) => {
    fetch("http://localhost:3000/users",
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      }
    ).then((res) => {
      if (res.ok) {
        successToast();
        setUsers((prevUsers) => prevUsers.filter((u) => u.email !== user.email));
      } else {
        errorToast();
      }
    }).catch(() => {
      errorToast();
    }
    );
  };

    useEffect(() => {
      if (!isOpen) return;

      setLoading(true);
      fetch("http://localhost:3000/users")
        .then((res) => res.json())
        .then((data: User[]) => {
          setUsers(data);
          setLoading(false);
          console.log("Usuarios obtenidos:", data);
        })
        .catch(() => {
          // console.log("Sin usuarios");
          setUsers([]);
          setLoading(false);
        });
    }, [isOpen]);

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="bg-white p-6 rounded-2xl shadow-lg max-w-3xl w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Usuarios</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl">
              &times;
            </button>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-48">
              <p className="text-center text-gray-600">Cargando...</p>
            </div>
          ) : (

            users.length === 0 ? (
              <div className="flex items-center justify-center h-48">
                <p className="text-center text-gray-600">No hay usuarios disponibles.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Nombre</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Correo</th>
                      <th className="px-4 py-2 text-left text-sm font-medium text-gray-700"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.email} className="border-t">
                        <td className="px-4 py-2 text-sm text-gray-800 font-medium">{user.name}</td>
                        <td className="px-4 py-2 text-sm text-gray-800 font-medium">{user.email}</td>
                        <td className="px-4 py-2 text-sm text-gray-800 font-medium">
                          <button
                            className="w-8 h-8 flex items-center justify-center bg-red-400 rounded-full hover:bg-red-700 hover:cursor-pointer transition-colors duration-200"
                            aria-label="Eliminar"
                            onClick={() => deleteUser(user)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4 text-white"
                              fill="none"
                              viewBox="0 0 23 23"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>

                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          )}
        </div>
        <div><Toaster position="top-right" /></div>
      </div>
    );
  };

  export default ModalWithTable;