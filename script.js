
        function changeParagraphText() {
            document.getElementById("textParagraph").innerHTML = "Thirisha";
        }

        function changeDivColor() {
            document.getElementById("colorDiv").style.backgroundColor = "lightblue";
        }

        function toggleParagraph() {
            const paragraph = document.getElementById("toggleParagraph");
            if (paragraph.style.display === "none") 
                {
                paragraph.style.display = "block";
            } 
            else 
            {
                paragraph.style.display = "none";
            }
        }

        function addListItem() {
            const newItem = document.createElement("li");
            newItem.textContent = "Item";
            document.getElementById("myList").appendChild(newItem);
        }

        function changeImageSource() {
            document.getElementById("myImage").src = "Untitled.webp";
        }

        function countParagraphs() {
            const paragraphs = document.getElementsByTagName("p");
            alert("Number of paragraphs: " + paragraphs.length);
        }

            function deleteListItem() {
                const list = document.getElementById("myList");
                const items = list.getElementsByTagName("li"); // Get all <li> elements
                if (items.length > 2) {
                    console.log(items.length);
                    list.removeChild(items[items.length - 1]); // Remove the last <li> element
                }
            }
            