var templateFields = [{
        "type": "text",
        "label": "Company Name",
        "model": "name.first",
        "name": "Company_Name"
    },
    
    {
    "type": "select",
    "model": "select",
    "label": "Funding Type",
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
  },
   {
    "type": "select",
    "model": "select",
    "label": "Is your customer located in one or both of the following states?",
    "name": "Funding_Type_Follow_Up",
    "empty": "nothing selected",
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
    "model": "select",
    "label": "Line of Buisness",
    "name": "line_of_buisness",
    "empty": "nothing selected",
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
    "model": "select",
    "label": "Audience",
    "name": "Audience",
    "empty": "nothing selected",
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