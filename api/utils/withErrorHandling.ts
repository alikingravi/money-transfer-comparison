import { NextRequest, NextResponse } from "next/server";
import { AxiosError } from "axios";

const isProduction = process.env.NODE_ENV === "production";

function parseAxiosError(error: AxiosError) {
  const status = error.response?.status || 500;

  const errorData = error.response?.data as {
    errors?: string[];
    message?: string;
  };
  const errorMessage =
    errorData?.errors?.join(", ") ||
    errorData?.message ||
    error.message ||
    "An unknown error occurred";

  return { status, message: errorMessage };
}

/**
 * Wrap any async route handler to automatically handle errors
 * @param handler route handler function
 */
export function withErrorHandling(
  handler: (req: NextRequest) => Promise<NextResponse>,
): (req: NextRequest) => Promise<NextResponse> {
  return async (req: NextRequest) => {
    try {
      return await handler(req);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        const { status, message } = parseAxiosError(error);

        if (!isProduction) {
          console.error(
            "Axios error in route:",
            status,
            error.response?.data || error.message,
          );
        }

        return NextResponse.json({ error: message }, { status });
      }

      // Handle generic JS errors
      if (error instanceof Error) {
        if (!isProduction) {
          console.error("Error in route:", error.message, error.stack);
        }

        return NextResponse.json(
          { error: "Internal server error" },
          { status: 500 },
        );
      }

      // Unknown error
      console.error("Unknown error in route:", error);
      return NextResponse.json(
        { error: "Failed to fetch data" },
        { status: 500 },
      );
    }
  };
}
