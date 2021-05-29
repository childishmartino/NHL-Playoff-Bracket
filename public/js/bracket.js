westRoundTwoChange = () => {
    const west1 = document.getElementById("west1").value;
    const west2 = document.getElementById("west2").value;
    if ((west1 === "W1") && (west2 === "W2")) {
        document.getElementById("w1VsW2").removeAttribute("class", "hide");
    } else if ((west1 === "W1") && (west2 === "W3")) {
        document.getElementById("w1VsW3").removeAttribute("class", "hide");
    } else if ((west1 === "W4") && (west2 === "W2")) {
        document.getElementById("w4VsW2").removeAttribute("class", "hide");
    } else if ((west1 === "W4") && (west2 === "W3")) {
        document.getElementById("w4VsW3").removeAttribute("class", "hide");
    };
};

centralRoundTwoChange = () => {
    const central1 = document.getElementById("central1").value;
    const central2 = document.getElementById("central2").value;
    if ((central1 === "C1") && (central2 === "C2")) {
        document.getElementById("c1VsC2").removeAttribute("class", "hide");
    } else if ((central1 === "C1") && (central2 === "C3")) {
        document.getElementById("c1VsC3").removeAttribute("class", "hide");
    } else if ((central1 === "C4") && (central2 === "C2")) {
        document.getElementById("c4VsC2").removeAttribute("class", "hide");
    } else if ((central1 === "C4") && (central2 === "C3")) {
        document.getElementById("c4VsC3").removeAttribute("class", "hide");
    };
};

eastRoundTwoChange = () => {
    const east1 = document.getElementById("east1").value;
    const east2 = document.getElementById("east2").value;
    if ((east1 === "E1") && (east2 === "E2")) {
        document.getElementById("e1VsE2").removeAttribute("class", "hide");
    } else if ((east1 === "E1") && (east2 === "E3")) {
        document.getElementById("e1VsE3").removeAttribute("class", "hide");
    } else if ((east1 === "E4") && (east2 === "E2")) {
        document.getElementById("e4VsE2").removeAttribute("class", "hide");
    } else if ((east1 === "E4") && (east2 === "E3")) {
        document.getElementById("e4VsE3").removeAttribute("class", "hide");
    };
};