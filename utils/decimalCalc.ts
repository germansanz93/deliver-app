import Decimal from "decimal.js";

export const add = (a: number, b: number) => {
  const da = new Decimal(a);
  const db = new Decimal(b);
  const res = da.plus(db);
  return res.toNumber();
};

export const sub = (a: number, b: number) => {
  const da = new Decimal(a);
  const db = new Decimal(b);
  const res = da.sub(db);
  return res.toNumber();
};

export const times = (a: number, b: number) => {
  const da = new Decimal(a);
  const db = new Decimal(b);
  const res = da.times(db);
  return res.toNumber();
};
