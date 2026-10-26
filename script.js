const starBoxes = document.querySelectorAll(".stars");

starBoxes.forEach((box) => {
    const rating = parseFloat(box.dataset.rating);
    const filledStars = Math.round(rating);
    let starsText = "";
    for(let i=1; i<=5;i++){
        if(i<=filledStars){
            starsText += "★";
        }
        else{
            starsText += "☆";
        }
    }
    box.textContent = `${starsText} (${rating})`;
});