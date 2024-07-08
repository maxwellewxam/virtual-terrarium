function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    terrariumElement.onpointerdown = pointerDrag;
    terrariumElement.ondblclick = bringToFront;

    function pointerDrag(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + "px";
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + "px";
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }

    function bringToFront() {
        terrariumElement.style.zIndex = parseInt(terrariumElement.style.zIndex || 0) + 1;
    }
}

function changeDirtColor() {
    const color = document.getElementById('dirtColorPicker').value;
    document.querySelector('.dirt').style.backgroundColor = color;
}

function resetPlants() {
    const plants = document.querySelectorAll('.plant');
    plants.forEach(plant => {
        plant.style.top = '';
        plant.style.left = '';
    });
}

dragElement(document.getElementById('plant1'));
dragElement(document.getElementById('plant2'));
dragElement(document.getElementById('plant3'));
dragElement(document.getElementById('plant4'));
dragElement(document.getElementById('plant5'));
dragElement(document.getElementById('plant6'));
dragElement(document.getElementById('plant7'));
dragElement(document.getElementById('plant8'));
dragElement(document.getElementById('plant9'));
dragElement(document.getElementById('plant10'));
dragElement(document.getElementById('plant11'));
dragElement(document.getElementById('plant12'));
dragElement(document.getElementById('plant13'));
dragElement(document.getElementById('plant14'));
dragElement(document.getElementById('plant15'));
dragElement(document.getElementById('plant16'));