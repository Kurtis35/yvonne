
import { db } from "./db";
import {
  services, reviews, inquiries,
  type Service, type InsertService,
  type Review, type InsertReview,
  type Inquiry, type InsertInquiry
} from "@shared/schema";

export interface IStorage {
  getServices(): Promise<Service[]>;
  getReviews(): Promise<Review[]>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  seedServices(): Promise<void>;
  seedReviews(): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async getReviews(): Promise<Review[]> {
    return await db.select().from(reviews);
  }

  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const [newInquiry] = await db.insert(inquiries).values(inquiry).returning();
    return newInquiry;
  }

  async seedServices(): Promise<void> {
    const count = await db.select().from(services);
    if (count.length === 0) {
      const seedData: InsertService[] = [
        {
          name: "Luxury Braids",
          category: "Braiding",
          description: "Intricate, neat, and long-lasting box braids, knotless braids, and cornrows.",
          price: "From R450",
          imageUrl: "/images/service-braids.jpg"
        },
        {
          name: "Premium Weaves",
          category: "Weaves",
          description: "Seamless sew-ins and closures using high-quality human hair bundles.",
          price: "From R800",
          imageUrl: "/images/service-weaves.jpg"
        },
        {
          name: "Custom Wigs",
          category: "Wigs",
          description: "Hand-made, customized wig units including installation and styling.",
          price: "From R1200",
          imageUrl: "/images/service-wigs.jpg"
        },
        {
          name: "Deep Treatment",
          category: "Treatment",
          description: "Restorative wash, deep conditioning, and scalp massage for healthy growth.",
          price: "From R250",
          imageUrl: "/images/service-treatment.jpg"
        },
        {
          name: "Bridal Styling",
          category: "Styling",
          description: "Elegant up-dos and styling for weddings and special occasions.",
          price: "From R650",
          imageUrl: "/images/service-styling.jpg"
        }
      ];
      await db.insert(services).values(seedData);
    }
  }

  async seedReviews(): Promise<void> {
    const count = await db.select().from(reviews);
    if (count.length === 0) {
      const seedData: InsertReview[] = [
        {
          name: "Thando M.",
          rating: 5,
          comment: "Absolutely stunning service! Yvonne is a magician with braids. My hair has never looked this good.",
          date: "2 weeks ago"
        },
        {
          name: "Jessica P.",
          rating: 5,
          comment: "The most professional salon in Nomzamo. The atmosphere is so relaxing and premium.",
          date: "1 month ago"
        },
        {
          name: "Lerato K.",
          rating: 5,
          comment: "Worth every cent. I felt like a queen leaving the salon. The rose gold interior is beautiful!",
          date: "3 weeks ago"
        }
      ];
      await db.insert(reviews).values(seedData);
    }
  }
}

export const storage = new DatabaseStorage();
