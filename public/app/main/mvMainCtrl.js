//main Controller
angular.module('app').controller('mvMainCtrl',function($scope){
    $scope.testStock = [
    {name: "Black Plaid Keyhole Front Bell Sleeve Dress", category: "Dress", price: "5.99", exclusive: true, new: true, quantity: 5},
    {name: "Black Halter One Shoulder Bodycon Dress", category: "Dress", price: "8.99", exclusive: true, new: true, quantity: 7},
    {name: "Black Ripped Drawstring Sweatpants", category: "Pants", price: "6.99", exclusive: true, new: true, quantity: 9},
    {name: "Black Contrast Elastic Waist Faux Leather Leggings", category: "Pants", price: "5.99", exclusive: false, new: true, quantity: 15},
    {name: "Silver Elastic Fabric Chunky Heel Short Boots", category: "Shoes", price: "5.99", exclusive: false, new: true, quantity: 3},
    {name: "White V Neck Drop Shoulder Sweater", category: "Sweater", price: "25.99", exclusive: true, new: true, quantity: 7},
    {name: "Pink Layered Ruffle Sleeve Pullover Sweater", category: "Sweater", price: "15.99", exclusive: false, new: false, quantity: 9},
    {name: "Turtleneck Raglan Sleeve Loose Sweater", category: "Jumper", price: "55.99", exclusive: true, new: false, quantity: 11},
    {name: "White Lace Overlay Elastic Waist Skirt", category: "Skirt", price: "5.99", exclusive: false, new: false, quantity: 12},
    {name: "Plaid Back Zipper Pleated Skirt", category: "Skirt", price: "5.99", exclusive: false, new: false, quantity: 14}
    ]
});