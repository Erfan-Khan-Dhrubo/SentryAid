import emailjs from "@emailjs/browser";
export const sendMail = (toMail, msg, title) => {
  const serviceID = "";
  const templateId = "";
  const publicKey = "";

  const templateParam = {
    title: title,
    to_name: toMail,
    message: msg,
    name: "Admin",
  };

  emailjs
    .send(
      serviceID, // from Email Services
      templateId, // from your template
      templateParam,
      publicKey // from Account settings
    )
    .then((result) => {
      console.log("Email sent!", result.text);
      // alert("Email sent!");
    })
    .catch((error) => {
      console.error("Email failed:", error);
      alert("Failed to send email");
    });
};
