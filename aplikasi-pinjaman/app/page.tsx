'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { InformasiPribadi } from './components/InformasiPribadi'
import { DetailPinjaman } from './components/DetailPinjaman'
import { VerifikasiIdentitas } from './components/VerifikasiIdentitas'
import { UnggahDokumen } from './components/UnggahDokumen'
import { Tinjauan } from './components/Tinjauan'
import { Konfirmasi } from './components/Konfirmasi'
import { KalkulatorPinjaman } from './components/KalkulatorPinjaman'
import { FAQ } from './components/FAQ'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"

export default function AplikasiPinjaman() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    telepon: '',
    alamat: '',
    jumlahPinjaman: '',
    tujuanPinjaman: '',
    statusPekerjaan: '',
    pendapatanTahunan: '',
    nomorKTP: '',
    fotoDokumen: null,
    dokumenPendukung: null,
  })

  const [showKalkulator, setShowKalkulator] = useState(false)
  const [showFAQ, setShowFAQ] = useState(false)

  const updateFormData = (newData: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...newData }))
  }

  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => prev - 1)

  const handleSubmit = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    nextStep()
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <InformasiPribadi formData={formData} updateFormData={updateFormData} nextStep={nextStep} />
      case 2:
        return <DetailPinjaman formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />
      case 3:
        return <VerifikasiIdentitas formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />
      case 4:
        return <UnggahDokumen formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />
      case 5:
        return <Tinjauan formData={formData} prevStep={prevStep} handleSubmit={handleSubmit} />
      case 6:
        return <Konfirmasi />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl mx-auto overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardTitle className="text-2xl font-bold">Aplikasi Pinjaman Online</CardTitle>
          <CardDescription className="text-blue-100">Isi formulir untuk mengajukan pinjaman</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>
          <div className="mt-4 text-sm text-gray-500 text-center">
            Langkah {step} dari {step < 6 ? 5 : 6}
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <Button onClick={() => setShowKalkulator(true)} variant="outline">
              Kalkulator Pinjaman
            </Button>
            <Button onClick={() => setShowFAQ(true)} variant="outline">
              FAQ
            </Button>
          </div>
        </CardContent>
      </Card>
      {showKalkulator && (
        <KalkulatorPinjaman onClose={() => setShowKalkulator(false)} />
      )}
      {showFAQ && (
        <FAQ onClose={() => setShowFAQ(false)} />
      )}
    </div>
  )
}

