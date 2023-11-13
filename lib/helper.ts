import catchAsync from "./catchAsync";
import mongoose, { Model, Query } from "mongoose";
import { Request, Response, NextFunction } from "express";
import Consumer from "../models/Consumer";

export const deleteOne = (Model: Model<any>) =>
  catchAsync(async (req: Request, res: Response) => {
    const doc = await Model.findById(req.params.id);

    if (!doc) {
      return res.status(404).json({
        status: "Not found",
        message: `Document with id ${req.params.id} not found`,
      });
    }
    await Model.findByIdAndDelete(req.params.id);
    return res.status(204).json({
      status: "OK",
      message: "Document deleted successfully",
    });
  });

export const updateOne = (Model: Model<any>, params: string[]) =>
  catchAsync(async (req: Request, res: any) => {
    const id = res?.query?.id;
    let body: Partial<Record<string, any>> = {};
      params.forEach((param) => (body[param] = req.body[param] || null));
      const updatedDoc = await Model.findByIdAndUpdate(id, body, {
        new: true,
        runValidators: true,
      });
      res.status(200).json({
        status: "OK",
        data: updatedDoc,
      });
  });

export const createOne = (Model: Model<any>, params: string[]) =>
  catchAsync(
    async (
      req: Request,
      res: Response
    ): Promise<Response<any, Record<string, any>>> => {
      const body: Record<string, any> = {};
      params.forEach((param: any) => (body[param] = req.body[param]));
      const newDoc = await Model.create(req.body);

      return res.status(201).json({
        status: "OK",
        data: newDoc,
      });
    }
  );

export const getOne = (
  Model: Model<any>,
  populateOptions?: string[],
  selectOptions?: string[]
) =>
  catchAsync(async (req: Request, res: Response) => {
    const id = req.params.id;
    let query = Model.findById(id);

    if (populateOptions) {
      populateOptions.forEach(
        (populateOption: string) => (query = query.populate(populateOption))
      );
    }
    if (selectOptions) query = query.select(selectOptions);

    const doc = await query;

    if (!doc) {
      return res.status(404).json({
        status: "Not found",
        message: "Document not found",
      });
    }

    return res.status(200).json({
      status: "OK",
      data: doc,
    });
  });

export const getAll = (Model: Model<any>) =>
  catchAsync(async (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;
    const query = Model.find()
      .limit(Number(limit) * 1)
      .skip((Number(page) - 1) * Number(limit))
      .exec();
    const count = await Model.countDocuments();
    const docs = await query;
    return res.status(200).json({
      status: "OK",
      data: docs,
      totalPages: Math.ceil(count / Number(limit)),
      currentPage: page,
    });
  });
