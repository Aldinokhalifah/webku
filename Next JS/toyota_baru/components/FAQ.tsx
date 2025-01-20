'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
    {
        question: "Apa saja jenis mobil yang tersedia?",
        answer: "Kami menyediakan berbagai jenis mobil, mulai dari sedan, SUV, MPV, hingga hatchback. Semua merek dan model terkemuka tersedia untuk memenuhi kebutuhan Anda."
    },
    {
        question: "Bagaimana proses pembelian mobil?",
        answer: "Proses pembelian mobil dimulai dengan konsultasi, pemilihan mobil, negosiasi harga, pengajuan kredit (jika diperlukan), dan akhirnya penyelesaian dokumen. Saya akan membantu Anda di setiap langkah prosesnya."
    },
    {
        question: "Apakah tersedia opsi kredit?",
        answer: "Ya, kami bekerja sama dengan berbagai lembaga pembiayaan terpercaya untuk menyediakan opsi kredit yang fleksibel dan sesuai dengan kemampuan finansial Anda."
    },
    {
        question: "Berapa lama waktu pengiriman mobil?",
        answer: "Waktu pengiriman bervariasi tergantung pada ketersediaan stok dan model mobil. Untuk mobil yang tersedia di dealer, pengiriman bisa dilakukan dalam 1-3 hari kerja. Untuk pemesanan khusus, mungkin membutuhkan waktu 2-8 minggu."
    },
    {
        question: "Apakah ada garansi untuk mobil yang dibeli?",
        answer: "Ya, semua mobil baru yang kami jual dilengkapi dengan garansi pabrik. Durasi dan cakupan garansi bervariasi tergantung pada merek dan model mobil."
    }
]

export default function FAQ() {
    return (
        <section id="faq" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 text-blue-900" data-aos="fade-up">Pertanyaan yang Sering Diajukan</h2>
            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-sm md:text-base text-blue-900 hover:underline hover:text-blue-950 hover:underline-offset-2">{item.question}</AccordionTrigger>
                <AccordionContent className="text-sm md:text-base font-medium">{item.answer}</AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </div>
        </section>
    )
}

