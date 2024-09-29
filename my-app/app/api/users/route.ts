import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: any, res: any) {
  try {
    const users = await prisma.user.findMany()
    return new Response(JSON.stringify(users), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Unable to fetch users' }), { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}