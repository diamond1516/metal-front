

interface Product extends IdTimestamps {
    name: string
    residual: number
    category_name?: string
    category_id?: number
    category?: number | string
}
    