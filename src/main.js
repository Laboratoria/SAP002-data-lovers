let showElementsTab = function (e) {
    let tabSelect = e.target.dataset.tabEnable;
    console.log(showElementsTab);
    let jobBr = document.querySelector("jobBr");
    let unemployedBr = document.querySelector("unemployedBr");
    let educationBr = document.querySelector("educationBr");

    if (tabSelect === "tabJob") {
        jobBr.style.display = "block";
        unemployedBr.style.display = "none";
        educationBr.style.display = "none";
    } else if (tabSelect === "tabUnemployed") {
        jobBr.style.display = "none";
        unemployedBr.style.display = "block";
        educationBr.style.display = "none";
    } else if (tabSelect === "tabEducation") {
        jobBr.style.display = "none";
        unemployedBr.style.display = "none";
        educationBr.style.display = "block";
    }
}

let tagsBr = function () {
    let jobBr = document.querySelector("jobBr");
    let unemployedBr = document.querySelector("unemployedBr");
    let educationBr = document.querySelector("educationBr");

    jobBr.style.display = "none";
    unemployedBr.style.display = "none";
    educationBr.style.display = "none";

    let elementsTab = document.querySelectorAll("tab");
    for (let i of elementsTab) {
        elementsTab[i].addEventListener("click", showElementsTab)
    }
}

tagsBr();