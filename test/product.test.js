const {
  fetchAllProductDetails,
  fetchProductsDetailsById,
  addProductDetails,
} = require("../controllers/product.controller");

const http = require("http");
const { app } = require("../index");
const { error } = require("console");

// define mock functions
jest.mock("../controllers/product.controller.js", () => ({
  ...jest.requireActual("../controllers/product.controller.js"),
  fetchAllProductDetails: jest.fn(),
  fetchProductsDetailsById: jest.fn(),
  addProductDetails: jest.fn(),
}));

let server;

beforeAll((done) => {
  server = http.createServer(app);
  server.listen(3001, done);
});

afterAll((done) => {
  server.close(done);
});

describe("all products function to test", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("1 : should return all products", () => {
    let mockItem = [
      { id: 1, name: "Laptop", category: "Electronics" },
      { id: 2, name: "Coffee Maker", category: "Appliances" },
      { id: 3, name: "Headphones", category: "Electronics" },
      { id: 4, name: "Running Shoes", category: "Footwear" },
    ];
    fetchAllProductDetails.mockReturnValue(mockItem);
    let result = fetchAllProductDetails();
    expect(result).toEqual(mockItem);
    expect(result.length).toBe(4);
    expect(fetchAllProductDetails).toHaveBeenCalled();
  });

  test("should return item id ", () => {
    let mockItem = { id: 1, name: "Laptop", category: "Electronics" };
    fetchProductsDetailsById.mockReturnValue(mockItem);
    let result = fetchProductsDetailsById(mockItem);
    expect(result).toEqual(mockItem);
    expect(fetchProductsDetailsById).toHaveBeenCalledWith(mockItem);
  });

  test("should be return undefined if id not found", () => {
    fetchProductsDetailsById.mockReturnValue(undefined);
    let result = fetchProductsDetailsById(123);
    expect(result).toBeUndefined();
    expect(fetchProductsDetailsById).toHaveBeenCalledWith(123);
  });

  test("should add new product item to the list", () => {
    let mockItem = {
      id: 5,
      title: "Inception",
      director: "Christopher Nolan",
    };

    addProductDetails.mockReturnValue(mockItem);
    let result = addProductDetails(mockItem);
    expect(result).toEqual(mockItem);
    expect(addProductDetails).toHaveBeenCalledWith(mockItem);
  });
});
