/*
 * Copyright (C) 2023 Felipe D. Silva (a.k.a Coala Jedi)
 * All Rights Reserved
 *
 * Unauthorized copying or redistribution of this file in source and binary forms via any medium
 * is strictly prohibited.
 */

export class ToDo {
  readonly _id: number;
  description: string;
  isDone: boolean;

  constructor(id: number, description: string) {
    this._id = id;
    this.description = description;
    this.isDone = false;
  }
}
