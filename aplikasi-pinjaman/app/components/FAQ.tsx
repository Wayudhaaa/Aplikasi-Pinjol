import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { X } from 'lucide-react'

export function FAQ({ onClose }) {
  const faqItems = [
    {
      question: "Apa syarat untuk mengajukan pinjaman?",
      answer: "Syarat umum untuk mengajukan pinjaman meliputi: Warga Negara Indonesia, berusia minimal 21 tahun, memiliki pekerjaan atau usaha tetap, dan memiliki rekening bank aktif."
    },
    {
      question: "Berapa lama proses persetujuan pinjaman?",
      answer: "Proses persetujuan pinjaman biasanya memakan waktu 1-3 hari kerja, tergantung pada kelengkapan dokumen yang Anda berikan."
    },
    {
      question: "Apakah saya bisa melunasi pinjaman lebih cepat?",
      answer: "Ya, Anda dapat melunasi pinjaman lebih cepat. Namun, ada kemungkinan dikenakan biaya pelunasan dipercepat. Silakan hubungi tim layanan pelanggan kami untuk informasi lebih lanjut."
    },
    {
      question: "Apa yang terjadi jika saya terlambat membayar angsuran?",
      answer: "Keterlambatan pembayaran dapat mengakibatkan denda dan berpotensi mempengaruhi skor kredit Anda. Jika Anda mengalami kesulitan pembayaran, segera hubungi kami untuk mendiskusikan opsi yang tersedia."
    },
    {
      question: "Bagaimana cara menghubungi layanan pelanggan?",
      answer: "Anda dapat menghubungi layanan pelanggan kami melalui telepon di nomor 0800-1234-5678, email di support@pinjamanonline.com, atau melalui fitur chat di aplikasi kami."
    }
  ]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-2xl max-h-[80vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between sticky top-0 bg-white z-10">
          <CardTitle>Pertanyaan yang Sering Diajukan (FAQ)</CardTitle>
          <Button variant="ghost" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  )
}

