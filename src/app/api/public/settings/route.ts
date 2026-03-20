import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  try {
    const settings = await prisma.siteSettings.findMany()
    const theme = await prisma.siteTheme.findFirst({ where: { isActive: true } })
    const heroSlides = await prisma.heroSlide.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' }
    })
    const waConfig = await prisma.whatsAppConfig.findFirst()
    
    const settingsMap: Record<string, string> = {}
    settings.forEach(s => {
      settingsMap[s.key] = s.value
    })
    
    return NextResponse.json({
      settings: settingsMap,
      theme: theme ? {
        primaryColor: theme.primaryColor,
        secondaryColor: theme.secondaryColor,
        accentColor: theme.accentColor
      } : {
        primaryColor: "#0D9488",
        secondaryColor: "#1E293B",
        accentColor: "#F59E0B"
      },
      heroSlides,
      whatsapp: waConfig || {
        isEnabled: true,
        phoneNumber: "2341234567890",
        prefillMessage: "Hello SCHF, I need help with...",
        position: "bottom-right",
        color: "#0D9488"
      }
    })
  } catch (error) {
    console.error("Error fetching public settings:", error)
    return NextResponse.json({ 
      heroSlides: [],
      whatsapp: { isEnabled: true, phoneNumber: "2341234567890", prefillMessage: "Hello SCHF, I need help with...", position: "bottom-right", color: "#0D9488" },
      theme: { primaryColor: "#0D9488", secondaryColor: "#1E293B", accentColor: "#F59E0B" },
      settings: {}
    }, { status: 200 })
  }
}
