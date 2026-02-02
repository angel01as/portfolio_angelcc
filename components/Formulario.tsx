'use client'
import { useState } from 'react'
import { sendEmail } from '@/app/actions'

export default function Formulario() {
  const [status, setStatus] = useState('')

  async function handleSubmit(formData: FormData) {
    setStatus('enviando...')
    const res = await sendEmail(formData)
    if (res.success) {
      setStatus('¡Mensaje enviado con éxito!')
    } else {
      setStatus('Error al enviar. Intenta de nuevo.')
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4 bg-slate-900 p-8 rounded-2xl border border-slate-800">
      <div>
        <label className="block text-sm font-medium mb-2">Nombre</label>
        <input name="nombre" type="text" required className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input name="email" type="email" required className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none transition-all" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Mensaje</label>
        <textarea name="mensaje" required className="w-full p-3 h-32 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 outline-none transition-all" />
      </div>
      <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold transition-colors">
        Enviar Mensaje
      </button>
      {status && <p className="text-center mt-4 text-blue-400">{status}</p>}
    </form>
  )
}