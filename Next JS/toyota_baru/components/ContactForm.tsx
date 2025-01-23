'use client'

import { useState } from 'react'
import Button from './ui/Button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'


export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here (e.g., send data to server)
        console.log('Form submitted:', formData)
        // Reset form after submission
        setFormData({ name: '', email: '', phone: '', message: '' })
    }

    return (
        <section id="kontak" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-blue-900" data-aos="fade-up">Hubungi Saya</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div className="mb-4">
                <Input
                type="text"
                name="name"
                placeholder="Nama Anda"
                value={formData.name}
                onChange={handleChange}
                required
                className="text-sm md:text-base"
                />
            </div>
            <div className="mb-4">
                <Input
                type="email"
                name="email"
                placeholder="Email Anda"
                value={formData.email}
                onChange={handleChange}
                required
                className="text-sm md:text-base"
                />
            </div>
            <div className="mb-4">
                <Input
                type="tel"
                name="phone"
                placeholder="Nomor Telepon"
                value={formData.phone}
                onChange={handleChange}
                required
                className="text-sm md:text-base"
                />
            </div>
            <div className="mb-4">
                <Textarea
                name="message"
                placeholder="Pesan Anda"
                value={formData.message}
                onChange={handleChange}
                required
                className="text-sm md:text-base"
                />
            </div>
            <Button type="submit" className="w-full text-sm md:text-base bg-red-600 hover:bg-red-700 text-white" variant="primary" size="md">Kirim Pesan</Button>
            </form>
        </div>
        </section>
    )
}

