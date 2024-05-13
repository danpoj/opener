'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const links = {
  hotdeals: [
    {
      name: '에펨코리아',
      url: 'https://www.fmkorea.com/hotdeal',
    },
    {
      name: '루리웹',
      url: 'https://bbs.ruliweb.com/market/board/1020',
    },
    {
      name: '뽐뿌',
      url: 'https://www.ppomppu.co.kr/zboard/zboard.php?id=ppomppu',
    },
    {
      name: '어미새',
      url: 'https://eomisae.co.kr/rt',
    },
    {
      name: '쿨앤조이',
      url: 'https://coolenjoy.net/bbs/jirum',
    },
  ],
};

export default function Home() {
  const [isPopup, setIsPopup] = useState(false);

  const open = (
    link: { name: string; url: string },
    isPopup: boolean = false
  ) => {
    window.open(link.url, '_blank', `noopener,noreferrer,popup=${isPopup}`);
  };

  const opens = (
    links: { name: string; url: string }[],
    isPopup: boolean = false
  ) => {
    for (const link of links) {
      window.open(link.url, '_blank', `noopener,noreferrer,popup=${isPopup}`);
    }
  };

  return (
    <div className='h-full flex items-center justify-center flex-col gap-10 max-w-[16rem] mx-auto'>
      <div className='flex items-center space-x-2'>
        <Switch id='popup' checked={isPopup} onCheckedChange={setIsPopup} />
        <Label htmlFor='popup'>{isPopup ? '팝업 창' : '같은 탭'}</Label>
      </div>

      <div className='w-full'>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Button
                size='lg'
                className='w-full'
                onClick={() => opens(links.hotdeals, isPopup)}
              >
                <h2>핫딜</h2>
                <ArrowUpRight className='w-5 h-5 ml-1' />
              </Button>
            </TooltipTrigger>
            <TooltipContent side='bottom' className='flex flex-col items-start'>
              {links.hotdeals.map((hotdeal) => (
                <Button
                  variant='link'
                  className='space-x-2'
                  key={hotdeal.name}
                  onClick={() => open(hotdeal, isPopup)}
                >
                  <span className='font-bold'>{hotdeal.name}</span>
                  <span className='text-muted-foreground  text-sm'>
                    {hotdeal.url.length > 26
                      ? hotdeal.url.slice(0, 26) + '...'
                      : hotdeal.url}
                  </span>
                </Button>
              ))}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
