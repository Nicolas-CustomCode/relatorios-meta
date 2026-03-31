import { ButtonProps, Props } from "@/src/types/button";

export function Button({ children, variant, className = '', ...props }: Props & { className?: string }) {
    const baseClasses = "px-6 py-2 rounded-xl font-semibold shadow-sm transition-all scale-95 active:duration-150 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    // Using a default variant style if variant is not provided, matching the primary style from example
    const variantClasses = variant === 'secondary' 
        ? "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
        : "bg-primary hover:bg-primary-dim text-white";

    return (
        <button 
            className={`${baseClasses} ${variantClasses} ${className}`} 
            {...props}
        >
            {children}
        </button>
    )
}
