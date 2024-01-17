const nodemailer = require("nodemailer");
const express = require("express");
const router = express.Router();

router.post("/sendEmail", async function (req, res) {
  try {
    let user_email = req.body.email;

    console.log(user_email);

    // 메일발송 함수
    let transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      host: "smtp.gmail.com",
      secure: false,
      requireTLS: true,
      auth: {
        user: "jy3961@gmail.com",
        pass: "계정비밀번호 입력", 
      },
    });

    let info = await transporter.sendMail({
      from: "jy3961@gmail.com", 
      to: user_email,
      subject: "안녕하세요",
      text: "ㅁㄴㅇㄹ",
    });

    console.log("Email sent:", info);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

module.exports = router;
