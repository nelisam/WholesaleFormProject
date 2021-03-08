//Show & Hide field
$("#seeCompanyRegField").change(function () {
  if ($(this).val() == "Sole-Proprietor") {
    $("#soleProprietorFieldDiv").show();
    $("#soleProprietorField").attr("required", "");
    $("#soleProprietorField").attr("data-error", "This field is required.");
  } else {
    $("#soleProprietorFieldDiv").hide();
    $("#soleProprietorField").removeAttr("required");
    $("#soleProprietorField").removeAttr("data-error");
  }
});
$("#seeCompanyRegField").trigger("change");
