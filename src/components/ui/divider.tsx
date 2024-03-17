import { cn } from '@/lib/utils'

type DividerProps = {
  direction: 'left' | 'right'
}

export function Divider({ direction }: DividerProps) {
  return (
    <div
      className={cn(
        'z-20 h-px w-full from-primary/5 via-primary/30 to-primary',
        {
          'bg-gradient-to-l': direction === 'left',
          'bg-gradient-to-r': direction === 'right'
        }
      )}></div>
  )
}
