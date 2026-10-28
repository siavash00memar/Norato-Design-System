// Local reference interactions only. No network, persistence or product API.
const form = document.querySelector('#demo-form');
const nameField = document.querySelector('#demo-name');
const error = document.querySelector('#name-error');
const submit = document.querySelector('#demo-submit');
const result = document.querySelector('#form-result');
let busy = false;

function validateName() {
  const valid = Array.from(nameField.value.trim()).length >= 3;
  nameField.setAttribute('aria-invalid', String(!valid));
  error.hidden = valid;
  error.textContent = valid ? '' : 'برای بررسی نمونه، نامی با دست‌کم ۳ نویسه وارد کن.';
  return valid;
}
nameField.addEventListener('input', () => {
  if (nameField.getAttribute('aria-invalid') === 'true') validateName();
  result.textContent = '';
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (busy) return;
  result.textContent = '';
  if (!validateName()) {
    nameField.focus();
    return;
  }
  busy = true;
  submit.disabled = true;
  submit.textContent = 'در حال بررسی نمونه…';
  form.setAttribute('aria-busy', 'true');
  result.textContent = 'این تأخیر صرفاً برای نمایش حالت بارگذاری است.';
  // This intentionally simulates a delay. It never reports a saved record.
  window.setTimeout(() => {
    busy = false;
    submit.disabled = false;
    submit.textContent = 'بررسی نمونهٔ فرم';
    form.setAttribute('aria-busy', 'false');
    result.textContent = 'بررسی نمونه تمام شد. داده‌ای ذخیره یا ارسال نشد.';
  }, 850);
});

const search = document.querySelector('#sample-search');
const rows = [...document.querySelectorAll('#sample-rows tr')];
const count = document.querySelector('#result-count');
const tableWrap = document.querySelector('#sample-results');
const empty = document.querySelector('#sample-empty');
const normalize = value => value.replaceAll('ي', 'ی').replaceAll('ك', 'ک').replaceAll('\u200c', '').trim().toLowerCase();
function filterRows() {
  const query = normalize(search.value);
  let visible = 0;
  rows.forEach(row => {
    row.hidden = !normalize(row.dataset.search).includes(query);
    if (!row.hidden) visible += 1;
  });
  tableWrap.hidden = visible === 0;
  empty.hidden = visible !== 0;
  count.textContent = `${visible.toLocaleString('fa-IR')} گزینهٔ نمایشی`;
}
search.addEventListener('input', filterRows);
document.querySelector('#clear-search').addEventListener('click', () => {
  search.value = '';
  filterRows();
  search.focus();
});

const feedback = document.querySelector('#global-feedback');
let feedbackTimer;
document.querySelectorAll('[data-feedback]').forEach(button => {
  button.addEventListener('click', () => {
    window.clearTimeout(feedbackTimer);
    feedback.hidden = false;
    feedback.textContent = button.dataset.feedback;
    feedbackTimer = window.setTimeout(() => { feedback.hidden = true; }, 6500);
  });
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    feedback.hidden = true;
    window.clearTimeout(feedbackTimer);
  }
});
