
/* Set the width of the side navigation to 250px */
function openNav() {
document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}


function downloadCV() {
    // Replace 'path_to_your_cv_file.pdf' with the actual path to your CV file
    const fileUrl = 'images/solimancv.png';

    // Create an anchor element
    const link = document.createElement('a');

    // Set the href attribute to the file URL
    link.href = fileUrl;

    // Set the download attribute to specify the file name
    link.download = 'images/solimancv.png';

    // Append the anchor element to the body
    document.body.appendChild(link);

    // Trigger a click event on the anchor element to initiate download
    link.click();

    // Remove the anchor element from the DOM
    document.body.removeChild(link);
}