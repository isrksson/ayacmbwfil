const result = {
  seonghwa: {
    name: "Seonghwa",
    badge: "Certified Softie",
    desc: "Why are you even taking this quiz? lmao"
  },
  hongjoong: {
    name: "Hongjoong",
    badge: "Old Man",
    desc: "You are Kim Hongjoong. How tf do you not have a bf yet?? Go get him."
  }
};

function showResult() {
  const totalQuestions = 7;
  let allSeonghwaAnswers = true;

  for(let i = 0; i < totalQuestions; i++){
    const selected = document.querySelector('input[name="q${i}"]:checked');

    if (!selected || selected.value !== 'last'){
      allSeonghwaAnswers = false;
      break;
    }
  }

  const r = allSeonghwaAnswers ? result.seonghwa : result.hongjoong;
  const box = document.getElementById('result');
  document.getElementById('result-name').textContent = r.name;
  document.getElementById('result-badge').textContent = r.badge;
  document.getElementById('result-desc').textContent = r.desc;
  box.style.display = 'block';
  box.scrollIntoView({behavior:'smooth', block:'nearest'});
}