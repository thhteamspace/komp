import { forwardRef, ReactNode } from 'react';
import { cn } from '@/utils/cn';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'premium';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    fullWidth?: boolean;
    children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', fullWidth, children, ...props }, ref) => {
        const variants = {
            primary: 'bg-brand-orange text-white hover:bg-slate-950 shadow-[0_10px_25px_rgba(255,140,26,0.2)] hover:shadow-none',
            secondary: 'bg-brand-blue text-white hover:bg-slate-950 shadow-[0_10px_25px_rgba(0,112,243,0.2)]',
            outline: 'border-2 border-slate-950/10 text-slate-950 hover:bg-slate-950 hover:text-white hover:border-slate-950',
            ghost: 'text-slate-950 hover:bg-slate-50',
            premium: 'bg-slate-950 text-white hover:bg-brand-orange shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(255,140,26,0.2)]',
        };

        const sizes = {
            sm: 'px-6 h-10 text-sm',
            md: 'px-10 h-14 text-base',
            lg: 'px-14 h-18 text-lg',
            xl: 'px-16 h-20 text-xl',
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className={cn(
                    'relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none overflow-hidden group whitespace-nowrap',
                    variants[variant],
                    sizes[size],
                    fullWidth ? 'w-full' : '',
                    className
                )}
                {...props}
            >
                <span className="relative z-10 flex items-center justify-center gap-3">
                    {children}
                </span>
            </motion.button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
