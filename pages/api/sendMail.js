import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const { name, phone, altPhone, issue } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Consultation Request",
      text: `
Name: ${name}
Phone: ${phone}
Alternate Phone: ${altPhone}

Issue:
${issue}
`,

    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

