// netlify/functions/honeypot-logger.js
exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);
    console.log("BOT DETECTED:", {
      ip: data.ip || "Unknown IP",
      userAgent: data.userAgent || "Unknown UA",
      timestamp: new Date().toISOString(),
    });
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error("Error:", error);
    return { statusCode: 500, body: "Internal Server Error" };
  }
};