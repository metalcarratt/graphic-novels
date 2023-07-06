import { NovelDetailsT } from '@/engine/types';
import { XINGYING, xingyingNovelDetails } from '@/novels/xingying/details';

export const novelList = [
    XINGYING
];

export const novelDetails: Record<string, NovelDetailsT> = {
    [XINGYING]: xingyingNovelDetails
}

