import { Request, Response } from "express";
import {
  createUserService,
  deleteUserService,
  getUserDetails,
  updateUserDetails,
} from "../services/userService";

export const createUser = async (req: Request, resp: Response) => {
  const user = await createUserService(req.body.userName, req.body.password);
  resp.send(user);
};

export const updateUser = async (req: Request, resp: Response) => {
  if (
    typeof req.query.userName === "string" &&
    typeof req.query.password === "string"
  ) {
    try {
      let newUser = await updateUserDetails(
        req.query.userName,
        req.query.password,
        req.body
      );
      if (newUser.affected && newUser.affected > 0) {
        return resp.status(200).send({ message: "user updated successfully" });
      } else {
        return resp.send({ message: "Please provide valid details." });
      }
    } catch (err) {
      resp.status(500).json(err);
    }
  }
  resp.send({ message: "Please try again." });
};

export const getUser = async (req: Request, resp: Response) => {
  if (
    typeof req.query.userName === "string" &&
    typeof req.query.password === "string"
  ) {
    const user = await getUserDetails(req.query.userName, req.query.password);
    return resp.status(200).send(user);
  }
  return resp.status(404).send({ message: "User not found" });
};

export const deleteUser = async (req: Request, resp: Response) => {
  console.log(req.params);
  const deleted = await deleteUserService(req.params.userId);
  console.log(deleted);
  if (deleted.affected && deleted.affected > 0) {
    return resp.status(200).send({ message: "user deleted successfully" });
  } else {
    return resp.send({ message: "Please provide valid details." });
  }
};
