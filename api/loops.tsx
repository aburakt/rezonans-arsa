// import { LoopsClient } from "loops";
// import { NextResponse } from "next/server";

// const loops = new LoopsClient(process.env.LOOPS_API_KEY!);

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const { name, email, phone, message } = body;

//     await loops.sendTransactionalEmail({
//       transactionalId: "contact-form",
//       // to: process.env.EMAIL_ADRESS,
//       subject: "Yeni İletişim Formu Mesajı",
//       variables: {
//         name,
//         email,
//         phone,
//         message,
//         date: new Date().toLocaleDateString('tr-TR'),
//       },
//     });

//     return NextResponse.json({
//       success: true,
//       message: "Mesaj başarıyla gönderildi"
//     });
//   } catch (error) {
//     console.error("Contact form submission error:", error);
//     return NextResponse.json(
//       { error: "Mesaj gönderilemedi" },
//       { status: 500 }
//     );
//   }
// }