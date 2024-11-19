import { generateSeedData } from '../utils/seedData'

export class SeedService {
  private baseUrl = process.env.NEXT_PUBLIC_API_URL || ''

  async seedData(): Promise<void> {
    const seedData = generateSeedData()

    // Seed professors
    await fetch(`${this.baseUrl}/professors/seed`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(seedData.professors),
    })

    // Seed classes
    await fetch(`${this.baseUrl}/classes/seed`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(seedData.classes),
    })

    // Seed students
    await fetch(`${this.baseUrl}/students/seed`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(seedData.students),
    })
  }
}

export const seedService = new SeedService()
