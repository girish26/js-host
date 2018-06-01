
var templateFields = [
  {
  "type":"accordion",  
  "name":"General Information to Help Build Your Brochur",
  "conditionExpression":"true",
  "components":[
  {
        "type": "text",
        "label": "Company Name",
        "model": "Company_Name",
        "name": "Company_Name",
        "conditionExpression":" formData.Union_Audience == 'Union' ",      
    },
    
    {
    "type": "select",
    "model": "Funding_Type",
    "label": "Funding Type",
    "name": "Funding_Type",
    "empty": "Please select",
    "conditionExpression":"formData.Company_Name",
  
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
    "conditionExpression":"(formData.Funding_Type == 'ASO' && formData.Company_Name) || formData.Funding_Type == 'Fully Insured' ",
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
     "conditionExpression":"formData.Funding_Type_Follow_Up == 'Illinois'",
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
  }]
},
{
  "type":"accordion",  
  "name":"Product",
  "label":"test accordion11",
  "conditionExpression":" formData.Union_Audience == 'Union' ", 
  "components":[
  {
        "type": "select",
        "label": "Include Health Plan pages?",
        "model": "Health_Plans_LabelCell",
        "name": "Health_Plans_LabelCell",
        "empty": "Please select",
        "options":{
          "No":{
            "label":"No"
          },
          "Yes":{
            "label":"Yes"
          }
        }  
  },
    {
      "type": "select",
        "label": "Number of Health Plans",
        "model": "Total_Plan_Quantity_LabelCell",
        "name": "Total_Plan_Quantity_LabelCell",
        "empty": "Please select",
         "conditionExpression":"formData.Health_Plans_LabelCell == 'Yes'",
        "options":{
          "0":{
            "label":"0"
          },
          "1":{
            "label":"1"
          },
           "2":{
            "label":"2"
          },
          "3":{
            "label":"3"
          },
           "4":{
            "label":"4"
          },
          "5":{
            "label":"5"
          },
           "6":{
            "label":"6"
          },
          "7":{
            "label":"7"
          }
        }  

    },
   {
        "type": "select",
        "label": "FSA?",
        "model": "FSA_LabelCell",
        "name": "FSA_LabelCell",
        "empty": "Please select",

        "options":{
          "No":{
            "label":"No"
          },
          "Yes":{
            "label":"Yes"
          }
        }  
  },  
  
  ]
},
{
  "type":"accordion",  
  "name":"Health Plan1: How the Plan Works",
  "label":"Health Plan1: How the Plan Works",
  "conditionExpression":" formData.Total_Plan_Quantity_LabelCell > 0 && formData.Health_Plans_LabelCell == 'Yes'", 
  "components":[
   {
        "type": "text",
        "label": "Custom Plan Name",
        "model": "Plan_1_Custom_Name_LabelCell",
        "name": "Plan_1_Custom_Name_LabelCell",
    },
    {
        "type": "select",
        "label": "Plan",
        "model": "Plan_1_Name_LabelCell",
        "name": "Plan_1_Name_LabelCell",
        "empty": "Please select",
         "conditionExpression":"formData.Health_Plans_LabelCell == 'Yes'",
        "options":{
          "Choice":{
            "label":"Choice"
          },
          "Choice Plus":{
            "label":"Choice Plus"
          }
        }  

    },
   {
        "type": "select",
        "label": "Financial account?",
        "model": "Plan_1_Type_LabelCell",
        "name": "Plan_1_Type_LabelCell",
        "empty": "Please select",
        
        "options":{
          "Traditional":{
            "label":"Traditional"
          },
          "with HSA":{
            "label":"with HSA"
          }
        }  
  },  
  
  ]
},
{
  "type":"accordion",  
  "name":"Health Plan2: How the Plan Works",
  "label":"Health Plan2: How the Plan Works",
  "conditionExpression":" formData.Total_Plan_Quantity_LabelCell > 1 && formData.Health_Plans_LabelCell == 'Yes'", 
  "components":[
   {
        "type": "text",
        "label": "Custom Plan Name",
        "model": "Plan_2_Custom_Name_LabelCell",
        "name": "Plan_2_Custom_Name_LabelCell",
    },
    {
        "type": "select",
        "label": "Plan",
        "model": "Plan_2_Name_LabelCell",
        "name": "Plan_2_Name_LabelCell",
        "empty": "Please select",
         "conditionExpression":"formData.Health_Plans_LabelCell == 'Yes'",
        "options":{
          "Choice":{
            "label":"Choice"
          },
          "Choice Plus":{
            "label":"Choice Plus"
          }
        }  

    },
   {
        "type": "select",
        "label": "Financial account?",
        "model": "Plan_2_Type_LabelCell",
        "name": "Plan_2_Type_LabelCell",
        "empty": "Please select",
        
        "options":{
          "Traditional":{
            "label":"Traditional"
          },
          "with HSA":{
            "label":"with HSA"
          }
        }  
  },  
  
  ]
},
{
  "type":"accordion",  
  "name":"Health Plan3: How the Plan Works",
  "label":"Health Plan3: How the Plan Works",
  "conditionExpression":" formData.Total_Plan_Quantity_LabelCell > 2 && formData.Health_Plans_LabelCell == 'Yes'", 
  "components":[
   {
        "type": "text",
        "label": "Custom Plan Name",
        "model": "Plan_3_Custom_Name_LabelCell",
        "name": "Plan_3_Custom_Name_LabelCell",
    },
    {
        "type": "select",
        "label": "Plan",
        "model": "Plan_3_Name_LabelCell",
        "name": "Plan_3_Name_LabelCell",
        "empty": "Please select",
         "conditionExpression":"formData.Health_Plans_LabelCell == 'Yes'",
        "options":{
          "Choice":{
            "label":"Choice"
          },
          "Choice Plus":{
            "label":"Choice Plus"
          }
        }  

    },
   {
        "type": "select",
        "label": "Financial account?",
        "model": "Plan_3_Type_LabelCell",
        "name": "Plan_3_Type_LabelCell",
        "empty": "Please select",
        
        "options":{
          "Traditional":{
            "label":"Traditional"
          },
          "with HSA":{
            "label":"with HSA"
          }
        }  
  }
  
  ]
},
{
  "type":"accordion",  
  "name":"Health Plan4: How the Plan Works",
  "label":"Health Plan4: How the Plan Works",
  "conditionExpression":" formData.Total_Plan_Quantity_LabelCell > 3 && formData.Health_Plans_LabelCell == 'Yes' ", 
  "components":[
   {
        "type": "text",
        "label": "Custom Plan Name",
        "model": "Plan_4_Custom_Name_LabelCell",
        "name": "Plan_4_Custom_Name_LabelCell",
    },
    {
        "type": "select",
        "label": "Plan",
        "model": "Plan_4_Name_LabelCell",
        "name": "Plan_4_Name_LabelCell",
        "empty": "Please select",
         "conditionExpression":"formData.Health_Plans_LabelCell == 'Yes'",
        "options":{
          "Choice":{
            "label":"Choice"
          },
          "Choice Plus":{
            "label":"Choice Plus"
          }
        }  

    },
   {
        "type": "select",
        "label": "Financial account?",
        "model": "Plan_4_Type_LabelCell",
        "name": "Plan_4_Type_LabelCell",
        "empty": "Please select",
        
        "options":{
          "Traditional":{
            "label":"Traditional"
          },
          "with HSA":{
            "label":"with HSA"
          }
        }  
  }
  
  ]
},

{
  "type":"accordion",  
  "name":"Health Plan5: How the Plan Works",
  "label":"Health Plan5: How the Plan Works",
  "conditionExpression":" formData.Total_Plan_Quantity_LabelCell > 4 && formData.Health_Plans_LabelCell == 'Yes' ", 
  "components":[
   {
        "type": "text",
        "label": "Custom Plan Name",
        "model": "Plan_5_Custom_Name_LabelCell",
        "name": "Plan_5_Custom_Name_LabelCell",
    },
    {
        "type": "select",
        "label": "Plan",
        "model": "Plan_5_Name_LabelCell",
        "name": "Plan_5_Name_LabelCell",
        "empty": "Please select",
         "conditionExpression":"formData.Health_Plans_LabelCell == 'Yes' ",
        "options":{
          "Choice":{
            "label":"Choice"
          },
          "Choice Plus":{
            "label":"Choice Plus"
          }
        }  

    },
   {
        "type": "select",
        "label": "Financial account?",
        "model": "Plan_5_Type_LabelCell",
        "name": "Plan_5_Type_LabelCell",
        "empty": "Please select",
        
        "options":{
          "Traditional":{
            "label":"Traditional"
          },
          "with HSA":{
            "label":"with HSA"
          }
        }  
  }
  
  ]
},

{
  "type":"accordion",  
  "name":"Health Plan6: How the Plan Works",
  "label":"Health Plan6: How the Plan Works",
  "conditionExpression":" formData.Total_Plan_Quantity_LabelCell > 5 && formData.Health_Plans_LabelCell == 'Yes'", 
  "components":[
   {
        "type": "text",
        "label": "Custom Plan Name",
        "model": "Plan_6_Custom_Name_LabelCell",
        "name": "Plan_6_Custom_Name_LabelCell",
    },
    {
        "type": "select",
        "label": "Plan",
        "model": "Plan_6_Name_LabelCell",
        "name": "Plan_6_Name_LabelCell",
        "empty": "Please select",
         "conditionExpression":"formData.Health_Plans_LabelCell == 'Yes'",
        "options":{
          "Choice":{
            "label":"Choice"
          },
          "Choice Plus":{
            "label":"Choice Plus"
          }
        }  

    },
   {
        "type": "select",
        "label": "Financial account?",
        "model": "Plan_6_Type_LabelCell",
        "name": "Plan_6_Type_LabelCell",
        "empty": "Please select",
        
        "options":{
          "Traditional":{
            "label":"Traditional"
          },
          "with HSA":{
            "label":"with HSA"
          }
        }  
  }
  
  ]
},

{
  "type":"accordion",  
  "name":"Health Plan7: How the Plan Works",
  "label":"Health Plan7: How the Plan Works",
  "conditionExpression":" formData.Total_Plan_Quantity_LabelCell > 6 && formData.Health_Plans_LabelCell == 'Yes'", 
  "components":[
   {
        "type": "text",
        "label": "Custom Plan Name",
        "model": "Plan_7_Custom_Name_LabelCell",
        "name": "Plan_7_Custom_Name_LabelCell",
    },
    {
        "type": "select",
        "label": "Plan",
        "model": "Plan_7_Name_LabelCell",
        "name": "Plan_7_Name_LabelCell",
        "empty": "Please select",
         "conditionExpression":"formData.Health_Plans_LabelCell == 'Yes'",
        "options":{
          "Choice":{
            "label":"Choice"
          },
          "Choice Plus":{
            "label":"Choice Plus"
          }
        }  

    },
   {
        "type": "select",
        "label": "Financial account?",
        "model": "Plan_7_Type_LabelCell",
        "name": "Plan_7_Type_LabelCell",
        "empty": "Please select",
        
        "options":{
          "Traditional":{
            "label":"Traditional"
          },
          "with HSA":{
            "label":"with HSA"
          }
        }  
  }
  
  ]
}

];

$j(document).ready(function() {
    
 	var scope = angular.element(document.getElementById('buildTemplateID')).scope().initialize('tdForm');
});
