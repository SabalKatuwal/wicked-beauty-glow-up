import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BookingEmailRequest {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, message }: BookingEmailRequest = await req.json();

    console.log("Sending booking notification email to business owner");

    // Send email to business owner using Resend API directly
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Wicked Bronze Beauty <onboarding@resend.dev>",
        to: ["Sabal.katuwal1@gmail.com"],
        subject: `New Booking Request from ${name}`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h1 style="color: #D97706; margin-bottom: 20px;">New Booking Request</h1>
            
            <div style="background-color: #FEF3C7; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
              <p style="margin: 0; font-weight: bold; color: #92400E;">You have received a new booking request!</p>
            </div>

            <h2 style="color: #333; font-size: 18px; margin-top: 25px; margin-bottom: 15px;">Client Details:</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #E5E7EB; font-weight: bold; color: #6B7280;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #E5E7EB; color: #111827;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #E5E7EB; font-weight: bold; color: #6B7280;">Email:</td>
                <td style="padding: 10px; border-bottom: 1px solid #E5E7EB; color: #111827;">
                  <a href="mailto:${email}" style="color: #D97706; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #E5E7EB; font-weight: bold; color: #6B7280;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #E5E7EB; color: #111827;">
                  <a href="tel:${phone}" style="color: #D97706; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #E5E7EB; font-weight: bold; color: #6B7280;">Service:</td>
                <td style="padding: 10px; border-bottom: 1px solid #E5E7EB; color: #111827;">${service}</td>
              </tr>
            </table>

            ${message ? `
              <h2 style="color: #333; font-size: 18px; margin-top: 25px; margin-bottom: 15px;">Message:</h2>
              <div style="background-color: #F3F4F6; padding: 15px; border-radius: 5px; color: #374151;">
                ${message}
              </div>
            ` : ''}

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB; color: #6B7280; font-size: 14px;">
              <p style="margin: 5px 0;">Please contact the client as soon as possible to confirm their appointment.</p>
              <p style="margin: 5px 0;">This is an automated notification from your Wicked Bronze Beauty booking system.</p>
            </div>
          </div>
        </div>
      `,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      throw new Error(`Resend API error: ${JSON.stringify(errorData)}`);
    }

    const emailData = await emailResponse.json();
    console.log("Email sent successfully:", emailData);

    return new Response(JSON.stringify(emailData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-booking-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
