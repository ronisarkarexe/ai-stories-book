export function getErrorMessage(err: unknown): string {
  interface ErrorWithData {
    data?: { message?: string }[];
  }

  if (
    typeof err === "object" &&
    err !== null &&
    "data" in err &&
    Array.isArray((err as ErrorWithData).data)
  ) {
    const errorArray = (err as ErrorWithData).data;
    if (errorArray && errorArray.length > 0 && errorArray[0].message) {
      return errorArray[0].message;
    }
  }
  return "Something went wrong";
}
