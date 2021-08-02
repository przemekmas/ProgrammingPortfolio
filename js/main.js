function EmailMe() {
	var emailMeId = document.getElementById("ContactEmailMeLinkId");

	var queryParameters;
	var contactSubjectId = document.getElementById("ContactSubjectId");
	var contactMessageId = document.getElementById("ContactMessageId");

	if (contactSubjectId.value != "") {
		queryParameters = "subject=" + contactSubjectId.value;
	}

	if (contactMessageId.value != "") {
		if (queryParameters != "") {
			queryParameters += "&";
		}

		queryParameters += "body=" + contactMessageId.value;
	}

	if (queryParameters != "") {
		emailMeId.setAttribute("href", "mailto:przemyslawm@outlook.com?" + queryParameters);
	}
	else {
		emailMeId.setAttribute("href", "mailto:przemyslawm@outlook.com");
	}
}