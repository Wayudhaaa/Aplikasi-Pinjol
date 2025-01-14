import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function Konfirmasi() {
  return (
    <motion.div 
      className="text-center space-y-4"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
      <h2 className="text-2xl font-semibold">Aplikasi Terkirim</h2>
      <p className="text-gray-600">
        Terima kasih atas pengajuan pinjaman Anda. Kami akan meninjau informasi Anda dan menghubungi Anda segera.
      </p>
    </motion.div>
  )
}

