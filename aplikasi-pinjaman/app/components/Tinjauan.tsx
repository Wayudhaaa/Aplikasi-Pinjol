import { Button } from "@/components/ui/button"

export function Tinjauan({ formData, prevStep, handleSubmit }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Tinjauan Aplikasi</h2>
      <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
        <p><strong>Nama:</strong> {formData.nama}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Telepon:</strong> {formData.telepon}</p>
        <p><strong>Alamat:</strong> {formData.alamat}</p>
        <p><strong>Jumlah Pinjaman:</strong> Rp {parseInt(formData.jumlahPinjaman).toLocaleString('id-ID')}</p>
        <p><strong>Tujuan Pinjaman:</strong> {formData.tujuanPinjaman}</p>
        <p><strong>Status Pekerjaan:</strong> {formData.statusPekerjaan}</p>
        <p><strong>Pendapatan Tahunan:</strong> Rp {parseInt(formData.pendapatanTahunan).toLocaleString('id-ID')}</p>
        <p><strong>Nomor KTP:</strong> {formData.nomorKTP}</p>
        <p><strong>Foto KTP:</strong> {formData.fotoDokumen ? 'Terunggah' : 'Belum diunggah'}</p>
        <p><strong>Dokumen Pendukung:</strong> {formData.dokumenPendukung ? 'Terunggah' : 'Belum diunggah'}</p>
      </div>
      <div className="flex justify-between">
        <Button onClick={prevStep} variant="outline">Kembali</Button>
        <Button onClick={handleSubmit} className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 transition-all duration-300">
          Kirim Aplikasi
        </Button>
      </div>
    </div>
  )
}

