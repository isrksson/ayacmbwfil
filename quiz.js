const result = {
  seonghwa: {
    name: "Seonghwa",
    badge: "Certified Softie",
    desc: "Why are you even taking this quiz? lmao"
  },
  hongjoong: {
    name: "Hongjoong",
    badge: "",
    desc: "You are Kim Hongjoong. How tf do you not have a bf yet?? Go get him."
  }
};

function showResult() {
  const pattern = [0,1,2,3,4,5,6,7,8,9,10].map(i => document.getElementById('q'+i).checked ? 'T' : 'F').join('');

  
}