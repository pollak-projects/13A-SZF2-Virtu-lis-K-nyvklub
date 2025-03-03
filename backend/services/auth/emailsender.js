import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "",
        pass: "",
    },
}),

export async function SendEmail(useremail) {
    const info = await transporter.sendMail({
        to: useremail,
        subject: "Elfelejtett-jelszó-visszállítása",
        text: "[Jelszó link]",
        html:
        "<div style='font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; width: 100%; max-width: 600px;margin: 0 auto;background-color: #ffffff;padding: 20px;border-radius: 10px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);'>" +
        "<div style=' text-align: center; margin-bottom: 20px;'>" +
        "<img src='' alt='Logo' style=' max-width: 150px;'>" +
        "</div>" +
        "<div style='text-align: center; margin-bottom: 20px; color: #333;'>" +
        "<h2 style=' color: #000000;'>Elfelejtett jelszó</h2> <br>" +
        "<p>A jelszavad visszaállítását kérted. Amennyiben te voltál, az alábbi gombra kattintva elvégezheted azt!</p>" +
        "<p><a href='[Jelszó visszaállító link]' style=' background-color: #45a049;  display: inline-block; padding: 15px 30px;background-color: #4CAF50; color: #ffffff; text-decoration: none; border-radius: 5px; font-weight: bold;'>Állítsd vissza a jelszót</a></p>" +
        "<p>Ha nem te voltál akkor ezt az emailt hagyd figyelmen kívül.</p>" +
        "<p>A link 1 óráig érvényes, azután lejár.</p>" +
        "</div>" +
        "<div style='text-align: center; font-size: 12px; color: #777; margin-top: 20px;'>" +
        "<p>Üdvözlettel,</p>" +
        "<p>Pollák Könyvklub</p>" +
        "</div>" +
        "</div>",
    })
    console.log("elküldve: %s", info.messageId);
}