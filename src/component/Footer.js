import React from "react";

const Footer = () => {
  return (
    <div class="footer-area">
      <footer class="py-5 container">
        <div class="row">
          <div class="col-6 col-md-2 mb-3">
            <h5>카테고리</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Women
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Men
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Baby
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Kids
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  H&M HOME
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Sport
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Sale
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Magazine
                </a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h5>기업 정보</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  H&M 채용정보
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  H&M 회사소개
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  H&M Group 지속가능성
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  언론
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  IR 정보
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Corporate governance
                </a>
              </li>
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h5>고객지원</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  고객 서비스
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  내 계정
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  매장 찾기
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  개인정보 처리방침
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  문의하기
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  기프트 카드
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  사기 신고
                </a>
              </li>
              <li class="nav-item mb-2">
                <a href="#" class="nav-link p-0 text-body-secondary">
                  Cookie Settings
                </a>
              </li>
            </ul>
          </div>

          <div class="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>지금 멤버십에 가입하세요!</h5>
              <p>지금 가입하시고 10% 할인받으세요</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <button class="btn btn-danger" type="button">
                  가입하기
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>&copy; 2024 Company, Inc. All rights reserved.</p>
          <ul class="list-unstyled d-flex">
            <li class="ms-3">
              <a class="link-body-emphasis" href="#">
                <svg class="bi" width="24" height="24"></svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-body-emphasis" href="#">
                <svg class="bi" width="24" height="24"></svg>
              </a>
            </li>
            <li class="ms-3">
              <a class="link-body-emphasis" href="#">
                <svg class="bi" width="24" height="24"></svg>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
