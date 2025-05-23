type TypeId = {
    id: number
}

type Timestamps  = {
    created_at: string
    updated_at?: string
}

type IdTimestamps = TypeId & Timestamps


type FirstLastName = {
    first_name: string
    last_name: string
}

type FullName = {
    full_name: string
}

type Phone = {
    phone: string | number
}
