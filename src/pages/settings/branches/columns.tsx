import { ColumnDef } from "@tanstack/react-table"
import { useMemo } from "react"

export const useBranchesCols = () =>
    useMemo<ColumnDef<Branch>[]>(
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
                header: "Ish boshlanish vaqti",
                accessorKey: "work_start_date",
            },
            {
                header: "Ish tugash vaqti",
                accessorKey: "work_end_date",
            },
        ],
        [],
    )
