export const successResponse = (res: any, data: any, message = "Success") => {
  return res.status(200).json({
    success: true,
    message,
    data,
  });
};

export const errorResponse = (res: any, error: any, code = 500) => {
  return res.status(code).json({
    success: false,
    message: error.message || "Something went wrong",
  });
};
