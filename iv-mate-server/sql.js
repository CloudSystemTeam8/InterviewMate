module.exports = {
  // auth 회원
  email_check: `SELECT * FROM USER WHERE email = ?`,
  nick_check: `SELECT * FROM USER WHERE nickname = ?`,
  register: `INSERT INTO USER (email, nickname, password) VALUES (?, ?, ?)`,
  login: `SELECT password FROM USER WHERE email = ?`,
  user_no_get: `SELECT user_no, nickname FROM USER WHERE email = ?`,
  get_userinfo: `SELECT email, nickname FROM USER WHERE user_no = ?`,

  // AI
  get_jobinfo: `INSERT INTO SESSION (user_no, session_job, session_status) VALUES (?, ?, '진행중')`,
  get_sessionNo: `SELECT LAST_INSERT_ID() AS session_no`,
  save_interview: `INSERT INTO INTERVIEW (user_no, session_no, interview_question, interview_answer, interview_question_no) VALUES (?, ?, ?, ?, ?)`,
  get_interview: `SELECT interview_question, interview_answer, interview_question_no FROM INTERVIEW WHERE user_no = ? AND session_no = ? ORDER BY interview_question_no ASC`,
  save_airesult: `INSERT INTO AIRESULT (user_no, session_no, ai_result_content) VALUES (?, ?, ?)`,
  update_session: `UPDATE SESSION SET session_status = '끝남' WHERE session_no = ?`,
  get_airesult: `SELECT ai_result_no, ai_result_content FROM AIRESULT WHERE user_no = ? AND session_no = ? ORDER BY ai_result_no ASC`,
  session_history: `SELECT session_job, session_no, session_date FROM SESSION WHERE user_no = ? AND session_status = '끝남' ORDER BY session_date DESC`,
  get_dateinterview: `SELECT interview_question, interview_answer, interview_question_no, session_date FROM INTERVIEW i JOIN SESSION s ON i.session_no = s.session_no WHERE i.user_no = ? AND DATE(s.session_date) = ?`,
};
