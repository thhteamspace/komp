import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'premium';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', fullWidth, children, ...props }, ref) => {
        const variants = {
            primary: 'bg-brand-orange text-brand-white hover:bg-brand-orange/90 shadow-[0_4px_14px_0_rgba(255,79,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,79,0,0.23)]',
            secondary: 'bg-brand-blue text-brand-white hover:bg-brand-blue/90 shadow-[0_4px_14px_0_rgba(0,112,243,0.39)]',
            outline: 'border-2 border-brand-white/10 text-brand-white hover:border-brand-white/30 hover:bg-brand-white/5',
            ghost: 'text-brand-white hover:bg-brand-white/5',
            premium: 'bg-brand-white text-brand-black hover:bg-brand-white/90 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] font-black uppercase tracking-tight',
        };

        const sizes = {
            sm: 'px-6 h-10 text-xs',
            md: 'px-8 h-12 text-sm',
            lg: 'px-10 h-14 text-base',
            xl: 'px-14 h-18 text-xl',
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98, y: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                className={cn(
                    'relative inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none overflow-hidden group',
                    variants[variant],
                    sizes[size],
                    fullWidth ? 'w-full' : '',
                    className
                )}
                {...(props as any)}
            >
                {/* Subtle Shimmer Effect for Primary/Premium */}
                {(variant === 'primary' || variant === 'premium') && (
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-brand-white/10 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                )}

                <span className="relative z-10 flex items-center justify-center gap-2">
                    {children}
                </span>
            </motion.button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
