


const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
  //forEach
  //synchronous callback, takes 3 parameters 
  companies.forEach((company,index)=>{
    //console.log(company);
  }); 
  //filter to get ages 21 and above
 const newAge = ages.filter((age) => age >= 21);
 //console.log(newAge);
// filter to get retail companies
const retailCompanies = companies.filter((company)=> company.category === 'Retail');
// console.log(retailCompanies);
// filter get companies that lasted 10 years or more
const getCompaniesLastedTenYears = companies.filter((company)=> company.end - company.start > 10);
//console.log(getCompaniesLastedTenYears);
// map : it maps into new array of your wish
const getCompanywithStartandEndDate = companies.map(company => `${company.name}  [${company.start} - ${company.end}]`);
//console.log(getCompanywithStartandEndDate);
// sort companies using start year
const getSortedCompanies = companies.sort((a,b) => a.start > b.start ? 1 : -1);
//console.log(getSortedCompanies);
// sort the ages
const sortedAges = ages.sort((a,b) => a-b);
//console.log(sortedAges);
// reduce
const sumAges = ages.reduce((total,age)=> total + age,0);
console.log(sumAges);

