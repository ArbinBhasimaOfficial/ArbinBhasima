
import type { Request, Response } from "express";
import { posts, replacePosts } from "./service.js";
import { sendResponse } from "../../http/response/index.js";
import { CustomError } from "../../http/error/customError.js";
import type { PostCreateInput } from "./schemas/create.schema.js";
import type { PostUpdateInput } from "./schemas/update.schema.js";


export function postIndexHandler(req: Request, res: Response) {
  return sendResponse({
    res,
    data: posts,
    message: "Posts retrieved successfully",
    statusCode: 200
  })
}


export function postRetrieveHandler(req: Request, res: Response) {
  const id = req.params.id;
  const post = posts.find((post) => post.id === id);
  if (!post) throw new CustomError("Post not found", 404);
  return sendResponse({
    res,
    data: post,
    message: "Post retrieved successfully",
    statusCode: 200
  })
}


export function postCreateHandler(req: Request, res: Response) {
  const validatedBody = req.body as PostCreateInput;

  const randomId = (Math.floor(Math.random() * 1000) + 1).toString();
  const post = { id: randomId, ...validatedBody };
  posts.push(post);

  return sendResponse({
    res,
    data: post,
    message: "Post created successfully",
    statusCode: 201
  })
}


export function postUpdateHandler(req: Request, res: Response) {
  const id = req.params.id;
  const validatedBody = req.body as PostUpdateInput;

  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex === -1) throw new CustomError("Post not found", 404);
  const post = posts[postIndex]!
  const updatedPost = { ...post, ...validatedBody } as PostCreateInput & {
    id: string;
  }
  posts[postIndex] = updatedPost;

  return sendResponse({
    res,
    data: updatedPost,
    message: "Post updated successfully",
    statusCode: 200
  })
}


export function postDeleteHandler(req: Request, res: Response) {
  const id = req.params.id;

  const postIndex = posts.findIndex((post) => post.id === id);
  if (postIndex === -1) throw new CustomError("Post not found", 404);
  const newPosts = posts.filter((post) => post.id !== id);
  replacePosts(newPosts);
  return sendResponse({
    res,
    data: newPosts,
    message: "Post deleted successfully",
    statusCode: 200
  })
}
