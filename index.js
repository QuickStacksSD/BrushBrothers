
window.onload = function () {
    const images1 = ["IMG/2.jpg", "IMG/Inside.jpg", "IMG/3.jpg", "IMG/Outside.jpg", "IMG/1.jpg"];
    const images2 = ["IMG/1.jpg", "IMG/Outside.jpg", "IMG/2.jpg", "IMG/Inside.jpg", "IMG/3.jpg"];

    let index1 = 0;
    let index2 = 0;

    function changeImages() {
        document.getElementById("image1").src = images1[index1];
        document.getElementById("image2").src = images2[index2];

        index1 = (index1 + 1) % images1.length;
        index2 = (index2 + 1) % images2.length;

        setTimeout(changeImages, 5000);
    }

    changeImages();
};

