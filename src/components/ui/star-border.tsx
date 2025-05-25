
import { cn } from "@/lib/utils"
import type { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string // For the animated border effect itself
  speed?: string
  className?: string
  children: React.ReactNode
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color, // This prop will define the animated border color
  speed = "6s",
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button"
  // Animated border effect defaults to Cyber Purple (primary)
  const effectColor = color || "hsl(var(--primary))"; 

  return (
    <Component 
      className={cn(
        "relative inline-block py-[1px] overflow-hidden group transition-all duration-300 ease-in-out",
        className
      )} 
      {...props}
    >
      {/* Single set of animated border elements, color comes from effectColor */}
      <div
        className={cn(
          "absolute w-[400%] h-[50%] bottom-[-11px] right-[-350%] rounded-full animate-star-movement-bottom z-0",
          // Opacity for the animated border effect
          "opacity-30 dark:opacity-75 group-hover:opacity-60 dark:group-hover:opacity-90 transition-opacity duration-300 ease-in-out"
        )}
        style={{
          background: `radial-gradient(circle, ${effectColor}, transparent 20%)`,
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "absolute w-[400%] h-[50%] top-[-10px] left-[-350%] rounded-full animate-star-movement-top z-0",
          // Opacity for the animated border effect
          "opacity-30 dark:opacity-75 group-hover:opacity-60 dark:group-hover:opacity-90 transition-opacity duration-300 ease-in-out"
        )}
        style={{
          background: `radial-gradient(circle, ${effectColor}, transparent 20%)`,
          animationDuration: speed,
        }}
      />
      
      <div className={cn(
        "relative z-10 border text-center text-base py-4 px-6 transition-colors duration-300 ease-in-out",
        // Button face: Neon Teal background, dark text (accent colors)
        "bg-accent text-accent-foreground border-transparent",
        // Button face: Hover darker Neon Teal background
        "group-hover:bg-accent-hover"
      )}>
        {children}
      </div>
    </Component>
  )
}
