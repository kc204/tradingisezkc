
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
        "relative inline-block py-[1px] overflow-hidden rounded-[20px]",
        className
      )} 
      {...props}
    >
      <div
        className={cn(
          "absolute w-[400%] h-[50%] bottom-[-11px] right-[-350%] rounded-full animate-star-movement-bottom z-0", // Increased width and adjusted right offset
          "opacity-20 dark:opacity-70" 
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 15%)`, // Made gradient spread larger
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "absolute w-[400%] h-[50%] top-[-10px] left-[-350%] rounded-full animate-star-movement-top z-0", // Increased width and adjusted left offset
          "opacity-20 dark:opacity-70"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultColor}, transparent 15%)`, // Made gradient spread larger
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
