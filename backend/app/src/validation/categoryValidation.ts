import { Request, Response } from 'express';
import { body, param, ValidationChain } from 'express-validator';
import { pool } from '../database/db';

const nameValidation: ValidationChain = body("name")
  .isString()
  .custom(async (value: string, req: any) => {

    const { rows } = await pool.query(
      "SELECT id FROM categories WHERE name = $1",
      [value]
    );

    if (rows.length > 0) {
      throw new Error("Category name must be unique");
    }

    return true;
  });

const parentValidation: ValidationChain = body("parent_id")
  .optional()
  .custom(async (value: any, req: any) => { 

    if (value !== null) {
      const { rows } = await pool.query(
        "SELECT id FROM categories WHERE id = $1",
        [value]
      );

      if (rows.length === 0) {
        throw new Error("parent_id must exist in the database as an id");
      }
    }
    return true;
  });

const parentIDTypeValidation = (req: Request, res: Response, next: () => void) => {
  if (req.body.parent_id !== null && !Number.isInteger(parseInt(req.body.parent_id))) {
    return res.status(400).json({ error: "parent_id must be an integer or null" });
  }
  next();
};

export const validateCreateCategory = [
  nameValidation,
  parentValidation,
  parentIDTypeValidation,
];

export const validateFetchCategories = [
  param("id").optional().isInt(),
];
