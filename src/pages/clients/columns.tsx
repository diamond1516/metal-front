import { formatMoney } from "@/lib/format-money"
import { formatPhoneNumber } from "@/lib/format-phone-number"
import { ColumnDef } from "@tanstack/react-table"
import { formatDate } from "date-fns"
import { useMemo } from "react"

export const useClientsCols = () =>
    useMemo<ColumnDef<Clinet>[]>(
        () => [
            {
                header: "№",
                cell: ({ row }) => row.index + 1,
            },
            {
                header: "FIO",
                accessorKey: "full_name",
                enableSorting: true,
            },
            {
                header: "Telefon",
                accessorKey: "phone",
                cell: ({ row }) => {
                    return formatPhoneNumber(row.original.phone.toString())
                },
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
