(function() {

	function DynamicInvitationDemo() {
		this.loadAndDisplayInvitationResource();
	};

	DynamicInvitationDemo.prototype.loadAndDisplayInvitationResource = function() {
		var script = document.createElement("script");

		script.type = "text/javascript";
		script.src = "https://cm224local.stmfa.stm.force.com/community0605/resource/1588879363000/sampleInvitationResource";

		script.onload = DynamicInvitationDemo.generateInvitation();

		document.body.appendChild(script);
	};

	DynamicInvitationDemo.prototype.generateInvitation = function(callback) {
		var invitation = document.createElement("div");

		// This Channel Menu markup was generated by Tiffany, thanks for making this look nice!	
		invitation.innerHTML = DynamicInvitationDemo.invitationMarkup;

		// Don't display the button until you generate the CSS.
		invitation.style = DynamicInvitationDemo.styleTag;

		// Now that we have created the button append it to the page
		document.body.appendChild(invitation);
	};

	document.DynamicInvitationDemo = new DynamicInvitationDemo();
})(document.DynamicInvitationDemo || {});
