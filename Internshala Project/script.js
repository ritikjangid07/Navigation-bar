function showContent(contentId) {
    // Hide all content divs
    var contentDivs = document.querySelectorAll("#content > div");
    for (var i = 0; i < contentDivs.length; i++) {
      contentDivs[i].classList.add("hidden");
    }

    // Show the selected content
    var selectedContent = document.getElementById(contentId);
    selectedContent.classList.remove("hidden");
  }