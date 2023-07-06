
import { ChapterContentsT } from '@/engine/types';
import ch001 from './ch001';
import ch002 from './ch002';
import ch003 from './ch003';
import ch004 from './ch004';
import ch005 from './ch005';

export const XINGYING = 'xingying';

const chapters: Record<string, ChapterContentsT[]> = {
    '1': ch001,
    '2': ch002,
    '3': ch003,
    '4': ch004,
    '5': ch005
}

export const xingyingNovelDetails = {
    title: 'Xing Ying',
    description: `A poor girl from a mountainous village 
                gets thrust into a world of magic and adventure.`,
    chapters: [
        {
            index: 1,
            url: 'xingying/ch001/',
            title: 'A poor mountain girl'
        },
        {
            index: 2,
            url: 'xingying/ch002/',
            title: 'Miraculous transformation'
        },
        {
            index: 3,
            url: 'xingying/ch003/',
            title: 'Home in ruins'
        },
        {
            index: 4,
            url: 'xingying/ch004/',
            title: 'In the camp of the enemey'
        },
        {
            index: 5,
            url: 'xingying/ch005/',
            title: 'The coldness of death'
        }
    ],
    getChapter: (chapter: string): ChapterContentsT[] => chapters[chapter]
}
