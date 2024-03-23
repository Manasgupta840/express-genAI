import { textInputService } from "../../services/genAiService";
import { Request, Response } from "express";

export const textSearch = async (req: Request, resp: Response) => {
  const result = await textInputService(String(req.body.query) ?? "");
  resp.send(result);
};
