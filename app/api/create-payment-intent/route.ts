import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    typescript: true,
    apiVersion: "2024-06-20",
});

export async function POST(req: NextRequest) {
    const data = await req.json();
    const { amount } = data;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Number(amount) * 100,
            currency: "USD",
        });

        return new NextResponse(JSON.stringify({ clientSecret: paymentIntent.client_secret }), { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error: any) {
        return new NextResponse(JSON.stringify({ error: error.message }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }
}
