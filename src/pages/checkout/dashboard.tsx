"use client"

import { useState } from "react"
import { Plus, Wallet } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const kassalar = [
  {
    id: 1,
    name: "IMZO",
    balance: 2500000,
    isActive: false,
  },
  {
    id: 2,
    name: "INBAZAR",
    balance: 8900000,
    isActive: true,
  },
  {
    id: 3,
    name: "MAKRO",
    balance: 3400000,
    isActive: false,
  },
]

export default function KassaDashboard() {
  const [activeKassa, setActiveKassa] = useState(2)

  const formatBalance = (amount: number) => {
    return new Intl.NumberFormat("uz-UZ").format(amount) + " so'm"
  }

  const handleAddKassa = (v: any) => {
    console.log(v)
  }

  function onClick(id: number) {
    console.log(id)
  }

  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 min-h-screen">
      <main className="p-2">
        <div className="relative mb-8">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
            {kassalar.map((kassa) => (
              <Card
                key={kassa.id}
                className={`min-w-[320px] cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  kassa.isActive
                    ? "border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 shadow-xl bg-card"
                    : "bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-md"
                }`}
                onClick={() => onClick(kassa.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 bg-card`}
                      >
                        <Wallet className="w-6 h-6 text-white" />
                      </div>
                      <h3 className={`font-semibold text-lg ${kassa.isActive ? "text-blue-700" : "text-gray-800"}`}>
                        {kassa.name}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-8">
                    <p className={`text-sm mb-1 ${kassa.isActive ? "text-blue-600" : "text-gray-500"}`}>Balans</p>
                    <p className={`text-xl font-bold ${kassa.isActive ? "text-blue-600" : "text-emerald-600"}`}>
                      {formatBalance(kassa.balance)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Add Kassa Card */}
            <Card
              className="min-w-[320px] cursor-pointer bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-dashed border-gray-300 hover:border-gray-400 hover:bg-gradient-to-br hover:from-gray-200 hover:to-gray-300 transition-all duration-300"
              onClick={handleAddKassa}
            >
              <CardContent className="p-6 flex flex-col items-center justify-center h-full min-h-[200px]">
                <div className="p-4 rounded-full bg-gradient-to-r from-gray-400 to-gray-500 mb-3 mt-10">
                  <Plus className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Kassa qo'shish</h3>
              </CardContent>
            </Card>
          </div>

          {/* Progress Indicator */}
          <div className="flex space-x-2 mt-4">
            {kassalar.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-200 ${
                  index === 1 ? "bg-gradient-to-r from-blue-500 to-blue-600 w-8" : "bg-gray-300 w-6"
                }`}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
