import { formatMoney } from "@/lib/format-money"
import { formatPhoneNumber } from "@/lib/format-phone-number"
import { ColumnDef } from "@tanstack/react-table"
import { formatDate } from "date-fns"
import { useMemo } from "react"

export const useProductsCols = () =>
    useMemo<ColumnDef<Product>[]>(
        () => [
            {
                header: "№",
                cell: ({ row }) => row.index + 1,
            },
            {
                header: "Nomi",
                accessorKey: "name",
                enableSorting: true,
            },
            {
                header: "Qoldiq",
                accessorKey: "residual",
            },
            {
                header: "Qoldiq",
                accessorKey: "category_name",
            },
            {
                header: "Yaratilgan sanasi",
                accessorKey: "created_at",
                cell: ({ row }) => {
                    return formatDate(row.original.created_at, "dd-MM-yyyy HH:mm")
                },
            },
        ],
        [],
    )
