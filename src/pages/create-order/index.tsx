"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Menu, Search, Edit, Trash2, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const buyurtmalar = [
  {
    id: 1,
    buyurtmaRaqami: "ORD-001",
    mijozNomi: "Alisher Karimov",
    mahsulot: "Laptop Dell",
    miqdor: 2,
    narx: 15000000,
    status: "Kutilmoqda",
    sana: "2024-01-15",
  },
  {
    id: 2,
    buyurtmaRaqami: "ORD-002",
    mijozNomi: "Nodira Tosheva",
    mahsulot: "iPhone 15",
    miqdor: 1,
    narx: 12000000,
    status: "Tasdiqlangan",
    sana: "2024-01-14",
  },
  {
    id: 3,
    buyurtmaRaqami: "ORD-003",
    mijozNomi: "Bobur Rahimov",
    mahsulot: "Samsung TV",
    miqdor: 1,
    narx: 8500000,
    status: "Yetkazilgan",
    sana: "2024-01-13",
  },
  {
    id: 4,
    buyurtmaRaqami: "ORD-004",
    mijozNomi: "Malika Nazarova",
    mahsulot: "MacBook Pro",
    miqdor: 1,
    narx: 25000000,
    status: "Bekor qilingan",
    sana: "2024-01-12",
  },
]

export default function OrderCreatePage() {
  const [formData, setFormData] = useState({
    mijozNomi: "",
    mahsulot: "",
    miqdor: "",
    narx: "",
    izoh: "",
  })

  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat("uz-UZ").format(amount) + " so'm"
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Kutilmoqda":
        return "bg-yellow-100 text-yellow-800"
      case "Tasdiqlangan":
        return "bg-blue-100 text-blue-800"
      case "Yetkazilgan":
        return "bg-green-100 text-green-800"
      case "Bekor qilingan":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Yangi buyurtma:", formData)
    // Reset form
    setFormData({
      mijozNomi: "",
      mahsulot: "",
      miqdor: "",
      narx: "",
      izoh: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5" />
            </Button>
            <h1 className="text-2xl font-bold text-blue-600">IMB TECH</h1>
          </div>

          <div className="flex items-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Buyurtma
            </Button>
            <Avatar>
              <AvatarFallback className="bg-gray-200 text-gray-700">IMB</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-16 bg-white border-r border-gray-200 py-6">
          <nav className="flex flex-col items-center space-y-6">
            <Button variant="ghost" size="icon" className="text-gray-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className="bg-blue-100 text-blue-600">
              <Plus className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
            </Button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-gray-800">Yangi buyurtma yaratish</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="mijozNomi">Mijoz nomi</Label>
                      <Input
                        id="mijozNomi"
                        placeholder="Mijoz nomini kiriting"
                        value={formData.mijozNomi}
                        onChange={(e) => handleInputChange("mijozNomi", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mahsulot">Mahsulot</Label>
                      <Select onValueChange={(value) => handleInputChange("mahsulot", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Mahsulotni tanlang" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="laptop">Laptop Dell</SelectItem>
                          <SelectItem value="iphone">iPhone 15</SelectItem>
                          <SelectItem value="samsung-tv">Samsung TV</SelectItem>
                          <SelectItem value="macbook">MacBook Pro</SelectItem>
                          <SelectItem value="tablet">iPad</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="miqdor">Miqdor</Label>
                        <Input
                          id="miqdor"
                          type="number"
                          placeholder="1"
                          value={formData.miqdor}
                          onChange={(e) => handleInputChange("miqdor", e.target.value)}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="narx">Narx (so'm)</Label>
                        <Input
                          id="narx"
                          type="number"
                          placeholder="1000000"
                          value={formData.narx}
                          onChange={(e) => handleInputChange("narx", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="izoh">Izoh</Label>
                      <Textarea
                        id="izoh"
                        placeholder="Qo'shimcha ma'lumotlar..."
                        value={formData.izoh}
                        onChange={(e) => handleInputChange("izoh", e.target.value)}
                        rows={3}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      <Plus className="w-4 h-4 mr-2" />
                      Buyurtma yaratish
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Table */}
            <div>
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-semibold text-gray-800">Buyurtmalar ro'yxati</CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input placeholder="Qidirish..." className="pl-10 w-64" />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Buyurtma №</TableHead>
                          <TableHead>Mijoz</TableHead>
                          <TableHead>Mahsulot</TableHead>
                          <TableHead>Narx</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Amallar</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {buyurtmalar.map((buyurtma) => (
                          <TableRow key={buyurtma.id}>
                            <TableCell className="font-medium">{buyurtma.buyurtmaRaqami}</TableCell>
                            <TableCell>{buyurtma.mijozNomi}</TableCell>
                            <TableCell>
                              <div>
                                <div className="font-medium">{buyurtma.mahsulot}</div>
                                <div className="text-sm text-gray-500">Miqdor: {buyurtma.miqdor}</div>
                              </div>
                            </TableCell>
                            <TableCell className="font-semibold text-green-600">{formatPrice(buyurtma.narx)}</TableCell>
                            <TableCell>
                              <Badge className={getStatusColor(buyurtma.status)}>{buyurtma.status}</Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center space-x-2">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-600">
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
