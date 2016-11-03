var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];


function calculateSumSales(arrayOfSales) {
  for (var i = 0; i < arrayOfSales.length; i++) {
    var eachSale = arrayOfSales[i];
    var total = 0;
    for (var j = 0; j < eachSale.sales.length; j++) {
      var num = eachSale.sales[j];
      total += num;
    }
    eachSale.sales = total;
  }
  return arrayOfSales;
};


function addTaxRate(arrayOfSales2, allTaxRates) {
   for (var i = 0; i < arrayOfSales2.length; i++) {
    var eachSale = arrayOfSales2[i];



    if (allTaxRates[eachSale.province]) {

      var total = eachSale.sales * allTaxRates[eachSale.province];

      eachSale.totalTax = total;
    }
   }
   return arrayOfSales2;
};


function calculateGrandTotal(arrayOfSales3) {
  var result = {};


  for (var i = 0; i < arrayOfSales3.length; i++) {
    var eachSale = arrayOfSales3[i];

    if (!result[eachSale.name]) {
      result[eachSale.name] = {};
      result[eachSale.name].totalSales = eachSale.sales;
      result[eachSale.name].totalTax = eachSale.totalTax;

    } else {
      result[eachSale.name].totalSales += eachSale.sales;
      result[eachSale.name].totalTax += eachSale.totalTax;
    }
  }
  return result;

};

function calculateSalesTax(salesData, taxRates) {
  var sumSales = calculateSumSales(salesData);
  var sumSalesWithTotalTax = addTaxRate(sumSales, taxRates);
  return calculateGrandTotal(sumSalesWithTotalTax);
};

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);

