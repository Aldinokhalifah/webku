'use client'

import { useState } from 'react'
import Button from './ui/Button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

interface FormData {
    name: string
    email: string
    phone: string
    message: string
}

interface FormErrors {
    [key: string]: string
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
  
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState<FormErrors>({})

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {}
        
        if (!formData.name.trim()) {
        newErrors.name = 'Nama harus diisi'
        }
        
        if (!formData.email.trim()) {
        newErrors.email = 'Email harus diisi'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Format email tidak valid'
        }
        
        if (!formData.phone.trim()) {
        newErrors.phone = 'Nomor telepon harus diisi'
        }
        
        if (!formData.message.trim()) {
        newErrors.message = 'Pesan harus diisi'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        
        if (!validateForm()) {
        return
        }

        setIsSubmitting(true)

        try {
        const res = await fetch('/api/contactform', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })

        const data = await res.json()

        if (!res.ok) {
            throw new Error(data.error || 'Terjadi kesalahan')
        }

        setFormData({ name: '', email: '', phone: '', message: '' })
        alert('Pesan Anda telah berhasil dikirim!')
        } catch  {
        alert('Gagal mengirim pesan. Silakan coba lagi.')
        } finally {
        setIsSubmitting(false)
        }
    }

    return (
        <section id="kontak" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-blue-900" data-aos="fade-up">
            Hubungi Saya
            </h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div className="mb-4">
                <Input
                type="text"
                name="name"
                placeholder="Nama Anda"
                value={formData.name}
                onChange={handleChange}
                required
                className={`text-sm md:text-base ${errors.name ? 'border-red-500' : ''}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
                <Input
                type="email"
                name="email"
                placeholder="Email Anda"
                value={formData.email}
                onChange={handleChange}
                required
                className={`text-sm md:text-base ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
                <Input
                type="tel"
                name="phone"
                placeholder="Nomor Telepon"
                value={formData.phone}
                onChange={handleChange}
                required
                className={`text-sm md:text-base ${errors.phone ? 'border-red-500' : ''}`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
            <div className="mb-4">
                <Textarea
                name="message"
                placeholder="Pesan Anda"
                value={formData.message}
                onChange={handleChange}
                required
                className={`text-sm md:text-base ${errors.message ? 'border-red-500' : ''}`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            <Button 
                type="submit" 
                className="w-full text-sm md:text-base bg-red-600 hover:bg-red-700 text-white" 
                variant="primary" 
                size="md"
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
            </Button>
            </form>
        </div>
        </section>
    )
}