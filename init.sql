CREATE DATABASE IF NOT EXISTS interviewmate;

USE interviewmate;

CREATE TABLE USER (
    user_no INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    nickname VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE SESSION (
    session_no INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    user_no INT NOT NULL, -- FK
    session_date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    session_job VARCHAR(20) NOT NULL,
    session_status VARCHAR(10) DEFAULT '진행중' NOT NULL,
    FOREIGN KEY (user_no) REFERENCES USER(user_no) ON DELETE CASCADE
);

CREATE TABLE INTERVIEW (
                           interview_no INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
                           user_no INT NOT NULL,
                           session_no INT NOT NULL,
                           interview_question TEXT NOT NULL,
                           interview_answer TEXT NOT NULL,
                           interview_question_no INT NOT NULL,
                           FOREIGN KEY (user_no) REFERENCES USER(user_no) ON DELETE CASCADE,
                           FOREIGN KEY (session_no) REFERENCES SESSION(session_no) ON DELETE CASCADE
);

CREATE TABLE AIRESULT (
    ai_result_no INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    user_no INT NOT NULL, 
    session_no INT NOT NULL, 
    ai_result_content TEXT NOT NULL,
    FOREIGN KEY (user_no) REFERENCES USER(user_no) ON DELETE CASCADE,
    FOREIGN KEY (session_no) REFERENCES SESSION(session_no) ON DELETE CASCADE
);
