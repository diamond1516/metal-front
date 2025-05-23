import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DataTable } from "@/components/ui/datatable"
import { Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useProductsCols } from "./columns"

const ProductsMain = () => {
    const columns = useProductsCols()

    return (
        <div className="w-full">
            <Card className="mb-5 rounded-lg ">
                <CardContent>
                    <div className="flex  justify-between items-center gap-3 mb-4">
                        <div className="flex items-center gap-3">
                            <h1 className="text-xl">Hodimlar</h1>
                            <Badge className="text-sm" variant={"outline"}>
                                {data.length}
                            </Badge>
                            <div className="flex items-center space-x-2">
                                <Switch id="archive" />
                                <Label htmlFor="archive">Arxiv</Label>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Button variant={"secondary"}>
                                <Plus className="h-4 w-4" />
                                SMS YUBORISH
                            </Button>
                            <Button>
                                <Plus className="h-4 w-4" />
                                Qo'shish
                            </Button>
                        </div>
                    </div>
                    <DataTable
                        // actionMenuMode
                        onDelete={() => {}}
                        onEdit={() => {}}
                        // onView={() => {}}
                        columns={columns}
                        data={data}
                        selecteds_row
                    />
                </CardContent>
            </Card>
        </div>
    )
}

export default ProductsMain

const data: Product[] = [
    {
        id: 1,
        name: "Turba 40",
        residual: 20,
        created_at: "2025-05-23T10:00:00+05:00",
        category_name: "Trubalar",
    },
    {
        id: 2,
        name: "Bolt M8",
        residual: 150,
        created_at: "2025-05-23T10:01:00+05:00",
        category_name: "Boltlar",
    },
    {
        id: 3,
        name: "Klepka 16",
        residual: 75,
        created_at: "2025-05-23T10:02:00+05:00",
        category_name: "Klepкалар",
    },
    {
        id: 4,
        name: 'Disk 18"',
        residual: 12,
        created_at: "2025-05-23T10:03:00+05:00",
        category_name: "Disklar",
    },
    {
        id: 5,
        name: "Shlang 12",
        residual: 40,
        created_at: "2025-05-23T10:04:00+05:00",
        category_name: "Shlanglar",
    },
    {
        id: 6,
        name: "Tasma 50m",
        residual: 5,
        created_at: "2025-05-23T10:05:00+05:00",
        category_name: "Tasmalar",
    },
    {
        id: 7,
        name: "Kartrij 300ml",
        residual: 30,
        created_at: "2025-05-23T10:06:00+05:00",
        category_name: "Kartrijlar",
    },
    {
        id: 8,
        name: "Ulagich 90°",
        residual: 60,
        created_at: "2025-05-23T10:07:00+05:00",
        category_name: "Ulagichlar",
    },
    {
        id: 9,
        name: 'Ventil 1/2"',
        residual: 25,
        created_at: "2025-05-23T10:08:00+05:00",
        category_name: "Ventillar",
    },
    {
        id: 10,
        name: 'Kran 3/4"',
        residual: 8,
        created_at: "2025-05-23T10:09:00+05:00",
        category_name: "Kranlar",
    },
    {
        id: 11,
        name: "Plaстиnка 200×100",
        residual: 18,
        created_at: "2025-05-23T10:10:00+05:00",
        category_name: "Plate",
    },
    {
        id: 12,
        name: "Filtr 20µm",
        residual: 45,
        created_at: "2025-05-23T10:11:00+05:00",
        category_name: "Filtrlar",
    },
    {
        id: 13,
        name: "Sharnir 10mm",
        residual: 33,
        created_at: "2025-05-23T10:12:00+05:00",
        category_name: "Sharnirlar",
    },
    {
        id: 14,
        name: 'Muf 1"',
        residual: 22,
        created_at: "2025-05-23T10:13:00+05:00",
        category_name: "Muflar",
    },
    {
        id: 15,
        name: "Shlang tutqichi",
        residual: 55,
        created_at: "2025-05-23T10:14:00+05:00",
        category_name: "Aksessuarlar",
    },
    {
        id: 16,
        name: "Bolt M10",
        residual: 110,
        created_at: "2025-05-23T10:15:00+05:00",
        category_name: "Boltlar",
    },
    {
        id: 17,
        name: 'Yumaloq burol 5/8"',
        residual: 9,
        created_at: "2025-05-23T10:16:00+05:00",
        category_name: "Burolar",
    },
    {
        id: 18,
        name: "Val 20mm",
        residual: 14,
        created_at: "2025-05-23T10:17:00+05:00",
        category_name: "Valлар",
    },
    {
        id: 19,
        name: "Diskachi 200mm",
        residual: 7,
        created_at: "2025-05-23T10:18:00+05:00",
        category_name: "Disklar",
    },
    {
        id: 20,
        name: "Qoplama 2mm",
        residual: 60,
        created_at: "2025-05-23T10:19:00+05:00",
        category_name: "Qoplamalar",
    },
]
