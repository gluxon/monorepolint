/*!
 * Copyright (c) 2018 monorepo-lint (http://monorepo-lint.com). All Right Reserved.
 *
 * Licensed under the MIT license. See LICENSE file in the project root for details.
 *
 */

import * as r from "runtypes";
import { Runtype } from "runtypes/lib/runtype";
import { Context } from "./Context";

export const RuleEntry = r.Partial({
  options: r.Unknown,
  excludePackages: r.Array(r.String),
  includePackages: r.Array(r.String),
  includeWorkspaceRoot: r.Boolean
});
export type RuleEntry = r.Static<typeof RuleEntry>;

export const Config = r.Record({
  rules: r.Dictionary(RuleEntry)
});
export type Config = r.Static<typeof Config>;

export const RuleModule = r.Record({
  check: r.Function,
  optionsRuntype: r.Unknown
});
export interface RuleModule<T extends Runtype = Runtype>
  extends r.Static<typeof RuleModule> {
  check: Checker<T>;
  optionsRuntype: T;
}

export interface Options {
  verbose: boolean;
  fix: boolean;
}

export type Checker<T extends Runtype> = (
  context: Context,
  args: r.Static<T>
) => void;
export type ResolvedRule = RuleModule & RuleEntry;
export interface ResolvedConfig extends Options {
  readonly rules: ReadonlyArray<ResolvedRule>;
}