export type Category = {
    id: number;
    name: string;
    created_at?: string;
    updated_at?: string;
}

export type BlogItem = {
    id: number;
    created_at: string;
    updated_at: string;
    title: string;
    content: string;
    category_id: number;
    img_url: string
    category: Category
}

export type LinkItem = {
    url?: string;
    label: string;
    active: boolean;
}

export type Blog = {
    current_page: number;
    data: BlogItem[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: LinkItem[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: number | null;
    to: number;
    total: number;
}
