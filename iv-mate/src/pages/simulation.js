import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/simulation.css";
import Note from "../assets/Vector.svg";

const Simulation = () => {
  const navigate = useNavigate();
  const [jobPosition, setJobPosition] = useState("");
  const [jobDetails, setJobDetails] = useState("");
  const [selfIntroduction, setSelfIntroduction] = useState("");
  const maxLength = 1500;

  const handleNextClick = () => {
    // 사용자가 입력한 데이터를 기반으로 테스트 페이지로 이동
    // 백엔드 코드 필요
    navigate("/app/test", {
      state: { jobPosition, jobDetails, selfIntroduction },
    });
  };

  return (
    <div className="simulation-container">
      <h2 className="simulation-title">자기소개서 및 정보 입력하기</h2>
      <p className="simulation-time">{new Date().toLocaleString()}</p>

      <div className="simulation-form">
        <div className="form-group">
          <label htmlFor="job-position">직무 입력하기</label>
          <select
            id="job-position"
            value={jobPosition}
            onChange={(e) => setJobPosition(e.target.value)}
          >
            <option value="">직무 선택</option>
            <option value="Developer">개발자</option>
            <option value="Designer">디자이너</option>
            <option value="Marketer">마케터</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="job-details">직무 상세 선택하기</label>
          <select
            id="job-details"
            value={jobDetails}
            onChange={(e) => setJobDetails(e.target.value)}
          >
            <option value="">직무 상세 선택</option>
            <option value="Frontend">프론트엔드</option>
            <option value="Backend">백엔드</option>
            <option value="Fullstack">풀스택</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="self-introduction">자기소개서 입력</label>
          <textarea
            id="self-introduction"
            placeholder="자기소개서 작성 유의사항 및 예시를 참고하여 작성하세요."
            value={selfIntroduction}
            onChange={(e) => {
              if (e.target.value.length <= maxLength) {
                setSelfIntroduction(e.target.value);
              }
            }}
          />
          <p className="char-count">
            {selfIntroduction.length} / {maxLength}자
          </p>
        </div>
        <button
          className="next-button"
          onClick={handleNextClick}
          disabled={!jobPosition || !jobDetails || !selfIntroduction}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Simulation;
