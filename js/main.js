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

function InitNavigationBarToggle() {
	$('#MainNavbarId').on('shown.bs.collapse', function () {
		OnNavigationBarShow(false);
	});
	$('#MainNavbarId').on('show.bs.collapse', function () {
		OnNavigationBarShow(true);
	});
	$('#MainNavbarId').on('hide.bs.collapse', function () {
		OnNavigationBarHide(true);
	});
	$('#MainNavbarId').on('hidden.bs.collapse', function () {
		OnNavigationBarHide(false);
	});
}

function OnNavigationBarHide(animateOpacity) {
	$("#NavbarMenuButtonId").html("<i class=\"fa fa-bars custom-navbar-icon\" aria-hidden=\"true\"></i>");
	if (animateOpacity) {
		$("i.custom-navbar-icon").css("opacity", "0");
		$("i.custom-navbar-icon").fadeTo("fast", 1.00);
	}
}

function OnNavigationBarShow(animateOpacity) {
	var closeIconElement = document.createElement("i");
	closeIconElement.setAttribute("class", "fa fa-times custom-navbar-icon");
	closeIconElement.setAttribute("aria-hidden", "true");
	$("#NavbarMenuButtonId").html(closeIconElement.outerHTML);
	if (animateOpacity) {
		$("i.custom-navbar-icon").css("opacity", "0");
		$("i.custom-navbar-icon").fadeTo("fast", 1.00);
	}
}

function InitFadeInBottomAnimationForElement(elementId) {
	var element = document.getElementById(elementId);

	var elementScrollTop = element.offsetTop;
	var currentPosition = document.documentElement.scrollTop + $(window).height();

	if (currentPosition >= elementScrollTop) {
		element.classList.add("fade-in-bottom");
	}
}

function InitAllFadeInBottomAnimations() {
	InitFadeInBottomAnimationForElement("InformationContentContainerId");
	InitFadeInBottomAnimationForElement("AboutMeContentContainerId");
	InitFadeInBottomAnimationForElement("EmailMeContentContainerId");
	InitFadeInBottomAnimationForElement("PortfolioContainerId");
}

function SetOpacityToZeroForAllAnimationElements() {
	SetOpacityToZeroForElement("InformationContentContainerId");
	SetOpacityToZeroForElement("AboutMeContentContainerId");
	SetOpacityToZeroForElement("EmailMeContentContainerId");
	SetOpacityToZeroForElement("PortfolioContainerId");
}

function SetOpacityToZeroForElement(elementId) {
	var element = document.getElementById(elementId);
	element.style.opacity = 0;
}

function GoToElement(elementId) {
	var elementOffsetTop = document.getElementById(elementId).offsetTop;
	$(window).scrollTop(elementOffsetTop);
}

function InitPageLoad() {
	$("#SplashContainerId").fadeOut("slow");
	setTimeout(function () {
		InitAllFadeInBottomAnimations();
	}, 100);
}

$(window).scroll(function () {
	InitAllFadeInBottomAnimations();
});