
import { ChapterContentsT } from '@/engine/types';
import ch001 from './ch001';
import ch002 from './ch002';
import ch003 from './ch003';
import ch004 from './ch004';
import ch005 from './ch005';
import ch006 from './ch006';

export const XINGYING = 'xingying';

const chapters: Record<string, ChapterContentsT[]> = {
    '1': ch001,
    '2': ch002,
    '3': ch003,
    '4': ch004,
    '5': ch005,
    '6': ch006
}

export const xingyingNovelDetails = {
    title: 'Xing Ying',
    description: `A poor girl from a mountainous village 
                gets thrust into a world of magic and adventure.`,
    chapters: [
        {
            index: 1,
            url: 'xingying/ch001/',
            title: 'A poor mountain girl',
            bgColour: '#39261e',
            txColour: '#efd4c9'
        },
        {
            index: 2,
            url: 'xingying/ch002/',
            title: 'Miraculous transformation',
            bgColour: '#0d0c0c',
            txColour: '#b3b4ca'
        },
        {
            index: 3,
            url: 'xingying/ch003/',
            title: 'Home in ruins',
            bgColour: '#b5522c',
            txColour: '#ffd8c8'
        },
        {
            index: 4,
            url: 'xingying/ch004/',
            title: 'In the camp of the enemy',
            bgColour: '#2d3239',
            txColour: '#e7ecfd'
        },
        {
            index: 5,
            url: 'xingying/ch005/',
            title: 'The coldness of death',
            bgColour: '#6a7079',
            txColour: '#ebeefb'
        },
        {
            index: 6,
            url: 'xingying/ch006/',
            title: 'A world inside',
            bgColour: '#3d4832',
            txColour: '#dfe8d9'
        }
    ],
    getChapter: (chapter: string): ChapterContentsT[] => chapters[chapter]
}
