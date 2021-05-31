westFirst = () => {
    const west1 = document.getElementById("west1").value;
    const westSemi = document.getElementById("westSemi");
    westSemi.removeAttribute("class", "hide");
    const option1 = document.createElement("option");
    option1.innerText = west1;
    option1.setAttribute("value", west1);
    westSemi.appendChild(option1);
};

westSecond = () => {
    const west2 = document.getElementById("west2").value;
    const westSemi = document.getElementById("westSemi");
    const option2 = document.createElement("option");
    westSemi.removeAttribute("class", "hide");
    option2.innerText = west2;
    option2.setAttribute("value", west2);
    westSemi.appendChild(option2);
};

eastFirst = () => {
    const east1 = document.getElementById("east1").value;
    const eastSemi = document.getElementById("eastSemi");
    eastSemi.removeAttribute("class", "hide");
    const option1 = document.createElement("option");
    option1.innerText = east1;
    option1.setAttribute("value", east1);
    eastSemi.appendChild(option1);
};

eastSecond = () => {
    const east2 = document.getElementById("east2").value;
    const eastSemi = document.getElementById("eastSemi");
    eastSemi.removeAttribute("class", "hide");
    const option2 = document.createElement("option");
    option2.innerText = east2;
    option2.setAttribute("value", east2);
    eastSemi.appendChild(option2);
};

centralFirst = () => {
    const central1 = document.getElementById("central1").value;
    const centralSemi = document.getElementById("centralSemi");
    centralSemi.removeAttribute("class", "hide");
    const option1 = document.createElement("option");
    option1.innerText = central1;
    option1.setAttribute("value", central1);
    centralSemi.appendChild(option1);
};

centralSecond = () => {
    const central2 = document.getElementById("central2").value;
    const centralSemi = document.getElementById("centralSemi");
    centralSemi.removeAttribute("class", "hide");
    const option2 = document.createElement("option");
    option2.innerText = central2;
    option2.setAttribute("value", central2);
    centralSemi.appendChild(option2);
};

northFirst = () => {
    const north1 = document.getElementById("north1").value;
    const northSemi = document.getElementById("northSemi");
    northSemi.removeAttribute("class", "hide");
    const option1 = document.createElement("option");
    option1.innerText = north1;
    option1.setAttribute("value", north1);
    northSemi.appendChild(option1);
};

northSecond = () => {
    const north2 = document.getElementById("north2").value;
    const northSemi = document.getElementById("northSemi");
    const option2 = document.createElement("option");
    northSemi.removeAttribute("class", "hide");
    option2.innerText = north2;
    option2.setAttribute("value", north2);
    northSemi.appendChild(option2);
};

westSemi = () => {
    const westSemi = document.getElementById("westSemi").value;
    const westFinal = document.getElementById("final1");
    const option1 = document.createElement("option");
    westFinal.removeAttribute("class", "hide");
    option1.innerText = westSemi;
    option1.setAttribute("value", westSemi);
    westFinal.appendChild(option1);
};

eastSemi = () => {
    const eastSemi = document.getElementById("eastSemi").value;
    const eastFinal = document.getElementById("final1");
    const option1 = document.createElement("option");
    eastFinal.removeAttribute("class", "hide");
    option1.innerText = eastSemi;
    option1.setAttribute("value", eastSemi);
    eastFinal.appendChild(option1);
};

centralSemi = () => {
    const centralSemi = document.getElementById("centralSemi").value;
    const centralFinal = document.getElementById("final2");
    const option2 = document.createElement("option");
    centralFinal.removeAttribute("class", "hide");
    option2.innerText = centralSemi;
    option2.setAttribute("value", centralSemi);
    centralFinal.appendChild(option2);
};

northSemi = () => {
    const northSemi = document.getElementById("northSemi").value;
    const northFinal = document.getElementById("final2");
    const option2 = document.createElement("option");
    northFinal.removeAttribute("class", "hide");
    option2.innerText = northSemi
    option2.setAttribute("value", northSemi);
    northFinal.appendChild(option2);
};

showButton = () => {
    const final1 = document.getElementById("final1").value;
    const final2 = document.getElementById("final2").value;
    const submit = document.getElementById("submit-bracket");

    if ((final1 !== "None") && (final2 !== "None")) {
        submit.classList.remove("hide")
    } else
    return;

};

async function submitBracket(event) {
    event.preventDefault();

    const west1 = document.getElementById("west1").value;
    const west2 = document.getElementById("west2").value;
    const east1 = document.getElementById("east1").value;
    const east2 = document.getElementById("east2").value;
    const central1 = document.getElementById("central1").value;
    const central2 = document.getElementById("central2").value;
    const north1 = document.getElementById("north1").value;
    const north2 = document.getElementById("north2").value;
    const west_semi = document.getElementById("westSemi").value;
    const east_semi = document.getElementById("eastSemi").value;
    const central_semi = document.getElementById("centralSemi").value;
    const north_semi = document.getElementById("northSemi").value;
    const final1 = document.getElementById("final1").value;
    const final2 = document.getElementById("final2").value;

    const response = await fetch(`/api/bracket`, {
        method: 'POST',
        body: JSON.stringify({
            west1,
            west2,
            east1,
            east2,
            central1,
            central2,
            north1,
            north2,
            west_semi,
            east_semi,
            central_semi,
            north_semi,
            final1,
            final2,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Failed to create bracket');
    }
}

document.querySelector('.submit-bracket').addEventListener('click', submitBracket);