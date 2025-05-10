import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    ) + " tempo-4ee63cd1-d805-5da9-b813-920ea53608f9"}
    {...props}
    tempoelementid="tempo-4ee63cd1-d805-5da9-b813-920ea53608f9" />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className) + " tempo-24114b1f-2941-5e54-8327-e4bef89c93ee"}
    {...props}
    tempoelementid="tempo-24114b1f-2941-5e54-8327-e4bef89c93ee" />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className) + " tempo-f649aa02-6464-51f1-839c-a457a0168786"}
    {...props}
    tempoelementid="tempo-f649aa02-6464-51f1-839c-a457a0168786" />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className) + " tempo-dfca8bc3-8732-54d8-b02f-18c2d895d894"}
    {...props}
    tempoelementid="tempo-dfca8bc3-8732-54d8-b02f-18c2d895d894" />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-0", className) + " tempo-2256ff59-84fa-510a-9265-e39d4c9caac5"}
    {...props}
    tempoelementid="tempo-2256ff59-84fa-510a-9265-e39d4c9caac5" />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className) + " tempo-f8e8d2d4-3972-58a3-87ea-10520b78e474"}
    {...props}
    tempoelementid="tempo-f8e8d2d4-3972-58a3-87ea-10520b78e474" />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
