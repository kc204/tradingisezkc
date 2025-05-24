
import { cn } from "@/lib/utils"
import type { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string // For the animated border effect itself, defaults to secondary color
  speed?: string
  className?: string
  children: React.ReactNode
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color,
  speed = "6s",
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button"
  const effectColor = color || "hsl(var(--secondary))"; // Default effect color is #2A9D8F

  return (
    <Component 
      className={cn(
        "relative inline-block py-[1px] overflow-hidden rounded-[20px] group transition-all duration-300 ease-in-out",
        className
      )} 
      {...props}
    >
      {/* Single set of animated border elements, color doesn't change on hover, only opacity */}
      <div
        className={cn(
          "absolute w-[400%] h-[50%] bottom-[-11px] right-[-350%] rounded-full animate-star-movement-bottom z-0",
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
          "opacity-30 dark:opacity-75 group-hover:opacity-60 dark:group-hover:opacity-90 transition-opacity duration-300 ease-in-out"
        )}
        style={{
          background: `radial-gradient(circle, ${effectColor}, transparent 20%)`,
          animationDuration: speed,
        }}
      />
      
      <div className={cn(
        "relative z-10 border text-center text-base py-4 px-6 rounded-[20px] transition-colors duration-300 ease-in-out",
        // Button face: Default orange background, white text
        "bg-special-accent text-special-accent-foreground border-transparent",
        // Button face: Hover darker orange background
        "group-hover:bg-special-accent-hover"
      )}>
        {children}
      </div>
    </Component>
  )
}
