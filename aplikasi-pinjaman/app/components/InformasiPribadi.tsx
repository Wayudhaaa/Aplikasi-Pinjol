import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Mail, Phone, Home } from 'lucide-react'

export function InformasiPribadi({ formData, updateFormData, nextStep }) {
  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Informasi Pribadi</h2>
      <div className="space-y-2">
        <Label htmlFor="nama" className="flex items-center">
          <User className="w-4 h-4 mr-2" />
          Nama Lengkap
        </Label>
        <Input
          id="nama"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          required
          className="bg-gray-50"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="flex items-center">
          <Mail className="w-4 h-4 mr-2" />
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-gray-50"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="telepon" className="flex items-center">
          <Phone className="w-4 h-4 mr-2" />
          Nomor Telepon
        </Label>
        <Input
          id="telepon"
          name="telepon"
          type="tel"
          value={formData.telepon}
          onChange={handleChange}
          required
          className="bg-gray-50"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="alamat" className="flex items-center">
          <Home className="w-4 h-4 mr-2" />
          Alamat
        </Label>
        <Input
          id="alamat"
          name="alamat"
          value={formData.alamat}
          onChange={handleChange}
          required
          className="bg-gray-50"
        />
      </div>
      <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
        Lanjutkan
      </Button>
    </form>
  )
}

