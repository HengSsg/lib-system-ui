
// 아이디 유효성 검사
const id = document.querySelector("#userId")
const btn = document.querySelector("#idchk")

// console.log(id)

const pattern = new RegExp("^[a-zA-Z][0-9a-zA-Z]{7,12}$")
// const pattern = / /
// console.log(id.value);
btn.addEventListener('click', function() {
if (pattern.test(id.value)) {
    alert('사용가능한 아이디입니다');
} else {
    alert('아이디는 영문, 숫자의 조합으로 8~12자 이내로 작성해주세요.');
    id.value = ''
    id.focus()
}
})

// 비밀번호 유효성 검사
const password = document.querySelector("#userpwd");
const pwbtn = document.querySelector("#pwchk");

const pwpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/;

pwbtn.addEventListener('click', function() {
  if (pwpattern.test(password.value)) {
    alert('사용 가능한 비밀번호입니다.');
  } else {
    alert('비밀번호는 영문 대소문자, 숫자, 특수 문자를 포함한 8~12자 이내로 작성해주세요.');
    password.value = '';
    password.focus();
  }
});

// 비밀번호 재확인
const passwordInput = document.querySelector("#userpwd");
const confirmPasswordInput = document.querySelector("#pwchk");

confirmPasswordInput.addEventListener('input', function() {
  const passwordValue = passwordInput.value.trim();
  const confirmPasswordValue = confirmPasswordInput.value.trim();

  if (passwordValue !== confirmPasswordValue) {
    confirmPasswordInput.setCustomValidity('비밀번호가 일치하지 않습니다.');
  } else {
    confirmPasswordInput.setCustomValidity('');
  }
});

// 이메일 유효성 검사
const mail = document.querySelector("#usermail");
const mailbtn = document.querySelector("#mailchk");
const emailchk = /^[0-9a-zA-Z]([-_.@]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
mailbtn.addEventListener('click', function() {
  if (emailchk.test(mail.value)) {
    alert('사용 가능한 이메일 주소입니다.');
  } else {
    alert('유효하지 않은 이메일 주소입니다.');
    mail.value = '';
    mail.focus();
  }
});

// 휴대폰번호 유효성 검사
const phoneNumberInput = document.querySelector("#userphone");
const phonebtn = document.querySelector("#phonechk");
const phonechk = /^\d{3}-\d{3,4}-\d{4}$/;

phonebtn.addEventListener('click', function() {
  if (phonechk.test(phoneNumberInput.value)) {
    alert('사용 가능한 전화번호입니다.');
  } else {
    alert('유효하지 않은 전화번호입니다. 전화번호는 XXX-XXXX-XXXX 또는 XXX-XXX-XXXX 형식으로 입력해주세요.');
    phoneNumberInput.value = '';
    phoneNumberInput.focus();
  }
});

// 필수 입력값 확인하는 코드
const form = document.querySelector("#myForm" );

form.addEventListener('submit', function(event) {
  event.preventDefault(); // 폼 제출을 막음

  const idInput = document.querySelector("#userId");
  const passwordInput = document.querySelector("#userpwd");
  const nameInput = document.querySelector("#username");
  const addressInput = document.querySelector("#useraddr");
  const emailInput = document.querySelector("#usermail");
  const phoneNumberInput = document.querySelector("#userphone");

  const idValue = idInput.value.trim();
  const passwordValue = passwordInput.value.trim();
  const nameValue = nameInput.value.trim();
  const addressValue = addressInput.value.trim();
  const emailValue = emailInput.value.trim();
  const phoneNumberValue = phoneNumberInput.value.trim();

  if (idValue === '' || passwordValue === '' || nameValue === '' || addressValue === '' || emailValue === '' || phoneNumberValue === '') {
    alert('모든 필수 입력값을 입력해주세요.');
    return;
  }

  // 필수 입력값이 모두 입력되었으므로 폼 제출 수행
  form.submit();

  const url = "http://127.0.0.1:5501/a_before_figma2/user/RegiAfter.html";

  // 현재 창에서 페이지 이동
  window.location.href = url;
});