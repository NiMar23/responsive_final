function last_img() {
    let elements = document.getElementsByTagName("figure");
    for (i = 0; i < elements.length; i++) {
        console.log(elements.src);
      elements[i].style.flex = "25%";
    }
}