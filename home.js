
var projects_button = document.getElementById('projects-button')
projects_button.addEventListener("click", function() {
    document.querySelector(".sphere-1").classList.add("sphere-1-out")
    document.querySelector(".sphere-2").classList.add("sphere-2-out")
    document.querySelector(".sphere-3").classList.add("sphere-3-out")
    document.querySelector(".sphere-4").classList.add("sphere-4-out")
    document.querySelector(".sphere-5").classList.add("sphere-5-out")

    document.getElementById("mockup-screen").classList.add("mockup-screen-hide")

    setTimeout(function() {
        window.location.href = "./projects.html"
      }, 750)
    
})
    
/***********************************************************************************/


