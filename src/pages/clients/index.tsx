import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DataTable } from "@/components/ui/datatable"
import { Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useClientsCols } from "./columns"

const ClientsMain = () => {
    const columns = useClientsCols()

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

export default ClientsMain

const data: Clinet[] = [
    {
        id: 1,
        full_name: "Azizbek Qodirov",
        phone: 998901112233,
        created_at: "2025-05-23T10:00:00+05:00",
    },
    {
        id: 2,
        full_name: "Nodirbek Akbarov",
        phone: 998903445566,
        created_at: "2025-05-23T10:02:00+05:00",
    },
    {
        id: 3,
        full_name: "Dilshod Karimov",
        phone: 998907778899,
        created_at: "2025-05-23T10:04:00+05:00",
    },
    {
        id: 4,
        full_name: "Gulnora Tosheva",
        phone: 998935551122,
        created_at: "2025-05-23T10:06:00+05:00",
    },
    {
        id: 5,
        full_name: "Javlonbek Rustamov",
        phone: 998917223344,
        created_at: "2025-05-23T10:08:00+05:00",
    },
    {
        id: 6,
        full_name: "Saodat Yusupova",
        phone: 998939887766,
        created_at: "2025-05-23T10:10:00+05:00",
    },
    {
        id: 7,
        full_name: "Rustamjon Xudoyberdiyev",
        phone: 998901234567,
        created_at: "2025-05-23T10:12:00+05:00",
    },
    {
        id: 8,
        full_name: "Madina Salomova",
        phone: 998912345678,
        created_at: "2025-05-23T10:14:00+05:00",
    },
    {
        id: 9,
        full_name: "Bekzod Usmonov",
        phone: 998923456789,
        created_at: "2025-05-23T10:16:00+05:00",
    },
    {
        id: 10,
        full_name: "Laylo Umarova",
        phone: 998934567890,
        created_at: "2025-05-23T10:18:00+05:00",
    },
    {
        id: 11,
        full_name: "Ulugbek Xolboyev",
        phone: 998945678901,
        created_at: "2025-05-23T10:20:00+05:00",
    },
    {
        id: 12,
        full_name: "Nilufar Islomova",
        phone: 998956789012,
        created_at: "2025-05-23T10:22:00+05:00",
    },
    {
        id: 13,
        full_name: "Sardor Ergashev",
        phone: 998967890123,
        created_at: "2025-05-23T10:24:00+05:00",
    },
    {
        id: 14,
        full_name: "Feruza Muminova",
        phone: 998978901234,
        created_at: "2025-05-23T10:26:00+05:00",
    },
    {
        id: 15,
        full_name: "Jasur Qurbanov",
        phone: 998989012345,
        created_at: "2025-05-23T10:28:00+05:00",
    },
    {
        id: 16,
        full_name: "Malika Sobirova",
        phone: 998900123456,
        created_at: "2025-05-23T10:30:00+05:00",
    },
    {
        id: 17,
        full_name: "Zafarjon Akhmedov",
        phone: 998911234567,
        created_at: "2025-05-23T10:32:00+05:00",
    },
    {
        id: 18,
        full_name: "Umida Yuldasheva",
        phone: 998922345678,
        created_at: "2025-05-23T10:34:00+05:00",
    },
    {
        id: 19,
        full_name: "Komiljon Rahmatov",
        phone: 998933456789,
        created_at: "2025-05-23T10:36:00+05:00",
    },
    {
        id: 20,
        full_name: "Shahlo Norboyeva",
        phone: 998944567890,
        created_at: "2025-05-23T10:38:00+05:00",
    },
]
