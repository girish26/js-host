var templateFields = [{
        "type": "text",
        "label": "First Name",
        "model": "name.first",
        "name": "Company_Name"
    },
    {
        "type": "text",
        "label": "Last Name",
        "model": "name.last"
        
    },
    {
        "type": "email",
        "label": "Email Address",
        "model": "email"
    },
    {
    "type": "select",
    "model": "select",
    "label": "select",
    "name": "Funding_Type",
    "empty": "nothing selected",
    "options": {
      "first": {
        "label": "ASO"
      },
      "second": {
        "label": "Fully Insured",
        "group": "first group"
      }
  }
}];

$j(document).ready(function() {
 	var scope = angular.element(document.getElementById('buildTemplateID')).scope().initialize('tdForm');
});