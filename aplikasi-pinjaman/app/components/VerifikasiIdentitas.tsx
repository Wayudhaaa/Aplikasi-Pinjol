import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, Upload } from 'lucide-react'

export function VerifikasiIdentitas({ formData, updateFormData, nextStep, prevStep }) {
  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value })
  }

  const handleFileChange = (e) => {
    updateFormData({ fotoDokumen: e.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Verifikasi Identitas</h2>
      <div className="space-y-2">
        <Label htmlFor="nomorKTP" className="flex items-center">
          <CreditCard className="w-4 h-4 mr-2" />
          Nomor KTP
        </Label>
        <Input
          id="nomorKTP"
          name="nomorKTP"
          value={formData.nomorKTP}
          onChange={handleChange}
          required
          className="bg-gray-50"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="fotoDokumen" className="flex items-center">
          <Upload className="w-4 h-4 mr-2" />
          Unggah Foto KTP
        </Label>
        <Input
          id="fotoDokumen"
          name="fotoDokumen"
          type="file"
          onChange={handleFileChange}
          required
          accept="image/*"
          className="bg-gray-50"
        />
      </div>
      <div className="flex justify-between">
        <Button type="button" onClick={prevStep} variant="outline">Kembali</Button>
        <Button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
          Lanjutkan
        </Button>
      </div>
    </form>
  )
}

