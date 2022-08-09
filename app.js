const profile = document.querySelector(".profile_links");
const singleTeam = document.querySelector(".single_team_container");
console.log(singleTeam, profile);

singleTeam.addEventListener("mouseover", () => {
  console.log("hi");
  //   profile.classList.toggle("open_team");
  //   profile.classList.add("open_team");
});
singleTeam.addEventListener("mouseleave", () => {
  //   profile.classList.toggle("close_team");
  console.log("hello");
});
