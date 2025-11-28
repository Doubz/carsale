import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !phone || !message) {
      return Response.json({ error: "所有字段都是必填的" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;

    if (!emailRegex.test(email)) {
      return Response.json({ error: "邮箱格式不正确" }, { status: 400 });
    }

    if (!phoneRegex.test(phone) || phone.replace(/\D/g, "").length < 8) {
      return Response.json({ error: "电话号码格式不正确" }, { status: 400 });
    }

    if (String(message).trim().length < 10) {
      return Response.json({ error: "留言内容至少需要10个字符" }, { status: 400 });
    }

    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log("Contact submission received:", {
      name,
      email,
      phone,
      message,
    });

    return Response.json(
      {
        success: true,
        message: "留言已成功提交，我们会尽快联系您",
        data: {
          name,
          email,
          phone,
          message,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing contact request:", error);
    return Response.json({ error: "服务器内部错误" }, { status: 500 });
  }
}
