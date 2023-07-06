export type ChapterDetailsT = {
    index: number,
    title: string,
    url: string
}

export type ChapterContentsT = 
    {
        p?: string,
        i?: string
    }

export type NovelDetailsT = {
    title: string,
    description: string,
    chapters: ChapterDetailsT[],
    getChapter: (chapter: string) => ChapterContentsT[]
}