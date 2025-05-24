
import { cn } from "@/lib/utils"
import type { ElementType, ComponentPropsWithoutRef } from "react"

interface StarBorderProps<T extends ElementType> {
  as?: T
  color?: string // This prop can still override the default teal border
  hoverColor?: string // This prop can override the default orange hover border
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
  const defaultBorderColor = color || "hsl(var(--primary))"; // Teal
  const hoverBorderEffectColor = hoverColor || "hsl(var(--special-accent))"; // Orange #F4A261

  return (
    <Component 
      className={cn(
        "relative inline-block py-[1px] overflow-hidden rounded-[20px] group transition-all duration-300 ease-in-out",
        className
      )} 
      {...props}
    >
      {/* Default Teal Border Elements */}
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

      {/* Hover Orange Border Elements */}
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
        "relative z-1 text-special-accent-foreground text-center text-base py-4 px-6 rounded-[20px]",
        "bg-special-accent" 
      )}>
        {children}
      </div>
    </Component>
  )
}
