import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DataTable } from "@/components/ui/datatable"
import { Plus } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"



const OrdersMain = () => {

    return (
        <div className="w-full">
            <Card className="mb-5 rounded-lg ">
                <CardContent>
                    <div className="flex  justify-between items-center gap-3 mb-4">
                        <div className="flex items-center gap-3">
                            <h1 className="text-xl">Hodimlar</h1>
                            <Badge className="text-sm" variant={"outline"}>
                            </Badge>
                            <div className="flex items-center space-x-2">
                                <Switch id="archive" />
                                <Label htmlFor="archive">Arxiv</Label>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Button>
                                <Plus className="h-4 w-4" />
                                Qo'shish
                            </Button>
                        </div>
                    </div>
                    {/* <DataTable
                        // actionMenuMode
                        onDelete={() => {}}
                        onEdit={() => {}}
                        // onView={() => {}}
                        columns={columns}
                        data={data}
                        selecteds_row
                    /> */}
                </CardContent>
            </Card>
        </div>
    )
}

export default OrdersMain