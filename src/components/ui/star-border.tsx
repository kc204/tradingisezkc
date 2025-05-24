
import { cn } from "@/lib/utils"
import type { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string // For the animated border effect itself
  hoverColor?: string // For the animated border effect on hover
  speed?: string
  className?: string
  children: React.ReactNode
}

export function StarBorder<T extends ElementType = "button">({
  as,
  className,
  color,
  hoverColor,
  speed = "6s",
  children,
  ...props
}: StarBorderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof StarBorderProps<T>>) {
  const Component = as || "button"
  const defaultBorderColor = color || "hsl(var(--primary))"; // Teal for the border effect
  const hoverBorderEffectColor = hoverColor || "hsl(var(--special-accent))"; // Orange for the border effect on hover

  return (
    <Component 
      className={cn(
        "relative inline-block py-[1px] overflow-hidden rounded-[20px] group transition-all duration-300 ease-in-out",
        className
      )} 
      {...props}
    >
      {/* Default Teal Border Elements (for the effect) */}
      <div
        className={cn(
          "absolute w-[400%] h-[50%] bottom-[-11px] right-[-350%] rounded-full animate-star-movement-bottom z-0",
          "opacity-30 dark:opacity-75 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultBorderColor}, transparent 20%)`,
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "absolute w-[400%] h-[50%] top-[-10px] left-[-350%] rounded-full animate-star-movement-top z-0",
          "opacity-30 dark:opacity-75 group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
        )}
        style={{
          background: `radial-gradient(circle, ${defaultBorderColor}, transparent 20%)`,
          animationDuration: speed,
        }}
      />

      {/* Hover Orange Border Elements (for the effect) */}
      <div
        className={cn(
          "absolute w-[400%] h-[50%] bottom-[-11px] right-[-350%] rounded-full animate-star-movement-bottom z-0",
          "opacity-0 group-hover:opacity-60 dark:group-hover:opacity-90 transition-opacity duration-300 ease-in-out"
        )}
        style={{
          background: `radial-gradient(circle, ${hoverBorderEffectColor}, transparent 20%)`,
          animationDuration: speed,
        }}
      />
      <div
        className={cn(
          "absolute w-[400%] h-[50%] top-[-10px] left-[-350%] rounded-full animate-star-movement-top z-0",
          "opacity-0 group-hover:opacity-60 dark:group-hover:opacity-90 transition-opacity duration-300 ease-in-out"
        )}
        style={{
          background: `radial-gradient(circle, ${hoverBorderEffectColor}, transparent 20%)`,
          animationDuration: speed,
        }}
      />
      
      <div className={cn(
        "relative z-1 border text-foreground text-center text-base py-4 px-6 rounded-[20px] transition-colors duration-300 ease-in-out",
        // Default background and text color for the button face
        "bg-gradient-to-b from-background/90 to-muted/90 border-border/40 dark:from-background dark:to-muted dark:border-border",
        // Hover background and text color for the button face
        "group-hover:bg-special-accent group-hover:text-special-accent-foreground"
      )}>
        {children}
      </div>
    </Component>
  )
}
