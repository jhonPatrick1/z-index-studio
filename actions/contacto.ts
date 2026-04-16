'use server'

import { Resend } from 'resend';

// Inicializamos Resend con tu llave de entorno
const resend = new Resend(process.env.RESEND_API_KEY);

export async function procesarFormulario(formData: FormData) {
  const nombre = formData.get('nombre') as string;
  const empresa = formData.get('empresa') as string;
  const email = formData.get('email') as string;
  const servicio = formData.get('servicio') as string;
  const mensaje = formData.get('mensaje') as string;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Z-Index Studio <onboarding@resend.dev>', // Resend te da este por defecto al inicio
      to: ['jhonpatrickcg@gmail.com'], // El correo donde quieres recibir los leads
      subject: `🚀 Nuevo Lead: ${empresa}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #0f172a;">
          <h2 style="color: #2dd4bf;">Nuevo Requerimiento Técnico</h2>
          <p><strong>Responsable:</strong> ${nombre}</p>
          <p><strong>Empresa:</strong> ${empresa}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Área de Interés:</strong> ${servicio}</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="white-space: pre-wrap;">${mensaje}</p>
        </div>
      `,
    });

    if (error) throw error;

    return { success: true };

  } catch (err) {
    console.error("Error en Resend:", err);
    return { success: false };
  }
}