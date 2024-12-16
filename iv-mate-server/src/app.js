const { callChatGPT } = require("./chatgpt.js");
const express = require("express");
const cors = require("cors");
const db = require("./db.js");
// const server = require("http").createServer(app);
require("dotenv").config();

const app = express();

// 미들웨어 설정
app.use(
  cors({
    origin: process.env.REACT_APP_BASE_URL,
    credentials: true,
  })
);
app.use(express.json()); // JSON 요청 본문 파싱
app.use(express.urlencoded({ extended: true }));

// // 라우트 설정
const authRouter = require("../routes/auth.js");
const aiRouter = require("../routes/ai.js");
app.use("/auth", authRouter);
app.use("/ai", aiRouter);

// 기본 라우트
app.get("/", (req, res) => {
  res.send("Node.js 백엔드가 실행 중입니다!");
});

// livenessProbe용 헬스체크 엔드포인트 추가
app.get("/health", (req, res) => {
  res.status(200).send("OK"); // 서버가 정상적으로 작동 중임을 나타냄
});

//ask 라우트 추가: 면접 질문 생성 요청을 받음
app.post("/ask", async (req, res) => {
  const prompt = "면접 질문 5개 생성해줘"; // 이 부분을 사용자가 원하는 질문으로 동적으로 바꿀 수도 있음
  const response = await callChatGPT(prompt);

  if (response) {
    res.json({ response: response });
  } else {
    res.status(500).json({ error: "ChatGPT API 호출 실패" });
  }
});

// 서버 실행
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
