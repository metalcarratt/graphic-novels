import { xingyingNovelDetails } from '@/novels/xingying/details';

const XINGYING = 'xingying';

type ChapterDetailsT = {
    index: number,
    title: string,
    url: string
}

export type ChapterContentsT = 
    {
        p?: string,
        i?: string
    }


type NovelDetailsT = {
    title: string,
    description: string,
    chapters: ChapterDetailsT[],
    getChapter: (chapter: string) => ChapterContentsT[]
}

export const novelList = [
    XINGYING
];

export const novelDetails: Record<string, NovelDetailsT> = {
    [XINGYING]: xingyingNovelDetails
}

