const { expect } = require("@jest/globals");
const supertest = require("supertest");
const { number } = require("yargs");
const results = require("./results.json")
const app = require('../server');

// **********************************
//         BASIC ROUTES TESTS
// **********************************


test("GET /hello no parameters", async () => {
    await supertest(app).get("/hello")
      .expect(200)
      .then((response) => {
        // Check text 
        expect(response.text).toBe("Hi! Welcome to the Oeda Platform!")
      });
});

test("GET /hello with name", async () => {
  
    await supertest(app).get("/hello?name=Clara")
      .expect(200)
      .then((response) => {
        // Check text 
        expect(response.text).toBe("Hi, Clara! Welcome to the Oeda Platform!")
      });
});


test("GET /YearlyOrder default", async () => {
  
  await supertest(app).get("/YearlyOrder")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(1)
    expect(response.body.results).toStrictEqual(results.yearlyorder_2018)

  });
});

test("GET /YearlyOrder with year", async () => {
  
  await supertest(app).get("/YearlyOrder?year=2017")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(1)
    expect(response.body.results).toStrictEqual(results.yearlyorder_2017)

  });
});

test("GET /YearlySales default", async () => {
  
  await supertest(app).get("/YearlySales")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(1)
    expect(response.body.results).toStrictEqual(results.yearlysales_2018)

  });
});

test("GET /YearlySales with year", async () => {
  
  await supertest(app).get("/YearlySales?year=2017")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(1)
    expect(response.body.results).toStrictEqual(results.yearlysales_2017)

  });
});

test("GET /YearlyReview default", async () => {
  
  await supertest(app).get("/YearlyReview")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(1)
    expect(response.body.results).toStrictEqual(results.yearlyreview_2018)

  });
});

test("GET /YearlyReview with year", async () => {
  
  await supertest(app).get("/YearlyReview?year=2017")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(1)
    expect(response.body.results).toStrictEqual(results.yearlyreview_2017)

  });
});

test("GET /YearlyState default", async () => {
  
  await supertest(app).get("/YearlyState")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(1)
    expect(response.body.results).toStrictEqual(results.yearlystate_2018)

  });
});

test("GET /YearlyReview with year", async () => {
  
  await supertest(app).get("/YearlyState?year=2017")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(1)
    expect(response.body.results).toStrictEqual(results.yearlystate_2017)

  });
});

test("GET /search default", async () => {
  
  await supertest(app).get("/search")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(423)
  });
});

test("GET /search with param", async () => {
  
  await supertest(app).get("/search?category=perf&low=0&high=500&year=2018&month=5")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(11)
  });
});

test("GET /allmarket default", async () => {
  
  await supertest(app).get("/allmarket")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(10)
    expect(response.body.results).toStrictEqual(results.all_market)

  });
});

test("GET /allmarket with year", async () => {
  
  await supertest(app).get("/allmarket?year=2017")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(5)
    expect(response.body.results).toStrictEqual(results.all_market_2017)

  });
});

test("GET /market default", async () => {
  
  await supertest(app).get("/market")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(10)
    expect(response.body.results).toStrictEqual(results.market)

  });
});

test("GET /market with year city", async () => {
  
  await supertest(app).get("/market?city=salvador&year=2017")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(1)
    expect(response.body.results).toStrictEqual(results.market_salvador_2017)

  });
});

test("GET /allreview default", async () => {
  
  await supertest(app).get("/allreview")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(10)
    expect(response.body.results).toStrictEqual(results.all_review)

  });
});

test("GET /review default", async () => {
  
  await supertest(app).get("/review")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(1)
    expect(response.body.results).toStrictEqual(results.review_homeappliance)

  });
});

test("GET /review with category", async () => {
  
  await supertest(app).get("/review?category=toys")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(1)
    expect(response.body.results).toStrictEqual(results.review_toys)

  });
});

test("GET /allhabit default", async () => {
  
  await supertest(app).get("/allhabit")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(27)
  });
});


test("GET /habit default", async () => {
  
  await supertest(app).get("/habit")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(27)
  });
});

test("GET /habit with state", async () => {
  
  await supertest(app).get("/habit?state=RR")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(1)
    expect(response.body.results).toStrictEqual(results.state)

  });
});

test("GET /transaction default", async () => {
  
  await supertest(app).get("/transaction")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(10)
  });
});

test("GET /topOrder default", async () => {
  
  await supertest(app).get("/topOrder")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(10)
  });
});

test("GET /topOrder with year", async () => {
  
  await supertest(app).get("/topOrder?year=2016")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(4)
  });
});

test("GET /topSales default", async () => {
  
  await supertest(app).get("/topSales")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(10)
  });
});

test("GET /topSales with year", async () => {
  
  await supertest(app).get("/topSales?year=2016")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(4)
  });
});


test("GET /topReview default", async () => {
  
  await supertest(app).get("/topReview")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(10)
  });
});

test("GET /topReview with year", async () => {
  
  await supertest(app).get("/topReview?year=2016")
  .expect(200)
  .then((response) => {
    expect(response.body.results.length).toEqual(0)
  });
});
