
import { cn } from "@/lib/utils"
import type { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string
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
  const defaultColor = color || "hsl(var(--primary))" // Changed to primary color for teal

  return (
    <Component 
      className={cn(
        "relative inline-block py-[1px] overflow-hidden rounded-[20px] group transition-all duration-300 ease-in-out", // Added group and transition
        className
      )} 
      {...props}
    >
      <div
        className={cn(
          "absolute w-[400%] h-[50%] bottom-[-11px] right-[-350%] rounded-full animate-star-movement-bottom z-0",
          "opacity-30 dark:opacity-75 group-hover:opacity-60 dark:group-hover:opacity-90 transition-opacity duration-300 ease-in-out" // Increased hover opacity
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 20%)`, // Made gradient spread larger
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "absolute w-[400%] h-[50%] top-[-10px] left-[-350%] rounded-full animate-star-movement-top z-0",
          "opacity-30 dark:opacity-75 group-hover:opacity-60 dark:group-hover:opacity-90 transition-opacity duration-300 ease-in-out" // Increased hover opacity
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 20%)`, // Made gradient spread larger
          animationDuration: speed,
        }}
      />
      <div className={cn(
        "relative z-1 text-special-accent-foreground text-center text-base py-4 px-6 rounded-[20px]",
        "bg-special-accent" 
      )}>
        {children}
      </div>
    </Component>
  )
}
