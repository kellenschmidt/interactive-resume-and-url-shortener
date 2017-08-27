export interface Card {
    card_id: number,
    id: string,
    card_type: number,
    title: string,
    caption: string,
    link: string,
    router_link: string,
    image_version: string,
    theme_color: string,
    github_link: string,
    description: string,
    visible: number,
}

export interface Skill {
    chip_id: number,
    id: string,
    category: string,
    title: string,
    image_version: string,
    color: string,
    visible: number,
}