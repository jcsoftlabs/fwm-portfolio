// Remplit la base avec les contenus de lib/mock-data.ts.
// Idempotent : chaque table n'est remplie que si elle est vide.
// Usage : npx ts-node --transpile-only --compiler-options '{"module":"commonjs","moduleResolution":"node"}' prisma/seed-content.ts
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'
import 'dotenv/config'
import {
  achievements,
  contactInfo,
  mediaItems,
  newsArticles,
  profile,
  timelineItems,
  visionAxes,
} from '../lib/mock-data'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter: new PrismaPg(pool) })

async function fillIfEmpty(label: string, count: () => Promise<number>, fill: () => Promise<unknown>) {
  if ((await count()) > 0) {
    console.log(`- ${label} : déjà rempli, ignoré`)
    return
  }
  await fill()
  console.log(`✓ ${label} : ${await count()} ligne(s)`)
}

async function main() {
  await fillIfEmpty('Parcours', () => prisma.experience.count(), () =>
    prisma.experience.createMany({
      data: timelineItems.map((t, i) => ({
        period: t.period,
        title: t.title,
        description: t.description,
        category: t.category,
        isCurrent: t.period.startsWith('Depuis'),
        order: i,
      })),
    }),
  )

  await fillIfEmpty('Réalisations', () => prisma.achievement.count(), () =>
    prisma.achievement.createMany({
      data: achievements.map((a, i) => ({
        title: a.title,
        description: a.description,
        domain: a.domain,
        period: a.period,
        status: a.status,
        needsVerification: a.needsVerification,
        order: i,
      })),
    }),
  )

  await fillIfEmpty('Axes de vision', () => prisma.visionAxis.count(), () =>
    prisma.visionAxis.createMany({
      data: visionAxes.map((v, i) => ({
        title: v.title,
        icon: v.icon,
        description: v.description,
        objectives: v.objectives,
        order: i,
      })),
    }),
  )

  await fillIfEmpty('Actualités', () => prisma.newsArticle.count(), () =>
    prisma.newsArticle.createMany({
      data: newsArticles.map((n) => ({
        slug: n.slug,
        title: n.title,
        date: new Date(n.date),
        category: n.category,
        excerpt: n.excerpt,
        content: n.content,
        imagePath: n.imagePath ?? null,
        published: true,
      })),
    }),
  )

  // Seuls les médias qui ont une image réelle deviennent des photos.
  const photos = mediaItems.filter((m) => m.imagePath)
  await fillIfEmpty('Galerie', () => prisma.album.count(), () =>
    prisma.album.create({
      data: {
        title: 'Portraits officiels',
        description: 'Visuels institutionnels mis à disposition de la presse.',
        coverImage: photos[0]?.imagePath ?? null,
        photos: {
          create: photos.map((m) => ({
            url: m.imagePath!,
            title: m.title,
            description: m.description,
            type: m.type,
          })),
        },
      },
    }),
  )

  await fillIfEmpty('Paramètres', () => prisma.setting.count(), () =>
    prisma.setting.create({
      data: {
        id: 'global',
        profileName: profile.name,
        profileTitle: profile.title,
        location: profile.location,
        shortBio: profile.shortBio,
        generalEmail: contactInfo.generalEmail,
        pressEmail: contactInfo.pressEmail,
        office: contactInfo.office,
      },
    }),
  )
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
