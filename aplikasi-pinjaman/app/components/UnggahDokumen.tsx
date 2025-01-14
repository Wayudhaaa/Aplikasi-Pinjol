import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Upload } from 'lucide-react'

export function UnggahDokumen({ formData, updateFormData, nextStep, prevStep }) {
  const handleFileChange = (e) => {
    updateFormData({ dokumenPendukung: e.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Unggah Dokumen Pendukung</h2>
      <div className="space-y-2">
        <Label htmlFor="dokumenPendukung" className="flex items-center">
          <Upload className="w-4 h-4 mr-2" />
          Unggah Dokumen Pendukung (Slip Gaji, Rekening Koran, dll.)
        </Label>
        <Input
          id="dokumenPendukung"
          name="dokumenPendukung"
          type="file"
          onChange={handleFileChange}
          required
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
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

