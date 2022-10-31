const {
  createProductService,
  getProductsService,
  updateProductService,
  deleteProductService,
  getProductByIdService,
} = require('../services/product.service');

exports.createProduct = async (req, res, next) => {
  try {
    const result = await createProductService(req.body);

    res.status(200).json({
      status: 'success',
      message: 'Product inserted successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'Product is not inserted',
      error: error.message,
    });
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const products = await getProductsService();

    res.status(200).json({
      status: 'success',
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: "Can't get the data",
      error: error.message,
    });
  }
};

exports.getProductById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await getProductByIdService(id);

    res.status(200).json({
      status: 'success',
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: "Can't get the data",
      error: error.message,
    });
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const response = await updateProductService(req.params.id, req.body);

    res.status(200).json({
      status: 'success',
      message: 'Product updated successfully',
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'Product update failed',
      error: error.message,
    });
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteProductService(id);

    if (!result.deletedCount) {
      return res.status(400).json({
        status: 'fail',
        error: "Couldn't delete the product",
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Successfully deleted the product',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: "Couldn't delete the product",
      error: error.message,
    });
  }
};
