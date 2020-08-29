
var shopper = {
  Name: "Tekelia Terry",
  membership_id_num: 4875,
  isActive: true,
 confirm_shopper: function() {
    return this.Name + " is assigned Membership Number " + this.membership_id_num;
    
  },
  groceryCart: ["bread", "water", "eggs", "Lysol"]
  };
  
  console.log(shopper.confirm_shopper());