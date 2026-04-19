"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { cn } from "@/lib/utils"

// IMPORTA UMA IMAGEM SEGURA
import perfil from "@/img/perfil.jpg"

const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

// 🔥 AQUI ESTÁ A CORREÇÃO IMPORTANTE
const AvatarImage = React.forwardRef(
  ({ className, src, ...props }, ref) => (
    <AvatarPrimitive.Image
      ref={ref}
      src={src || perfil}
      onError={(e) => {
        e.currentTarget.onerror = null // evita loop infinito
        e.currentTarget.src = perfil   // fallback LOCAL (não externo)
      }}
      className={cn("aspect-square h-full w-full", className)}
      {...props}
    />
  )
)
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }