function insertIcon(selector) {
	var icons = document.querySelectorAll(selector);
	icons.forEach(function(icon) {
		var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		var use = document.createElementNS("http://www.w3.org/2000/svg", "use");

		// Check if the element is a button or i tag
		if (icon.tagName.toLowerCase() === 'button') {
			var buttonData = icon.getAttribute('data-icon');
			if (buttonData) {
				var iconId = buttonData.split("-")[1];		
				var classParts = buttonData.split("-");				
			}
		} else if (icon.tagName.toLowerCase() === 'i') {
		  var iconId = icon.className.split("-")[1];
		  var classParts = icon.className.split("-");
		}
		// Extract the color and size from the class name
		var color = null;
		var size = null;
		if (classParts.length === 4) {
			color = classParts[3];
			size = classParts[2];
		} else if (classParts.length === 3) {
			if (isNaN(classParts[2])) {
				color = classParts[2];
			} else {
				size = classParts[2];
			}
		}
		var svgURL = "https://pawan418.github.io/lspl-icon/lspl-icon.svg";
        // Fetch the SVG file from the provided URL
        fetch(svgUrl)
		// Fetch the SVG file from the "css" folder on your server
		//fetch('css/lspl-icon.svg') // Update the path to the "css" folder as per your server's file structure
		.then(function(response) {
			return response.blob();
		})
		.then(function(svgBlob) {
			// Create a URL for the fetched SVG blob
			var svgURL = URL.createObjectURL(svgBlob);

			// Set the xlink:href attribute of the <use> element to the fetched SVG file
			use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", svgURL + "#" + iconId);
			// Set the stroke and fill to the extracted color or default to black
			svg.setAttribute("style", "stroke: " + (color || "black") + "; fill: " + (color || "black") + ";");

			// Set the size dynamically based on the class name
			if (size) {
				svg.setAttribute("width", size);
				svg.setAttribute("height", size);
			} else {
				// Set the default size of the icon
				svg.setAttribute("width", "20");
				svg.setAttribute("height", "20");
			}
			svg.appendChild(use);
			// Add a CSS class to the icon
			icon.classList.add("ico");
			// Create a span element for the text
			var textSpan = document.createElement("span");
			var text = icon.innerText.trim();
			if (text) {
				textSpan.textContent = text;
				// Remove the italic style from the text
				textSpan.style.fontStyle = "normal";

				// Add the lspl-icon class to the parent <i> element
				icon.classList.add("lspl-icon");
          
				// Add margin-right after the svg
				svg.style.marginRight = "8px";
			}

			// Empty the icon element
			icon.innerHTML = '';

			// Append the svg and text elements to the icon element
			icon.appendChild(svg);
			if (textSpan.textContent) {
				icon.appendChild(textSpan);
			}
			// Add a CSS class to the svg
			svg.classList.add("icon");
		})
		.catch(function(error) {
			console.error('Error fetching SVG file:', error);
		});
	});
}

var colors = ["blue", "white", "red"];
var sizes = ["30", "40", "50", "60"]; // Add more sizes as needed

document.addEventListener("DOMContentLoaded", function() {
    colors.forEach(function(color) {
        for (var i = 1; i <= 100; i++) {
            insertIcon(".lspl-dashboard-" + i + "-" + color);
            insertIcon(".lspl-users-" + i + "-" + color);
            insertIcon(".lspl-claims-" + i + "-" + color);
            insertIcon(".lspl-pages-" + i + "-" + color);
            insertIcon(".lspl-settings-" + i + "-" + color);
            insertIcon(".lspl-coins-" + i + "-" + color);
            insertIcon(".lspl-price-" + i + "-" + color);
            insertIcon(".lspl-editprofile-" + i + "-" + color);
            insertIcon(".lspl-addpage-" + i + "-" + color);
            insertIcon(".lspl-close-" + i + "-" + color);
            insertIcon(".lspl-edit-" + i + "-" + color);
            insertIcon(".lspl-deleteuser-" + i + "-" + color);
            insertIcon(".lspl-addclaim-" + i + "-" + color);
            insertIcon(".lspl-editclaim-" + i + "-" + color);
            insertIcon(".lspl-view-" + i + "-" + color);
            insertIcon(".lspl-delete-" + i + "-" + color);
            insertIcon(".lspl-photo-" + i + "-" + color);
            insertIcon(".lspl-uploadphoto-" + i + "-" + color);
            insertIcon(".lspl-downloadphoto-" + i + "-" + color);
            insertIcon(".lspl-addphoto-" + i + "-" + color);
            insertIcon(".lspl-editphoto-" + i + "-" + color);
            insertIcon(".lspl-deletephoto-" + i + "-" + color);
            insertIcon(".lspl-checkphoto-" + i + "-" + color);
            insertIcon(".lspl-removephoto-" + i + "-" + color);
            insertIcon(".lspl-uploadfile-" + i + "-" + color);
            insertIcon(".lspl-totalclaims-" + i + "-" + color);
            insertIcon(".lspl-buyclaims-" + i + "-" + color);
            insertIcon(".lspl-sellclaims-" + i + "-" + color);
            insertIcon(".lspl-confirm-" + i + "-" + color);
            insertIcon(".lspl-cancel-" + i + "-" + color);
            insertIcon(".lspl-balancesheet-" + i + "-" + color);
            insertIcon(".lspl-report-" + i + "-" + color);
            insertIcon(".lspl-claim-" + i + "-" + color);
            insertIcon(".lspl-addprice-" + i + "-" + color);
            insertIcon(".lspl-viewclaim-" + i + "-" + color);
            insertIcon(".lspl-password-" + i + "-" + color);
            insertIcon(".lspl-profile-" + i + "-" + color);
            insertIcon(".lspl-logout-" + i + "-" + color);
        }
    });

    sizes.forEach(function(size) {
        insertIcon(".lspl-dashboard-" + size);
        insertIcon(".lspl-users-" + size);
        insertIcon(".lspl-claims-" + size);
        insertIcon(".lspl-pages-" + size);
        insertIcon(".lspl-settings-" + size);
        insertIcon(".lspl-coins-" + size);
        insertIcon(".lspl-price-" + size);
        insertIcon(".lspl-editprofile-" + size);
        insertIcon(".lspl-addpage-" + size);
        insertIcon(".lspl-close-" + size);
        insertIcon(".lspl-edit-" + size);
        insertIcon(".lspl-deleteuser-" + size);
        insertIcon(".lspl-addclaim-" + size);
        insertIcon(".lspl-editclaim-" + size);
        insertIcon(".lspl-view-" + size);
        insertIcon(".lspl-delete-" + size);
        insertIcon(".lspl-photo-" + size);
        insertIcon(".lspl-uploadphoto-" + size);
        insertIcon(".lspl-downloadphoto-" + size);
        insertIcon(".lspl-addphoto-" + size);
        insertIcon(".lspl-editphoto-" + size);
        insertIcon(".lspl-deletephoto-" + size);
        insertIcon(".lspl-checkphoto-" + size);
        insertIcon(".lspl-removephoto-" + size);
        insertIcon(".lspl-uploadfile-" + size);
        insertIcon(".lspl-totalclaims-" + size);
        insertIcon(".lspl-buyclaims-" + size);
        insertIcon(".lspl-sellclaims-" + size);
        insertIcon(".lspl-confirm-" + size);
        insertIcon(".lspl-cancel-" + size);
        insertIcon(".lspl-balancesheet-" + size);
        insertIcon(".lspl-report-" + size);
        insertIcon(".lspl-claim-" + size);
        insertIcon(".lspl-addprice-" + size);
        insertIcon(".lspl-viewclaim-" + size);
        insertIcon(".lspl-password-" + size);
        insertIcon(".lspl-profile-" + size);
        insertIcon(".lspl-logout-" + size);
    });
    
    
  colors.forEach(function(color) {
    insertIcon(".lspl-dashboard-" + color);
    insertIcon(".lspl-users-" + color);
    insertIcon(".lspl-claims-" + color);
    insertIcon(".lspl-pages-" + color);
    insertIcon(".lspl-settings-" + color);
    insertIcon(".lspl-coins-" + color);
    insertIcon(".lspl-price-" + color);
    insertIcon(".lspl-editprofile-" + color);
    insertIcon(".lspl-addpage-" + color);
    insertIcon(".lspl-close-" + color);
    insertIcon(".lspl-edit-" + color);
    insertIcon(".lspl-deleteuser-" + color);
    insertIcon(".lspl-addclaim-" + color);
    insertIcon(".lspl-editclaim-" + color);
    insertIcon(".lspl-view-" + color);
    insertIcon(".lspl-delete-" + color);
    insertIcon(".lspl-photo-" + color);
    insertIcon(".lspl-uploadphoto-" + color);
    insertIcon(".lspl-downloadphoto-" + color);
    insertIcon(".lspl-addphoto-" + color);
    insertIcon(".lspl-editphoto-" + color);
    insertIcon(".lspl-deletephoto-" + color);
    insertIcon(".lspl-checkphoto-" + color);
    insertIcon(".lspl-removephoto-" + color);
    insertIcon(".lspl-uploadfile-" + color);
    insertIcon(".lspl-totalclaims-" + color);
    insertIcon(".lspl-buyclaims-" + color);
    insertIcon(".lspl-sellclaims-" + color);
    insertIcon(".lspl-confirm-" + color);
    insertIcon(".lspl-cancel-" + color);
    insertIcon(".lspl-balancesheet-" + color);
    insertIcon(".lspl-report-" + color);
    insertIcon(".lspl-claim-" + color);
    insertIcon(".lspl-addprice-" + color);
    insertIcon(".lspl-viewclaim-" + color);
    insertIcon(".lspl-password-" + color);
    insertIcon(".lspl-profile-" + color);
    insertIcon(".lspl-logout-" + color);
  });
  insertIcon(".lspl-dashboard");
    insertIcon(".lspl-users");
    insertIcon(".lspl-claims");
    insertIcon(".lspl-pages");
    insertIcon(".lspl-settings");
    insertIcon(".lspl-coins");
    insertIcon(".lspl-price");
    insertIcon(".lspl-editprofile");
    insertIcon(".lspl-addpage");
    insertIcon(".lspl-close");
    insertIcon(".lspl-edit");
    insertIcon(".lspl-deleteuser");
    insertIcon(".lspl-addclaim");
    insertIcon(".lspl-editclaim");
    insertIcon(".lspl-view");
    insertIcon(".lspl-delete");
    insertIcon(".lspl-photo");
    insertIcon(".lspl-uploadphoto");
    insertIcon(".lspl-downloadphoto");
    insertIcon(".lspl-addphoto");
    insertIcon(".lspl-editphoto");
    insertIcon(".lspl-deletephoto");
    insertIcon(".lspl-checkphoto");
    insertIcon(".lspl-removephoto");
    insertIcon(".lspl-uploadfile");
    insertIcon(".lspl-totalclaims");
    insertIcon(".lspl-buyclaims");
    insertIcon(".lspl-sellclaims");
    insertIcon(".lspl-confirm");
    insertIcon(".lspl-cancel");
    insertIcon(".lspl-balancesheet");
    insertIcon(".lspl-report");
    insertIcon(".lspl-claim");
    insertIcon(".lspl-addprice");
    insertIcon(".lspl-viewclaim");
    insertIcon(".lspl-password");
    insertIcon(".lspl-profile");
    insertIcon(".lspl-logout");
    
    // Handle buttons with data-icon attribute
    var buttons = document.querySelectorAll("button[data-icon]");
    buttons.forEach(function(button) {
        insertIcon("button[data-icon]");
    });
});
