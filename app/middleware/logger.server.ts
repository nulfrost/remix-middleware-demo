import { MiddlewareFunctionArgs } from "remix-create-express-app/middleware";

export async function loggerMiddleware({
  request,
  next,
}: MiddlewareFunctionArgs) {
  console.log(`Middleware being executed before accessing: ${request.url}`);
  const response = await next();
  return response;
}
