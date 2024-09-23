// src/pages/api/send-email.js
import nodemailer from 'nodemailer';

export async function POST({ request }) {
  const { name, email, message } = await request.json();

  // Configurar el transporte de nodemailer con tu servidor SMTP personalizado
  const transporter = nodemailer.createTransport({
    host: 'mail.mavepo.com.mx', // Cambia por tu dominio personalizado
    port: 465, // Puerto SMTP, depende de tu configuración (puede ser 465 para SSL)
    secure: true, // Cambia a `true` si estás usando SSL (para puerto 465)
    auth: {
      user: 'david.corpi@mavepo.com.mx', // Reemplaza con tu correo personalizado
      pass: 'bMj4Qvqu=qhe', // Reemplaza con la contraseña del correo
    },
    tls: {
      rejectUnauthorized: false, // Evita problemas si tienes certificados autofirmados
    },
  });

  // Detalles del correo
  const mailOptions = {
    from: 'no-reply@mavepo.com.mx', // El correo de donde saldrá el mensaje (usa el dominio personalizado)
    to: 'david.corpi@mavepo.com.mx', // El correo destinatario
    subject: `Nuevo mensaje de ${name}`,
    text: message,
  };

  // Enviar el correo
  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al enviar el correo.' }), { status: 500 });
  }
}
