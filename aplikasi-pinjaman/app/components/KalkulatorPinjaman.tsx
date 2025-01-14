import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from 'lucide-react'

export function KalkulatorPinjaman({ onClose }) {
  const [jumlahPinjaman, setJumlahPinjaman] = useState('')
  const [jangkaWaktu, setJangkaWaktu] = useState('')
  const [sukuBunga, setSukuBunga] = useState('10')
  const [angsuranBulanan, setAngsuranBulanan] = useState(0)

  const hitungAngsuran = () => {
    const p = parseFloat(jumlahPinjaman)
    const r = parseFloat(sukuBunga) / 100 / 12
    const n = parseFloat(jangkaWaktu)

    if (p && r && n) {
      const angsuran = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      setAngsuranBulanan(Math.round(angsuran))
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Kalkulator Pinjaman</CardTitle>
          <Button variant="ghost" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="jumlahPinjaman">Jumlah Pinjaman (Rp)</Label>
            <Input
              id="jumlahPinjaman"
              type="number"
              value={jumlahPinjaman}
              onChange={(e) => setJumlahPinjaman(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="jangkaWaktu">Jangka Waktu (bulan)</Label>
            <Input
              id="jangkaWaktu"
              type="number"
              value={jangkaWaktu}
              onChange={(e) => setJangkaWaktu(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sukuBunga">Suku Bunga Tahunan (%)</Label>
            <Input
              id="sukuBunga"
              type="number"
              value={sukuBunga}
              onChange={(e) => setSukuBunga(e.target.value)}
            />
          </div>
          <Button onClick={hitungAngsuran} className="w-full">Hitung Angsuran</Button>
          {angsuranBulanan > 0 && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md">
              <p className="text-lg font-semibold">Angsuran Bulanan:</p>
              <p className="text-2xl font-bold text-green-600">
                Rp {angsuranBulanan.toLocaleString('id-ID')}
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

