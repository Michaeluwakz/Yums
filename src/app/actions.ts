"use server";

import { recommendMenuItem, type RecommendMenuItemOutput } from "@/ai/flows/menu-recommendation";
import { z } from "zod";

const cateringFormSchema = z.object({
  name: z.string().min(2),
  phone: z.string().optional(),
  eventType: z.string().min(3),
  numberOfGuests: z.coerce.number().min(1),
  eventDate: z.date(),
  message: z.string().max(500).optional(),
});

type CateringFormValues = z.infer<typeof cateringFormSchema>;

interface CartItemForAction {
    name: string;
    quantity: number;
    price: number;
}

interface OrderPayload {
    items: CartItemForAction[];
    totalPrice: number;
}

export async function getRecommendation(weather: string): Promise<RecommendMenuItemOutput> {
  try {
    const recommendation = await recommendMenuItem({ weather });
    return recommendation;
  } catch (error) {
    console.error("Error getting recommendation:", error);
    throw new Error("Failed to get recommendation from AI.");
  }
}

export async function handleCateringInquiry(data: CateringFormValues) {
  // Here you would typically handle the form data, e.g., send an email, save to a database, etc.
  // For this example, we'll just log it to the console.
  console.log("New Catering Inquiry:", data);

  // You can add more complex logic here, like calling an AI flow to process the inquiry.
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Return a success response
  return { success: true, message: "Inquiry submitted successfully!" };
}


export async function submitOrder(payload: OrderPayload) {
    console.log("New Order Received:", payload);
  
    // In a real application, you would integrate an SMS service like Twilio here
    // to send a notification. For now, we'll just log it to the console.
    const notificationNumber = "+447742643648";
    const message = `New order! Total: £${payload.totalPrice.toFixed(2)}. Items: ${payload.items.map(item => `${item.quantity}x ${item.name}`).join(', ')}`;
    
    console.log(`Simulating SMS to ${notificationNumber}: ${message}`);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return { success: true, message: "Order placed successfully!" };
}
