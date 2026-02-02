import { HTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    variant?: 'default' | 'glass';
    hoverEffect?: boolean;
}

const Card = ({ className, children, variant = 'default', hoverEffect = false, ...props }: CardProps) => {
    return (
        <div
            className={cn(
                'rounded-xl p-6 transition-all duration-300 ease-out border',
                // Default: Dark muted background for enterprise feel
                variant === 'default' && 'bg-[#121212] border-white/5 text-brand-white',
                // Glass: Very subtle, high-end blur
                variant === 'glass' && 'bg-white/5 backdrop-blur-sm border-white/10 text-brand-white',
                // Hover: No translation jump, just subtle border/bg shift
                hoverEffect && 'hover:bg-white/5 hover:border-white/10',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
