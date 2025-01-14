import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCard, Briefcase, DollarSign } from 'lucide-react'

export function DetailPinjaman({ formData, updateFormData, nextStep, prevStep }) {
  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value })
  }

  const handleSelectChange = (name) => (value) => {
    updateFormData({ [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Detail Pinjaman</h2>
      <div className="space-y-2">
        <Label htmlFor="jumlahPinjaman" className="flex items-center">
          <CreditCard className="w-4 h-4 mr-2" />
          Jumlah Pinjaman (Rp)
        </Label>
        <Input
          id="jumlahPinjaman"
          name="jumlahPinjaman"
          type="number"
          value={formData.jumlahPinjaman}
          onChange={handleChange}
          required
          className="bg-gray-50"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="tujuanPinjaman" className="flex items-center">
          <Briefcase className="w-4 h-4 mr-2" />
          Tujuan Pinjaman
        </Label>
        <Select name="tujuanPinjaman" onValueChange={handleSelectChange('tujuanPinjaman')} required>
          <SelectTrigger className="bg-gray-50">
            <SelectValue placeholder="Pilih tujuan pinjaman" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rumah">Pembelian Rumah</SelectItem>
            <SelectItem value="kendaraan">Pembelian Kendaraan</SelectItem>
            <SelectItem value="bisnis">Modal Usaha</SelectItem>
            <SelectItem value="pendidikan">Pendidikan</SelectItem>
            <SelectItem value="lainnya">Lainnya</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="statusPekerjaan" className="flex items-center">
          <Briefcase className="w-4 h-4 mr-2" />
          Status Pekerjaan
        </Label>
        <Select name="statusPekerjaan" onValueChange={handleSelectChange('statusPekerjaan')} required>
          <SelectTrigger className="bg-gray-50">
            <SelectValue placeholder="Pilih status pekerjaan" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="karyawan">Karyawan</SelectItem>
            <SelectItem value="wiraswasta">Wiraswasta</SelectItem>
            <SelectItem value="tidakBekerja">Tidak Bekerja</SelectItem>
            <SelectItem value="pensiun">Pensiun</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="pendapatanTahunan" className="flex items-center">
          <DollarSign className="w-4 h-4 mr-2" />
          Pendapatan Tahunan (Rp)
        </Label>
        <Input
          id="pendapatanTahunan"
          name="pendapatanTahunan"
          type="number"
          value={formData.pendapatanTahunan}
          onChange={handleChange}
          required
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

