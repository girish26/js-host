var templateFields = [{
        "type": "text",
        "label": "Company Name",
        "model": "name.first",
        "name": "Company_Name"
    },
    
    {
    "type": "select",
    "model": "Funding_Type",
    "label": "Funding Type",
    "name": "Funding_Type",
    "empty": "",
    "options": {
      "first": {
        "label": "ASO"
      },
      "second": {
        "label": "Fully Insured",
        "group": "first group"
      }
   }
  },
   {
    "type": "select",
    "model": "Funding_Type_Follow_Up",
    "label": "Is your customer located in one or both of the following states?",
    "name": "Funding_Type_Follow_Up",
    "empty": "",
    "options": {
      "Neither": {
        "label": "Neither"
      },
      "New York": {
        "label": "New York"
      },
      "Illinois": {
        "label": "Illinois"
      },
      "Both": {
        "label": "Both"
      }
   }
  },
   {
    "type": "select",
    "model": "Line_of_Business",
    "label": "Line of Buisness",
    "name": "Line_of_Business",
    "empty": "",
    "options": {
      "National Accounts": {
        "label": "National Accounts"
      },
      "Key Accounts": {
        "label": "Key Accounts"
      },
      "Small Buisness": {
        "label": "Small Buisness"
      },
      "Public Sector": {
        "label": "Public Sector"
      }
   }
  },
   {
    "type": "select",
    "model": "Union_Audience",
    "label": "Audience",
    "name": "Union_Audience",
    "empty": "",
    "options": {
      "Non-Union": {
        "label": "Non-Union"
      },
      "Union": {
        "label": "Union"
      }
   }
  }
];

$j(document).ready(function() {
 	var scope = angular.element(document.getElementById('buildTemplateID')).scope().initialize('tdForm');
});