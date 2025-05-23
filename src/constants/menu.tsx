import { linkOptions } from "@tanstack/react-router"
import {
    CalendarRange,
    ChartNoAxesCombined,
    House,
    NotebookText,
    Settings,
    Users2,
} from "lucide-react"
import { ReactNode } from "react"

export interface MenuItem {
    label: string
    icon?: ReactNode
    path: string
}

export const menuItems = [
    linkOptions({
        title: "Bosh sahifa",
        icon: <House width={20} />,
        to: "/",
        enabled: true,
        items: [],
    }),
    linkOptions({
        title: "Buyurtmalar",
        icon: <House width={20} />,
        to: "/orders",
        enabled: true,
        items: [],
    }),
    linkOptions({
        title: "Clientlar",
        icon: <Users2 width={20} />,
        to: "/clients",
        enabled: true,
        items: [],
    }),
    linkOptions({
        title: "Mahsulotlar",
        icon: <CalendarRange width={20} />,
        to: "/products",
        enabled: true,
        items: [],
    }),
    linkOptions({
        title: "Kassa",
        icon: <ChartNoAxesCombined width={20} />,
        to: "/checkout",
        enabled: true,
        items: [],
    }),
    linkOptions({
        title: "Hisobotlar",
        icon: <NotebookText width={20} />,
        to: "/reports",
        enabled: true,
        items: [],
    }),
    linkOptions({
        title: "Sozlamalar",
        icon: <Settings width={20} />,
        to: "/settings",
        enabled: true,
        items: [
            linkOptions({
                title: "Kategoriyalar",
                to: "/settings/categories",
                enabled: true,
                items: [],
            }),
        ],
    }),
]
