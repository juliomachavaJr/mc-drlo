import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const bookingSchema = z.object({
  eventType: z.string().min(1),
  eventDate: z.string().min(1),
  location: z.string().min(1),
  expectedGuests: z.number().optional(),
  language: z.string().min(1),
  duration: z.string().min(1),
  budget: z.string().min(1),
  specialRequests: z.string().optional(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = bookingSchema.parse(body);

    // Upsert client
    const client = await prisma.client.upsert({
      where: { email: data.email },
      update: { firstName: data.firstName, lastName: data.lastName, phone: data.phone ?? null },
      create: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone ?? null,
      },
    });

    // Create booking
    const booking = await prisma.booking.create({
      data: {
        clientId: client.id,
        eventType: data.eventType,
        eventDate: new Date(data.eventDate),
        location: data.location,
        expectedGuests: data.expectedGuests ?? null,
        language: data.language,
        duration: data.duration,
        budget: data.budget,
        specialRequests: data.specialRequests ?? null,
        status: "PENDING",
      },
    });

    return NextResponse.json({ success: true, bookingId: booking.id }, { status: 201 });
  } catch (err) {
    console.error("[BOOKING_API]", err);
    return NextResponse.json({ error: "Failed to submit booking" }, { status: 400 });
  }
}

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      include: { client: true },
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(bookings);
  } catch (err) {
    console.error("[BOOKING_API_GET]", err);
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
  }
}
