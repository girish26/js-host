var templateFields = [{
        "type": "text",
        "label": "Company Name",
        "model": "Company_Name",
        "name": "Company_Name"
    },
    
    {
    "type": "select",
    "model": "Funding_Type",
    "label": "Funding Type",
    "name": "Funding_Type",
    "empty": "Please select",
    
    "options": {
      "ASO": {
        "label": "ASO"
      },
      "Fully Insured": {
        "label": "Fully Insured"
      }
   }
  },
   {
    "type": "select",
    "model": "Funding_Type_Follow_Up",
    "label": "Is your customer located in one or both of the following states?",
    "name": "Funding_Type_Follow_Up",
     "empty": "Please select",
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
     "empty": "Please select",
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
     "empty": "Non-Union",
    
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
